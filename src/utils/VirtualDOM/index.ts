export interface VNode {
    type: string;
    props: { [key: string]: any };
    children: (VNode | string)[];
}

export const createElement = (type: string, props: any = {}, ...children: (VNode | string)[]): VNode => {
    return {
        type,
        props,
        children: children.length ? children : [],
    };
};

export const createTextVNode = (text: string): VNode => {
    return {
        type: 'text',
        props: {},
        children: [text],
    };
};
