function calculateTabSize() {
    const testElement = document.createElement('span');
    testElement.style.fontFamily = 'Liberation, "Courier New", monospace';
    testElement.style.fontSize = '14px';
    testElement.style.visibility = 'hidden';
    testElement.innerText = 'a';
    document.body.appendChild(testElement);

    const characterWidth = testElement.offsetWidth;
    document.body.removeChild(testElement);

    return characterWidth * 4;
}

function setAttributes(element, attributes) {
    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
}

function applyStyles(element, styles) {
    for (const [key, value] of Object.entries(styles)) {
        element.style[key] = value;
    }
}

function createEditor(editor: HTMLElement) {
    editor.style.position = "relative";

    const frgmntCrtEdtr = document.createDocumentFragment();

    // Editor Components
    const tuskEditorUnifyning = document.createElement("div");
    const tuskSlidableElement = document.createElement("div");
    const tuskGutters = document.createElement("div");
    const tuskGutter = document.createElement("div");
    const tuskGutterLineNmbr = document.createElement("div");
    const tuskEdtrView_lines = document.createElement("div");
    const tuskEdtrView_lineItm = document.createElement("div");
    const defaultLnItm_cntntUnifyning = document.createElement("span");
    const defaultLnItm_cntnt = document.createElement("span");
    const tuskEdtrCursorUnifyning = document.createElement("div");
    const tuskEdtrCursor = document.createElement("div");
    const tuskEdtrInptArea = document.createElement("textarea");

    // Editor Unifying Wrapper
    tuskEditorUnifyning.classList.add("tusk-editor-unfyng");

    // Slidable Element Setup
    tuskSlidableElement.classList.add("tusk-editor", "slidable-element");
    applyStyles(tuskSlidableElement, { width: `${editor.offsetWidth - 60}px`, left: "60px" });

    // Gutter Setup
    tuskGutters.classList.add("tusk-gutters");
    tuskGutters.style.width = "60px";

    tuskGutter.classList.add("tusk-gutter-itm");
    applyStyles(tuskGutter, { top: "0px", height: "19px" });

    tuskGutterLineNmbr.classList.add("gutter-line-nmbr");
    applyStyles(tuskGutterLineNmbr, { left: "0px", width: "36px" });
    tuskGutterLineNmbr.textContent = "1";

    tuskGutter.appendChild(tuskGutterLineNmbr);
    tuskGutters.appendChild(tuskGutter);

    // Editor View Lines Setup
    tuskEdtrView_lines.classList.add("tusk-editor", "view-lines");
    tuskEdtrView_lineItm.classList.add("tusk-editor", "view-line");
    defaultLnItm_cntntUnifyning.appendChild(defaultLnItm_cntnt)
    tuskEdtrView_lineItm.appendChild(defaultLnItm_cntntUnifyning);
    applyStyles(tuskEdtrView_lineItm, { top: "0px", height: "19px" });
    tuskEdtrView_lines.appendChild(tuskEdtrView_lineItm);

    // Cursor Setup
    tuskEdtrCursorUnifyning.classList.add("tusk-editor", "cursor-unfyng");
    tuskEdtrCursorUnifyning.setAttribute("aria-hidden", "true");
    tuskEdtrCursor.classList.add("cursor");

    applyStyles(tuskEdtrCursor, { top: "0px", left: "0px" });
    tuskEdtrCursorUnifyning.appendChild(tuskEdtrCursor);
    tuskEdtrView_lines.appendChild(tuskEdtrCursorUnifyning);

    tuskSlidableElement.appendChild(tuskEdtrView_lines);

    // Input Area Setup
    tuskEdtrInptArea.classList.add("inputarea");

    const inptAreaAttrbts = {
        'wrap': "off",
        'autocorrect': "off",
        'autocapitalize': "off",
        'autocomplete': "off",
        'spellcheck': "false",
        'aria-label': "Editor content",
        'aria-required': "false",
        'tabindex': "0",
        'role': "textbox",
        'aria-roledescription': "editor",
        'aria-multiline': "true",
        'aria-autocomplete': "both"
    };
    setAttributes(tuskEdtrInptArea, inptAreaAttrbts);
    
    tuskEdtrInptArea.setAttribute(
        "style",
        `tab-size: ${calculateTabSize()}; font-family: Consolas, "Courier New", monospace; font-weight: normal; font-size: 14px; font-feature-settings: "liga" 0, "calt" 0; line-height: 19px; letter-spacing: 0px; top: 0; left: 0; width: 1px; height: 1px;`
    );

    // Append Elements
    tuskEditorUnifyning.appendChild(tuskGutters);
    tuskEditorUnifyning.appendChild(tuskSlidableElement);
    tuskEditorUnifyning.appendChild(tuskEdtrInptArea);
    frgmntCrtEdtr.appendChild(tuskEditorUnifyning);

    editor.appendChild(frgmntCrtEdtr);
}

export { createEditor };
