import { createEditor } from "./CreateEditor";
import { TuskWritingText } from "../events/writingText";

class Editor {
    private editor: HTMLElement | null;

    constructor(editorId: string, settings: { language: string }) {
        this.editor = document.getElementById(editorId);
    }

    create(): string | undefined {
        if (this.editor) {
            createEditor(this.editor);

            // Selecet HTML Elements
            const editorSlidableContainer = document.querySelector(".tusk-editor.slidable-element") as HTMLElement;
            const cursor = document.querySelector(".cursor") as HTMLElement;
            const textarea = document.querySelector("textarea") as HTMLTextAreaElement;

            // Start Tusk Editor 
            if (editorSlidableContainer && cursor && textarea) {
                const tuskWritingText = new TuskWritingText(editorSlidableContainer, cursor, textarea);
            }

        }
        return undefined;
    }
}

export { Editor };
