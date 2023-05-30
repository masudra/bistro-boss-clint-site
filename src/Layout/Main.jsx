import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navebar/Navbar";

const Main = () => {
    const location = useLocation()
    const noNavFooter = location.pathname.includes('login')
    return (
        <div>
            {noNavFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;