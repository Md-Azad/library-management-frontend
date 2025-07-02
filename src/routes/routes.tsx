import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "../components/AllBooks";
import BorrowForm from "../components/BorrowForm";
import Details from "../components/Details";
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
      {
        path: "/books/:id",
        element: <Details />,
      },
    ],
  },
]);
