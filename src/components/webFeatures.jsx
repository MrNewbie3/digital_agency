import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function WebFeatures() {
  // Array of objects
  const option = [
    { id: 1, title: "Landing Page", img: "assets/feat1.png", routes: "./landing-page", description: "Meningkatkan kesadaran bisnis Anda dengan mengoptimalkan media sosial sebagai platform yang lebih luas untuk menjangkau audiens." },
    { id: 2, title: "Company Profile Page", img: "assets/feat2.png", routes: "./company-profile", description: "Meningkatkan interaksi langsung dengan pengikut yang dapat meningkatkan loyalitas dan membangun customer relationship." },
    {
      id: 3,
      title: "Advanced Web Development",
      img: "assets/feat3.png",
      routes: "./advanced-development",
      description: "Menumbuhkan lalu lintas organik ke situs web Anda melalui konten yang dibagikan di berbagai media sosial, yang menciptakan peluang konversi.",
    },
  ];
  const navigate = useNavigate();
  return (
    <section className="md:min-h-[85vh] p-8 text-primary-grey flex flex-col gap-10 ">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-main">Browse Our Set of Features</h2>
        <p className="lg:text-lg mt-2 lg:max-w-2xl text-center">We provide landing page, company profile website, portfolio, reservation system, and inventory management for your business needs.</p>
      </div>

      {/* Flexbox container with wrapping */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Map over the array to generate the benefit cards */}
        {option.map((benefit) => (
          <div key={benefit.id} className="flex flex-col relative gap-4 min-w-[350px] max-w-[380px] p-6 pb-16 border rounded-lg text-start bg-white hover:shadow-lg transition-shadow duration-200">
            <img className="font-semibold " src={benefit.img} alt="illustration" />
            <h4 className="text-2xl font-semibold  text-gray-500">{benefit.title}</h4>
            <p className="">{benefit.description}</p>
            <button
              onClick={() => {
                navigate(benefit.routes);
              }}
              className="text-md hover:cursor-pointer hover:underline font-semibold text-blue-main flex items-center gap-x-2 mb-4 absolute bottom-0"
            >
              Learn more
              <i>
                <FiArrowRight />
              </i>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
