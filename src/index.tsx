import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import App from './App';

import { GlobalStyle } from './styles/global';


/*const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
*/

const root = ReactDOM.createRoot(document.getElementById('root') as Element | DocumentFragment);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
