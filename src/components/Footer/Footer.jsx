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
    <div className="bg-gray-900 text-white pt-4">
      <div
       style={{
        background: "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)"
      }}
        className="max-w-7xl w-full mx-auto px-5 py-10 flex flex-wrap lg:justify-between justify-center gap-y-8"
      >
        {/* Column 1: Logo and Description */}
        <div className="text-center lg:text-start">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <Link to="/">
              <img className="w-10 h-10" src={logo} alt="club logo" />
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
          <p className="text-gray-300 text-sm lg:text-start">
            Welcome to our running community! <br /> Discover the joy of
            running, <br />
            connect with fellow enthusiasts, <br /> and unlock your full
            potential with <br />
            our expert resources and training programs.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
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

        {/* Column 2 & 3: Quick Links and Page */}
        <div className="flex flex-row justify-center gap-8 text-center lg:text-start lg:w-[40%] lg:gap-28">
          <div>
            <h2 className="font-bold text-lg mb-4">QUICK LINKS</h2>
            <ul className="space-y-2">
              <li className="hover:text-[#C3E92D] cursor-pointer">
                <Link to="/chat">Forum</Link>
              </li>
              <li className="hover:text-[#C3E92D] cursor-pointer">
                <Link to="/alumni">Alumni</Link>
              </li>
              <li className="hover:text-[#C3E92D] cursor-pointer">
                <Link to="/vote">Vote</Link>
              </li>
              <li className="hover:text-[#C3E92D] cursor-pointer">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="hover:text-[#C3E92D] cursor-pointer">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

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
              <li className="hover:text-[#C3E92D] cursor-pointer">
                <Link to="/alumni">Alumni</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="text-center lg:text-start">
          <h2 className="font-bold text-lg mb-4">NEWSLETTER</h2>
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <FiPhoneCall size={24} className="text-[#C3E92D]" />
            <div>
              <p className="text-sm text-gray-300">Need help? Call Here!</p>
              <p className="text-lg font-bold">001-1234-88888</p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <HiOutlineLocationMarker size={24} className="text-[#C3E92D]" />
            <p className="text-sm text-gray-300">
              Khagan, Birulia, Savar Dhaka
            </p>
          </div>
          <div className="mt-6 flex justify-center lg:justify-start">
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

      {/* Bottom Section */}
      <div className="border-t-[1px] text-center lg:text-start flex flex-col lg:flex-row justify-between text-sm pb-4 max-w-7xl w-full mx-auto px-5">
        <p className="mt-4">
          &copy; {new Date().getFullYear()}{" "}
          <a href="#" className="hover:text-[#C3E92D]">
            Computer Club City University
          </a>
          . All Rights Reserved by{" "}
          <Link className="text-[#49D78A] font-medium" to="/developers">
            Developer Team
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 mt-4 justify-center lg:justify-end">
          <a
            href="https://computer-club.onrender.com/admin/login/?next=/admin/"
            className="hover:text-[#C3E92D] text-[#49D78A] font-medium"
          >
            Admin
          </a>
          <Link to="/terms-and-services" className="hover:text-[#C3E92D]">
            Terms Of Services
          </Link>
          <Link to="/privacy" className="hover:text-[#C3E92D]">
            Privacy Policy
          </Link>
          <Link to="/cookie" className="hover:text-[#C3E92D]">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
