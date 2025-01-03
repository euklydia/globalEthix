const numberOfKeys = (value: object): number => {
    return Object.keys(value).length;
};

const isEmpty = (value?: object): boolean => {
    return !value || numberOfKeys(value) === 0;
};

const createImageWithSrc = (src: string, alt = '') => {
    return {
        src,
        alt,
    };
};

const mapObject = <T, U>(object: Record<string, T>, mapFn: (value: T) => U): Record<string, U> => {
    return Object.keys(object).reduce((acc, key) => {
        acc[key] = mapFn(object[key]);
        return acc;
    }, {} as Record<string, U>);
};

const isEnumValue = <T extends Record<string, string>>(value: string, enumObj: T): value is T[keyof T] => {
    return Object.values(enumObj).includes(value as T[keyof T]);
};

export const ObjectHelpers = {
    numberOfKeys,
    isEmpty,
    createImageWithSrc,
    mapObject,
    isEnumValue,
};
