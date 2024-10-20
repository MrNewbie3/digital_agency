import React from "react";

export default function WebStack() {
  // Array of objects
  const contens = [
    { id: 1, title: "node", img: "assets/Logos/nodejs.png" },
    { id: 2, title: "mongo", img: "assets/Logos/mongodb.png" },
    { id: 3, title: "mysql", img: "assets/Logos/mysql.png" },
    { id: 4, title: "figma", img: "assets/Logos/figma.png" },
    { id: 5, title: "bootstrap", img: "assets/Logos/bootstrap.png" },
    { id: 6, title: "js", img: "assets/Logos/javascript.png" },
  ];
  return (
    <section className=" p-8 text-primary-grey flex flex-col gap-10 ">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-main">Stack Kami dalam Pengembangan Website</h2>
        <p className="lg:text-lg mt-2 lg:max-w-2xl text-center">Jasa website development kami dirancang untuk menciptakan solusi digital yang sesuai dengan kebutuhan unik bisnis Anda. </p>
      </div>

      {/* Flexbox container with wrapping */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Map over the array to generate the benefit cards */}
        {contens.map((benefit) => (
          <div key={benefit.id} className="flex flex-col relative gap-4 hover:shadow-lg transition-shadow duration-200">
            <img className="font-semibold " src={benefit.img} alt="illustration" />
          </div>
        ))}
      </div>
    </section>
  );
}
