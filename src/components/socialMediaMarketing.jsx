import React from "react";

export default function Benefits() {
  // Array of objects
  const benefits = [
    { id: 1, title: "Brand Awareness", description: "Meningkatkan kesadaran bisnis Anda dengan mengoptimalkan media sosial sebagai platform yang lebih luas untuk menjangkau audiens." },
    { id: 2, title: "Engagement", description: "Meningkatkan interaksi langsung dengan pengikut yang dapat meningkatkan loyalitas dan membangun customer relationship." },
    { id: 3, title: "Traffic", description: "Menumbuhkan lalu lintas organik ke situs web Anda melalui konten yang dibagikan di berbagai media sosial, yang menciptakan peluang konversi." },
    { id: 4, title: "Cost Effective", description: "Dibandingkan dengan media pemasaran tradisional, social media marketing menawarkan peluang pemasaran yang luas dengan biaya yang lebih rendah." },
    { id: 5, title: "Audience Target", description: "Menargetkan ke audiens Anda untuk meningkatkan relevansi, serta menggunakan data analitik untuk memahami preferensi dan kebutuhan audiens secara efektif." },
    { id: 6, title: "Brand Loyalty", description: "Keterlibatan secara interaktif yang berkelanjutan dapat membantu membangun loyalitas merek yang lebih kuat dan memperpanjang umur pelanggan." },
  ];

  return (
    <section className="md:min-h-[85vh] p-8 text-primary-grey flex flex-col gap-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl lg:text-3xl font-semibold text-blue-main">Manfaat Social Media Marketing</h2>
        <p className="lg:text-lg mt-2 lg:max-w-2xl text-center">Social media marketing menawarkan berbagai manfaat penting bagi bisnis Anda, termasuk peningkatan brand awareness dengan menjangkau audiens yang lebih luas.</p>
      </div>

      {/* Flexbox container with wrapping */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Map over the array to generate the benefit cards */}
        {benefits.map((benefit) => (
          <div key={benefit.id} className="flex-1 min-w-[350px] max-w-[350px] p-6 border border-blue-main rounded-lg text-center bg-white hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-4xl font-semibold text-blue-main mb-4">0{benefit.id}</h3>
            <h4 className="text-2xl font-semibold mb-2 text-gray-500">{benefit.title}</h4>
            <p className="">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
