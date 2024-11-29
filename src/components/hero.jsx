import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center lg:h-fit lg:block">
      <div className=" lg:min-h-screen px-28 wrapper flex flex-wrap lg:flex-nowrap justify-center items-center gap-x-20 gap-y-10">
        <div className="image ">
          <img src="./assets/hero.png" alt="" />
        </div>
        <div className="text flex flex-col justify-center gap-10">
          <h1 className="text-blue-main text-6xl font-semibold capitalize">A dedicated team to grow your company</h1>
          <p className="  text-lg">From Local to Global: Let's work together to make your businesses shine on the global stage!</p>
          <div className="button-group justify-center lg:justify-start flex flex-col md:flex-row gap-x-10 gap-y-4 mb-16 lg:mb-0">
            {/* <button className="btn px-10 rounded-full border-none text-white bg-blue-main">Get Started</button> */}
            <a href="https://wa.me/6285736694873">
              <button className="btn px-10 rounded-full bg-white text-blue-main  hover:bg-zinc-400 border-blue-main"> Talk to admin</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
