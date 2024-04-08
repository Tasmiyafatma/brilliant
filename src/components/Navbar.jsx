import logo from "../assets/brilliant-logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        {/* Left side Logo and options to navigate between pages */}
        <div className="mr-4">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <ul className="flex">
          <li className="mr-4">
            <a href="#" className="text-green-800 hover:text-gray-900">
              HOME
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-green-800 hover:text-gray-900">
              COURSES
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-black-800 hover:text-gray-900">
              TODAY
            </a>
          </li>
        </ul>
      </div>
      {/* Right side search bar button and menu */}
      <div className="flex items-center">
        <div className="mr-4 border border-gray-300 rounded px-2 py-1 bg-gray-200 focus:outline-none focus:border-blue-500">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent outline-none"
          />
        </div>
        <button className="border border-green-800 text-green-800 px-4 py-2 rounded outline-1 hover:bg-green-800 hover:text-white">
          Button
        </button>
        <div className="ml-4 flex items-center">
          <span className="mr-2">0</span>
          <FontAwesomeIcon icon={faBoltLightning} />
        </div>
        <div className="ml-4">
          <button className="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none">
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
