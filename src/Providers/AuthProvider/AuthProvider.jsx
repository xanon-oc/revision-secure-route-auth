import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../components/Layout/Main";
import Home from "../../components/Home";
import About from "../../components/About";
import Career from "../../components/Career";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
]);

export default router;
