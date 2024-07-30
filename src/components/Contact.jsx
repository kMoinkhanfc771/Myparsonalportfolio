import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please Fill Out The Form Below To Contact Me</span>
        <div className=" flex flex-col items-center justify-center mt-5">
          <form
         action="https://formsubmit.co/kmoinkhanfc771@gmail.com" method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name" required
                type="text"
                placeholder="Enter your fullname"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email" required
                type="text"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message" required
                type="text"
                placeholder="Enter Your Query"
              />
            </div>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_template" value="table"></input>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
