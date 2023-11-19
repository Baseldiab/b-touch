import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { agency, carBotNav, years } from "../../Lists";

const SelectVehicle: React.FC = () => {
  const initialOption = "";

  const [selectedVehicle, setSelectedVehicle] = useState<string>(initialOption);
  const [selectedModel, setSelectedModel] = useState<string | undefined>(
    initialOption
  );
  const [selectedYear, setSelectedYear] = useState<string | undefined>(
    initialOption
  );
  const [selectedAgency, setSelectedAgency] = useState<string | undefined>(
    initialOption
  );
  const [selectedAllProduct, setSelectedAllProduct] = useState<
    string | undefined
  >(initialOption);

  const handleVehicleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedVehicle(event.target.value);
  };
  const handleModelChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedModel(event.target.value);
  };
  const handleYearChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedYear(event.target.value);
  };
  const handleAgencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedAgency(event.target.value);
  };
  const handleAllProductsChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedAllProduct(event.target.value);
  };

  const handleResetClick = () => {
    setSelectedVehicle("");
    setSelectedModel("");
    setSelectedYear("");
    setSelectedAgency("");
    setSelectedAllProduct("");
  };

  return (
    <div className="carousel__select lg:block hidden bg-carouselBgColor absolute bottom-0 left-0 right-0 z-20 py-2">
      <h1 className="carousel__select-head font-normal font-orelega text-2xl text-white text-center mb-4">
        select your vehicle
      </h1>

      <div className="carousel__select-content myContainer flex justify-between 2xl:gap-6 gap-4 mb-4">
        <div className="carousel__select-form flex justify-between basis-11/12">
          <div className="inline-block min-w-[200px]   max-w-[250px] relative focus-visible:outline-none">
            <select
              className="h-10 w-full rounded-md bg-bottomNavBg text-textDarkColor focus:outline-none focus:border-0 font-orelega xl:text-sm block appearance-none py-2 px-2 pr-4 capitalize"
              value={selectedVehicle}
              onChange={handleVehicleChange}
            >
              <option
                className="text-textDarkColor font-orelega text-sm "
                value=""
              >
                Select Your Vehicle ...
              </option>
              {carBotNav.map((item) => {
                return (
                  <option
                    key={`vehicle${item.id}`}
                    className="uppercase text-textDarkColor font-orelega py-5 my-5 text-sm"
                    value={item.model}
                  >
                    {item.model}
                  </option>
                );
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 shadow-customLeft ">
              <FontAwesomeIcon
                className="text-xl text-textDarkColor"
                icon={faCaretDown}
              />
            </div>
          </div>

          <div className="inline-block min-w-[200px]  max-w-[250px] relative focus-visible:outline-none">
            <select
              className="h-10  w-full rounded-md bg-bottomNavBg text-textDarkColor focus:outline-none focus:border-0 font-orelega text-sm block appearance-none py-2 px-2 pr-4 capitalize"
              value={selectedModel}
              onChange={handleModelChange}
            >
              <option
                className="text-textDarkColor font-orelega text-sm"
                value=""
              >
                Model
              </option>

              <option
                className="uppercase text-textDarkColor font-orelega py-5 my-5 text-sm"
                value="react"
              >
                Models
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 shadow-customLeft ">
              <FontAwesomeIcon
                className="text-xl text-textDarkColor"
                icon={faCaretDown}
              />
            </div>
          </div>

          <div className="inline-block min-w-[180px]  max-w-[200px] relative focus-visible:outline-none">
            <select
              className="h-10  w-full rounded-md bg-bottomNavBg text-textDarkColor focus:outline-none focus:border-0 font-orelega text-sm block appearance-none py-2 px-2 pr-4 capitalize"
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option
                className="text-textDarkColor font-orelega text-sm"
                value=""
              >
                Year
              </option>

              {years.map((item) => {
                return (
                  <option
                    key={item.id}
                    className="uppercase text-textDarkColor font-orelega text-sm"
                    value={`"${item.year}"`}
                  >
                    {item.year}
                  </option>
                );
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 shadow-customLeft ">
              <FontAwesomeIcon
                className="text-xl text-textDarkColor"
                icon={faCaretDown}
              />
            </div>
          </div>

          <div className="inline-block min-w-[180px]  max-w-[200px] relative focus-visible:outline-none">
            <select
              className="h-10  w-full rounded-md bg-bottomNavBg text-textDarkColor focus:outline-none focus:border-0 font-orelega text-sm block appearance-none py-2 px-2 pr-4 capitalize"
              value={selectedAgency}
              onChange={handleAgencyChange}
            >
              <option
                className="text-textDarkColor font-orelega text-sm"
                value=""
              >
                Agency
              </option>

              {agency.map((item) => {
                return (
                  <option
                    key={item.agency}
                    className="capitalize text-textDarkColor font-orelega text-sm"
                    value={item.agency}
                  >
                    {item.agency}
                  </option>
                );
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 shadow-customLeft ">
              <FontAwesomeIcon
                className="text-xl text-textDarkColor"
                icon={faCaretDown}
              />
            </div>
          </div>

          <div className="inline-block min-w-[200px]   max-w-[250px] relative focus-visible:outline-none">
            <select
              className="h-10  w-full rounded-md bg-bottomNavBg text-textDarkColor focus:outline-none focus:border-0 font-orelega text-sm block appearance-none py-2 px-2 pr-4 capitalize"
              value={selectedAllProduct}
              onChange={handleAllProductsChange}
            >
              <option
                className="text-textDarkColor font-orelega text-sm"
                value=""
              >
                All Products
              </option>

              <option
                className="text-textDarkColor font-orelega text-sm"
                value="react"
              >
                Product 2
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 shadow-customLeft ">
              <FontAwesomeIcon
                className="text-xl text-textDarkColor"
                icon={faCaretDown}
              />
            </div>
          </div>
        </div>

        <div className="carousel__select-btn flex justify-between basis-1/12">
          <button
            className="carousel__btn rounded-lg  capitalize hover:bg-gray-200 bg-white text-textResetBtn md:text-base text-xs md:px-5 font-sm md:py-2 px-2 py-1 font-orelega  lg:mr-2 xl:mr-2
             "
            onClick={handleResetClick}
          >
            reset
          </button>

          <button
            className="carousel__btn rounded-lg  capitalize hover:bg-primary bg-buttonColor text-white md:text-base text-xs md:px-5 font-sm md:py-2 px-2 py-1 font-orelega
             "
          >
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectVehicle;
