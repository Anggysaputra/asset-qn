import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];
export default function TableBodyWithIcon({ data = [], handleEdit }) {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {data.map((v) => (
        <tr
          key={v.id}
          className="divide-x divide-gray-200"
        >
          <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
            {v.view_name}
          </td>
          <td className="whitespace-nowrap p-4 text-sm text-gray-500">
            <div
              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                v.flag_active === 1
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <span className="max-w-[100px] truncate">
                {v.flag_active === 1 ? "Active" : "Non Active"}
              </span>
            </div>{" "}
          </td>
          {/* <td className="whitespace-nowrap p-4 text-sm text-gray-500">
              {person.email}
            </td> */}
          <td className="whitespace-nowrap py-4 pl-4 pr-2 text-sm text-gray-500 sm:pr-2">
            <button
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              onClick={() => {
                // onEdit(assets);
                // setActionSend("Edit");
              }}
            >
              <EyeIcon className="w-6 h-5 font-semibold text-gray-50" />
              {/* <span className="sr-only">{assets.name}</span> */}
            </button>
            <button
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto ml-1"
              onClick={() => handleEdit(v.id)}
            >
              <PencilSquareIcon className="w-6 h-5 font-semibold text-gray-50" />
              {/* <span className="sr-only">{assets.name}</span> */}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
