// src/components/CoreValues.jsx
import React from "react";
import { MdOutlineDesignServices, MdOutlineGroups, MdOutlineLightbulb } from "react-icons/md"; // Import outlined icons

const CoreValues = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-main mb-6">Our Core Values</h2>
        <p className="text-primary-grey mb-12 max-w-3xl mx-auto">
          Di @icdigital.id, nilai-nilai inti kami mencerminkan komitmen kami untuk inovasi, kolaborasi, dan keunggulan. Kami selalu mencari cara baru dan kreatif untuk membantu klien kami menonjol di pasar digital yang terus berkembang.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Adaptability */}
          <div className="max-w-xs text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-blue-secondary mx-auto">
              <MdOutlineDesignServices size={40} className="text-blue-main" />
            </div>
            <h3 className="text-xl font-semibold text-blue-main mb-2">Adaptability</h3>
            <p className="text-primary-grey">Tim kami secara proaktif memantau inovasi di industri dan melakukan penyesuaian strategi yang diperlukan untuk memastikan bahwa solusi digital yang kami tawarkan tetap efektif dan relevan.</p>
          </div>

          {/* Collaboration */}
          <div className="max-w-xs text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-blue-secondary mx-auto">
              <MdOutlineGroups size={40} className="text-blue-main" />
            </div>
            <h3 className="text-xl font-semibold text-blue-main mb-2">Collaboration</h3>
            <p className="text-primary-grey">Kami tidak hanya melihat diri kami sebagai penyedia layanan, tetapi sebagai mitra yang aware terhadap pertumbuhan dan kesuksesan bisnis Anda.</p>
          </div>

          {/* Innovation */}
          <div className="max-w-xs text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-blue-secondary mx-auto">
              <MdOutlineLightbulb size={40} className="text-blue-main" />
            </div>
            <h3 className="text-xl font-semibold text-blue-main mb-2">Innovation</h3>
            <p className="text-primary-grey">Kami selalu berupaya untuk menjadi pelopor dalam inovasi dan kreativitas, mencari strategi baru dan unik untuk membantu klien kami menonjol di pasar digital yang kompetitif dan dinamis.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
