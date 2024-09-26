import { KeyboardInputs } from "./input/keyboardInput";
import { EditorLinesManager } from "../components/EditorLines";
import DebounceThrottle from "../utils/ExecutionLimiter";
import ClickOutsideListener from "../utils/ClickOutsideListener";
import { CursorManager } from "../components/EditorCursor";

class TuskWritingText extends KeyboardInputs {
    private editorSlidableContainer: HTMLElement | null;
    private cursor: HTMLElement | null;
    private textarea: HTMLTextAreaElement | null;
    private editorLinesManager: EditorLinesManager;
    private isWritingActive = false;
    private currentLineId: number;
    private currentLineElement: HTMLElement;
    private cursorManager: CursorManager;
    private debounce = new DebounceThrottle(10, 'debounce');
    private cursorAnimationStarted = false;
    private clickOutsideListener: ClickOutsideListener | null = null;

    constructor(editorSlidableContainer: HTMLElement, cursor: HTMLElement, textarea: HTMLTextAreaElement) {
        super();
        this.editorSlidableContainer = editorSlidableContainer;
        this.cursor = cursor;
        this.textarea = textarea;
        this.editorLinesManager = new EditorLinesManager(this.editorSlidableContainer, this.cursor, this.textarea);
        this.cursorManager = new CursorManager(this.cursor, this.textarea);

        this.initializeWritingText();
    }

    private enterKeyWorker = () => {
        if (this.textarea) {
            this.textarea.value += "\n";
            this.currentLineId = this.editorLinesManager.newLine(this.currentLineElement);
            this.currentLineElement = this.editorSlidableContainer?.querySelector(".tusk-editor.view-lines")?.children[this.currentLineId] as HTMLElement;
            
            this.updateCursorAnimation();
            this.cursorManager.updateCursorPos({ top: this.currentLineId * 19 });
        }
    }

    private tabKeyWorker = () => {
        if (this.textarea) {
            this.textarea.value += "\t";
            this.currentLineElement.children[0].children[0].innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";

            this.updateCursorAnimation();
            this.cursorManager.updateCursorPos({ left: this.currentLineElement.children[0].clientWidth });
        }
    }

    private updateCursorAnimation() {
        this.cursorManager.stopCursorAnimation();
        this.debounce.execute(() => {
            this.cursorManager.startCursorAnimation();
        });
    }

    private writingWorker() {
        if (this.isWritingActive) return;
        this.isWritingActive = true;
        this.textarea?.focus();
        this.addNewKeyBindings(["tab"], this.tabKeyWorker);
        this.addNewKeyBindings(["enter"], this.enterKeyWorker);

        const keydownHandler = (event: KeyboardEvent) => {
            this.handleKeyDown(event);
        };

        const inputHandler = (event: Event) => {
            const inputEvent = event as InputEvent;
            if (inputEvent.data) {
                if (inputEvent.data === " ") {
                    this.currentLineElement.children[0].children[0].innerHTML += "&nbsp;";
                } else {
                    this.currentLineElement.children[0].children[0].textContent += inputEvent.data;
                }
                this.updateCursorAnimation();
                this.cursorManager.updateCursorPos({ left: this.currentLineElement.children[0].clientWidth });
            }
        };

        this.textarea?.addEventListener("keydown", keydownHandler);
        this.textarea?.addEventListener("input", inputHandler);
        this.textarea?.addEventListener("blur", () => {
            this.isWritingActive = false;
            this.textarea?.removeEventListener("keydown", keydownHandler);
            this.textarea?.removeEventListener("input", inputHandler);
        });
    }

    private initializeWritingText() {
        const clickHandler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const currentTarget = e.currentTarget as HTMLElement;
            currentTarget.classList.add("focused");
    
            const clickedLineElement = this.getClickedLineElement(target, currentTarget);
    
            if (clickedLineElement) {
                const { top, left, id } = this.getLinePositionAndId(clickedLineElement);
                
                this.currentLineElement = clickedLineElement;
                this.currentLineId = id;
    
                if (!this.cursorAnimationStarted) {
                    this.cursorManager.startCursorAnimation();  
                    this.cursorAnimationStarted = true;
                }

                this.updateCursorAnimation();
    
                this.editorLinesManager.updateCurrentLine(top);
                this.cursorManager.updateCursorPos({ top, left });
                this.writingWorker();
    
                this.setupClickOutsideListener(currentTarget);
            }
        };
    
        this.editorSlidableContainer?.addEventListener("click", clickHandler);
    }
    
    private getClickedLineElement(target: HTMLElement, currentTarget: HTMLElement): HTMLElement | null {
        if (target.classList.contains('view-line')) {
            return target;
        }
        return currentTarget.children[1]?.lastChild as HTMLElement;
    }
    
    private getLinePositionAndId(element: HTMLElement): { top: number; left: number; id: number } {
        const top = parseInt(element.style.top.split("px")[0], 10);
        const left = element.children[0].clientWidth;
        const id = Math.floor(top / 19) + 1;
    
        return { top, left, id };
    }
    
    private setupClickOutsideListener(currentTarget: HTMLElement) {
        if (this.clickOutsideListener) {
            this.clickOutsideListener.stopListening();
        }
    
        this.clickOutsideListener = new ClickOutsideListener(this.editorSlidableContainer as HTMLElement, () => {
            currentTarget.classList.remove("focused");
            this.cursorManager.removeCursorAnimation();
        });
    
        this.clickOutsideListener.startListening();
    }  
}

export { TuskWritingText };