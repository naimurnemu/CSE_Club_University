import React from "react";

const Newsletter = () => (
  <div className="py-8">
    <h2 className="text-2xl font-bold mb-4">Newsletter Signup</h2>
    <p className="text-gray-600 mb-6">
      Stay updated with club news, events, and featured projects.
    </p>
    <form className="max-w-lg mx-auto flex flex-col gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-3 border border-gray-300 rounded-md focus:outline-none"
      />
      <button className="w-full bg-green-500 text-white py-2 rounded-md">
        Subscribe
      </button>
    </form>
  </div>
);

export default Newsletter;
