declare const htmx: {
    onLoad: (callback: (content: any) => void) => void;
};

declare class Sortable {
    constructor(
        element: HTMLElement,
        options: {
            animation?: number;
            ghostClass?: string;
            filter?: string;
            onMove?: (evt: any) => boolean;
            onEnd?: (evt: any) => void;
            [key: string]: any;
        }
    );
    option(key: string, value: any): void;
}
