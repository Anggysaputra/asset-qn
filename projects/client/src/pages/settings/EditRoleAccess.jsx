import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddDataHeader from "../../components/AddDataHeader";
import Header from "../../components/roleAccess/Header";
import CheckBox from "../../components/CheckBox";
import Table3 from "../../components/Table3";
import Table from "../../components/roleAccess/Table";
import TableBodyRoleAccess from "../../components/roleAccess/TableBodyRoleAccess";
import api from "../../api/api";
import { useState } from "react";
import { useSelector } from "react-redux";
import { errorAlertWithMessage, successAlert } from "../../helper/alerts";

const EditRoleAccess = () => {
  const { roleId } = useParams();
  const navigate = useNavigate();

  const userGlobal = useSelector((state) => state.user);
  const [listData, setListData] = useState([]);

  const [dataEdit, setDataEdit] = useState([]);
  console.log("dataEdit", dataEdit);

  async function fetchData() {
    const res = await api.get(`/role/details/${roleId}`);
    setListData(res.data.roleAccess);
  }

  async function handleSubmit() {
    console.log("jalan");
    try {
      // Mengambil kunci-nilai dari objek dataEdit
      const entries = Object.entries(dataEdit);

      // Loop melalui setiap elemen dalam objek dataEdit
      for (const [id, { active }] of entries) {
        // Mengirim permintaan PATCH untuk setiap elemen
        await api.post(`/role/updated-access`, {
          userUpdate: userGlobal.id,
          id,
          active,
          roleId: dataEdit[id].roleId,
        });
      }
      successAlert("Updated succefully");

      setTimeout(() => {
        navigate("/setting/role-access");
      }, 2000);
    } catch (error) {
      errorAlertWithMessage(error.response.data.message);
    }
  }

  useEffect(() => {
    console.log("jalan");
    fetchData();
  }, []);

  return (
    <div>
      <Header title="Edit Access" />
      <Table
        headCols={["Menu", "Detail Menu"]}
        tableBody={
          <TableBodyRoleAccess
            list={listData}
            dataEdit={dataEdit}
            setDataEdit={setDataEdit}
          />
        }
      />

      <div className="mt-2  sm:flex-none flex justify-end">
        {" "}
        <button
          className="bg-white text-blue-500 font-bold py-2 px-8 rounded shadow border-2 border-blue-500  hover:bg-transparent hover:text-gray-500 transition-all duration-300"
          onClick={() => navigate("/setting/role-access")}
        >
          Back
        </button>
        <button
          className="ml-2 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500  hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          onClick={handleSubmit}
        >
          Send Edit
        </button>
      </div>
    </div>
  );
};

export default EditRoleAccess;
