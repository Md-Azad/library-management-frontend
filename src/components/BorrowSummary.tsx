import type { ISummary } from "../interfaces/summary.interface";
import { useGetSummaryQuery } from "../redux/features/Borrow/borrowApi";
import SummaryTable from "./SummaryTable";

const BorrowSummary = () => {
  const { data, isLoading } = useGetSummaryQuery(undefined);
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  console.log(data.data);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Book Title</th>
            <th>ISBN</th>
            <th>Total Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((summary: ISummary, index: number) => (
            <SummaryTable
              key={summary.book.isbn}
              summary={summary}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummary;
