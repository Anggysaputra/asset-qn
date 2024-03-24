import { PlusIcon } from "@heroicons/react/20/solid";

export default function Header({ title, role }) {
  // console.log("addDataButtonTex", addButtonText);
  return (
    <>
      <div className="sm:flex sm:items-center  py-6">
        <div className=" sm:flex-auto ">
          <h1 className="text-2xl relative font-semibold  w-max text-gray-900 after:block after:bg-red-300 after:absolute  after:bottom-1 after:-z-10 after:left-0 after:right-0">
            {title}
          </h1>
          {/* <p className="mt-4 text-sm text-gray-700">{desc}</p> */}
        </div>
      </div>
      <div className="200 space-y-6 pt-8 sm:space-y-5 sm:pt-5">
        <div className="space-y-6 sm:space-y-5">
          <div className="pl-2 font-bold bg-gray-100 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-b sm:border-gray-200 sm:pt-4 pb-4">
            <label htmlFor=" first-name">Role Name</label>
            <div className="mt-1 sm:col-span-2  sm:mt-0">: Super Admin</div>
          </div>
        </div>
      </div>
    </>
  );
}
