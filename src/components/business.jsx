import React from "react";

export default function Business() {
  return (
    <section className="lg:min-h-screen flex flex-col lg:flex-row">
      {/* Left Section (Image) */}
      <div
        className="w-full lg:w-1/2"
        data-aos="fade-right" // AOS animation for image
      >
        <img src="./assets/sectionBusiness.png" className="w-full h-full object-cover" alt="Business Section" />
      </div>

      {/* Right Section (Text Content) */}
      <div
        className="w-full lg:w-1/2 flex flex-col gap-5 p-8 lg:px-24 box-border justify-center"
        data-aos="fade-left" // AOS animation for text
      >
        <h1 className="text-2xl lg:text-3xl font-bold text-blue-main">Source for Business</h1>
        <p className="text-base lg:text-lg">
          @icdigital.id adalah agensi digital marketing di Malang Raya yang berfokus pada membantu bisnis mencapai kesuksesan di dunia digital. Kami menyediakan solusi yang inovatif dan efektif, mencakup manajemen media sosial, optimasi
          SEO, manajemen konten, serta pembuatan landing page untuk website.
        </p>

        {/* Bottom Section */}
        <div className="bottom-text flex flex-col lg:flex-row gap-8">
          {/* No.1 */}
          <div
            className="text-left flex flex-col gap-4"
            data-aos="fade-up" // AOS animation for the first point
          >
            <h1 className="text-2xl lg:text-3xl font-semibold text-blue-main">No.1</h1>
            <p className="text-base lg:text-lg">Meningkatkan eksposur dan pertumbuhan klien di ranah digital.</p>
          </div>

          {/* No.2 */}
          <div
            className="text-left flex flex-col gap-4"
            data-aos="fade-up" // AOS animation for the second point
            data-aos-delay="200" // Slight delay for staggered animation
          >
            <h1 className="text-2xl lg:text-3xl font-semibold text-blue-main">No.2</h1>
            <p className="text-base lg:text-lg">Memastikan bisnis Anda tetap kompetitif dan relevan dalam pasar yang terus berkembang.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
