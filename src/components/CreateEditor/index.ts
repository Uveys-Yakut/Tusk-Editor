function calculateTabSize() {
    const testElement = document.createElement('span');
    testElement.style.fontFamily = 'Liberation, "Courier New", monospace';
    testElement.style.fontSize = '14px';
    testElement.style.visibility = 'hidden'; // Görünmez yap
    testElement.innerText = 'a'; // Boş bir karakter ekle
    document.body.appendChild(testElement);

    // Karakterin genişliğini ölç
    const characterWidth = testElement.offsetWidth;

    // 4 karakter genişliği
    const tabSize = characterWidth * 4;

    // Elementi kaldır
    document.body.removeChild(testElement);

    return tabSize;
}

function createEditor(editor: HTMLElement) {
    editor.style.position = "relative";
    const frgmntCrtEdtr = document.createDocumentFragment();
    // Components
    const tuskEditorUnifyning = document.createElement("div");
    const tuskSlidableElement = document.createElement("div");
    const tuskGutter = document.createElement("div");
    const tuskGutters = document.createElement("div");
    const tuskGutterLineNmbr = document.createElement("div");
    const tuskEdtrView_lines = document.createElement("div");
    const tuskEdtrView_lineItm = document.createElement("div");
    const tuskEdtrCursorUnifyning = document.createElement("div");
    const tuskEdtrCursor = document.createElement("div");
    const tuskEdtrInptArea = document.createElement("textarea");
    // Components

    // Tusk Editor Unifyning 
    tuskEditorUnifyning.classList.add("tusk-editor-unfyng");
    tuskSlidableElement.style.width = `${editor.offsetWidth - 60}px`;
    // Tusk Editor Unifyning

    // Tusk Slidable Element
    tuskSlidableElement.classList.add("tusk-editor","slidable-element");
    tuskSlidableElement.style.left = "60px";
    // Tusk Slidable Element

    // Gutter Layer
    tuskGutters.classList.add("tusk-gutters");
    tuskGutters.style.width = "60px";
    tuskGutter.classList.add("tusk-gutter-itm");
    tuskGutter.style.top = "0px";
    tuskGutter.style.height = "19px";
    tuskGutterLineNmbr.classList.add("gutter-line-nmbr");
    tuskGutterLineNmbr.style.left = "0px";
    tuskGutterLineNmbr.style.width = "36px";
    tuskGutterLineNmbr.textContent = "1";
    tuskGutter.appendChild(tuskGutterLineNmbr);
    tuskGutters.appendChild(tuskGutter);
    // Gutter Layer

    // Tusk Editor View Lines 
    tuskEdtrView_lines.classList.add("tusk-editor","view-lines");
    tuskEdtrView_lines.appendChild(tuskEdtrView_lineItm);
    // Tusk Editor View Lines

    // Tusk Editor View Line
    tuskEdtrView_lineItm.classList.add("tusk-editor","view-line");
    // Tusk Editor View Line

    tuskEdtrCursorUnifyning.classList.add("tusk-editor","cursor-unfyng");
    tuskEdtrCursorUnifyning.setAttribute("aria-hidden", "true");
    tuskEdtrCursor.classList.add("cursor");
    tuskEdtrCursor.style.top = "0px";
    tuskEdtrCursor.style.left = "0px";
    // Tusk Slidable Element Append Child
    tuskEdtrCursorUnifyning.appendChild(tuskEdtrCursor);
    tuskEdtrView_lines.appendChild(tuskEdtrCursorUnifyning);
    tuskSlidableElement.appendChild(tuskEdtrView_lines);
    // Tusk Slidable Element Append Child

    // Tusk Editor Inptut Area
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
    } 
    tuskEdtrInptArea.classList.add("inputarea")
    for (const [key, value] of Object.entries(inptAreaAttrbts)) {
        tuskEdtrInptArea.setAttribute(key, value);
    }
    tuskEdtrInptArea.setAttribute("style", `tab-size: ${calculateTabSize()}; font-family: Consolas, "Courier New", monospace; font-weight: normal; font-size: 14px; font-feature-settings: "liga" 0, "calt" 0; font-variation-settings: normal; line-height: 19px; letter-spacing: 0px; top: 0; left: 0; width: 1px; height: 1px; `)
    // Tusk Editor Inptut Area 

    tuskEditorUnifyning.appendChild(tuskGutters);
    tuskEditorUnifyning.appendChild(tuskSlidableElement);
    tuskEditorUnifyning.appendChild(tuskEdtrInptArea);

    frgmntCrtEdtr.appendChild(tuskEditorUnifyning);

    editor.appendChild(frgmntCrtEdtr);
}

export { createEditor };