import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "../components/AllBooks";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllBooks />,
      },
    ],
  },
]);
