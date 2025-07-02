import type { IBook } from "../interfaces/book.interface";
import { useGetBooksQuery } from "../redux/features/Books/bookApi";
import BookRow from "./BookRow";

const BookTable = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          {/* Title, Author, Genre, , Copies, , and . */}
          <tr className="text-center">
            <th></th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>ISBN</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Array.isArray(data.data) &&
            data.data.map((book: IBook, index: number) => (
              <BookRow key={book._id} book={book} index={index} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
