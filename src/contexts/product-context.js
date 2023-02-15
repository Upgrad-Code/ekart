import React, { createContext, useReducer } from 'react';
import { initialState, productReducer } from '../reducers/product-reducer';

export const ProductContext = createContext(null);

export const ProductContextProvider = (props) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};
