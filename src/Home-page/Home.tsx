import AdVideo from "../Home-component/AD2-section";
import AdFour from "../Home-component/AdFour-section";
import AdOne from "../Home-component/AdOne";
import BestOffers from "../Home-component/BestOffers";
import Brands from "../Home-component/Brands";
import Carousel from "../Home-component/Carousel-section/Carousel-section";
import Categories from "../Home-component/Categories";
import Arrival from "../Home-component/New-Arrivals";
import Reviews from "../Home-component/Reviews";

const Home = () => {
  const windowWidth = window.innerWidth;

  return (
    <main className="lg:mb-0 mb-14">
      <Carousel />
      <Arrival />
      <AdOne />
      <Categories />
      <AdVideo />
      {windowWidth >= 1024 ? (
        <>
          <BestOffers />
          <AdFour />
          <Reviews />
        </>
      ) : (
        <>
          <AdFour />
          <BestOffers />
          <Reviews />
        </>
      )}
      <Brands />
    </main>
  );
};
export default Home;
