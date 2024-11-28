import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children, onConfirm, isDelete }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <div className="my-4 text-gray-300">{children}</div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded ${
              isDelete
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-500 hover:bg-green-600"
            } text-white`}
          >
            {isDelete ? "Delete" : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
