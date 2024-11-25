import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { logo } from "../../assets/logos";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const { authState, setAuthState, logout, getUserDetails } =
    useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleMenuClick = (e) => {
    e.stopPropagation();
    toggleMenu(e);
  };

  return (
    <div className="bg-gray-900 text-white py-5" onClick={handleMenuClose}>
      <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img className="w-10 h-10" src={logo} alt="Zunzo" />
            <div className="flex flex-col">
              <span className="font-medium text-2xl font-mono decoration-neutral whitespace-nowrap text-yellow-400">
                Computer Club
              </span>
              <span className="text-white tracking-[0.3rem] font-thin font-sm whitespace-nowrap mt-[-8px]">
                City University
              </span>
            </div>
          </div>
        </Link>
        <nav className="flex items-center gap-4 text-base">
          <Link
            to="/about-us"
            className="text-white font-medium hover:underline hover:transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/events"
            className="text-white font-medium hover:underline hover:transition-colors"
          >
            Events
          </Link>
          <Link
            to="/news"
            className="text-white font-medium hover:underline hover:transition-colors"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="text-white font-medium hover:underline hover:transition-colors"
          >
            Support
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          {authState && authState.user ? (
            <div className="relative flex items-center gap-3">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleMenuClick}
              >
                <CgProfile size={20} />
                <span className="text-white">{` ${authState.user.first_name} ${authState.user.last_name}`}</span>
              </div>
              {menuOpen && (
                <ul className="absolute right-0 z-50 bg-gray-800 text-white rounded shadow-lg w-40 mt-[150px] flex flex-col items-center">
                  <li className="w-full">
                    <div 
                      className="px-4 py-3 hover:bg-gray-700 cursor-pointer text-center w-full"
                      onClick={() => navigate('/user-profile')}
                    >
                      Profile
                    </div>
                  </li>
                  <li className="w-full">
                    <button 
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 w-full rounded"
                      onClick={() => {
                        logout();
                        navigate('/');
                      }}
                    >
                      Logout
                    </button>
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
