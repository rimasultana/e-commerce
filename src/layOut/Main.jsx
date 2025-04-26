import { Outlet } from "react-router";
import Navbar from "../share/Navbar";
import Footer from "../share/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
