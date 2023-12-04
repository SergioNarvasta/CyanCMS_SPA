import { createContext } from 'react';
import type { IHoveredContext } from './models/IHoveredContext';

export const HoveredContext = createContext<IHoveredContext>(
    {} as IHoveredContext,
);
