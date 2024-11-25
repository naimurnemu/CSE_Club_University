import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);

  const handleResponse = async (response) => {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }
    return data;
  };

  async function getUserDetails(token, userId) {
    const response = await fetch(`https://computer-club.onrender.com/users/users/${userId}/`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` },
    });
    return handleResponse(response);
  }

  const login = async (username, password) => {
    try {
      const response = await fetch("https://computer-club.onrender.com/users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await handleResponse(response);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user_id);

      const userData = await getUserDetails(data.token, data.user_id);
      setAuthState({ ...data, user: userData });
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("https://computer-club.onrender.com/users/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });
      await handleResponse(response);
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      setAuthState(null);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState, login, logout, getUserDetails }}>
      {children}
    </AuthContext.Provider>
  );
};
