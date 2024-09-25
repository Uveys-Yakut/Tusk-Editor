import { HandleEditorCursor } from "../../events/commands/editorCursor";
import { DomRenderer } from "../DomRenderer";

class EditorLinesManager {
    private domRenderer: DomRenderer;
    private editorSlidableContainer: HTMLElement;
    private curosElement: HTMLElement;
    private handleEditorCursor: HandleEditorCursor;

    constructor(editorSlidableContainer: HTMLElement, curosElement: HTMLElement) {
        this.curosElement = curosElement;
        this.editorSlidableContainer = editorSlidableContainer;
        this.domRenderer = new DomRenderer();
        this.handleEditorCursor = new HandleEditorCursor(this.curosElement);
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

        this.handleEditorCursor.updateCursorPos({ top: newLineYPos, left: 0 });

        return newLineId;
    }
}

export { EditorLinesManager };
