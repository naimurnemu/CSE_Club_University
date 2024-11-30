import React, { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActivities = async () => {
    try {
      const response = await fetch(
        "https://computer-club.onrender.com/activity/activities/"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error("Failed to fetch activities:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <IoReload className="h-12 w-12 animate-spin" />{" "}
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-5 overflow-x-auto">
      <h1 className="text-2xl font-bold text-center my-5">Activities</h1>
      <table className="min-w-full border-collapse shadow-lg rounded-lg overflow-hidden bg-gray-800">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="border border-gray-600 p-3 whitespace-nowrap">ID</th>
            <th className="border border-gray-600 p-3 whitespace-nowrap">Name</th>
            <th className="border border-gray-600 p-3 whitespace-nowrap">Description</th>
            <th className="border border-gray-600 p-3 whitespace-nowrap">Type</th>
            <th className="border border-gray-600 p-3 whitespace-nowrap">Date & Time</th>
            <th className="border border-gray-600 p-3 whitespace-nowrap">Location</th>
            <th className="border border-gray-600 p-3 whitespace-nowrap">Participants Count</th>
          </tr>
        </thead>
        <tbody className="bg-gray-700">
          {activities.map((activity) => (
            <tr key={activity.id} className="hover:bg-gray-600">
              <td className="border border-gray-600 p-3 text-center">{activity.id}</td>
              <td className="border border-gray-600 p-3">{activity.name}</td>
              <td className="border border-gray-600 p-3">{activity.description}</td>
              <td className="border border-gray-600 p-3 text-center">{activity.activity_type}</td>
              <td className="border border-gray-600 p-3 text-center">
                {new Date(`${activity.date}T${activity.time}`).toLocaleString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true
                })}
              </td>
              <td className="border border-gray-600 p-3 text-center">
                {activity.activity_type === 'OL' ? (
                  <a href={activity.online_link} target="_blank" rel="noopener noreferrer" className="font-bold text-yellow-400 bg-gray-900 p-2 rounded hover:bg-gray-800">Online Link</a>
                ) : (
                  activity.location
                )}
              </td>
              <td className="border border-gray-600 p-3 text-center">{activity.participants_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Activities;
