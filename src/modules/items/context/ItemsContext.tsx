import { createContext, ReactNode, useContext } from 'react';
import { useItems } from '../hooks/useItems';
import { ItemType } from '../types/ItemTypes';

type ItemsContextType = {
  items: ItemType[];
};

type ItemsProviderProps = {
  children: ReactNode;
};

const ItemsContext = createContext({} as ItemsContextType);

const useItemsContext = () => {
  const products = useContext(ItemsContext);
  return products;
};

const ItemsContextProvider = ({ children }: ItemsProviderProps) => {
  const { items } = useItems();
  return (
    <ItemsContext.Provider value={{ items }}>{children}</ItemsContext.Provider>
  );
};

export { ItemsContextProvider, useItemsContext };
