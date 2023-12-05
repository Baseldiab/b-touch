import React from "react";
import { categories } from "../Lists";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Categories: React.FC = () => {
  const cardCategory = (item: {
    id: number;
    img: string;
    category: string;
  }): React.ReactNode => {
    return (
      <>
        <div className="categories__card rounded-xl mx-auto">
          <img
            src={item.img}
            className="card-img mx-auto block w-full m-0"
            alt={item.category}
          />
          <div className="card-body text-center">
            <h5 className="card-title capitalize text-textColor font-roboto md:font-bold font-normal md:text-base text-xs  my-1.5">
              {item.category}
            </h5>
          </div>
        </div>
      </>
    );
  };

  return (
    <section className="categories bg-black lg:py-4 py-2">
      <div className="myContainer">
        <div className="categories__header lg:my-3 my-1 grid  lg:grid-cols-3 grid-cols-1 items-center">
          <h2 className="categories-head font-normal font-orelega text-sm sm:text-xl lg:text-2xl text-textColor text-center uppercase lg:col-start-2 ">
            POPULAR CATEGORIES
          </h2>
          <div className="categories__btn lg:col-start-3  flex justify-end">
            <button className="categories__btn md:rounded-xl rounded-md  hover:bg-primary  bg-buttonColor text-white md:text-base text-xs md:px-4 font-normal md:font-extrabold md:py-2 px-3 py-1 font-roboto shadow-Btn md:shadow-none ">
              View more
            </button>
          </div>
        </div>
        <div className="categories__products-lg app:grid-cols-3 lg:!grid-cols-6 grid-cols-2 gap-2 md:gap-4 justify-center items-center lg:grid hidden">
          {categories.map((item) => (
            <div key={item.id}>{cardCategory(item)}</div>
          ))}
        </div>
      </div>

      <div className="categories__mobile-screen pl-2 px-0 block lg:hidden">
        <Swiper
          slidesPerView={3.3}
          navigation={false}
          spaceBetween={5}
          className=" categories__swiper mySwiper"
        >
          {categories.map((item) => {
            return (
              <SwiperSlide key={item.id} className="!max-w-fit h-auto">
                <div key={10 * item.id}>{cardCategory(item)}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default Categories;
