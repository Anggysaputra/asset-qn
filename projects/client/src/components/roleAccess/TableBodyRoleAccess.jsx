import { useState } from "react";
import CheckBox from "../CheckBox";

export default function TableBodyRoleAccess({
  list = [],
  dataEdit = {},
  setDataEdit,
}) {
  return (
    <tbody>
      {list.map((value, idx) => (
        <tr
          key={idx}
          className="border-b divide-x divide-gray-200 border-gray-200"
        >
          {/* Render menu name in one cell */}
          <td className="py-4  text-sm sm:pl-4 md:pl-2">{value.name}</td>
          {/* Render checkboxes for each action in the same row */}
          <td
            className="py-4 px-3 text-left text-sm font-semibold text-gray-900"
            colSpan="2" // Set colSpan to make it span across both columns
          >
            {value.m_actions.map((action) =>
              action.m_role_accesses.map((roleAccess, idx) => (
                <CheckBox
                  key={idx}
                  list={action}
                  access={roleAccess}
                  setDataEdit={setDataEdit}
                />
              ))
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
}
