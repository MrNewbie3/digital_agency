import React from "react";
import Nav from "../components/navbar";
import { FiVolume2 } from "react-icons/fi";
import Templates from "../components/templates/header";
import Benefits from "../components/socialMediaMarketing";
import Maps from "../components/maps";
import Footer from "../components/footer";
import FaQ from "../components/faq";
import Pricing from "../components/pricing";
export default function Socmed() {
  return (
    <>
      <Nav />
      <div className="px-24 bg-white lg:mt-0">
        <Templates
          title={"Apa itu Social Media Management?"}
          text={
            "Social media marketing @icdigital.id adalah layanan yang dirancang untuk mengoptimalkan kehadiran online bisnis Anda melalui strategi yang kreatif dan berbasis data. Kami memanfaatkan berbagai platform media sosial untuk menjangkau dan melibatkan audiens target Anda secara efektif."
          }
          image={"./assets/socmed.png"}
        >
          <FiVolume2 className="text-blue-main text-2xl" />
        </Templates>
        <Benefits />
        <Pricing />
        <FaQ />
        <Maps />
      </div>
      <Footer />
    </>
  );
}
