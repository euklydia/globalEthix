import { tailwindTheme, TailwindTheme } from '../../../tailwind.config';
import { specialCharsMap } from './specialCharsMap';

const addSpaces = (str: string, leftSpaces: number, rightSpaces?: number) => {
    return ' '.repeat(leftSpaces) + str + ' '.repeat(rightSpaces ?? 0);
};

const capitalize = (str: string) => {
    return str && str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : '';
};

const formatPrice = (current: number, currency: string, locale: string) => {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(current);
};

const addPrefix = (str: string, prefix: string, condition?: boolean) => {
    return condition ? prefix + str : str;
};

const decodeSpecialChars = (str: string): string => {
    return str.replace(/(&[^;]+;)/g, (char: string) => specialCharsMap[char]);
};

const replaceQuotes = (str: string): string => str.replace(/[’‘]/g, "'");

const makeMediaQuery = (breakpoint: keyof TailwindTheme['screens'], max = false) => {
    return `(${
        max
            ? `max-width: calc(${tailwindTheme.screens[breakpoint]} - 1px)`
            : `min-width: ${tailwindTheme.screens[breakpoint]}`
    })`;
};

const removeTrailingSpaces = (str: string) => {
    return str.trimEnd().replace(/[\u00A0\u200B-\u200D\uFEFF]+$/g, '');
};

const isUrl = (str?: string): boolean => {
    if (!str) {
        return false;
    }

    const urlPattern = /^https?:\/\/.*$/i;
    return urlPattern.test(str);
};

const isTrue = (str: string): boolean => {
    return str.toLowerCase() === 'true';
};

const validateEmail = (email: string): boolean => {
    const emailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email.toLowerCase());
};

const isNotEmpty = (value: string) => value !== '""';

type Device = 'Android' | 'iPhone' | 'iPad';

const isDevice = (devices: Device | Device[]) => {
    if (!Array.isArray(devices)) {
        devices = [devices];
    }

    return devices.some((device) => new RegExp(device, 'i').test(navigator.userAgent));
};

const removeOuterHTMLTag = (htmlString: string): string => {
    const openingTagStart = htmlString.indexOf('<');
    const openingTagEnd = htmlString.indexOf('>');

    const closingTagStart = htmlString.lastIndexOf('</');

    if (openingTagStart === -1 || openingTagEnd === -1 || closingTagStart === -1 || closingTagStart < openingTagEnd) {
        return htmlString;
    }

    return htmlString.slice(openingTagEnd + 1, closingTagStart);
};

export const StringHelpers = {
    addSpaces,
    capitalize,
    formatPrice,
    addPrefix,
    decodeSpecialChars,
    replaceQuotes,
    makeMediaQuery,
    removeTrailingSpaces,
    isUrl,
    isTrue,
    validateEmail,
    isNotEmpty,
    isDevice,
    removeOuterHTMLTag,
};
