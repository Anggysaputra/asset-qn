export default function ReturnTableBody({ detailData = [] }) {
  console.log("detail data", detailData);
  return (
    <>
      {detailData.map((transd, stockIdx) => (
        <tbody>
          <tr
            key={transd.id}
            className="border-b border-gray-200"
          >
            <td className="py-4  pr-3 text-center text-sm sm:pl-6 md:pl-0">
              <div className="font-medium text-gray-900 flex items-center justify-center">
                {transd.no}
              </div>
            </td>
            <td className="py-4 pl-4  text-sm sm:pl-4 md:pl-2">
              <div className="font-medium text-gray-900">
                {transd.m_asset_name}
              </div>
            </td>
            <td className="hidden  py-4 px-3 text-left text-sm text-gray-500 sm:table-cell">
              {transd.ctgrName}
            </td>
            <td className="hidden py-4 px-2 text-left text-sm text-gray-500 sm:table-cell">
              {transd.ownerName}
            </td>
            <td className="hidden py-4 px-3 text-left text-sm text-gray-500 sm:table-cell">
              {transd.no_polisi || transd.serial_number || "-"}
            </td>
            <td className="py-4 pl-3 pr-4 text-center text-sm text-gray-500 sm:pr-6 md:pr-0">
              {transd.qty_stock}
            </td>
          </tr>
        </tbody>
      ))}
    </>
  );
}
