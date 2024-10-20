import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const PricingCard = ({ title, price, items, active, discount = 0 }) => {
  const borderColor = active ? "border-blue-main" : "border-gray-200";
  const checkColor = active ? "text-blue-main" : "text-gray-400";
  const discountedPrice = Math.ceil(price - price * (discount / 100));
  return (
    <div className={`relative bg-white border-2 min-h-[450px] ${borderColor} rounded-lg shadow-lg w-full md:w-1/6`}>
      {/* Discount Badge */}
      {discount > 0 && <div className="absolute top-0 right-0 bg-yellow-400 text-blue-main text-xs font-semibold px-3 py-1 rounded-bl-lg">Diskon {discount}% Pengguna Baru</div>}
      <div className="top text-center bg-[#eff8ff] rounded-t-lg p-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        {/* Original Price with Strikethrough */}

        {/* Discounted Price */}
        <div className="discount flex flex-row justify-center gap-2">
          {discount > 0 && <p className="text-gray-500 line-through text-lg mb-1">{price.toLocaleString()}k</p>}
          <p className="text-4xl font-semibold text-blue-main">{discountedPrice.toLocaleString()}k</p>
        </div>
        <p className="text-primary-grey">Billed monthly</p>
        <button className="btn border-none my-6 w-full bg-blue-main text-white py-3 rounded-full hover:bg-blue-main">Pesan sekarang</button>
      </div>

      <ul className="mt-6 space-y-2 text-gray-700 p-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 font-semibold text-primary-grey">
            <BsCheckCircleFill className={`${checkColor}`} size={20} /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
