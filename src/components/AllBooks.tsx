import type { IBook } from "../interfaces/book.interface";
import { useGetBooksQuery } from "../redux/features/Books/bookApi";
import BookCard from "./BookCard";

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery({ params: undefined });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-4 gap-4 mx-2">
      {data &&
        Array.isArray(data.data) &&
        data.data.map((book: IBook) => (
          <BookCard
            key={book._id}
            book={book}
            edit="edit"
            deleteAction="delete"
            borrow="borrow"
            details="details"
          />
        ))}
    </div>
  );
};

export default AllBooks;
