import { Link } from "react-router";
import type { IBook } from "../interfaces/book.interface";
import { useDeleteBookMutation } from "../redux/features/Books/bookApi";
import Swal from "sweetalert2";
type BookRowProps = {
  book: IBook;
  details?: string;
  edit?: string;
  borrow?: string;
  deleteAction?: string;
};

const BookCard: React.FC<BookRowProps> = ({
  book,
  details = null,
  edit = null,
  borrow = null,
  deleteAction = null,
}) => {
  const { title, author, genre, isbn, avilable, copies } = book;
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteBook(id);
        if (result.data.success) {
          Swal.fire({
            title: "Deleted!",
            text: "The book has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="card bg-gray-400 shadow-sm">
      <figure>
        <h1 className="text-4xl text-orange-500">{title}</h1>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">
            {avilable ? "Available" : "Not Available"}
          </div>
          <div className="badge badge-secondary">{copies}</div>
        </h2>
        <p>Author: {author}</p>
        <p>Genre: {genre}</p>
        <p>ISBN : {isbn}</p>

        <div className="card-actions justify-end">
          {borrow && (
            <Link to={`/borrow/${book._id}`}>
              <button className="btn btn-sm bg-green-700">Borrow</button>
            </Link>
          )}
          {details && (
            <Link to={`/books/${book._id}`}>
              <button className="btn btn-sm bg-pink-400">Details</button>
            </Link>
          )}
          {edit && (
            <Link to={`/edit-book/${book._id}`}>
              <button className="btn btn-sm bg-yellow-500">Edit</button>
            </Link>
          )}
          {deleteAction && (
            <button
              onClick={() => handleDelete(book._id as string)}
              className="btn btn-sm bg-red-600"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
