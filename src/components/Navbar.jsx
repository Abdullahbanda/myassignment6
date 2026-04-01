import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => (
  <nav className="flex justify-between items-center px-10 py-5 bg-white border-b border-gray-100 shadow-sm">
    {/* 1. Logo (Left) */}
    <h1 className="text-2xl font-extrabold text-[#7C3AED] cursor-pointer">
      DigiTools
    </h1>

    {/* 2. Navigation Links (Center) */}
    <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
      <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Products</li>
      <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Features</li>
      <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Pricing</li>
      <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Testimonials</li>
      <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">FAQ</li>
    </ul>

    {/* 3. Actions (Right) */}
    <div className="flex items-center gap-6">
      {/* Cart with Count */}
      <div className="relative cursor-pointer text-gray-600 hover:text-[#7C3AED]">
        <FaShoppingCart size={18} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#7C3AED] text-white text-[10px] rounded-full px-1">
            {cartCount}
          </span>
        )}
      </div>

      {/* Login Label */}
      <span className="text-sm font-semibold text-gray-800 cursor-pointer hover:text-[#7C3AED]">
        Login
      </span>

      {/* Purple Pill Button */}
      <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md">
        Get Started
      </button>
    </div>
  </nav>
);

export default Navbar;