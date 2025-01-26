import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-8 pt-10 px-4 sm:px-6 lg:px-8 mt-16">
      <h1 className="text-4xl font-bold pt-10 text-gray-800 text-center">Contact Us</h1>
      <p className="mt-4 text-gray-600 text-center">
        We'd love to hear from you! Fill out the form below or reach out to us directly.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6 mx-auto w-full md:w-1/2">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border-2 border-light-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-300 focus:outline-none hover:border-green-400 active:border-green-600"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border-2 border-light-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-300 focus:outline-none hover:border-green-400 active:border-green-600"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full border-2 border-light-blue-400 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-300 focus:outline-none hover:border-green-400 active:border-green-600"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-green-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="mt-4 text-gray-600">
            You can also reach us through the following channels:
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <span className="font-medium text-gray-800">Email:</span>{' '}
              contact@yourcompany.com
            </li>
            <li>
              <span className="font-medium text-gray-800">Phone:</span>{' '}
              +1 (555) 123-4567
            </li>
            <li>
              <span className="font-medium text-gray-800">Address:</span>{' '}
              123 Main Street, Suite 100, Cityville, ST 12345
            </li>
          </ul>
          <p className="mt-6 text-gray-600">
            Follow us on social media:
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800"
              aria-label="Visit our Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800"
              aria-label="Visit our Twitter"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800"
              aria-label="Visit our LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
