import AdVideo from "../Home-component/AD2-section";
import AdFour from "../Home-component/AdFour-section";
import BestOffers from "../Home-component/BestOffers";
import Carousel from "../Home-component/Carousel-section/Carousel-section";
import Arrival from "../Home-component/New-Arrivals";
import Reviews from "../Home-component/Reviews";

const Home = () => {
  const windowWidth = window.innerWidth;

  return (
    <main className="lg:mb-0 mb-14">
      <Carousel />
      <Arrival />
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
    </main>
  );
};
export default Home;
