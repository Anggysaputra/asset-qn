import { useEffect, useRef, useState } from "react";
import DetailReturnPDFViewer from "../../helper/DetailReturnPDFViewer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { convertToDate } from "../../helper/date";

export default function DetailReturn({
  transH = {},
  detailData = [],
  img = {},
}) {
  const [printing, setPrinting] = useState(false);
  console.log("detailData", detailData);
  console.log("transh", transH);

  const pdfRef = useRef();

  return (
    <>
      {/* <div
        className="a4-paper p-6 xl:max-w-4xl xl:mx-auto bg-white rounded shadow items-center"
        ref={pdfRef}
      > */}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          {/* <h2 className="text-xl font-semibold text-gray-900">
              List return asset
            </h2> */}
          <p className="mt-2 text-sm text-gray-700">
            List return asset {convertToDate(transH.date)}
          </p>
        </div>
      </div>
      {/*   <div className="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th>No.</th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                >
                  Asset Name
                </th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Owner
                </th>
                <th
                  scope="col"
                  className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  NOPOL/SN
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0"
                >
                  Qty
                </th>
              </tr>
            </thead>
            {detailData.map((transd, stockIdx) => (
              <tbody>
                <tr
                  key={transd.id}
                  className="border-b border-gray-200"
                >
                  <td className="py-4  pr-3 text-sm sm:pl-6 md:pl-0">
                    <div className="font-medium text-gray-900 flex items-center justify-center">
                      {stockIdx + 1}
                    </div>
                  </td>
                  <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                    <div className="font-medium text-gray-900">
                      {transd.m_asset_name}
                    </div>
                  </td>
                  <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                    {transd.ctgrName}
                  </td>
                  <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                    {transd.ownerName}
                  </td>
                  <td className="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                    {transd.no_polisi || transd.serial_number || "-"}
                  </td>
                  <td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                    {transd.qty_stock}
                  </td>
                </tr>
              </tbody>
            ))}
            <tfoot>
              <tr>
                <th
                  scope="row"
                  colSpan={4}
                  className="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0"
                >
                  Total Asset Transfer
                </th>
                <th
                  scope="row"
                  className="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                >
                  Total Asset Transfer
                </th>
                <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
                  $4,485.00
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10 ">
            <div className=" border-t border-gray-300 my-6">
              <h3 className="mt-10 text-lg font-medium leading-6 text-gray-900">
                Sender Information Form
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Please fill out this purpose form
              </p>
            </div>
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Status Return
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  {transH.status_return}
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  NO. RT
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  {transH.no_return}
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  From Branch
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  {transH.cabang_out}
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Destination
                </label>

                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  {transH.cabang_in}
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  shipper
                </label>

                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  {transH.user_transfer}
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Recipient Name
                </label>

                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  {transH.user_received}
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Date
                </label>

                <div className="mt-1 sm:col-span-2 sm:mt-0">{transH.date}</div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="desc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Shipping Notes
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="desc"
                      name="desc"
                      rows={3}
                      defaultValue={transH.desc}
                      className="p-2 block w-full rounded-md border border-gray-400 border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="desc"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Receipt Notes
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="desc"
                      name="desc"
                      rows={3}
                      defaultValue={transH.desc_received}
                      className="p-2 block w-full rounded-md border border-gray-400 border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
}
