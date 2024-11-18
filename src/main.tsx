import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './stores/store.ts';
import { RouterProvider } from 'react-router-dom';
import router from './route/routes.tsx';
import { AuthContextProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <RouterProvider
          future={{
            v7_startTransition: true,
          }}
          router={router}
        ></RouterProvider>
      </AuthContextProvider>
      {/* <App /> */}
    </Provider>
  </StrictMode>,
);
