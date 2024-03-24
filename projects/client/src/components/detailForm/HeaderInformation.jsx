import { convertToDate } from "../../helper/date";

export default function HeaderInformation({ transH = [], statusSend }) {
  console.log("transH", transH);
  return (
    <>
      <div className="flex justify-between border-b-2 border-gray-200">
        <section className="mx-4 pb-4">
          <h1 className="font-bold">Send By</h1>
          <ul>
            <li className="p-1 flex items-center">
              <span className="w-28 text-left text-gray-400">Branch</span> :{" "}
              <span className="font-bold ml-1">{transH.cabang_out}</span>
            </li>
            <li className="p-1  flex items-center">
              <span className="w-28 text-left text-gray-400">Username</span> :{" "}
              <span className="font-bold ml-1">{transH.user_transfer}</span>{" "}
            </li>
            {statusSend === "Return" && (
              <li className="p-1 flex items-center">
                <span className="w-28 text-left text-gray-400">
                  Status Return
                </span>{" "}
                : {transH.status_return}
              </li>
            )}
            <li className="p-1 flex items-center">
              <span className="w-28 text-left text-gray-400">Date</span> :{" "}
              {convertToDate(transH.date)}
            </li>
            <li className="p-1 flex items-start">
              <span className="w-28 text-left pr-20 text-gray-400">desc</span> :
              <p className="ml-1 line-clamp-2">{transH.desc}</p>
            </li>
          </ul>
        </section>
        <section className="mx-4 pb-4">
          <h1 className="font-bold">Received By</h1>
          <ul>
            <li className="p-1 flex items-center">
              <span className="w-28 text-left text-gray-400">Branch</span> :{" "}
              <span className="font-bold ml-1">{transH.cabang_in}</span>
            </li>
            <li className="p-1  flex items-center">
              <span className="w-28 text-left text-gray-400">Username</span> :{" "}
              <span className="font-bold ml-1">{transH.user_received}</span>{" "}
            </li>
            <li className="p-1  flex items-center">
              <span className="w-28 text-left text-gray-400">Status</span> :{" "}
              <span className=" ml-1">{transH.status_name}</span>{" "}
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
