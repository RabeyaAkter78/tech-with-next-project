import React from "react";
import { FaBolt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
function Footer() {
  return (
    <div className="bg-neutral-900">
      <div className="container mx-auto my-20 py-20 text-white ">
        <div className="flex gap-2 justify-center">
          <FaBolt className="w-10 h-10 text-blue-800" />
          <h1 className="text-4xl">TECH</h1>
        </div>
        <div className="flex gap-10 justify-center">
          <FaFacebookF className="w-5 h-5 " />
          <FaTwitter className="w-5 h-5 " />
          <FaLinkedinIn className="w-5 h-5 " />
          <FaPinterestP className="w-5 h-5 " />
          <BsInstagram className="w-5 h-5 " />
        </div>
        <p className="text-center my-5">Copyright © 2020 Tech</p>
      </div>
    </div>
  );
}

export default Footer;
