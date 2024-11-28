import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { TbCameraPlus, TbTrash } from "react-icons/tb";
import { RiLoader2Fill } from "react-icons/ri";
import { Modal } from "../../../components";

const UserProfile = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const { user } = authState || {};
  const [imageFile, setImageFile] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setModalType("confirmUpload");
      setModalOpen(true);
    }
  };

  const handleDeleteImage = () => {
    setModalType("confirmDelete");
    setModalOpen(true);
  };

  const deleteImage = async () => {
    setLoading(true);
    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch(
        `https://computer-club.onrender.com/users/users/${userId}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: user.username, image: null }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete image");
      }

      setAuthState((prevState) => ({
        ...prevState,
        user: { ...prevState.user, image: null },
      }));
      setImageFile(null);
    } catch (error) {
      console.error("Error deleting image:", error);
    } finally {
      setLoading(false);
      setModalOpen(false);
    }
  };

  const uploadImage = async () => {
    setLoading(true);
    try {
      const userId = localStorage.getItem("userId");
      const formData = new FormData();
      formData.append("image", imageFile || null);
      formData.append("username", user.username);

      const response = await fetch(
        `https://computer-club.onrender.com/users/users/${userId}/`,
        {
          method: "PUT",
          body: formData,
        }
      );

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
    } finally {
      setLoading(false);
      setModalOpen(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const confirmAction = async () => {
    setModalOpen(false);
    if (modalType === "confirmUpload") {
      await uploadImage();
    } else if (modalType === "confirmDelete") {
      await deleteImage();
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <div className="flex flex-col items-center relative">
        {loading && (
          <RiLoader2Fill className="absolute inset-0 m-auto w-6 h-6" /> 
        )}
        {user?.image ? (
          <div className="relative">
            <img
              src={user?.image}
              alt={`${user?.username}'s profile picture`}
              className="w-24 h-24 rounded-full"
            />
            <button
              onClick={handleDeleteImage}
              className="absolute right-0 bottom-0 bg-red-500 hover:bg-red-700 text-white p-1 rounded-full"
              aria-label="Delete image"
            >
              <TbTrash className="h-5 w-5" />
            </button>
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
            <label
              htmlFor="fileInput"
              className="absolute right-6 bottom-7 bg-green-500 hover:bg-green-700 text-white p-1 rounded-full cursor-pointer"
            >
              <TbCameraPlus className="h-5 w-5" />
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
                <th
                  colSpan="2"
                  className="border border-gray-300 text-white p-4 text-center bg-gray-700"
                >
                  Membership Info
                </th>
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
                <td className="border border-gray-300 p-4">
                  {user?.student_id}
                </td>
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
        isDelete={modalType === "confirmDelete"}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalType === "confirmUpload" ? "Confirm Upload" : "Confirm Delete"}
        onConfirm={confirmAction}
      >
        {modalType === "confirmUpload"
          ? "Are you sure you want to upload this image?"
          : "Are you sure you want to delete this image?"}
      </Modal>
    </div>
  );
};

export default UserProfile;
