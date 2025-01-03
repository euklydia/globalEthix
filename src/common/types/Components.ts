import React from 'react';

export type Component<T = Record<string, never>> = (props: T) => React.ReactNode;
