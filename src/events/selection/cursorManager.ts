class CursorManager {
    private editor: HTMLElement | null;
    private isClassActive: boolean;
    private intervalId: NodeJS.Timeout | null;

    constructor(editor: HTMLElement | null) {
        this.editor = editor;
        this.isClassActive = false;
        this.intervalId = null;
    }
    
    cursorAnimation() {
        const cursor = this.editor?.querySelector(".cursor") as HTMLElement;
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

                    const handleClickOutside = (event: MouseEvent) => {
                        if (target && !target.contains(event.target as Node)) {
                            target.classList.remove("focused");
                            this.isClassActive = false;
                            cursor.removeAttribute("style");
                            if (this.intervalId) {
                                clearInterval(this.intervalId);
                                this.intervalId = null;
                            }
                            document.removeEventListener("click", handleClickOutside);
                        }
                    };

                    document.addEventListener("click", handleClickOutside);
                }
            }
        });
    }
}

export { CursorManager };
