import DebounceThrottle from "../../utils/ExecutionLimiter";

class CursorManager {
    private cursor: HTMLElement;
    private textarea: HTMLTextAreaElement;
    private intervalId: NodeJS.Timeout | null;
    private debounce = new DebounceThrottle(100, 'debounce');

    constructor(cursor: HTMLElement, textarea: HTMLTextAreaElement) {
        this.cursor = cursor;
        this.textarea = textarea;
        this.intervalId = null;
    }

    public updateCursorPos(position: { top?: number; left?: number }) {
        if (position.top !== undefined) {
            this.cursor.style.top = `${position.top}px`;
            if (this.textarea) {
                this.textarea.style.top = `${position.top}px`;
            }
        }

        if (position.left !== undefined) {
            this.cursor.style.left = `${position.left}px`;
            if (this.textarea) {
                this.textarea.style.left = `${position.left}px`;
            }
        }
    }

    public removeCursorAnimation() {
        this.cursor.removeAttribute("style");
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    public stopCursorAnimation() {
        this.cursor.style.visibility = "inherit";
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    public startCursorAnimation() {
        this.cursor.style.visibility = "inherit";
        if (this.cursor) {
            this.intervalId = setInterval(() => {
                this.cursor.style.visibility = this.cursor.style.visibility === "inherit" ? "hidden" : "inherit";
            }, 450);
        }
    }
}

export { CursorManager };
