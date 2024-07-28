import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { theme } from './styles/theme.ts';
import { ThemeProvider } from 'styled-components';
import HackerNews from './App.tsx';
import { store } from './app/store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HackerNews />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
