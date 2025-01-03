import { StringHelpers } from './StringHelpers';

export type HTMLString = {
    content: string;
};

export const HTMLString = (content: string, strip = true): HTMLString => ({
    content: strip ? StringHelpers.removeTrailingSpaces(content) : content,
});
