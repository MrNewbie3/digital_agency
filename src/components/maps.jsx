// src/components/Maps.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Maps = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-10 bg-white">
      <h2 className="text-3xl text-center font-bold text-blue-main ">Join Our Legacy Around The World</h2>

      <div className="w-full max-w-4xl flex justify-center">
        <iframe
          className="md:w-[60vw] md:h-[60vh]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.4017848106466!2d112.68393326379999!3d-7.941721167252127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6294cbab80087%3A0x3a0a525ae88ba6c!2sM-House%20Araya!5e0!3m2!1sid!2sid!4v1724662580164!5m2!1sid!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-bold capitalize text-blue-main ">Subscribe to our newsletter</h2>
        <p className="text-center mb-4 text-primary-grey">Dapatkan update terbaru, tips, dan wawasan eksklusif langsung di email Anda dengan berlangganan newsletter kami.</p>
        <div className="flex gap-4 w-full justify-center flex-col lg:flex-row px-8 md:px-0">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 w-full border-none focus:outline-none bg-gray-100 rounded-full placeholder-blue-main text-blue-main" />
          <button className="btn px-4 py-2 bg-blue-main text-white rounded-full border-none">Subscribe</button>
        </div>
      </div>

      <div className="flex flex-row flex-wrap gap-4">
        <a href="https://www.instagram.com/icdigital.id/" target="_blank" rel="noreferrer" className="text-blue-main mx-2 bg-blue-secondary p-3 rounded-lg ">
          <FaInstagram size={24} />
        </a>
        {/* <a href="#" className="text-blue-main mx-2 bg-blue-secondary p-3 rounded-lg">
          <FaTwitter size={24} />
        </a> */}
        <a href="https://www.facebook.com/icdigital.id" target="_blank" rel="noreferrer" className="text-blue-main mx-2 bg-blue-secondary p-3 rounded-lg">
          <FaFacebookF size={24} />
        </a>
        {/* <a href="#" className="text-blue-main mx-2 bg-blue-secondary p-3 rounded-lg">
          <FaLinkedinIn size={24} />
        </a>
        <a href="#" className="text-blue-main mx-2 bg-blue-secondary p-3 rounded-lg">
          <FaYoutube size={24} />
        </a> */}
      </div>
    </div>
  );
};

export default Maps;
