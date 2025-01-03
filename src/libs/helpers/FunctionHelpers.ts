// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFn = () => {};

const nullFn = () => null;

const delay = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const numberToPx = (value: number) => `${value}px`;

export const FunctionHelpers = {
    emptyFn,
    nullFn,
    delay,
    numberToPx,
};
