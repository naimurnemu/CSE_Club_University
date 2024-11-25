import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const UserProfile = () => {
  const { authState } = useContext(AuthContext);
  const { user } = authState || {};
  console.log(user);

  // Format the membership date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex flex-col items-center p-5">
      <div className="flex flex-col items-center">
        {user?.image ? (
          <img
            src={user?.image}
            alt={`${user?.username}`}
            className="w-24 h-24 rounded-full"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-400 flex justify-center items-center rounded-full">
            No Image
          </div>
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
    </div>
  );
};

export default UserProfile;
