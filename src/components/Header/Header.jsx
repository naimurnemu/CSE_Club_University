import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { logo } from "../../assets/logos";
import { IoMenu } from "react-icons/io5";
import { FaCaretDown, FaTimes } from "react-icons/fa";

const Header = () => {
  const { authState, setAuthState, logout, getUserDetails } =
    useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navigate = useNavigate();
  const user = authState?.user || {};

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

  const handleMouseEnter = (dropdown) => {
    setDropdownOpen(dropdown);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <div
      className="bg-gray-900 text-white py-5 sticky top-0 left-0 w-full z-50"
      onClick={handleMenuClose}
    >
      <div className="flex justify-between items-center max-w-7xl w-full px-3 md:px-5 mx-auto">
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
        <div className="md:hidden z-50 bg-[#1d232a]">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-primary"
              >
                <IoMenu size={20} />
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu flex flex-col items-center w-[95%] h-full bg-[#1d232a] text-white">
                <button
                  className="btn btn-primary bg-inherit text-white ml-4 mt-4 self-start"
                  onClick={() =>
                    (document.getElementById("my-drawer-4").checked = false)
                  }
                >
                  <FaTimes size={20} />
                </button>
                {user?.username ? (
                  <div className="flex flex-col items-center p-10">
                    {user.image ? (
                      <img
                        src={user.image}
                        alt={`${user.username}`}
                        className="w-24 h-24 rounded-full"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gray-700 flex justify-center items-center rounded-full text-white text-sm" />
                    )}

                    <div className="flex flex-col w-full text-center space-y-5 mb-5">
                      <span className="font-medium text-2xl font-mono decoration-neutral whitespace-nowrap text-yellow-400">
                        {user.first_name} {user.last_name}
                      </span>
                      <button
                        className="text-white bg-green-500 px-4 py-2 my-2 rounded-full w-full"
                        onClick={() => {
                          navigate("/edit-profile");
                          document.getElementById(
                            "my-drawer-4"
                          ).checked = false;
                        }}
                      >
                        View Profile
                      </button>
                      <button
                        className="text-white bg-green-500 px-4 py-2 my-2 rounded-full w-full"
                        onClick={() => {
                          navigate("/announcements");
                          document.getElementById(
                            "my-drawer-4"
                          ).checked = false;
                        }}
                      >
                        Announcements
                      </button>
                      <button
                        className="text-white bg-red-500 px-4 py-2 my-2 rounded-full w-full"
                        onClick={() => {
                          logout();
                          navigate("/");
                          document.getElementById(
                            "my-drawer-4"
                          ).checked = false;
                        }}
                      >
                        Logout
                      </button>
                    </div>
                    <hr className="w-full" />
                    <ul className="w-full space-y-2">
                      <li className="border-b border-gray-300 font-medium p-0.5">
                        <Link
                          to="/events"
                          onClick={() =>
                            (document.getElementById(
                              "my-drawer-4"
                            ).checked = false)
                          }
                        >
                          Events
                        </Link>
                      </li>
                      <li className="border-b border-gray-300 font-medium p-0.5">
                        <Link
                          to="/blogs"
                          onClick={() =>
                            (document.getElementById(
                              "my-drawer-4"
                            ).checked = false)
                          }
                        >
                          Blogs
                        </Link>
                      </li>
                      <li className="border-b border-gray-300 font-medium p-0.5">
                        <Link
                          to="/activities"
                          onClick={() =>
                            (document.getElementById(
                              "my-drawer-4"
                            ).checked = false)
                          }
                        >
                          Activities
                        </Link>
                      </li>
                      <li className="border-b border-gray-300 font-medium p-0.5">
                        <Link
                          to="/chat"
                          onClick={() =>
                            (document.getElementById(
                              "my-drawer-4"
                            ).checked = false)
                          }
                        >
                          Forum
                        </Link>
                      </li>
                      <li className="border-b border-gray-300 font-medium p-0.5">
                        <Link
                          to="/contact"
                          onClick={() =>
                            (document.getElementById(
                              "my-drawer-4"
                            ).checked = false)
                          }
                        >
                          Support
                        </Link>
                      </li>
                      <li className="border-b border-gray-300 font-medium p-0.5">
                        <Link
                          to="/about-us"
                          onClick={() =>
                            (document.getElementById(
                              "my-drawer-4"
                            ).checked = false)
                          }
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="border-b border-gray-300 font-medium p-0.5">
                        <Link
                          to="/executives"
                          onClick={() =>
                            (document.getElementById(
                              "my-drawer-4"
                            ).checked = false)
                          }
                        >
                          Executives
                        </Link>
                      </li>
                      <li className="border-b border-gray-300 font-medium p-0.5">
                        <Link
                          to="/faqs"
                          onClick={() =>
                            (document.getElementById(
                              "my-drawer-4"
                            ).checked = false)
                          }
                        >
                          FAQs
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="flex flex-col w-full text-center">
                    <Link
                      to="/login"
                      className="bg-green-500 text-white px-4 py-2 my-2 rounded w-full"
                      onClick={() =>
                        (document.getElementById("my-drawer-4").checked = false)
                      }
                    >
                      Login
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-yellow-500 text-white px-4 py-2 my-2 rounded w-full"
                      onClick={() =>
                        (document.getElementById("my-drawer-4").checked = false)
                      }
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <nav className="items-center gap-6 text-base hidden md:flex">
          <Link
            to="/events"
            className="text-white font-medium hover:underline hover:transition-colors"
          >
            Events
          </Link>
          <Link
            to="/blogs"
            className="text-white font-medium hover:underline hover:transition-colors"
          >
            Blogs
          </Link>
          <div
            className="dropdown dropdown-hover"
            onMouseLeave={handleMouseLeave}
          >
            <div
              tabIndex={0}
              role="button"
              className="flex items-center"
              onMouseEnter={() => handleMouseEnter("aboutDesktop")}
            >
              <span className="text-white font-medium hover:underline hover:transition-colors">
                About
              </span>
              <FaCaretDown className="ml-1 text-white" />
            </div>
            {dropdownOpen === "aboutDesktop" && (
              <ul
                tabIndex={0}
                className="dropdown-content bg-black/70 font-semibold menu rounded-md z-[1] w-[150px] py-4"
              >
                <li>
                  <Link
                    to="/about-us"
                    className="text-white font-medium hover:underline hover:transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/executives"
                    className="text-white font-medium hover:underline hover:transition-colors"
                  >
                    Executives 
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div
            className="dropdown dropdown-hover"
            onMouseLeave={handleMouseLeave}
          >
            <div
              tabIndex={0}
              role="button"
              className="flex items-center"
              onMouseEnter={() => handleMouseEnter("moreDesktop")}
            >
              <span className="text-white font-medium hover:underline hover:transition-colors">
                More
              </span>
              <FaCaretDown className="ml-1 text-white" />
            </div>
            {dropdownOpen === "moreDesktop" && (
              <ul
                tabIndex={0}
                className="dropdown-content bg-black/70 font-semibold menu rounded-md z-[1] w-40 py-4"
              >
                
                <li>
                  <Link
                    to="/activities"
                    className="text-white font-medium hover:underline hover:transition-colors"
                  >
                    Activities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/chat"
                    className="text-white font-medium hover:underline hover:transition-colors"
                  >
                    Forum
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white font-medium hover:underline hover:transition-colors"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                    className="text-white font-medium hover:underline hover:transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
        <div className="items-center gap-3 hidden md:flex">
          {user?.username ? (
            <div className="relative flex items-center gap-3">
              <span className="text-white overflow-hidden whitespace-nowrap text-ellipsis max-w-[150px]">{`${user.first_name} ${user.last_name}`}</span>
              {user.image ? (
                <img
                  src={user.image}
                  alt={`${user.username}`}
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <div
                  className="w-10 h-10 bg-gray-400 flex justify-center items-center rounded-full cursor-pointer"
                  onClick={toggleMenu}
                />
              )}
              {menuOpen && (
                <ul className="absolute right-0 z-50 bg-gray-800 text-white rounded shadow-lg w-40 mt-[150px] flex flex-col items-center">
                  <li className="w-full">
                    <div
                      className="px-4 py-3 hover:bg-gray-700 cursor-pointer text-center w-full"
                      onClick={() => navigate("/edit-profile")}
                    >
                      Edit Profile
                    </div>
                  </li>
                  <li className="w-full">
                    <div
                      className="px-4 py-3 hover:bg-gray-700 cursor-pointer text-center w-full"
                      onClick={() => navigate("/announcements")}
                    >
                      Announcements
                    </div>
                  </li>
                  <li className="w-full">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 w-full rounded"
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="bg-green-500 text-white px-4 py-2 rounded-full"
              >
                Login
              </Link>
              <Link
                to="/contact"
                className="bg-yellow-500 text-white px-4 py-2 rounded-full"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
