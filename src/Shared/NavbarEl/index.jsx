import { Link } from "react-router-dom";
import DrawerEl from "../Drawer";

export const NavbarEl = () => {
    return (
        <nav className="flex justify-evenly items-center bg-gradient-to-b from-indigo-700 to-indigo-400 px-4 py-4">
            <a 
             href="/"
             className="font-cursive font-semibold text-3xl text-white"> 
                Madhav<sub className="font-medium text-lg">Creations</sub>
            </a>

            <div className="w-5 h-1"></div>

            <ul 
            className="md:flex hidden justify-between items-center text-white text-base font-semibold capitalize w-1/2">
                <li className="hover:text-teal-500 transition-colors">
                    <Link to="/">Home</Link>
                    {/* <div className="w-12 h-px bg-blue-500 "></div> */}
                </li>
                <li className="hover:text-teal-500 transition-colors">
                    <Link to="/About-Us">About us</Link>
                </li>
                <li className="hover:text-teal-500 transition-colors">
                    <Link to="/Products">Products</Link>
                </li>
                <li className="hover:text-teal-500 transition-colors">
                    <Link to="/Gallery">gallery</Link>
                </li>
                <li className="hover:text-teal-500 transition-colors">
                    <Link to="/Contact-Us">contact us</Link>
                </li>
            </ul>
            <DrawerEl/>
        </nav>
    );
}
