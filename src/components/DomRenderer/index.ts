class DomRenderer {
    constructor() {}

    public newLineGutterTemp() {
        const tuskNewGutterElement = document.createElement('div');
        tuskNewGutterElement.className = 'tusk-gutter-itm';
        const gutterLineNumberElement = document.createElement('div');
        gutterLineNumberElement.className = 'gutter-line-nmbr';
        gutterLineNumberElement.style.left = '0px';
        gutterLineNumberElement.style.width = '36px';
        tuskNewGutterElement.appendChild(gutterLineNumberElement);

        return tuskNewGutterElement;
    }

    public currentLineSkin() {
        const tuskCurrentLineAct_4 = document.createElement('div');
        tuskCurrentLineAct_4.classList.add("current-line-act-4");

        return tuskCurrentLineAct_4;
    }

    public newLineSkinTemp() {
        const tuskNewLineSkinElement = document.createElement('div');
        const tuskCurrentLineAct_4 = document.createElement('div');

        tuskCurrentLineAct_4.classList.add("current-line-act-4");
        tuskNewLineSkinElement.appendChild(tuskCurrentLineAct_4);

        return tuskNewLineSkinElement;
    }

    public newLineTemp() {
        const tuskNewLineElement = document.createElement('div');
        tuskNewLineElement.className = 'tusk-editor view-line';
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        span1.appendChild(span2);
        tuskNewLineElement.appendChild(span1);

        return tuskNewLineElement;
    }
}

export { DomRenderer }