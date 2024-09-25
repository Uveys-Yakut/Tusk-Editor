class EventUtils {
    constructor() {
        
    }

    public getCharacterWidth(character: string, font: string) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    
        context.font = font;

        const metrics = context.measureText(character);
        return metrics.width;
    }
}

export { EventUtils };