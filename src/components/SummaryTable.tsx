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
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{isbn}</td>
      <td>{totalQuantity}</td>
    </tr>
  );
};

export default SummaryTable;
