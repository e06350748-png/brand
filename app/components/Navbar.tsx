import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router";

export const Navbar = () => {
  const { getTotalItems } = useCart();
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - على الشمال */}
          <Link to="/" className="flex items-center">
            <h1 
              className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
              style={{ color: '#ff69b4' }}
            >
              💖 Pink Brand
            </h1>
          </Link>

          {/* Navigation Links - على اليمين */}
          <ul className="flex gap-6 items-center">
            <li>
              <Link 
                to="/"
                className="text-gray-700 font-medium hover:text-[#ff69b4] transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff69b4] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/products"
                className="text-gray-700 font-medium hover:text-[#ff69b4] transition-colors relative group"
              >
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff69b4] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                className="text-gray-700 font-medium hover:text-[#ff69b4] transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff69b4] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contact"
                className="text-gray-700 font-medium hover:text-[#ff69b4] transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff69b4] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            {/* Divider */}
            <li className="h-6 w-px bg-gray-300 mx-2"></li>

            {/* User/Login */}
            {user ? (
              <li>
                <Link 
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-[#fff0f5] transition-colors"
                >
                  <span className="text-lg">👤</span>
                  <span>Profile</span>
                </Link>
              </li>
            ) : (
              <li>
                <Link 
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#ff69b4] text-[#ff69b4] font-semibold hover:bg-[#ff69b4] hover:text-white transition-all"
                >
                  <span className="text-lg">🔐</span>
                  <span>Login</span>
                </Link>
              </li>
            )}

            {/* Cart Button */}
            <li>
              <Link to="/cart">
                <button className="relative px-5 py-2.5 rounded-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105 shadow-md"
                  style={{ backgroundColor: '#ff69b4' }}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">🛒</span>
                    <span>Cart</span>
                  </span>
                  {getTotalItems() > 0 && (
                    <span 
                      className="absolute -top-2 -right-2 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse"
                      style={{ backgroundColor: '#ff4fa1', color: 'white' }}
                    >
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};