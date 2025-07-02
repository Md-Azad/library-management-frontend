import { Link } from "react-router";
import type { IBook } from "../interfaces/book.interface";
import { useDeleteBookMutation } from "../redux/features/Books/bookApi";
type BookRowProps = {
  book: IBook;
};

const BookCard: React.FC<BookRowProps> = ({ book }) => {
  const { title, author, genre, isbn, avilable, copies } = book;
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    const result = await deleteBook(id);
    console.log(result);
  };
  return (
    <div className="card bg-gray-400 shadow-sm">
      <figure>
        <h1 className="text-8xl text-orange-500">{title}</h1>
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
          <Link
            to={`/borrow/${book._id}`}
            className="badge badge-outline bg-green-700"
          >
            Borrow
          </Link>
          <Link
            to={`/books/${book._id}`}
            className="badge badge-outline bg-pink-900"
          >
            Details
          </Link>
          <div className="badge badge-outline bg-yellow-500">Edit</div>
          <button
            onClick={() => handleDelete(book._id as string)}
            className="btn btn-sm bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
