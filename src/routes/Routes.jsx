import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../pages/Dashboard/Dashboard";
import Application from "../pages/application/Application";
import Calendar from "../pages/calendar/Calendar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/application",
        element: <Application></Application>,
      },
      {
        path: "/calendar",
        element: <Calendar></Calendar>
      },
    ],
  },
]);
