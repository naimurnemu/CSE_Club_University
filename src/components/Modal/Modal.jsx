import React from 'react';

const Modal = ({ isOpen, onClose, title, children, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="my-4">{children}</div>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;