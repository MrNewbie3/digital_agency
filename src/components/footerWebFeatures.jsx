import React from "react";

export default function FooterWebFeatures() {
  return (
    <footer className="bg-gray-100 py-8 ">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <p className="text-gray-500 text-2xl w-3/5">Let's work together and bring your creative ideas to life! Talk to admin for more information.</p>
        <button className="btn border-none my-6  bg-blue-main w-fit text-white py-3 px-8 rounded-full hover:bg-blue-main">Talk to Admin</button>
      </div>
    </footer>
  );
}
