import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './lib/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExtensionsPage from './pages/ExtensionsPage.tsx';
import RootLayout from './RootLayout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ path: '/extensions', element: <ExtensionsPage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
