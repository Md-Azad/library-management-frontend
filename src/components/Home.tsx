import type { IBook } from "../interfaces/book.interface";
import { useGetBooksQuery } from "../redux/features/Books/bookApi";
import Banner from "./Banner";
import BookCard from "./BookCard";

const Home = () => {
  const { data, isLoading } = useGetBooksQuery({
    params: "?sortBy=createdAt&sort=desc&limit=4",
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Banner />
      <h1 className="text-5xl text-pink-500 font-bold text-center mt-2">
        New Books
      </h1>
      <div className="grid lg:grid-cols-4 my-8 gap-4 mx-2 md:grid-cols-1 sm:grid-cols-1 sm:mx-2">
        {data &&
          Array.isArray(data.data) &&
          data.data.map((book: IBook) => (
            <BookCard
              key={book._id}
              book={book}
              details={"details"}
              borrow={"borrow"}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
