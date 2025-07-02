import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "../components/AllBooks";
import BorrowForm from "../components/BorrowForm";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllBooks />,
      },
      {
        path: "/borrow/:id",
        element: <BorrowForm />,
      },
    ],
  },
]);
