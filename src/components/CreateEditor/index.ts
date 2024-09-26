import { VNode, createElement, createTextVNode } from '../../utils/VirtualDOM';
import { render } from '../../utils/VirtualDOM/render';

function createEditor(editor: HTMLElement) {
    const editorVNode: VNode = createElement('div', { class: 'tusk-editor-unfyng' }, 
        createElement('div', { class: 'tusk-gutters', style: 'width: 60px;' },
            createElement('div', { class: 'tusk-gutter-itm', style: 'top: 0px; height: 19px;' },
                createElement('div', { class: 'gutter-line-nmbr', style: 'left: 0px; width: 36px;' }, createTextVNode('1'))
            )
        ),
        createElement('div', { class: 'tusk-editor slidable-element', style: `width: ${editor.offsetWidth - 60}px; left: 60px;`},
            createElement('div', { class: 'tusk-editor view-lines-skins' },
                createElement('div', { style: 'top: 0px; height: 19px;' },
                    createElement('div', { class: 'current-line-act-4' })
                )
            ),
            createElement('div', { class: 'tusk-editor view-lines' },
                createElement('div', { class: 'tusk-editor view-line', style: 'top: 0px; height: 19px;' },
                    createElement('span', {},
                        createElement('span', {})
                    )
                )
            ),
            createElement('div', { class: 'tusk-editor cursor-unfyng', 'aria-hidden': 'true' },
                createElement('div', { class: 'cursor', style: 'top: 0px; left: 0px;' })
            )
        ),
        createElement('textarea', { 
            class: 'inputarea', 
            wrap: 'off', 
            autocorrect: 'off', 
            autocapitalize: 'off', 
            autocomplete: 'off', 
            spellcheck: 'false', 
            'aria-label': 'Editor content', 
            'aria-required': 'false', 
            tabindex: '0', 
            role: 'textbox', 
            'aria-roledescription': 'editor', 
            'aria-multiline': 'true', 
            'aria-autocomplete': 'both', 
            style: 'tab-size: 32; font-family: Consolas, "Courier New", monospace; font-weight: normal; font-size: 14px; font-feature-settings: "liga" 0, "calt" 0; line-height: 19px; letter-spacing: 0px; top: 0; left: 0; width: 1px; height: 1px;'
        })
    );    

    render(editorVNode, editor);
}

export { createEditor };
