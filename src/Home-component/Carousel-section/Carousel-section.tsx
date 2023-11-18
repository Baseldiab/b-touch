import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import SelectVehicle from "./Select-Vehicle";

interface Slide {
  id: number;
  h1: string;
  h2: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    h1: "need a new car utility accessories ?",
    h2: "lowest price",
    image: "images/carousel/carousel-1.jpg",
  },
  {
    id: 2,
    h1: "need a new car parts ?",
    h2: "highest price",
    image: "images/carousel/carousel-2.jpg",
  },
];

const Carousel: React.FC = () => {
  return (
    <section className="carousel-section relative">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".carousel-button-next",
          prevEl: ".carousel-button-prev",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper carousel__swiper"
      >
        {slides.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt={`slider-${item.id}`}
                className="block "
              />
              <div
                className={`carousel__text absolute text-center carousel__slide-${item.id}`}
              >
                <h2
                  className="carousel__top-header capitalize md:mb-3 mb-1 font-roboto text-sm md:text-2xl lg:text-4xl font-bold text-white "
                  data-swiper-parallax="-300"
                >
                  {item.h1}
                </h2>
                <h2
                  className="carousel__second-header md:mb-3 mb-1 text-primary text-sm md:text-2xl font-roboto lg:text-4xl font-bold"
                  data-swiper-parallax="-200"
                >
                  {item.h2}
                </h2>
                <div className="carousel__buy-btn md:mb-3 mb-1">
                  <button className="carousel__btn rounded-full  capitalize hover:bg-primary bg-buttonColor text-white md:text-xl text-xs md:px-7 font-bold md:py-2 px-2 py-1">
                    buy now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <button className="carousel-button-next carousel__slider-btn group !absolute top-2/4 !right-1  sm:!right-4 -translate-y-2/4 rounded-full sm:block hidden z-40">
          <FontAwesomeIcon
            icon={faCaretRight}
            className="carousel__slider-icon text-white group-hover:text-white  md:text-4xl text-2xl"
          />
        </button>
        <button className="carousel-button-prev carousel__slider-btn group !absolute top-2/4 sm:left-4 left-1 -translate-y-2/4 rounded-full sm:block hidden z-40">
          <FontAwesomeIcon
            icon={faCaretLeft}
            className="carousel__slider-icon text-white group-hover:text-white md:text-4xl text-2xl"
          />
        </button>
      </Swiper>

      <SelectVehicle />
    </section>
  );
};
export default Carousel;
