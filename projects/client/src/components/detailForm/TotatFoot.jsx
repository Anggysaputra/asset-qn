export default function TotalFoot({ total, statusSend }) {
  const colSpan = statusSend == "Transfer" ? 4 : 5;
  return (
    <>
      <tfoot>
        <tr className="bg-gray-50">
          <th
            scope="row"
            colSpan={colSpan}
            className="hidden pl-4 pr-6 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0"
          >
            Total Items
          </th>

          <td className="pl-3 pr-4 pt-4 text-center text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
            {total}
          </td>
        </tr>
      </tfoot>
    </>
  );
}
