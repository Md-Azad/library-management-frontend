// import type { ISummary } from "../interfaces/summary.interface";
// import { useGetSummaryQuery } from "../redux/features/Borrow/borrowApi";
// import SummaryTable from "./SummaryTable";

// const BorrowSummary = () => {
//   const { data, isLoading } = useGetSummaryQuery(undefined);
//   if (isLoading) {
//     return <h1>Loading....</h1>;
//   }
//   console.log(data.data);

//   return (
//     <div className="overflow-x-auto">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Serial No</th>
//             <th>Book Title</th>
//             <th>ISBN</th>
//             <th>Total Borrowed</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data?.data.map((summary: ISummary, index: number) => (
//             <SummaryTable
//               key={summary.book.isbn}
//               summary={summary}
//               index={index}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BorrowSummary;

import type { ISummary } from "../interfaces/summary.interface";
import { useGetSummaryQuery } from "../redux/features/Borrow/borrowApi";
import SummaryTable from "./SummaryTable";

const BorrowSummary = () => {
  const { data, isLoading } = useGetSummaryQuery(undefined);
  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="overflow-x-auto w-full px-1 sm:px-4 py-4 ">
      <div className="max-w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-700">
          Borrow Summary
        </h2>
        <table className="table w-full text-sm sm:text-base ">
          <thead>
            <tr>
              <th className="px-2 py-2 hidden sm:table-cell">Serial No</th>
              <th className="px-2 py-2">Book Title</th>
              <th className="px-2 py-2">ISBN</th>
              <th className="px-2 py-2">Total Borrowed</th>
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
    </div>
  );
};

export default BorrowSummary;
