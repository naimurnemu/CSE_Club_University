import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <div className="logo">
        <Link to="/"><img src="/path/to/logo.png" alt="Zunzo"/></Link>
      </div>
      <nav className="flex items-center gap-4">
        <Link to="/" className="text-white">HOME PAGE</Link>
        <Link to="/about-us" className="text-white">ABOUT US</Link>
        <Link to="/events" className="text-white">OUR EVENTS</Link>
        <Link to="/news" className="text-white">LATEST NEWS</Link>
        <Link to="/contact" className="text-white">CONTACT US</Link>
      </nav>
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="input bg-gray-800 text-white" />
          <button type="submit" className="bg-green-500 text-white p-2 rounded"><i className="fa fa-search"></i></button>
        </div>
        <div className="flex gap-2">
          <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">Login</Link>
          <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">Register</Link>
        </div>
        <div>
          <Link to="/contact" className="bg-green-500 text-white px-4 py-2 rounded">CONTACT US</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
