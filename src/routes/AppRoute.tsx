import { RouteObject } from "react-router-dom";
import DashboardLayout from "../components/layout/index";
import Widget from "../pages/Widget";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const AppRoute: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true, // Default route for "/"
        element: <Widget />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*", // Catch-all route
    element: <NotFound />,
  },
];

export default AppRoute;
