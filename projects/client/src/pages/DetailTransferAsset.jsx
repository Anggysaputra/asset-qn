import React, { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailTransfer } from "../reducers/transferSlice";
import Header from "../components/detailForm/Header";
import HeaderInformation from "../components/detailForm/HeaderInformation";
import Table from "../components/detailForm/Table";
import TotalFoot from "../components/detailForm/TotatFoot";
import Footer from "../components/detailForm/Footer";
import ReactToPrint from "react-to-print";
import TransferTableBody from "../components/detailForm/TransferTableBody";

const DetailTransferAsset = () => {
  const statusSend = "Transfer";
  const dispatch = useDispatch();
  const location = useLocation();

  const userGlobal = useSelector((state) => state.user);
  const detailAsset = useSelector(
    (state) => state.transferAsset.detailTransfer
  );
  console.log("global detail", detailAsset);

  const pdfRef = useRef();
  const { transHId } = useParams();
  const assetTransfer = location.state.asset;

  useEffect(() => {
    if (userGlobal.id) {
      console.log("jalan fetch det");
      dispatch(fetchDetailTransfer(transHId));
    }
  }, [dispatch, userGlobal.id]);

  // setup Item in paper
  const itemPerPaper = 13;
  const totalItem =
    detailAsset && detailAsset.length ? detailAsset.length + 4 : 0;
  const totalPaper = Math.ceil(totalItem / itemPerPaper);

  return (
    <div className=" bg-[#f1f1f1]">
      <main ref={pdfRef}>
        {[...Array(totalPaper)].map((_, pageIndex) => (
          <div
            key={pageIndex}
            className="a4-paper p-6 xl:max-w-4xl xl:mx-auto bg-white rounded shadow items-center relative"
          >
            <Header
              invoice={assetTransfer}
              child={
                pageIndex === 0 && (
                  <ReactToPrint
                    trigger={() => (
                      <button className="hide-on-print  bg-blue-500 text-white font bold py-2 px-8 rounded shadow border-2 border-blue-500  hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                        Print | Download
                      </button>
                    )}
                    content={() => pdfRef.current}
                  />
                )
              }
            />
            {pageIndex === 0 && (
              <HeaderInformation
                statusSend={statusSend}
                transH={assetTransfer}
              />
            )}

            <Table
              pageIndex={pageIndex}
              transH={assetTransfer}
              headCols={["No.", "Asset Name", "Category", "Nopol/Sn", "Qty"]}
              tableBody={
                <TransferTableBody
                  detailData={
                    --pageIndex === 0
                      ? detailAsset.slice(0, 9)
                      : detailAsset.slice(
                          9 + (pageIndex - 1) * itemPerPaper,
                          9 + pageIndex * itemPerPaper
                        )
                  }
                />
              }
              tfoot={
                pageIndex === totalPaper - 1 && (
                  <TotalFoot
                    statusSend={statusSend}
                    total={detailAsset.reduce(
                      (total, item) => total + item.qty_stock,
                      0
                    )}
                  />
                )
              }
            />

            <Footer page={pageIndex} />
          </div>
        ))}
      </main>
    </div>
  );
};

export default DetailTransferAsset;
