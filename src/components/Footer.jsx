import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="bg-gradient-to-r from-custom-black to-custom-gray max-w-screen-2xl container mx-auto p-4 md:p-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All Rights Reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ MOin KHan</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
