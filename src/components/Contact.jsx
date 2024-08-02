import React from "react";

function Contact() {
  return (
    <>
      <div
        name="Contact"
        className="bg-gradient-to-r from-custom-black to-custom-gray max-w-screen-2xl container mx-auto p-4 md:p-20 my-16 overflow-hidden"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please Fill Out The Form Below To Contact Me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
          action="https://formspree.io/f/mldrbpkw"
            name="contact"  // Form name for Netlify
            method="POST"
            data-netlify="true" // Netlify Forms ko enable karta hai
            className="bg-slate-200 w-full max-w-lg px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold text-black mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">FullName</label>
              <input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                required
                type="text"
                placeholder="Enter your fullname"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                required
                type="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                required
                placeholder="Enter Your Query"
              />
            </div>
            <input type="hidden" name="form-name" value="contact" /> {/* Hidden field for form name */}
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
