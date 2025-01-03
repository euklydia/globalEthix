'use client';

import { useEffect, useState } from 'react';
import { TailwindTheme } from '../../tailwind.config';
import {StringHelpers} from '../libs'
import { useMediaQuery } from 'usehooks-ts';

export const useTailwindBreakpoint = (screen: keyof TailwindTheme['screens'], initialValue = false, max = false) => {
    const isBreakpoint = useMediaQuery(StringHelpers.makeMediaQuery(screen, max), {
        defaultValue: initialValue,
        initializeWithValue: false,
    });
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    return hydrated ? isBreakpoint : initialValue;
};
