import { ReactNode } from 'react';

type Node = ReactNode | ReactNode[];

export type PropsWithCTAContent =
    | { labelElement: Node }
    | { icon: Node }
    | {
          icon: Node;
          labelElement: Node;
      };
