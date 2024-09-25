import DebounceThrottle from "../../utils/executionLimiter";
import { KeyboardInputs } from "../input/keyboardInput";

class CursorManager {
    private editor: HTMLElement | null;
    private isClassActive: boolean;
    private intervalId: NodeJS.Timeout | null;
    private debounce: DebounceThrottle;
    private keyboardInput: KeyboardInputs;

    constructor(editor: HTMLElement | null) {
        this.editor = editor;
        this.isClassActive = false;
        this.intervalId = null;
        this.keyboardInput = new KeyboardInputs();

        this.debounce = new DebounceThrottle(100, 'debounce');

        this.cursorAnimation();
    }
    
    private cursorAnimation() {
        const cursor = this.editor?.querySelector(".cursor") as HTMLElement;
        const textarea = this.editor?.querySelector("textarea") as HTMLElement;
        const tskSldblElmnt = this.editor?.querySelector(".tusk-editor.slidable-element");

        tskSldblElmnt?.addEventListener("click", (e) => {
            const target = e.currentTarget as HTMLElement;

            if (!this.isClassActive) {
                target.classList.add("focused");
                this.isClassActive = true;

                if (cursor) {
                    cursor.style.visibility = "inherit";

                    this.intervalId = setInterval(() => {
                        cursor.style.visibility = cursor.style.visibility === "inherit" ? "hidden" : "inherit";
                    }, 450);

                    textarea?.addEventListener("input", () => {
                        cursor.style.visibility = "inherit";
                        clearInterval(this.intervalId!);
                        
                        this.debounce.execute(() => {
                            this.startCursorAnimation();
                        });
                    });
                    this.keyboardInput.addNewKeyBindings(["tab"], () => { 
                        cursor.style.visibility = "inherit";
                        clearInterval(this.intervalId!);

                        this.debounce.execute(() => {
                            this.startCursorAnimation();
                        });
                    });
                    textarea.addEventListener("keydown", (event) => {
                        this.keyboardInput.handleKeyDown(event);
                    })

                    const handleClickOutside = (event: MouseEvent) => {
                        if (target && !target.contains(event.target as Node)) {
                            target.classList.remove("focused");
                            this.isClassActive = false;
                            cursor.removeAttribute("style");

                            this.stopCursorAnimation();
                            document.removeEventListener("click", handleClickOutside);
                        }
                    };

                    document.addEventListener("click", handleClickOutside);
                }
            }
        });
    }

    private stopCursorAnimation() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    private startCursorAnimation() {
        const cursor = this.editor?.querySelector(".cursor") as HTMLElement;
        if (cursor) {
            this.intervalId = setInterval(() => {
                cursor.style.visibility = cursor.style.visibility === "inherit" ? "hidden" : "inherit";
            }, 450);
        }
    }
}

export { CursorManager };
