import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-black">
        Follow us on <span className="text-blue-main">Instagram</span>
      </h2>
      <p className=" text-center max-w-[75vw]">
        Ikuti kami di Instagram untuk mendapatkan update terbaru, inspirasi, dan konten eksklusif langsung di feed Anda. Jangan lewatkan kesempatan untuk terhubung dengan kami dan menjadi bagian dari komunitas kami!
      </p>

      <div className="w-full mt-8">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{ delay: 2000 }}
          loop={false}
        >
          <SwiperSlide className="max-w-xs">
            <img src="./assets/Image Placeholder-1.png" alt="Slide 1" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src="./assets/Image Placeholder-2.png" alt="Slide 2" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src="./assets/Image Placeholder-3.png" alt="Slide 3" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-xs">
            <img src="./assets/Image Placeholder-4.png" alt="Slide 4" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </div>

      <a href="https://www.instagram.com/icdigital.id/" target="_blank" rel="noreferrer">
        <button className="btn btn-lg mt-8 bg-blue-main text-white py-2 px-8 border-none rounded-full">Follow us</button>
      </a>
    </div>
  );
};

export default Portfolio;
