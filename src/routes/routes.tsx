import { createBrowserRouter } from "react-router";
import App from "../App";
import AllBooks from "../components/AllBooks";
import BorrowForm from "../components/BorrowForm";
import Details from "../components/Details";
import CreateBook from "../components/CreateBook";
import BorrowSummary from "../components/BorrowSummary";
import UpdateBook from "../components/UpdateBook";
import Home from "../components/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/books", element: <AllBooks /> },
      {
        path: "/borrow/:id",
        element: <BorrowForm />,
      },
      {
        path: "/books/:id",
        element: <Details />,
      },
      {
        path: "/edit-book/:id",
        element: <UpdateBook />,
      },
      {
        path: "/create-book",
        element: <CreateBook />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
    ],
  },
]);
