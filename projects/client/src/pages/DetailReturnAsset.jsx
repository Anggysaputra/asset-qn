import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactToPrint from "react-to-print";

import { fetchDetailReturn } from "../reducers/returnSlice";
import Header from "../components/detailForm/Header";
import Table from "../components/detailForm/Table";
import ReturnTableBody from "../components/detailForm/ReturnTableBody";
import Footer from "../components/detailForm/Footer";
import HeaderInformation from "../components/detailForm/HeaderInformation";
import TotalFoot from "../components/detailForm/TotatFoot";

const DetailReturnAsset = () => {
  const statusSend = "Return";
  const location = useLocation();
  const dispatch = useDispatch();

  const userGlobal = useSelector((state) => state.user);
  const detailAsset = useSelector((state) => state.returnAsset.detailReturn);
  console.log("detail return", detailAsset);

  const pdfRef = useRef();
  const { transHId } = useParams();
  const assetReturn = location.state.asset;

  useEffect(() => {
    if (userGlobal.id) {
      dispatch(fetchDetailReturn(transHId));
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
              invoice={assetReturn}
              child={
                pageIndex === 0 && (
                  <ReactToPrint
                    trigger={() => (
                      <button className="hide-on-print  bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500  hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                        Print | Download
                      </button>
                    )}
                    content={() => pdfRef.current}
                  />
                )
              }
            />
            {pageIndex === 0 && <HeaderInformation transH={assetReturn} />}

            <Table
              pageIndex={pageIndex}
              transH={assetReturn}
              headCols={[
                "No.",
                "Asset Name",
                "Category",
                "Owner",
                "Nopol/Sn",
                "Qty",
              ]}
              tableBody={
                <ReturnTableBody
                  detailData={
                    pageIndex === 0
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

export default DetailReturnAsset;
