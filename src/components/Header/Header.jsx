import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { logo } from "../../assets/logos";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const { authState, setAuthState, logout, getUserDetails } =
    useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token && !authState && userId) {
      getUserDetails(token, userId)
        .then((user) => {
          setAuthState({ token, user });
        })
        .catch((error) => {
          console.error("Failed to fetch user details", error);
        });
    }
  }, [authState, getUserDetails, setAuthState]); 

  return (
    <div className="bg-gray-900 text-white py-5">
      <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img className="w-10 h-10" src={logo} alt="Zunzo" />
          </Link>
          <div className="flex flex-col">
            <span className="font-medium text-2xl font-mono decoration-neutral text-yellow-400">
              Computer Club
            </span>
            <span className="text-white tracking-[0.3rem] font-thin font-sm mt-[-8px]">
              City University
            </span>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-base">
          <Link
            to="/about-us"
            className="text-white font-medium hover:underline hover:transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            to="/events"
            className="text-white font-medium hover:underline hover:transition-colors"
          >
            OUR EVENTS
          </Link>
          <Link
            to="/news"
            className="text-white font-medium hover:underline hover:transition-colors"
          >
            LATEST NEWS
          </Link>
          <Link
            to="/contact"
            className="text-white font-medium hover:underline hover:transition-colors"
          >
            CONTACT US
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          {authState && authState.user ? (
            <div className="relative flex items-center gap-3">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                <CgProfile size={20} />
                <span className="text-white">{`Hello, ${authState.user.first_name} ${authState.user.last_name}`}</span>
              </div>
              {menuOpen && (
                <ul className="absolute right-0 bg-gray-800 text-white rounded shadow-lg w-40 mt-30">
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    <Link to="/user-profile">Profile</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={logout}>
                    Logout
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
