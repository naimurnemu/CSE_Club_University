import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { TbCameraPlus, TbTrash } from "react-icons/tb";
import Modal from '../../../components/Modal/Modal';

const UserProfile = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const { user } = authState || {};
  const [imageFile, setImageFile] = useState(null);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      // Optionally, upload the image here and update user's image URL
    }
  };

  const handleDeleteImage = () => {
    // Implement delete logic here
    // Update user's image URL in authState after successful deletion
    setImageFile(null); // Reset image file state
  };

  const uploadImage = async () => {
    try {
      const userId = localStorage.getItem("userId"); // Get userId from local storage
      const formData = new FormData();
      if (imageFile) {
        formData.append("image", imageFile);
      } else {
        formData.append("image", null);
      }

      const response = await fetch(`https://computer-club.onrender.com/users/users/${userId}/`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const updatedUser = await response.json();
      setAuthState((prevState) => ({
        ...prevState,
        user: { ...prevState.user, image: updatedUser.image },
      }));
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleImageUpload = () => {
    setModalType('confirm');
    setModalOpen(true);
  };

  const confirmUpload = async () => {
    setModalOpen(false);
    await uploadImage();
  };

  return (
    <div className="flex flex-col items-center p-5">
      <div className="flex flex-col items-center relative">
        {user?.image ? (
          <div 
            onMouseEnter={() => setShowDeleteIcon(true)} 
            onMouseLeave={() => setShowDeleteIcon(false)} 
            className="relative"
            role="button"
            tabIndex="0"
            onKeyPress={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setShowDeleteIcon(true);
              }
            }}
          >
            <img
              src={user?.image}
              alt={`${user?.username}'s profile picture`}
              className="w-24 h-24 rounded-full"
            />
            {showDeleteIcon && (
              <button 
                onClick={handleDeleteImage} 
                className="absolute right-0 bottom-0 bg-red-500 hover:bg-red-700 text-white p-1 rounded-full"
                aria-label="Delete image"
              >
                <TbTrash className="h-6 w-6" />
              </button>
            )}
          </div>
        ) : (
          <div className="w-24 h-24 bg-gray-400 flex justify-center items-center rounded-full">
            No Image
          </div>
        )}
        {!user?.image && (
          <>
            <input
              type="file"
              onChange={handleImageChange}
              className="hidden"
              id="fileInput"
            />
            <label htmlFor="fileInput" className="cursor-pointer">
            <TbCameraPlus className="h-6 w-6 text-gray-700 hover:text-gray-900" />
            </label>
          </>
        )}
        <h2 className="text-lg">@{user?.username}</h2>
      </div>
      <div className="mt-4">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th colSpan="2" className="border border-gray-300 text-white p-4 text-center bg-gray-700">Membership Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">Full Name:</td>
                <td className="border border-gray-300 p-4">
                  {user?.first_name} {user?.last_name}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Email:</td>
                <td className="border border-gray-300 p-4">{user?.email}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Username:</td>
                <td className="border border-gray-300 p-4">{user?.username}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Membership Date:</td>
                <td className="border border-gray-300 p-4">
                  {formatDate(user?.created_at)}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Student ID:</td>
                <td className="border border-gray-300 p-4">{user?.student_id}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Batch:</td>
                <td className="border border-gray-300 p-4">{user?.batch}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalType === 'confirm' ? 'Confirm Upload' : 'Warning'}
        onConfirm={confirmUpload}
      >
        {modalType === 'confirm' ? 'Are you sure you want to upload this image?' : 'Please confirm your action.'}
      </Modal>
    </div>
  );
};

export default UserProfile;
