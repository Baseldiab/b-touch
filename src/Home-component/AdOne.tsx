import React from "react";

const AdOne: React.FC = () => {
  return (
    <section className="ad-one bg-black text-white text-center lg:py-6 py-3">
      <div className="ad__header flex justify-center lg:gap-6 md:gap-4 gap-2">
        <img
          className="w-5 h-5 md:w-12 md:h-12 lg:w-16 lg:h-16 "
          src="images/Mercedes Logo.png"
          alt="Mercedes Logo"
        />
        <div className="ad__text">
          <h2 className="font-orelega lg:text-2xl md:text-lg text-xs font-normal">
            Because Cat - like reflexes aren’t fast enough <br />
            The PRE - SAFE brake.
          </h2>
        </div>
      </div>
      <img className="block mt-3" src="images/ad1.png" alt="Mercedes" />
    </section>
  );
};
export default AdOne;
