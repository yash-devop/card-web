import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/Home";
import { AboutPage } from "../pages/About";
import { PageLayout } from "../layouts/PageLayout";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
