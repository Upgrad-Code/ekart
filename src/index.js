import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ProductContextProvider } from './contexts/product-context';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </StrictMode>
);
