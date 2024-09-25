class HandleEditorCursor {
    private cursorElement: HTMLElement;

    constructor(cursorElement: HTMLElement) {
        this.cursorElement = cursorElement;
    }

    public updateCursorPos(position: { top?: number; left?: number }) {
        if (position.top !== undefined) {
            this.cursorElement.style.top = `${position.top}px`;
        }

        if (position.left !== undefined) {
            this.cursorElement.style.left = `${position.left}px`;
        }
    }
}

export { HandleEditorCursor };
