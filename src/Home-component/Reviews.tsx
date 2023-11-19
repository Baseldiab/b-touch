import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "./Ratings";

const Reviews: React.FC = () => {
  function getWindowCardsCount() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      return 6;
    } else if (windowWidth >= 430) {
      return 3;
    } else {
      return 2;
    }
  }
  return (
    <section className="best-offers  lg:bg-black py-4 ">
      <div className="myContainer">
        <h2 className="best-offers-head font-normal font-orelega text-sm sm:text-xl lg:text-3xl lg:text-textColor text-buttonColor drop-shadow-xl uppercase text-center md:my-6 my-4">
          What People Say About Us?
        </h2>

        <div className="best-offers__products grid  app:grid-cols-3 lg:!grid-cols-6 grid-cols-2 gap-2 md:gap-4 justify-center items-center my-3 ">
          {Array(6)
            .fill(null)
            .slice(0, getWindowCardsCount())
            .map((_, index: number) => {
              return (
                <div
                  key={index}
                  className="best-offers__card bg-textFooterColor rounded-xl mx-auto p-0.5 md:p-1 shadow-heart border border-bottomNavBorder lg:border-0"
                >
                  <div className="card-body text-center drop-shadow-2xl ">
                    <h5 className="card-title my-1.5">
                      <svg
                        className="md:w-8 w-2.5  md:h-6 h-1.5"
                        viewBox="0 0 33 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.3132 18.318C15.3496 19.1697 15.1979 20.019 14.8688 20.8054C14.5397 21.5919 14.0414 22.2961 13.4092 22.868L13.4042 22.872C12.0952 24.0326 10.3905 24.6462 8.64216 24.586H8.65316C7.59637 24.6432 6.53997 24.4669 5.55899 24.0697C4.57802 23.6726 3.69653 23.0643 2.97716 22.288L2.97316 22.284C1.53095 20.5726 0.795341 18.3758 0.916156 16.141L0.915156 16.162C0.848133 13.8412 1.27949 11.533 2.18016 9.39301L2.14016 9.50001C2.85927 7.82217 3.85701 6.27805 5.09116 4.93301L5.08016 4.94501C6.09974 3.83891 7.28117 2.89383 8.58416 2.14201L8.65616 2.10401C9.64164 1.53549 10.6701 1.04499 11.7322 0.637008L11.8882 0.584008L15.0222 5.87401C13.7198 6.39946 12.5767 7.25483 11.7052 8.35601L11.6922 8.37301C10.8244 9.40672 10.2801 10.673 10.1272 12.014L10.1242 12.046C10.8061 12.0631 11.4768 12.2241 12.0922 12.5184C12.7076 12.8128 13.2538 13.2338 13.6952 13.754L13.7012 13.761C14.8233 15.0104 15.4037 16.654 15.3152 18.331L15.3162 18.316L15.3132 18.318ZM32.2612 18.318C32.2972 19.1699 32.1452 20.0193 31.816 20.8059C31.4868 21.5924 30.9883 22.2968 30.3562 22.869L30.3512 22.873C29.0425 24.0341 27.3376 24.6477 25.5892 24.587H25.6002C24.5433 24.6444 23.4869 24.4683 22.5058 24.0711C21.5248 23.6739 20.6434 23.0655 19.9242 22.289L19.9202 22.284C18.4773 20.5725 17.7417 18.3752 17.8632 16.14L17.8622 16.161C17.7951 13.8402 18.2265 11.532 19.1272 9.39201L19.0872 9.49901C19.8059 7.82146 20.803 6.27739 22.0362 4.93201L22.0252 4.94401C23.0451 3.83789 24.2269 2.89281 25.5302 2.14101L25.6022 2.10301C26.5874 1.53409 27.6159 1.04358 28.6782 0.636008L28.8342 0.583008L31.9672 5.87301C30.6646 6.3991 29.5215 7.25517 28.6502 8.35701L28.6372 8.37401C27.7694 9.40772 27.2251 10.674 27.0722 12.015L27.0692 12.047C27.7508 12.064 28.4212 12.2249 29.0363 12.5193C29.6514 12.8137 30.1973 13.2348 30.6382 13.755L30.6442 13.762C31.7675 15.0105 32.3491 16.6539 32.2612 18.331L32.2622 18.316L32.2612 18.318Z"
                          fill="#087DA7"
                        />
                      </svg>
                    </h5>

                    <p className="card-text capitalize text-textDarkColor md:font-extrabold font-normal md:text-base text-ssm my-1.5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>

                  <hr className="bg-textResetBtn lg:h-1 h-1 rounded-full drop-shadow-lg lg:my-4 my-2 mx-0.5" />

                  <div className="card-footer flex gap-2  my-1.5 items-center">
                    <div className="card-user bg-userBg md:w-12 w-6 md:h-12 h-6 rounded-full flex justify-center items-center">
                      <FontAwesomeIcon
                        className="md:text-3xl text-base text-white"
                        icon={faUser}
                      />
                    </div>
                    <div className="card-name">
                      <h6 className="text-buttonColor text-start md:text-base text-xs">
                        Basel
                      </h6>
                      <Rating rating={4.5} />
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
export default Reviews;
