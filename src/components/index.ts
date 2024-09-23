import { createEditor } from "./CreateEditor";
import { CursorManager } from "../events/selection/cursorManager";
import { TuskInsertText } from "../events/commands/insertText";

class Editor {
    private editor: HTMLElement | null;

    constructor(editorId: string, settings: { language: string }) {
        this.editor = document.getElementById(editorId);
    }

    private editorEventWorker() {
        const cursorManager = new CursorManager(this.editor);
        cursorManager.cursorAnimation();
    }

    create(): string | undefined {
        if (this.editor) {
            createEditor(this.editor);
            this.editorEventWorker();
            // Selecet HTML Elements
            const editorSlidableContainer = document.querySelector(".tusk-editor.slidable-element") as HTMLElement;
            const cursor = document.querySelector(".cursor") as HTMLElement;
            const textarea = document.querySelector("textarea") as HTMLTextAreaElement;

            // Start Tusk Editor 
            if (editorSlidableContainer && cursor && textarea) {
                const tuskEditor = new TuskInsertText(editorSlidableContainer, cursor, textarea);
                tuskEditor.insertTextWorker();
            }

        }
        return undefined;
    }
}

export { Editor };
