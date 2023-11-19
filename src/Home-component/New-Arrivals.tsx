import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@material-tailwind/react";

const Arrival: React.FC = () => {
  interface Slides {
    id: number;
    image: string;
  }

  const slides: Slides[] = [
    {
      id: 1,
      image: "images/newArrivals/one.png",
    },
    {
      id: 2,
      image: "images/newArrivals/two.png",
    },
    {
      id: 3,
      image: "images/newArrivals/three.png",
    },
    {
      id: 4,
      image: "images/newArrivals/Four.png",
    },
    {
      id: 5,
      image: "images/newArrivals/Five.png",
    },
  ];

  return (
    <section className="new-arrivals py-4">
      <div className="myContainer">
        <div className="new-arrivals__header my-6 grid lg:grid-cols-3 grid-cols-1 items-center">
          <h2 className="new-arrivals__head font-normal font-orelega text-sm sm:text-xl md:text-3xl text-buttonColor text-center uppercase lg:col-start-2 drop-shadow-xl">
            new arrivals
          </h2>
          <div className="new-arrivals__btn lg:col-start-3 flex justify-end">
            <button className="new-arrivals__btn md:rounded-xl rounded-md  hover:bg-gray-900 md:bg-black bg-mainBgColor text-textColor md:text-xl text-xs md:px-7 font-normal md:font-extrabold md:py-2 px-3 py-1 font-roboto shadow-Btn md:shadow-none ">
              View more
            </button>
          </div>
        </div>
      </div>
      <div className="new-arrivals__container   relative">
        <div className="new-arrivals__md-screen myContainer hidden lg:block">
          <Swiper
            className="new-arrivals__swiper mySwiper w-full"
            effect={"coverflow"}
            initialSlide={2}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={5}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 400,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            modules={[Navigation, EffectCoverflow]}
          >
            {slides.map((item) => {
              return (
                <SwiperSlide key={item.id} className="!w-60">
                  <img
                    className="block w-full"
                    src={item.image}
                    alt={`img-${item.id}`}
                  />
                </SwiperSlide>
              );
            })}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-40 ">
              <IconButton className="button-prev rounded-full w-12 h-12">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-2xl text-white"
                />
              </IconButton>
            </div>
            <div className=" absolute top-1/2 right-0 transform -translate-y-1/2 z-40">
              <IconButton className="button-next rounded-full w-12 h-12">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-2xl text-white"
                />
              </IconButton>
            </div>
          </Swiper>
        </div>

        <div className="new-arrivals__mobile-screen !px-0 block lg:hidden">
          <Swiper
            initialSlide={2}
            slidesPerView={"auto"}
            loop={true}
            navigation={false}
            spaceBetween={15}
            centeredSlides={true}
            className="new-arrivals__swiper mySwiper"
          >
            {slides.map((item) => {
              return (
                <SwiperSlide key={item.id} className="!max-w-fit h-auto">
                  <img
                    className="block  app:!h-60 app:!w-72 h-36 w-40"
                    src={item.image}
                    alt={`img-${item.id}`}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Arrival;
