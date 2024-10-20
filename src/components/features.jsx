import React from "react";
import { FiMonitor, FiVolume2, FiLayers } from "react-icons/fi";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="font-bold text-blue-main text-center text-4xl">Browse our set of features</h2>
      <p className="text-gray-600 md:max-w-[50vw] text-center">Jasa kami dirancang untuk memenuhi berbagai kebutuhan digital bisnis Anda, membantu Anda mencapai tujuan dan pertumbuhan yang optimal di pasar yang kompetitif.</p>

      <div className="flex flex-col md:flex-row justify-center mt-8 space-y-6 md:space-y-0 gap-x-10  flex-wrap">
        <div className="flex flex-col items-center justify-evenly bg-white p-6 rounded-lg border border-blue-main w-full md:w-1/4">
          <div className="bg-blue-secondary p-4 rounded-full mb-4">
            <FiMonitor className="text-blue-main text-3xl" />
          </div>
          <h3 className="text-lg font-medium text-blue-main">Website Development</h3>
          <p className="text-gray-600 mt-2 text-center">Gunakan jasa website development untuk menciptakan situs web yang menarik, responsif, dan user-friendly.</p>
          <button className="btn rounded-full border-none mt-4 bg-blue-main text-white py-2 px-4 ">Info selengkapnya</button>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg border border-blue-main w-full md:w-1/4">
          <div className="bg-blue-secondary p-4 rounded-full mb-4">
            <FiVolume2 className="text-blue-main text-3xl" />
          </div>
          <h3 className="text-lg font-medium text-blue-main">Socmed Management</h3>
          <p className="text-gray-600 mt-2 text-center">Gunakan jasa social media management untuk mengelola dan mengoptimalkan kehadiran bisnis di berbagai platform media sosial.</p>
          <button className="btn rounded-full border-none mt-4 bg-blue-main text-white py-2 px-4 ">Info selengkapnya</button>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg border border-blue-main w-full md:w-1/4">
          <div className="bg-blue-secondary p-4 rounded-full mb-4">
            <FiLayers className="text-blue-main text-3xl" />
          </div>
          <h3 className="text-lg font-medium text-blue-main">UI/UX Design</h3>
          <p className="text-gray-600 mt-2 text-center">Gunakan jasa UI/UX design untuk menciptakan pengalaman pengguna yang intuitif, menarik, dan efisien pada produk digital Anda.</p>
          <button className="btn rounded-full mt-4 border-2 bg-white border-blue-main text-blue-main py-2 px-4 hover:bg-zinc-400">Coming soon</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
