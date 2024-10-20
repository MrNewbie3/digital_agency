import React from "react";

export default function ExplorePortfolio() {
  return (
    <section className="px-16">
      <div className="text">
        <div className="copywritting">
          <h2 className="text-4xl font-bold text-start text-black">
            Explore our <span className="text-blue-main">Portfolio</span>
          </h2>
        </div>
        <div className="description flex flex-row justify-between my-4 mb-16">
          <p className="desc text-primary-grey w-full">From wireframes to final design, we bring your digital vision to life with clean, user-friendly interfaces tailored to your audience.</p>
          <div className="button-wrapper w-full text-end">
            <button className="btn px-14 rounded-full bg-blue-main border-none text-white">Hire Us</button>
          </div>
        </div>
        <div className="content">
          <ul className="flex flex-row flex-wrap justify-around">
            <li>
              <img src="assets/PortfolioV2/Image.png" alt="" />
            </li>
            <li>
              <img src="assets/PortfolioV2/Image1.png" alt="" />
            </li>
            <li>
              <img src="assets/PortfolioV2/Image2.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
