type ClickOutsideCallback = (event: MouseEvent) => void;

class ClickOutsideListener {
    private targetElement: HTMLElement;
    private callback: ClickOutsideCallback;
    private clickHandler: (event: MouseEvent) => void;

    constructor(targetElement: HTMLElement, callback: ClickOutsideCallback) {
        this.targetElement = targetElement;
        this.callback = callback;
        this.clickHandler = this.handleClickOutside.bind(this);
    }

    public startListening() {
        document.addEventListener("click", this.clickHandler);
    }

    public stopListening() {
        document.removeEventListener("click", this.clickHandler);
    }

    private handleClickOutside(event: MouseEvent) {
        if (!this.targetElement.contains(event.target as Node)) {
            this.callback(event);
            this.stopListening();
        }
    }
}

export default ClickOutsideListener;
