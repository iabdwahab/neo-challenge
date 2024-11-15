import { createContext } from 'react';
import { viewedDataContextInterface } from '../interfaces_types/interfaces_types';

export const ViewedDataContext = createContext<viewedDataContextInterface>({
  viewedData: [],
  setViewedData: () => {},
});
