import { KeyboardEvent, MouseEvent } from 'react';

export type PropsWithOnClick = {
    onClick: (event: MouseEvent) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
    onMouseEnter?: (event: MouseEvent) => void;
    onMouseLeave?: (event: MouseEvent) => void;
    disabled?: boolean;
    dataLayerId?: string;
    dataLayerName?: string;
};

export type PropsWithHref = {
    href: string;
    disabled?: boolean;
    isObfuscated?: boolean;
};

export type PropsWithFormSubmit = {
    formId: string;
};

export type PropsWithCTA =  PropsWithOnClick | PropsWithHref | PropsWithFormSubmit;

export const isPropsWithHref = (props: PropsWithCTA): props is PropsWithHref => {
    return (
        (props as PropsWithHref).href !== undefined &&
        (props as PropsWithHref).href !== null &&
        (props as PropsWithHref).href !== ''
    );
};

export const isPropsWithFormSubmit = (props: PropsWithCTA): props is PropsWithFormSubmit => {
    return (
        (props as PropsWithFormSubmit).formId !== undefined &&
        (props as PropsWithFormSubmit).formId !== null &&
        (props as PropsWithFormSubmit).formId !== ''
    );
};
