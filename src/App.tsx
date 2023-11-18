import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import BottomNav from "./Header/Header-Components/Bottom-nav";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNav />
    </>
  );
};

export default App;
