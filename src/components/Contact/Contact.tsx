import React from "react";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="h-full bg-gray-100">
      <section className=" flex flex-col mx-auto px-4 py-20">
        <h1 className="text-[2rem] font-bold text-gray-800 mb-6 mx-auto">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8 mx-auto">
          We would love to hear from you! If you have any questions, feedback,
          or inquiries, please don't hesitate to reach out to our team.
        </p>
        <form onSubmit={handleSubmit} className="w-[90vw] md:w-[50vw] mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your message"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-[#FF725E] text-white font-bold rounded-md">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
