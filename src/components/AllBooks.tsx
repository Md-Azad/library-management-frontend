import type { IBook } from "../interfaces/book.interface";
import { useGetBooksQuery } from "../redux/features/Books/bookApi";
import BookCard from "./BookCard";

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery({ params: undefined });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="grid grid-cols-3 my-8 gap-4 mx-12">
      {data &&
        Array.isArray(data.data) &&
        data.data.map((book: IBook) => <BookCard key={book._id} book={book} />)}
    </div>
  );
};

export default AllBooks;
