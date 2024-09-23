import { KeyboardInputs } from "../input/keyboardInput";
class TuskInsertText extends KeyboardInputs {
    private editorSlidableContainer: HTMLElement | null;
    private cursor: HTMLElement | null;
    private textarea: HTMLTextAreaElement | null;
    private lineHeight: number;
    private lineCount: number;

    constructor(editorSlidableContainer: HTMLElement | null, cursor: HTMLElement | null, textarea: HTMLTextAreaElement) {
        super(textarea, (value) => this.handleEnter(value), (key) => this.handleKeyPress(key));
        this.editorSlidableContainer = editorSlidableContainer;
        this.cursor = cursor;
        this.textarea = textarea;
        this.lineHeight = 19;
        this.lineCount = 1;
    }

    private handleEnter(value: string) {
        console.log("Enter pressed. Current text:", value);
    }

    private handleKeyPress(key: string) {
        console.log("Key pressed:", key);
    }

    private writingWorker() {
        this.textarea?.focus();

    }

    private updatePoses(updtName: string) {
        if (updtName === "textarea") {
            const cursorPosX = this.cursor?.getBoundingClientRect().left;
            const cursorPosY = this.cursor?.getBoundingClientRect().top;

            this.textarea && (this.textarea.style.top = `${cursorPosY}px`);
            this.textarea && (this.textarea.style.left = `${cursorPosX}px`);
        }
    }

    public insertTextWorker() {
        this.editorSlidableContainer?.addEventListener("click", (e) => {
            this.updatePoses("textarea");
            this.writingWorker();
        });

    }
}

export { TuskInsertText };