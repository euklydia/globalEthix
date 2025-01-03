/// <reference types="vite-plugin-svgr/client" />
/// <reference types="./types" />
// use export to make the file a module

export {};

declare module 'react' {
    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        fetchPriority?: 'high' | 'low' | 'auto';
    }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
    const content: any;
    export const ReactComponent: any;
    export default content;
}