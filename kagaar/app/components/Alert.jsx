
import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineExclamationCircle } from "react-icons/ai";
function Alert({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-4 max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
               onClick={onClose}
              >
                <VscChromeClose size={25} />
              </button>
              <div className="p-4 md:p-5 text-center">
                <AiOutlineExclamationCircle className="w-12 h-12 mx-auto mb-4 text-gray-400 dark:text-gray-200"/>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                 {children}
                </h3>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Alert;
