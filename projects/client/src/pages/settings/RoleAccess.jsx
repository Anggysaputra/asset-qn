import React, { useEffect, useState } from "react";
import Table3 from "../../components/Table3";
import TableBodyWithIcon from "../../components/TableBodyWithIcon";
import AddDataHeader from "../../components/AddDataHeader";
import SearchBar from "../../components/SearchBar";
import ModalForm from "../../components/Modal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import api from "../../api/api";
import { useSearchParams } from "react-router-dom";

const RoleAccess = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const userGlobal = useSelector((state) => state.user);

  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [searchRoleName, setSearchRoleName] = useState("");
  const [roleData, setRoleData] = useState([]);
  console.log("roledata", roleData);

  async function fetchAllRole(query) {
    const res = await api.get(`/role?${query}`);
    setRoleData(res.data.allRole);
  }

  useEffect(() => {
    let query = `page=${currentPage}`;

    searchRoleName
      ? searchParams.set("q", searchRoleName)
      : searchParams.delete("q");

    query += `&${searchParams.toString()}`;
    setSearchParams(searchParams);

    fetchAllRole(query);
  }, [userGlobal, searchRoleName]);

  function handleSubmitSearch(e) {
    e.preventDefault();
    setSearchRoleName(e.target.searchBar?.value);
  }

  function handleEdit(id) {
    navigate(`/setting/role-access/${id}`);
  }

  return (
    <div>
      <ModalForm
        title="List Role Access"
        action="Add"
        open={openModal}
        setOpen={setOpenModal}
      />
      <div>
        <AddDataHeader
          title="Role Access"
          desc="A list Role Acces Quantum Nusatama"
          addButtonText="Add Role Access"
          onAddClick={() => {
            setOpenModal(true);
          }}
        />
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 mt-12 border-b border-gray-200">
          <SearchBar
            onSubmit={handleSubmitSearch}
            defaultValue={searchRoleName}
          />
        </div>

        <Table3
          headCols={["Role Name", "Status", "Action"]}
          tableBody={
            <TableBodyWithIcon
              data={roleData}
              handleEdit={handleEdit}
            />
          }
        />
      </div>
    </div>
  );
};

export default RoleAccess;
