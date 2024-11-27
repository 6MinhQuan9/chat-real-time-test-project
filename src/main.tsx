import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./stores/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./route/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider
        future={{
          v7_startTransition: true,
        }}
        router={router}
      ></RouterProvider>
      {/* <App /> */}
    </Provider>
  </StrictMode>,
);
