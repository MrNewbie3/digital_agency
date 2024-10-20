import React from "react";

export default function WebDevAboutUs() {
  return (
    <section className="mt-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl my-4 font-bold text-center text-black">
          Website <span className="text-blue-main">Development</span>
        </h2>
        <p className="text-primary-grey mb-16">Discover a collection of sleek, responsive, and user-focused designs tailored to enhance your digital presence.</p>
        <div className="image-portfolio">
          <ul className=" flex flex-wrap justify-center gap-8">
            <li>
              <img src="./assets/webDevAboutUs/Image Placeholder.png" alt="" />
            </li>
            <li>
              <img src="./assets/webDevAboutUs/Image Placeholder-1.png" alt="" />
            </li>
            <li>
              <img src="./assets/webDevAboutUs/Image Placeholder-2.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
