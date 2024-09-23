import { createEditor } from "./CreateEditor";

class Editor {
    private editor: HTMLElement | null;

    constructor(editorId: string, settings: { language: string }) {
        this.editor = document.getElementById(editorId);
    }

    create(): string | undefined {
        if (this.editor) {
            createEditor(this.editor);
        }
        return undefined;
    }
}

export { Editor };
