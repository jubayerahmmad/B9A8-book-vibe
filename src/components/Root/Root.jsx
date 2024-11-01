import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="container mx-auto flex-grow">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
