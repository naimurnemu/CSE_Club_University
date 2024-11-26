import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiPhoneCall, FiSend } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { logo } from "../../assets/logos";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#121212] text-white ">
      <div className="max-w-7xl w-full mx-auto px-2 md:px-5 lg:px-0 py-10 flex flex-wrap justify-between ">
        {/* Column 1: Logo and Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
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
          <p className="text-gray-300 text-sm whitespace-break-spaces">
            Welcome to our running community! <br /> Discover the joy of
            running, <br />
            connect with fellow enthusiasts, <br /> and unlock your full
            potential with <br />
            our expert resources and training programs.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF
              className="text-gray-400 hover:text-[#C3E92D] cursor-pointer"
              size={20}
            />
            <FaLinkedinIn
              className="text-gray-400 hover:text-[#C3E92D] cursor-pointer"
              size={20}
            />
            <FaTwitter
              className="text-gray-400 hover:text-[#C3E92D] cursor-pointer"
              size={20}
            />
            <FaInstagram
              className="text-gray-400 hover:text-[#C3E92D] cursor-pointer"
              size={20}
            />
            <FaYoutube
              className="text-gray-400 hover:text-[#C3E92D] cursor-pointer"
              size={20}
            />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="font-bold text-lg mb-4">QUICK LINKS</h2>
          <ul className="space-y-2">
            <li className="hover:text-[#C3E92D] cursor-pointer">About Us</li>
            <li className="hover:text-[#C3E92D] cursor-pointer">Our Event</li>
            <li className="hover:text-[#C3E92D] cursor-pointer">Latest News</li>
            <li className="hover:text-[#C3E92D] cursor-pointer">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Page */}
        <div>
          <h2 className="font-bold text-lg mb-4">PAGE</h2>
          <ul className="space-y-2">
            <li className="hover:text-[#C3E92D] cursor-pointer">Blogs</li>
            <li className="hover:text-[#C3E92D] cursor-pointer">
              <Link to="/vote">Vote</Link>
            </li>
            <li className="hover:text-[#C3E92D] cursor-pointer">
              <Link to="/chat">Forum</Link>
            </li>
            <li className="hover:text-[#C3E92D] cursor-pointer">
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h2 className="font-bold text-lg mb-4">NEWSLETTER</h2>
          <div className="flex items-center gap-2 mb-4">
            <FiPhoneCall size={24} className="text-[#C3E92D]" />
            <div>
              <p className="text-sm text-gray-300">Need help? 24/7</p>
              <p className="text-lg font-bold">001-1234-88888</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineLocationMarker size={24} className="text-[#C3E92D]" />
            <p className="text-sm text-gray-300">
              710 1st St. Easton, PA 18042 | Chester County
            </p>
          </div>
          <div className="mt-6 flex">
            <input
              type="text"
              placeholder="Your email address"
              className="bg-white text-gray-700 px-4 py-2 rounded-l-md outline-none w-full"
            />
            <button className="bg-[#C3E92D] px-4 py-2 rounded-r-md">
              <FiSend size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ borderColor: "gray", textAlign: "center" }}
        className="border-t-[1px] flex justify-between lg:flex-row flex-col text-sm pb-4 max-w-7xl w-full mx-auto px-2 md:px-5 lg:px-0"
      >
        <div className="mt-4 text-center">
          <p>
            &copy;<span>{new Date().getFullYear()}</span>
            <span className="hover:text-[#C3E92D]">
              <a href="#">Computer Club City University</a>
            </span>
            . All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-3 mt-4 text-center">
          <a className="hover:text-[#C3E92D]" href="#">
            Terms Of Services
          </a>
          <a className="hover:text-[#C3E92D]" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-[#C3E92D]" href="#">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
