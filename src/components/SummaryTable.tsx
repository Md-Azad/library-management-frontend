import type { ISummary } from "../interfaces/summary.interface";

type SummaryTableProps = {
  summary: ISummary;
  index: number;
};

const SummaryTable: React.FC<SummaryTableProps> = ({ summary, index }) => {
  const { totalQuantity } = summary;
  const { title, isbn } = summary.book;
  return (
    <tr>
      <th className="hidden sm:table-cell">{index + 1}</th>
      <td>{title}</td>
      <td>{isbn}</td>
      <td className="text-center lg:text-left">{totalQuantity}</td>
    </tr>
  );
};

export default SummaryTable;
