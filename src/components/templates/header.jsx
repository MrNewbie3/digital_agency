import React from "react";

export default function Templates(params) {
  return (
    <section className="md:min-h-screen flex flex-col lg:flex-row justify-center items-center lg:mt:0 gap-y-10 pt-20">
      <div className="left-content w-full lg:mt-0">
        <img className="mx-auto" src={params.image} alt="" />
      </div>
      <div className="right-content w-full flex flex-col gap-y-6">
        <div className="logo p-4 bg-blue-secondary rounded-xl w-fit hidden lg:block ">{params.children}</div>
        <div className="title text-blue-main text-4xl font-semibold max-w-lg text-center lg:text-start">
          <h1>{params.title}</h1>
        </div>
        <div className="copywritting text-primary-grey">
          <p>{params.text}</p>
        </div>
      </div>
    </section>
  );
}
