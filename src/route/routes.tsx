import React from "react";
import { createBrowserRouter } from "react-router-dom";

const App = React.lazy(() => import("../App"));

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <div>tets</div>,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);

export default router;
