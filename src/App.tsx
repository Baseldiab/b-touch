import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import BottomNav from "./Header/Header-Components/Bottom-nav";
import Footer from "./Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen m-0 flex flex-col">
      <main className="flex-1">
        <Header />
        <Outlet />
      </main>
      <BottomNav />
      <Footer />
    </div>
  );
};

export default App;
