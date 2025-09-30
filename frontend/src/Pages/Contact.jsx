import React from 'react';
import Navbar from '../Components/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8 mt-45">
      
      {/* Header */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Have questions or suggestions? We'd love to hear from you! Fill out the form below or reach us through email or social media.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Your Message"
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Optional Contact Info */}
      <div className="mt-12 text-center max-w-2xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Other Ways to Reach Us</h2>
        <p className="text-gray-700 mb-2">Email: contact@yourplatform.com</p>
        <p className="text-gray-700 mb-2">Phone: +91 9876543210</p>
        <p className="text-gray-700">Follow us on social media for updates and news!</p>
      </div>

    </div>
    </>
  );
};

export default Contact;
