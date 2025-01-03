import { cva } from 'class-variance-authority';

/**
 * Represents the style configuration for a GlowButton component.
 */
export const buttonStyle = cva(
    [
        'flex justify-center items-center',
        'rounded-0.5 whitespace-nowrap flex-nowrap',
        'duration-slow1 outline',
        'gap-0.25',
    ],
    {
        variants: {
            fontSize: {
                body: 'text-body',
                bodySmall: 'text-bodySmall',
            },
            variant: {
                primary:
                    'text-text-primary-inverse fill-text-primary-inverse bg-surface-brand hover:bg-surface-brand-hover active:bg-surface-brand-pressed outline-surface-brand hover:outline-surface-brand-hover active:outline-surface-brand-pressed outline-bold',
                secondary:
                    'text-text-primary fill-text-primary bg-surface-primary hover:bg-surface-primary-hover active:bg-surface-primary-pressed outline-border-brand outline-bold',
                tertiary:
                    'text-text-primary fill-text-primary bg-surface-primary hover:bg-surface-primary-hover active:bg-surface-primary-pressed outline-border-primary outline-medium',
                onElement:
                    'text-text-primary fill-text-primary bg-surface-primary hover:bg-surface-primary-hover active:bg-surface-primary-pressed outline-none',
            },
            size: {
                large: 'px-1.25 py-0.75', // FIXME: only icon case => px-1.25
                medium: 'px-0.75 py-0.5', // FIXME: only icon case => px-0.5
                small: 'px-0.75 py-0.375', // FIXME: only icon case => p-0.25
            },
            fontFamily: {
                arial: 'font-arial',
                brand: 'font-brand',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'large',
            fontFamily: 'brand',
        },
    },
);
