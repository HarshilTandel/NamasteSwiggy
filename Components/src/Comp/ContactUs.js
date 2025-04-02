import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
      <p className="text-center text-gray-600 mb-8">We’d love to hear from you</p>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="grid gap-4"
      >
        <input
          type="hidden"
          name="access_key"
          value="2e6e512a-2bb1-4d31-8ce7-8132581e005b"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">E-mail</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="description"
            rows="5"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Send message <FaPaperPlane />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
