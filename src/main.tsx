import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { theme } from './styles/theme.ts';
import { ThemeProvider } from 'styled-components';
import HackerNews from './App.tsx';
import App from './App.tsx';
import { store } from './app/store.ts';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewsPage from './Page/NewsPage.tsx';
import ErrorPage from './Page/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/news',
    element: <HackerNews />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/news/:id',
    element: <NewsPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
