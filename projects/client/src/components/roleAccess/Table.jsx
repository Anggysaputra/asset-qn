import { convertToDate } from "../../helper/date";

export default function Table({
  transH,
  headCols = [],
  tableBody = null,
  tfoot = null,
  pageIndex,
}) {
  return (
    <>
      <div className="-mx-4 mt-8 flex flex-col ring-1 ring-black ring-opacity-5 md:rounded-lg sm:-mx-6 md:mx-0">
        <table className="min-w-full divide-x divide-gray-300">
          <thead>
            <tr className="divide-x divide-gray-200 bg-gray-100">
              {headCols.map((col, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className={
                    idx === 0
                      ? "py-4 pl-2 text-left  text-sm font-semibold text-gray-900 sm:pl-4 md:pl-2 w-96"
                      : "hidden py-3.5 px-3 pr-12 text-left text-sm font-semibold text-gray-900 sm:table-cell "
                  }
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          {tableBody}
          {tfoot}
        </table>
      </div>
    </>
  );
}
