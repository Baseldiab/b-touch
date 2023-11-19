import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import BottomNav from "./Header/Header-Components/Bottom-nav";
import Footer from "./Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNav />
      <Footer />
    </>
  );
};

export default App;
