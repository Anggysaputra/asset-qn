import ReactToPrint from "react-to-print";
import qnlogo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Header({ invoice, child }) {
  console.log("invoice", invoice);
  return (
    <>
      <header className=" mb-5 border-b-2 border-black pb-4">
        <div className="flex justify-between items-center">
          <Link to="/home">
            <div className="flex items-center">
              <img
                src={qnlogo}
                className=" text-gray-900 h-24 mr-2"
              />
              <h1 className="text-xl font-bold">
                QUANTUM <br /> NUSATAMA
              </h1>
            </div>
          </Link>
          <div className="flex flex-col items-end justify-end">
            {child}
            <h1 className="text-xl font-bold uppercase text-gray-900">
              Invoice
            </h1>
            <span>{invoice.no_return || invoice.no_transfer}</span>
          </div>
        </div>
      </header>
    </>
  );
}
