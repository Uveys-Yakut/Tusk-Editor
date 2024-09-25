import { KeyboardInputs } from "../input/keyboardInput";
import { EditorLinesManager } from "../../components/EditorLines";
import { HandleEditorCursor } from "./editorCursor";

class TuskInsertText extends KeyboardInputs {
    private editorSlidableContainer: HTMLElement | null;
    private cursor: HTMLElement | null;
    private textarea: HTMLTextAreaElement | null;
    private handleEditorCursor: HandleEditorCursor;
    private editorLinesManager: EditorLinesManager;
    private isWritingActive = false;
    private currentLineId: number;
    private currentLineElement: HTMLElement;


    constructor(editorSlidableContainer: HTMLElement | null, cursor: HTMLElement | null, textarea: HTMLTextAreaElement) {
        super();
        this.editorSlidableContainer = editorSlidableContainer;
        this.cursor = cursor;
        this.textarea = textarea;
        this.handleEditorCursor = new HandleEditorCursor(this.cursor as HTMLElement);
        this.editorLinesManager = new EditorLinesManager(this.editorSlidableContainer as HTMLElement, this.cursor as HTMLElement);
    }

    private enterKeyWorker = (currentLineElement: HTMLElement) => {
        if (this.textarea) {
            this.textarea.value += "\n";
            this.currentLineId = this.editorLinesManager.newLine(currentLineElement);
            this.currentLineElement = this.editorSlidableContainer?.querySelector(".tusk-editor.view-lines")?.children[this.currentLineId] as HTMLElement;

            console.log(this.currentLineId, this.currentLineElement)
        }
    }

    private tabKeyWorker = (currentLineElement: HTMLElement) => {
        if (this.textarea) {
            this.textarea.value += "\t";
            currentLineElement.children[0].children[0].innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
            this.handleEditorCursor.updateCursorPos({ left: currentLineElement.children[0].clientWidth })
        }
    }

    private writingWorker() {
        if (this.isWritingActive) return;
        this.isWritingActive = true;
        this.textarea?.focus();
        this.addNewKeyBindings(["tab"], () => { this.tabKeyWorker(this.currentLineElement) });
        this.addNewKeyBindings(["enter"], () => { this.enterKeyWorker(this.currentLineElement) });

        const keydownHandler = (event: KeyboardEvent) => {
            this.handleKeyDown(event);
        };

        const inputHandler = (event: Event) => {
            const inputEvent = event as InputEvent;
            if (inputEvent.data) {
                if (inputEvent.data !== " ") {
                    this.currentLineElement.children[0].children[0].textContent += inputEvent.data;
                } else {
                    this.currentLineElement.children[0].children[0].innerHTML += "&nbsp;";
                }
                this.handleEditorCursor.updateCursorPos({ left: this.currentLineElement.children[0].clientWidth });
            }
        };

        const startWriting = () => {
            this.textarea?.addEventListener("keydown", keydownHandler);
            this.textarea?.addEventListener("input", inputHandler);
        };

        const stopWriting = () => {
            this.textarea?.removeEventListener("keydown", keydownHandler);
            this.textarea?.removeEventListener("input", inputHandler);
            this.isWritingActive = false;
            this.textarea?.removeEventListener("blur", stopWriting);
        };

        startWriting();

        this.textarea?.addEventListener("blur", stopWriting);
    }


    private updateTextareaPos() {
        const cursorPosX = this.cursor?.getBoundingClientRect().left;
        const cursorPosY = this.cursor?.getBoundingClientRect().top;

        this.textarea && (this.textarea.style.top = `${cursorPosY}px`);
        this.textarea && (this.textarea.style.left = `${cursorPosX}px`);
    }

    public insertTextWorker() {
        this.editorSlidableContainer?.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            const currentLineElementCheck = target.classList.contains('view-line');
            this.updateTextareaPos();

            if (currentLineElementCheck) {
                const currentLineTopPos = parseInt(target.style.top.split("px")[0], 10);
                const currentLineLeftPos = parseInt(target.style.left.split("px")[0], 10);
                const currentLineId = (currentLineTopPos / 19) + 1;

                this.currentLineElement = target;
                this.currentLineId = currentLineId;
                this.handleEditorCursor.updateCursorPos({ top: currentLineTopPos, left: currentLineLeftPos })
            
                this.writingWorker();
            }
        });

    }
}

export { TuskInsertText };