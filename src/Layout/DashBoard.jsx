import { Link, NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, } from "react-icons/fa";
import useCart from "../Hooks/useCart";


const DashBoard = () => {
    const [cart]=useCart();
    return (
        <div>
            <div className="drawer drawer-mobile lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to='/'><FaHome></FaHome>User Home</NavLink></li>
                        <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                        <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment history</NavLink></li>
                        <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart                 <span className="badge badge-secondary">+{cart?.length || 0}</span>
</NavLink></li>
                        <div className="divider"></div>
                        <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                        <li><Link to='/menu'>Our Menu</Link></li>
                        <li><Link to='/order'>Our Order</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;