import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "../components/RootLayout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Technologies from "../components/Technologies";
import Java from "../components/Java";
import Node from "../components/Node";
import Vue from "../components/Vue";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "technologies",
          element: <Technologies />,
          children: [
            {
              index: true,
              element: <Java />,
            },
            {
              path: "java",
              element: <Java />,
            },
            {
              path: "nodejs",
              element: <Node />,
            },
            {
              path: "vue",
              element: <Vue />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;

