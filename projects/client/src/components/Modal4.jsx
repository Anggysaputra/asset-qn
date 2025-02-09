import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import LoadingButton from "./LoadingButton";

export default function Modal4({
  title = "",
  open = false,
  setOpen,
  onSubmit,
  action = "add",
  actiSend,
  // stepStatus,
  // setStepStatus,
  steps,
  currentStep,
  setCurrentStep,
  isLoading = false,
  children,
}) {
  const cancelButtonRef = useRef(null);
  // console.log("steps", currentStep);
  // console.log("children", children);

  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-visible rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-6xl sm:p-6">
                <form onSubmit={onSubmit}>
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {actiSend} {title}
                      </Dialog.Title>
                      <div className="text-left mt-4">{children}</div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    {/* <button
                      type="button"
                      onClick={() => {
                        if (currentStep < steps.length - 1) {
                          setCurrentStep(currentStep + 1);
                        }
                      }}
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    >
                      {action === "add" ? "Add" : "Next"}
                    </button> */}
                    {isLoading ? (
                      <LoadingButton></LoadingButton>
                    ) : (
                      <>
                        {currentStep < steps.length - 1 ? (
                          <button
                            type="button"
                            onClick={() => {
                              setCurrentStep(currentStep + 1);
                            }}
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                          >
                            {action === "add" ? "Add" : "Next"}
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={onSubmit} // Panggil fungsi onSubmit saat tombol diklik
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                          >
                            Submit
                          </button>
                        )}
                      </>
                    )}

                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                      ref={cancelButtonRef}
                      onClick={() => {
                        if (currentStep > 0) {
                          setCurrentStep(currentStep - 1); // Kembali ke langkah sebelumnya jika tidak ada di langkah pertama
                        } else {
                          setOpen(false); // Tutup modal hanya jika berada di langkah pertama
                        }
                      }}
                    >
                      {currentStep === 0 ? "Cancel" : "Back"}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
