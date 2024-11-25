import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
  const { authState, setAuthState, logout, getUserDetails } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token && !authState && userId) {
      getUserDetails(token, userId).then(user => {
        setAuthState({ token, user });
      }).catch(error => {
        console.error("Failed to fetch user details", error);
      });
    }
  }, []);

  return (
    <div className="flex justify-between items-center p-5">
      <div className="logo">
        <Link to="/">
          <img src="/path/to/logo.png" alt="Zunzo" />
        </Link>
      </div>
      <nav className="flex items-center gap-4">
        <Link to="/" className="text-white">
          HOME PAGE
        </Link>
        <Link to="/about-us" className="text-white">
          ABOUT US
        </Link>
        <Link to="/events" className="text-white">
          OUR EVENTS
        </Link>
        <Link to="/news" className="text-white">
          LATEST NEWS
        </Link>
        <Link to="/contact" className="text-white">
          CONTACT US
        </Link>
      </nav>
      <div className="flex items-center gap-3">
        {authState && authState.user ? (
          <div className="flex items-center gap-3">
            <span className="text-white">{`Hello, ${authState.user.name}`}</span>
            <Link to="/profile" className="bg-green-500 text-white px-4 py-2 rounded">
              Profile
            </Link>
            <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">
              Login
            </Link>
            <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
