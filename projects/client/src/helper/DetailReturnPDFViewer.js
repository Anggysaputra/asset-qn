import React from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const DetailReturnPDF = ({ transH, detailData }) => (
  <Document>
    <Page size="A4">
      <View style={{ padding: "1rem 1.5rem" }}>
        {transH ? (
          <>
            <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              List Transfer
            </h1>
            <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
              For work completed from{" "}
              <time dateTime="2022-08-01">August 1, 2022</time> to{" "}
              <time dateTime="2022-08-31">August 31, 2022</time>.
            </p>
          </>
        ) : (
          <p>No title available</p>
        )}
        {detailData.length > 0 ? (
          <table
            className="min-w-full divide-y divide-gray-300"
            style={{ marginTop: "2rem" }}
          >
            <thead>
              <tr>
                <th>No.</th>
                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">
                  Asset Name
                </th>
                <th className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">
                  Category
                </th>
                <th className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">
                  Owner
                </th>
                <th className="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">
                  NOPOL/SN
                </th>
                <th className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
                  Qty
                </th>
              </tr>
            </thead>
            {detailData.map((transd, stockIdx) => (
              <tbody key={transd.id}>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-3 text-sm sm:pl-6 md:pl-0">
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
          </table>
        ) : (
          <p>No data available</p>
        )}
        {/* Sender Information Form content */}
      </View>
    </Page>
  </Document>
);

const DetailReturnPDFViewer = ({ transH, detailData }) => {
  console.log("transH:", transH);
  console.log("detailData:", detailData);

  return (
    <div>
      <PDFDownloadLink
        document={
          <DetailReturnPDF
            transH={transH}
            detailData={detailData}
          />
        }
        fileName="detail_return.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default DetailReturnPDFViewer;
