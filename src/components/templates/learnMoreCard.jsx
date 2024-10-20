import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-[#eff8ff] min-w-[371px] min-h-[388px] rounded-lg shadow-lg p-6 max-w-xs text-center flex flex-col justify-center">
      <h3 className="text-2xl font-semibold text-blue-700">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
