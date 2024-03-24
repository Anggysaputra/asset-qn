import { useState } from "react";

export default function CheckBox({ access, list, setDataEdit }) {
  const [isChecked, setIsChecked] = useState(
    access.flag_active ? access.flag_active : false
  );
  // console.log("ischeked", isChecked);

  const handleCheckboxChange = (event) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);

    setDataEdit((prevData) => {
      const newData = { ...prevData };

      // Memeriksa apakah ada data dengan id yang sama
      const existingData = Object.values(newData).find(
        (item) => item.id === access.id
      );

      if (existingData) {
        // Jika ada, kita update data yang ada
        existingData.active = newValue;
      } else {
        // Jika tidak, kita tambahkan data baru
        newData[access.id] = {
          id: access.id,
          active: newValue,
          roleId: access.m_role_id,
        };
      }

      return newData;
    });
  };

  return (
    <fieldset className="space-y-5">
      {/* <legend className="sr-only">Notifications</legend> */}
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id={`active${access.id}`}
            aria-describedby="comments-description"
            name={`active${access.id}`}
            checked={isChecked}
            type="checkbox"
            onChange={handleCheckboxChange}
            className="checkbox h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor={`active${access.id}`}
            className="font-medium text-gray-700"
          >
            {list.action}
          </label>
        </div>
      </div>
    </fieldset>
  );
}
