import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for back button
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Footer from "../components/footer";

const ComingSoon = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const navigate = useNavigate(); // Hook to navigate back

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59"); // Set your target date
    const countdown = setInterval(() => {
      const currentDate = new Date();
      const difference = targetDate - currentDate;

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const m = Math.floor((difference / 1000 / 60) % 60);
      const s = Math.floor((difference / 1000) % 60);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);

      if (difference <= 0) {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white px-6">
      <button
        className="absolute top-4 left-4 font-semibold text-gray-700 p-2 rounded-lg  transition-colors"
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        &larr; Back To Previous Page
      </button>

      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-bounce">We're Launching Soon!</h1>
      <p className="text-lg md:text-xl mb-10 text-center max-w-xl">Our website is under construction, but we are working hard to give you the best experience! Stay tuned for the launch.</p>

      <div className="flex space-x-8 mb-8 text-center">
        <div>
          <span className="text-4xl md:text-6xl font-bold">{days}</span>
          <p className="text-lg">Days</p>
        </div>
        <div>
          <span className="text-4xl md:text-6xl font-bold">{hours}</span>
          <p className="text-lg">Hours</p>
        </div>
        <div>
          <span className="text-4xl md:text-6xl font-bold">{minutes}</span>
          <p className="text-lg">Minutes</p>
        </div>
        <div>
          <span className="text-4xl md:text-6xl font-bold">{seconds}</span>
          <p className="text-lg">Seconds</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
        <input type="email" className="w-full p-3 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Enter your email to get notified" />
        <button className="mt-4 w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-bold transition-colors">Notify Me</button>
      </div>

      <div className="flex space-x-6 mt-8">
        <a href="#" className="text-xl hover:text-blue-200 transition-colors">
          <FaFacebookF />
        </a>
        <a href="#" className="text-xl hover:text-blue-200 transition-colors">
          <FaInstagram />
        </a>
        <a href="#" className="text-xl hover:text-blue-200 transition-colors">
          <FaTwitter />
        </a>
        <a href="#" className="text-xl hover:text-blue-200 transition-colors">
          <FaLinkedinIn />
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default ComingSoon;
