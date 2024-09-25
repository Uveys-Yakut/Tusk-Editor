class KeyboardInputs {
    private keyBindings: Map<string, () => void>;

    constructor() {
        this.keyBindings = new Map<string, () => void>;
    }

    public addNewKeyBindings(keys: string[], callback: () => void) {
        const combination = keys.join('+').toLowerCase();
        this.keyBindings.set(combination, callback);
    }

    private buildKeyCombination(event: KeyboardEvent): string {
        const keys: string[] = [];

        if (event.ctrlKey) keys.push('ctrl');
        if (event.altKey) keys.push('alt');
        if (event.shiftKey) keys.push('shift');
        if (event.metaKey) keys.push('meta');

        keys.push(event.key.toLowerCase());

        return keys.join('+');
    }

    public handleKeyDown(event: KeyboardEvent) {
        const combination = this.buildKeyCombination(event);
        
        if (this.keyBindings.has(combination)) {
            event.preventDefault();
            this.keyBindings.get(combination)!();
        }
    }
}

export { KeyboardInputs }
