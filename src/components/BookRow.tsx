import type { IBook } from "../interfaces/book.interface";
import ActionButton from "./ActionButton";

type BookRowProps = {
  book: IBook;
  index: number;
};

const BookRow: React.FC<BookRowProps> = ({ book, index }) => {
  const { title, author, genre, isbn, avilable } = book;

  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{author}</td>
      <td>{genre}</td>
      <td>{isbn}</td>
      <td>{avilable ? "true" : "false"}</td>
      <td className=" flex items-center justify-center">
        <ActionButton />
      </td>
    </tr>
  );
};

export default BookRow;
