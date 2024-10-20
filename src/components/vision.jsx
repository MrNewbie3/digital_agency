import React from "react";

export default function Vision() {
  return (
    <section className="lg:min-h-screen flex flex-col lg:flex-row px-6 lg:px-10">
      <div className="w-full lg:w-1/2">
        <img src="./assets/vision.png" className="w-full h-full object-cover" alt="Vision" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-5 p-8 lg:px-24 box-border justify-center">
        <p className="text-base lg:text-lg">Untuk mewujudkan visi dan misi ini, kami berkomitmen memberikan layanan digital marketing yang berkualitas tinggi, disesuaikan dengan kebutuhan unik setiap klien.</p>
        <div className="bottom-text flex flex-col gap-y-10">
          <div className="text-left flex flex-col gap-4">
            <h1 className="text-2xl lg:text-3xl font-semibold text-blue-main">Vision</h1>
            <p className="text-base lg:text-lg">
              Menjadi mitra terpercaya bagi berbagai bisnis dari berbagai industri dalam menghadapi tantangan dan memanfaatkan peluang di era digital dengan menyediakan solusi digital konten dan marketing yang inovatif dan efektif untuk
              mencapai tujuan bisnis Anda.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-start">
            <h1 className="text-2xl lg:text-3xl font-semibold text-blue-main">Mission</h1>
            <p className="text-base lg:text-lg">Mendorong pertumbuhan dan kesuksesan bisnis klien di era digital melalui pendekatan yang proaktif, kreatif, dan adaptif.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
