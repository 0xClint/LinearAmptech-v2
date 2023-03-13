import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { homeProduct } from "../data/HomeData";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      speed={800}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        // dynamicBullets: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-[100%]"
    >
      {homeProduct.map(({ img, title, tag, content, link }) => {
        return (
          <SwiperSlide>
            <div className="slide lg:flex gap-16 justify-center w-[100%] h-[100%] py-20">
              <div className="h-[400px] max-w-[450px] flex justify-center items-center">
                <img src={img} className=""></img>
              </div>
              <div className="right max-w-[650px] flex flex-col gap-4">
                <p className="tag text-[#0346B5] text-[1.1rem] font-medium">
                  {tag}
                </p>
                <h2 className="lg:text-[2.5rem] text-2xl font-bold">{title}</h2>
                <p className=" text-[1.1rem] leading-loose h-[200px]">
                  {content}
                </p>
                <div>
                  {" "}
                  <a
                    className="text-blue-900 underline font-medium cursor-pointer"
                    href={link}
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
