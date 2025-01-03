import type { Config } from "tailwindcss";
import colors from './src/utils/tokens/colors.json';

const SHARED_BORDER_OUTLINE_WIDTH = {
  /** 0px */
  none: '0',
  /** 0.5px */
  thin: '0.03rem',
  /** 1px */
  medium: '0.06rem',
  /** 2px */
  bold: '0.125rem',
  /** 4px */
  strong: '0.25rem',
};

export const BREAKPOINTS = {
  /** min-width: 375px */
  mobile: '23.4375rem',
  /** min-width: 768px */
  tablet: '48rem',
  /** min-width: 1024px */
  desktopS: '64rem',
  /** min-width: 1440px */
  desktop: '90rem',
};

export const tailwindTheme = {
    colors:{...colors},
    
    fontFamily: {
        brand: ['var(--avant-garde-gothic)'],
        arial: ['Arial', 'sans-serif'],
      },
      fontWeight: {
          medium: '500',
          bold: '700',
      },
      fontSize: {
          bodySmall: ['0.875rem', '1.25rem'],
          body: ['1rem', '1.5rem'],
          callout: ['1rem', '1.5rem'],
          caption: ['0.75rem', '1rem'],
          mobileTitle1: ['1.5rem', '2rem'],
          mobileTitle2: ['1.25rem', '1.75rem'],
          mobileTitle3: ['1.125em', '1.5rem'],
          mobileTitle4: ['1rem', '1.5rem'],
          mobileTitle5: ['0.875rem', '1rem'],
          title1: ['2.5rem', '3rem'],
          title2: ['2rem', '2.5rem'],
          title3: ['1.5rem', '2rem'],
          title4: ['1.25rem', '2rem'],
          title5: ['1.125rem', '1.5rem'],
      },
      boxShadow: {
          strong: '0 0 2.5rem 0 rgba(0, 0, 0, 0.4)',
          light: '0 0 0.625rem 0 rgba(0, 0, 0, 0.1)',
          stickyBottom: '0 0 0.688rem 0 rgba(0, 0, 0, 0.1)',
          storePin: '0 0 0.625rem 0 rgba(0, 0, 0, 0.22)',
          banner: '0 200rem 0 200rem rgba(0, 0, 0, 0.5)',
      },
      transitionDuration: {
          fast1: '70ms',
          fast2: '110ms',
          moderate1: '150ms',
          moderate2: '240ms',
          moderate3: '300ms',
          slow1: '400ms',
          slow2: '700ms',
      },
      transitionDelay: {
          fast1: '70ms',
          fast2: '110ms',
          moderate1: '150ms',
          moderate2: '240ms',
          moderate3: '300ms',
          slow1: '400ms',
          slow2: '700ms',
      },
      transitionTimingFunction: {
          sideMenu: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionProperty: {
          'max-height': 'max-height',
      },
      borderWidth: SHARED_BORDER_OUTLINE_WIDTH,
      outlineWidth: SHARED_BORDER_OUTLINE_WIDTH,
      borderRadius: {
          /** 0px */
          0: '0',
          /** 4px */
          0.25: '0.25rem',
          /** 8px */
          0.5: '0.5rem',
          /** 16px */
          1: '1rem',
          /** 24px */
          1.5: '1.5rem',
          /** 72px */
          4.5: '4.5rem',
          infinity: 'calc(infinity*1rem)',
      },
      spacing: {
          /** 0px */
          0: '0',
          /** 2px */
          0.125: '0.125rem',
          /** 4px */
          0.25: '0.25rem',
          /** 6px  */
          0.375: '0.375rem',
          /** 8px */
          0.5: '0.5rem',
          /** 12px */
          0.75: '0.75rem',
          /** 16px */
          1: '1rem',
          /** 20px */
          1.25: '1.25rem',
          /** 24px */
          1.5: '1.5rem',
          /** 32px */
          2: '2rem',
          /** 40px */
          2.5: '2.5rem',
          /** 48px */
          3: '3rem',
          /** 64px */
          4: '4rem',
          /** 88px */
          5.5: '5.5rem',
          /** width-basketBanner/2 - padding-1.5 - gap-0-5 = 12rem*/
          basketBanner: '12rem',
      },
      screens: BREAKPOINTS,
      flexGrow: {
          1: '1',
          2: '2',
          3: '3',
      },
      height: {
          full: '100%',
          auto: 'auto',
          half: '50%',
          0: '0',
          fullViewport: '100vh',
          fit: 'fit-content',
          iosViewportHeight: '100dvh',
          /** 56px + 72px = 128px */
             headerDesktop: '8rem',
           /** 64px */
          headerFixedTablet: '4rem',
      },
      maxHeight: {
          fullViewport: '100vh',
      },
      minHeight: {
          fullViewport: '100vh',
          /** 20px */
          iconSmall: '1.25rem',
          /** 24px */
          iconMedium: '1.5rem',
          /** 32px */
          iconLarge: '2rem',
      },
      width: {
          full: '100%',
          auto: 'auto',
          half: '50%',
          maxContent: 'max-content',
          0: '0',
          eighty: '80%',
          fullViewport: '100vw',
          fit: 'fit-content',
      },
      maxWidth: {
          none: 'none',
          initial: 'initial',
          full: '100%',
      },
      minWidth: {
          /** 20px */
          iconSmall: '1.25rem',
          /** 24px */
          iconMedium: '1.5rem',
          /** 32px */
          iconLarge: '2rem',
      },
      aspectRatio: {
          '1/1': '1/1',
          '4/3': '4/3',
          '3/2': '3/2',
          '9/16': '9/16',
          '3/4': '3/4',
          '2/3': '2/3',
          '16/9': '16/9',
      },
} satisfies Config['theme'];

export type TailwindTheme = typeof tailwindTheme;


export default {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/atoms/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/molecules/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...tailwindTheme
  },
  plugins: [],
} satisfies Config;
