import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Download, Loudnorm } from '@components';
import { NavigationEnum } from '@types';
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Navigate to={NavigationEnum.Download} replace /> },
      { path: NavigationEnum.Download, element: <Download /> },
      { path: NavigationEnum.Loudnorm, element: <Loudnorm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message);
});
