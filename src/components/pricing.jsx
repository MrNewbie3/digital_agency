import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"; // Import React Icons
import PricingCard from "./templates/pricing";

const Pricing = () => {
  return (
    <div className="py-12">
      <h2 className="text-md font-bold text-center  uppercase text-black">Pricing</h2>
      <h2 className="text-3xl font-bold text-center capitalize text-blue-main">Affordable pricing plans (Instagram)</h2>
      <p className="text-center text-primary-grey mt-4">
        Kami menawarkan paket harga terjangkau yang dirancang untuk berbagai kebutuhan bisnis, tanpa mengorbankan kualitas. Anda dapat memilih paket yang paling sesuai dengan anggaran dan tujuan Anda dengan harga kompetitif.
      </p>

      <div className="mt-10 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-6">
        <PricingCard
          title="Basic"
          price={299}
          discount={20}
          items={["12 Feeds Instagram", "2 Video Reels", "Original Design", "Copywriting"]}
          active={true} // This card will have a blue border and blue checklist
        />
        <PricingCard
          title="Growth"
          price={520}
          discount={20}
          items={["20 Feeds Instagram", "4 Video Reels", "8 Instagram Stories", "Original Design", "Copywriting + Admin Posting"]}
          active={false} // This card will have a grey border and grey checklist
        />
        <PricingCard
          title="Professional"
          price={970}
          items={["42 Feeds Instagram", "8 Video Reels", "16 Instagram Stories", "Original Design", "Copywriting + Admin Posting"]}
          active={false} // Another inactive card
        />
      </div>

      {/* Social Media Icons */}
      <div className="my-12 mt-32 text-center">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-main">Platform Social Media yang Kami Kerjakan</h2>
          <p className="lg:text-lg mt-2 lg:max-w-2xl text-center text-primary-grey">Berikut adalah layanan social media management yang kami tawarkan:</p>
        </div>
        <div className="flex justify-center space-x-12 mt-8">
          <FaFacebookF className="text-3xl text-blue-main hover:text-blue-main cursor-pointer" />
          <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700 cursor-pointer" />
          <FaTiktok className="text-3xl text-black hover:text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
