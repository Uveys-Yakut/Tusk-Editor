import { VNode } from './index';

export const diff = (oldVNode: VNode, newVNode: VNode): any => {
    if (oldVNode.type !== newVNode.type) {
        return { type: 'replace', newVNode };
    }

    const patch: any = {};
    
    const propsDiff = diffProps(oldVNode.props, newVNode.props);
    if (Object.keys(propsDiff).length) {
        patch.props = propsDiff;
    }

    const childrenDiff = diffChildren(oldVNode.children, newVNode.children);
    if (childrenDiff.length) {
        patch.children = childrenDiff;
    }

    return patch;
};

const diffProps = (oldProps: any, newProps: any) => {
    const diff: any = {};
    for (const key in newProps) {
        if (oldProps[key] !== newProps[key]) {
            diff[key] = newProps[key];
        }
    }
    return diff;
};

const diffChildren = (oldChildren: (string | VNode)[], newChildren: (string | VNode)[]) => {
    const patches: any[] = [];
    const maxLen = Math.max(oldChildren.length, newChildren.length);

    for (let i = 0; i < maxLen; i++) {
        const oldChild = oldChildren[i];
        const newChild = newChildren[i];

        if (oldChild && newChild) {
            if (typeof oldChild === 'string' && typeof newChild === 'string') {
                if (oldChild !== newChild) {
                    patches.push({ type: 'text', text: newChild });
                }
            } else {
                patches.push(diff(oldChild as VNode, newChild as VNode));
            }
        } else if (newChild) {
            patches.push({ type: 'add', vnode: newChild });
        } else {
            patches.push({ type: 'remove', vnode: oldChild });
        }
    }
    return patches;
};
