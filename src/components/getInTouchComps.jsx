import React, { useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const GetInTouchComps = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="min-h-screen flex items-center justify-center px-28">
      <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-20">
        {/* Left Section - get in touch */}
        <div className="w-full mb-8 lg:mb-0">
          <h2 className="text-sm font-bold text-gray-500 uppercase mb-4">Contact Us</h2>
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Get in touch today</h1>
          <p className="text-gray-700 mb-6">
            Untuk pertanyaan atau informasi lebih lanjut, hubungi kami melalui formulir di bawah ini atau gunakan detail kontak berikut. Kami siap membantu Anda dan akan merespons secepat mungkin. Terima kasih atas minat Anda!
          </p>

          <div className="flex items-center mb-4">
            <AiOutlineMail className="text-blue-500 mr-3" size={24} />
            <p className="text-primary-grey">icdigital.id@gmail.com</p>
          </div>

          <div className="flex items-center mb-4">
            <AiOutlinePhone className="text-blue-500 mr-3" size={24} />
            <p className="text-primary-grey">085736694873</p>
          </div>

          <div className="flex items-start">
            <GoLocation className="text-blue-500 mr-3 " size={48} />
            <p className="text-primary-grey">3M5M+7P3 M-House Araya, The Araya, Jl. Mansion Valley Jl. Amira Mansion, Genitri, Saptorenggo, Kec. Pakis, Kabupaten Malang, Jawa Timur 65154 G 15</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full bg-[#EFF8FF] p-8 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 p-3 w-full border bg-white border-none placeholder-blue-main focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full text-blue-main" placeholder="John Carter" />
            </div>

            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 p-3 w-full border bg-white border-none placeholder-blue-main focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full text-blue-main" placeholder="example@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input type="text" className="mt-1 p-3 w-full border bg-white border-none placeholder-blue-main focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full text-blue-main" placeholder="Your Company" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <PhoneInput
                country={"us"} // Default negara
                value={phone}
                placeholder="xx xxxxxxx"
                onChange={(phone) => setPhone(phone)}
                inputStyle={{
                  marginTop: "0.25rem", // mt-1 in Tailwind
                  paddingLeft: "70px", // p-3 in Tailwind
                  width: "100%", // w-full in Tailwind
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "9999px", // rounded-full in Tailwind
                  color: "#1E40AF", // text-blue-main
                  outline: "none",
                  boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)", // focus:ring-2 focus:ring-blue-500
                }}
                buttonStyle={{
                  backgroundColor: "white",
                  border: "none",
                  padding: "0.75rem", // p-3 in Tailwind
                  borderRadius: "9999px", // rounded-full in Tailwind
                  color: "#1E40AF", // text-blue-main
                }}
                dropdownStyle={{
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "0.5rem", // rounded-lg in Tailwind
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // shadow-lg in Tailwind
                }}
                searchStyle={{
                  backgroundColor: "#f3f4f6", // bg-gray-100 in Tailwind
                  padding: "0.5rem", // p-2 in Tailwind
                }}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea className="mt-1 p-3 w-full border rounded-xl bg-white text-blue-main placeholder-blue-main border-none focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Please type your message here..." rows="4" />
            </div>

            <button type="submit" className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchComps;
