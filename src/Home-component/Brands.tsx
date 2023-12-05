import { brands } from "../Lists";

const Brands: React.FC = () => {
  return (
    <section className="brands py-4 hidden lg:block">
      <div className="myContainer">
        <div className="brands__header my-6 grid  grid-cols-1 items-center">
          <h2 className="brands__head font-normal font-orelega text-sm sm:text-xl lg:text-2xl text-buttonColor text-center uppercase drop-shadow-xl">
            brands we trust
          </h2>
          <div className="brands__btn  flex justify-end">
            <button className="brands__btn md:rounded-xl rounded-md  hover:bg-gray-900 md:bg-black bg-mainBgColor text-textColor md:text-base text-xs md:px-4 font-normal md:font-extrabold md:py-2 px-3 py-1 font-roboto shadow-Btn md:shadow-none ">
              View more
            </button>
          </div>
        </div>

        <div className="brands__content grid grid-cols-8 gap-5 my-10">
          {brands.map((item) => {
            return (
              <figure
                key={item.id}
                className="brands__item rounded-full border-2 border-textDarkColor p-4 mx-auto flex justify-center items-center max-w-[120px] max-h-[120px]"
              >
                <img src={item.img} alt="brand img" className="block m-0" />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
