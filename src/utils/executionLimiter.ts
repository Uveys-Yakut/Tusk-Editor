type Mode = 'debounce' | 'throttle';

class DebounceThrottle {
    private timeoutId: number | undefined;
    private lastExecutionTime: number | undefined;

    constructor(private delay: number, private mode: Mode) {}

    public execute(func: () => void) {
        if (this.mode === 'debounce') {
            this.debounce(func);
        } else if (this.mode === 'throttle') {
            this.throttle(func);
        }
    }
    
    private debounce(func: () => void) {
        if (this.timeoutId !== undefined) {
            clearTimeout(this.timeoutId);
        }

        this.timeoutId = window.setTimeout(() => {
            func();
        }, this.delay);
    }

    private throttle(func: () => void) {
        const now = Date.now();

        if (this.lastExecutionTime === undefined || (now - this.lastExecutionTime) >= this.delay) {
            func();
            this.lastExecutionTime = now;
        } else if (this.timeoutId === undefined) {
            const remainingTime = this.delay - (now - this.lastExecutionTime);
            this.timeoutId = window.setTimeout(() => {
                func();
                this.lastExecutionTime = Date.now();
                this.timeoutId = undefined;
            }, remainingTime);
        }
    }
}

export default DebounceThrottle;