import React from "react";
import broken_img from "../../assets/broken_img.png";
import cars from "../../assets/cars.jpeg";
import specialTool from "../../assets/specialTool.png";
import safetyTools from "../../assets/safetyTools.png";
import stdTool from "../../assets/stdTool.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TableBodyAsset({
  asset = [],
  // userGlobal,
  onEdit,
  setActionSend,
  onDelete,
  selectItem,
  setSelectItem,
  onCheckboxChange,
  hiddenDelete,
  hiddenEdit,
}) {
  const userGlobal = useSelector((state) => state.user);
  const isDisabledList = asset.map((asset) => {
    return userGlobal.cabang_name !== asset.m_cabang.cabang_name;
  });

  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {asset.map((assets, index) => {
        // Membuat objek untuk menyimpan column_name dan value dari assets.m_assets_ins
        const assetInsMap = {};

        if (assets.m_assets_ins && assets.m_assets_ins.length > 0) {
          assets.m_assets_ins.forEach((assetIn) => {
            assetInsMap[assetIn.m_form.column_name] = assetIn.value;
          });
        }
        return (
          <tr key={`header-${index}`}>
            <th
              scope="col"
              className="relative h-3  px-6 sm:w-16 sm:px-8"
            >
              <input
                type="checkbox"
                // style={{
                //   cursor:
                //     userGlobal.role === "Super Admin"
                //       ? "auto" // Jika Super Admin, biarkan kursor menjadi auto
                //       : assets.m_cabang.cabang_name !== userGlobal.cabang_name
                //       ? "not-allowed"
                //       : "auto",
                //   background:
                //     userGlobal.role === "Super Admin"
                //       ? "none" // Jika Super Admin, tidak ada latar belakang
                //       : assets.m_cabang.cabang_name !== userGlobal.cabang_name
                //       ? "repeating-conic-gradient(red 0% 25%, transparent 0% 50%)"
                //       : "none",
                // }}
                className="checkbox absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                onChange={() =>
                  onCheckboxChange(assets, selectItem, setSelectItem)
                }
                checked={selectItem.includes(assets)}
                // disabled={
                //   assets.m_cabang.cabang_name !== userGlobal.cabang_name
                // }
              />
            </th>
            <td className="py-4 pl-4 pr-3 text-sm text-gray-500">
              <Link
                to={`/asset-tools/search/Details/${assets.id}`}
                state={{ asset: assets }}
                className="relative group flex items-center"
              >
                <div className="h-10 w-10 flex-shrink-0 ">
                  <img
                    className="h-10 w-7 px-25"
                    src={
                      assets.m_category.name === "Kendaraan"
                        ? cars
                        : assets.m_category.name === "Special Tools"
                        ? specialTool
                        : assets.m_category.name === "Standard Tools"
                        ? stdTool
                        : assets.m_category.name === "Safety Tools"
                        ? safetyTools
                        : broken_img
                    }
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null;
                      currentTarget.src = broken_img;
                    }}
                  />
                </div>
                <div className="font-medium text-gray-900 truncate max-w-[200px]">
                  {assets.name || "-"}
                </div>
              </Link>
            </td>

            <td className="px-4 py-4 text-sm text-gray-500">
              <div className="text-gray-900 ">
                {assets && assets.m_cabang && assets.m_cabang.cabang_name
                  ? assets.m_cabang.cabang_name
                  : "-"}
              </div>
            </td>

            <td className="px-4 py-4 text-sm text-gray-500">
              <div className="text-gray-900 truncate max-w-[90px]">
                {assets && assets.m_category && assets.m_category.name
                  ? assets.m_category.name
                  : "-"}
              </div>
            </td>

            <td className="px-4 py-4 text-sm text-gray-500">
              <div className="text-gray-900 truncate max-w-[90px]">
                {assetInsMap["No. Polisi"] ||
                  assetInsMap["Serial Number"] ||
                  "-"}
              </div>
            </td>

            <td className="px-3 py-4 text-sm text-gray-500">
              <div className="text-gray-900">{assets.name_count || "-"}</div>
            </td>

            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <span
                className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                  assets &&
                  assets.m_status_condition &&
                  assets.m_status_condition.name === "Service"
                    ? "bg-yellow-100 text-yellow-800"
                    : assets &&
                      assets.m_status_condition &&
                      assets.m_status_condition.name === "Bad"
                    ? "bg-red-100 text-red-500"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {assets &&
                assets.m_status_condition &&
                assets.m_status_condition.name
                  ? assets.m_status_condition.name
                  : "-"}
              </span>
            </td>

            {/* {(userGlobal.role === "Super Admin" ||
              userGlobal.role === "Manager Logistik" ||
              userGlobal.role === "Admin Logistik" ||
              userGlobal.role === "Logistik") &&
              (userGlobal.cabang_name === "HARMONI PUSAT" ||
                userGlobal.cabang_name === "CabangTesta") && ( */}
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
              {!hiddenEdit ? (
                <button
                  className="text-teal-600 hover:text-teal-900"
                  onClick={() => {
                    onEdit(assets);
                    setActionSend("Edit");
                  }}
                >
                  Edit<span className="sr-only">{assets.name}</span>
                </button>
              ) : null}
              {/* <button
                className="text-red-600 hover:text-red-900 ml-4"
                // onClick={() => onDelete(assets.id)}
              >
                Delete
                <span className="sr-only">{assets.name}</span>
              </button> */}
            </td>
            {/* )} */}
          </tr>
        );
      })}
    </tbody>
  );
}
