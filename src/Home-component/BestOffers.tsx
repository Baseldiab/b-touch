import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { bestOffers } from "../Lists";

const BestOffers: React.FC = () => {
  function getWindowCardsCount() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      return bestOffers.length;
    } else if (windowWidth >= 430) {
      return 3;
    } else {
      return 2;
    }
  }
  return (
    <section className="best-offers bg-black py-4">
      <div className="myContainer">
        <div className="best-offers__header my-3 grid  grid-cols-1 items-center">
          <h2 className="best-offers-head font-normal font-orelega text-sm sm:text-xl lg:text-2xl text-textColor text-center uppercase  ">
            best offers
          </h2>
          <div className="best-offers__btn  flex justify-end">
            <button className="best-offers__btn md:rounded-xl rounded-md  hover:bg-gray-200  bg-white text-primary md:text-base text-xs md:px-4 font-normal md:font-extrabold md:py-2 px-3 py-1 font-roboto shadow-Btn md:shadow-none ">
              View more
            </button>
          </div>
        </div>

        <div className="best-offers__products grid  app:grid-cols-3 lg:!grid-cols-6 grid-cols-2 gap-2 md:gap-4 justify-center items-center">
          {bestOffers.slice(0, getWindowCardsCount()).map((item) => {
            return (
              <div
                key={item.id}
                className="best-offers__card bg-white rounded-xl mx-auto p-0.5 md:p-1"
              >
                <img
                  src={item.img}
                  className="card-img mx-auto block w-full m-0"
                  alt={`product ${item.id}`}
                />
                <div className="card-body text-center">
                  <h5 className="card-title uppercase text-primary font-roboto md:font-bold font-normal md:text-base text-xs  my-1.5">
                    {window.innerWidth >= 1178
                      ? "interior accessories"
                      : "accessories"}
                  </h5>

                  <p className="card-text capitalize text-textDarkColor md:font-bold font-normal md:text-sm text-xs my-1">
                    Steering Wheel Cover
                  </p>
                  <p className="card-price capitalize text-textDarkColor font-bold md:text-sm text-ssm my-1.5">
                    <del>EGP 139</del>
                    <span className="text-danger"> -30% EGP 97</span>
                  </p>
                  <div className="card-footer flex justify-around my-1.5">
                    <button
                      className="carousel__btn rounded-lg capitalize hover:bg-primary bg-buttonColor text-white md:text-sm text-ssm md:px-4 
                font-sm md:py-2 app:px-2 px-1 py-1 font-roboto flex items-center"
                    >
                      <FontAwesomeIcon
                        className="md:text-base text-ssm mr-1"
                        icon={faCartShopping}
                      />
                      Add To Cart
                    </button>

                    <button
                      className="carousel__btn rounded-lg hover:bg-gray-200 bg-textColor  md:text-base text-xs border border-heartBtn
                font-sm  py-1 px-2 shadow-heart drop-shadow-md "
                    >
                      <FontAwesomeIcon
                        className="md:text-lg text-ssm text-primary"
                        icon={faHeart}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BestOffers;
