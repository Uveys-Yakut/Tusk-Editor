export class MemoryPool<T> {
    private pool: T[] = [];
    private createFn: () => T;

    constructor(createFn: () => T, initialSize: number = 10) {
        this.createFn = createFn;
        for (let i = 0; i < initialSize; i++) {
            this.pool.push(createFn());
        }
    }

    acquire(): T {
        return this.pool.length > 0 ? this.pool.pop()! : this.createFn();
    }

    release(item: T): void {
        this.pool.push(item);
    }
}