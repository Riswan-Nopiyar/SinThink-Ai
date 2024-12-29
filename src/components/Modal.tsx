import React from "react";
import Button from "./tags/Button";

interface ModalProps {
  isOpen: boolean; // Status modal terbuka
  onClose: () => void; // Fungsi untuk menutup modal
  title?: string; // Judul modal
  children?: React.ReactNode; // Isi modal
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      aria-hidden="true"
    >
      {/* Modal Wrapper dengan Margin Atas dan Bawah */}
      <div className="relative p-4 w-full max-w-2xl max-h-[90vh] bg-white rounded-lg shadow dark:bg-gray-900 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 md:p-5 border-b bg-white dark:bg-gray-900 dark:border-gray-600">
          <h3 className="text-xl border-l-8 pl-3 border-purple-700 font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Modal Body dengan Scroll */}
        <div className="overflow-y-auto p-4 md:p-5 space-y-4 max-h-[60vh]">
          {children}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-10 flex items-center p-4 md:p-5 border-t bg-white dark:bg-gray-900 dark:border-gray-600">
          <Button onClick={onClose}>Yes</Button>
          <button
            type="button"
            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
