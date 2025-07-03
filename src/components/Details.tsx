import { Link, useParams } from "react-router";
import { useGetBookQuery } from "../redux/features/Books/bookApi";

const Details = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetBookQuery(id);

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  const { title, author, genre, avilable, description } = data.data;
  return (
    <div className="card bg-gray-200 w-11/12 lg:w-1/2 shadow-sm my-8 mx-auto">
      <figure>
        <h1 className="text-7xl text-orange-400">{title}</h1>
      </figure>
      <div className="card-body">
        <div className="flex gap-4 flex-col  items-center">
          <div className="flex items-center gap-4">
            <h2 className="card-title">{author}</h2>
            <div className="badge badge-secondary">
              {avilable ? "Available" : "Not Available"}
            </div>
          </div>
          <p>{genre}</p>
        </div>

        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/borrow/${id}`}>
            <button className="btn btn-info">Borrow</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
