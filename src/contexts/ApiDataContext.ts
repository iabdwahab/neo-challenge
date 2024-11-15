import { createContext } from 'react';
import { objectInterface } from '../interfaces_types/interfaces_types';

export const ApiDataContext = createContext<objectInterface[]>([]);
