import { useGetBooksQuery } from "../redux/features/Books/bookApi";

const AllBooks = () => {
  const { data } = useGetBooksQuery(undefined);
  console.log(data);
  return <div>All books will be here.</div>;
};

export default AllBooks;
