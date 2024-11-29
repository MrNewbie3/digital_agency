import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center lg:h-fit lg:block">
      <div className="lg:min-h-screen px-28 wrapper flex flex-wrap lg:flex-nowrap justify-center items-center gap-x-20 gap-y-10">
        {/* Image Section */}
        <div
          className="image"
          data-aos="fade-right" // AOS animation for the image
        >
          <img src="./assets/hero.png" alt="Hero" />
        </div>

        {/* Text Section */}
        <div
          className="text flex flex-col justify-center gap-10"
          data-aos="fade-left" // AOS animation for the text
        >
          <h1 className="text-blue-main text-6xl font-semibold capitalize">A dedicated team to grow your company</h1>
          <p className="text-lg">From Local to Global: Let's work together to make your businesses shine on the global stage!</p>
          <div
            className="button-group justify-center lg:justify-start flex flex-col md:flex-row gap-x-10 gap-y-4 mb-16 lg:mb-0"
            data-aos="zoom-in" // AOS animation for the button group
          >
            <a href="https://wa.me/6285736694873">
              <button className="btn px-10 rounded-full bg-white text-blue-main hover:bg-zinc-400 border-blue-main">Talk to admin</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
