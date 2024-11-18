import React, { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Bulletin from "../pages/bulletin/Bulletin";
import Task from "../pages/task";

const ChatWrapper = React.lazy(() => import("../pages/chat-page/index"));
const Login = React.lazy(() => import("../pages/chat-page/auth/login/login"));
const Register = React.lazy(() => import("../pages/chat-page/auth/register/register"));
const App = React.lazy(() => import("../App"));

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Bulletin />
          </Suspense>
        ),
      },
      {
        path: "/chat",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ChatWrapper />
          </Suspense>
        ),
      },
      {
        path: "/task",
        element: (
          <Task />
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  }
],
{
  future: {
    v7_relativeSplatPath: true,
  },
}
);

export default router;
