import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const login = async (username, password, navigate = () => {}) => {
    setIsLoading(true);
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


      if (userData.username) {
        navigate("/announcements");
        setIsLoading(false);
      } 
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      // const response = await fetch("https://computer-club.onrender.com/users/logout/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authorization": `Token ${localStorage.getItem("token")}`,
      //   },
      // });
      // await handleResponse(response);
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      setAuthState(null);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState, login, logout, getUserDetails, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
