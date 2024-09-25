import { CursorManager } from "../EditorCursor";
import { DomRenderer } from "../DomRenderer";

class EditorLinesManager {
    private domRenderer: DomRenderer;
    private editorSlidableContainer: HTMLElement;
    private cursor: HTMLElement;
    private textarea: HTMLTextAreaElement;
    private cursorManager: CursorManager;

    constructor(editorSlidableContainer: HTMLElement, cursor: HTMLElement, textarea: HTMLTextAreaElement) {
        this.cursor = cursor;
        this.editorSlidableContainer = editorSlidableContainer;
        this.domRenderer = new DomRenderer();
        this.cursorManager = new CursorManager(this.cursor, this.textarea);
    }

    private setPositionAndHeight(element: HTMLElement, top: number, height: string) {
        element.style.top = `${top}px`;
        element.style.height = `${height}`;
    }

    public newLine = (currentLineElement: HTMLElement) => {
        let newLineId = (parseInt(currentLineElement.style.top.split("px")[0], 10) / 19) + 1;
        const newLineYPos = newLineId * 19;
        const newLineHeight = currentLineElement.style.height;

        const createNewLine = this.domRenderer.newLineTemp();
        const createNewLineSkin = this.domRenderer.newLineSkinTemp();
        const createNewLineGutter = this.domRenderer.newLineGutterTemp();

        this.setPositionAndHeight(createNewLine, newLineYPos, newLineHeight);
        this.setPositionAndHeight(createNewLineSkin, newLineYPos, newLineHeight);
        this.setPositionAndHeight(createNewLineGutter, newLineYPos, newLineHeight);

        createNewLineGutter.children[0].textContent = `${newLineId + 1}`;

        const tuskEditorGutter_unifyning = this.editorSlidableContainer.previousSibling as HTMLElement;
        const tuskEditorLinesSkin_unifyning = this.editorSlidableContainer.querySelector(".tusk-editor.view-lines-skins");
        const tuskEditorLines_unifyning = this.editorSlidableContainer.querySelector(".tusk-editor.view-lines");

        if (tuskEditorGutter_unifyning) {
            tuskEditorGutter_unifyning.appendChild(createNewLineGutter);
        }
        tuskEditorLines_unifyning?.appendChild(createNewLine);
        tuskEditorLinesSkin_unifyning?.appendChild(createNewLineSkin);

        document.querySelector(".current-line-act-4")?.remove();
        this.cursorManager.updateCursorPos({ top: newLineYPos, left: 0 });

        return newLineId;
    }

    public updateCurrentLine(yPos: number) {
        const newCurrentLineId = yPos/19;
        const tuskEditorLinesSkin_unifyning = this.editorSlidableContainer.querySelector(".tusk-editor.view-lines-skins");

        document.querySelector(".current-line-act-4")?.remove();
        tuskEditorLinesSkin_unifyning?.children[newCurrentLineId].appendChild(this.domRenderer.currentLineSkin());
    }
}

export { EditorLinesManager };
