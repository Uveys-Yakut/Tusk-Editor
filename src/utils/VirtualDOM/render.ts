import { VNode } from './index';

const renderVNode = (vnode: VNode): Node => {
    const el = document.createElement(vnode.type);

    for (const [key, value] of Object.entries(vnode.props)) {
        el.setAttribute(key, value);
    }

    vnode.children.forEach(child => {
        let childEl: Node;

        if (typeof child === 'string') {
            childEl = document.createTextNode(child);
        } else {
            childEl = renderVNode(child);
        }

        el.appendChild(childEl);
    });

    return el;
};

export const render = (vnode: VNode, container: HTMLElement) => {
    container.innerHTML = '';
    const el = renderVNode(vnode);
    container.appendChild(el);
};
