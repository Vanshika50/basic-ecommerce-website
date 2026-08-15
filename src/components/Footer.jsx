import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#222121] text-white border-t border-t-[#4e4d4d] py-3 px-6 ">
      <div className="flex justify-between flex-col md:flex-row gap-6 md:gap-4 text-center md:text-left">
        <div>
          <h2 className="font-bold text-3xl ">e-Commerce</h2>
          <p className="text-gray-400">
            Your one-stop for everything you need.
          </p>
        </div>
        <div className="flex gap-10 items-center justify-center md:justify-start text-l">
          <Link to="/" className="font-medium hover:underline hover:text-gray-400 active:scale-95">Home</Link>
          <Link to="/cart" className="font-medium hover:underline hover:text-gray-400 active:scale-95">Cart</Link>
        </div>
        <div className="flex gap-7 items-center justify-center md:justify-start text-2xl">
          <a href="#" className="font-medium hover:underline hover:text-gray-400 active:scale-95">
            <FaFacebook />
          </a>
          <a href="#" className="font-medium hover:underline hover:text-gray-400 active:scale-95">
            <FaInstagram />
          </a>
          <a href="#" className="font-medium hover:underline hover:text-gray-400 active:scale-95">
            <FaTwitter />
          </a>
        </div>
        <div className="text-sm flex border-l-0 md:border-l items-center border-l-[#4e4d4d] pl-0 md:pl-4 justify-center md:justify-between py-1">
          <FaRegCopyright className="mt-1 mr-1" />
          {new Date().getFullYear()} e-Commerce,All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;