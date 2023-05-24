import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import { GlobalStyle } from './utils/styles/global';

import { store } from './store';
import ThemeContainer from './themeContainer';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <ThemeContainer>
        <App />
      </ThemeContainer>
    </Provider>
  </React.StrictMode>,
);
