import React from "react";

const AdFour: React.FC = () => {
  return (
    <section className="ad-4 pt-10 bg-addBg relative path-parent after:absolute after:top-0 after:left-0 after:bg-add4Bg after:w-full after:h-full after:z-min lg:my-10">
      <div className="mobile:pb-2  md:pb-10 lg:pt-52 pt-16">
        <div className="ad__img w-3/5 ml-auto ">
          <img src="images/ad4.png" alt="ad" />
        </div>
        <div
          className={`ad-4__text absolute text-center sm:left-16 left-3 top-3.5 sm:top-1/4`}
        >
          <h2 className="ad-4__top-header capitalize lg:mb-10 mb-1 text-sm md:text-2xl lg:text-4xl font-bold text-add4Bg font-playPal">
            Whatever type of your car
          </h2>
          <h2 className="ad-4__second-header lg:mb-10 mb-1 text-black text-sm md:text-2xl font-playPal lg:text-4xl font-bold sm:w-full mx-auto w-3/4">
            You will find everything you need in <br />
            <span className="text-add4Bg lg:mt-4 mt-1 block">B-Touch</span>
          </h2>
          <div className="ad-4__buy-btn lg:mb-3 mb-1">
            <button className="ad-4__btn rounded-full  capitalize hover:bg-primary bg-buttonColor text-white md:text-xl text-xs md:px-7 font-bold md:py-2 px-2 py-1">
              buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdFour;
