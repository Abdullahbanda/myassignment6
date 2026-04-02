import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => (
  // Updated padding: px-4 on mobile, px-10 on desktop
  <nav className="flex justify-between items-center px-4 md:px-10 py-5 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
    
    {/* 1. Logo (Left) */}
    <h1 className="text-xl md:text-2xl font-extrabold text-[#7C3AED] cursor-pointer shrink-0">
      DigiTools
    </h1>

    {/* 2. Navigation Links (Center) */}
    {/* Keep hidden on mobile, show on md (tablets) and up */}
    <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
      <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Products</li>
      <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Features</li>
      <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Pricing</li>
      <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Testimonials</li>
      <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">FAQ</li>
    </ul>

    {/* 3. Actions (Right) */}
    <div className="flex items-center gap-3 md:gap-6">
      {/* Cart with Count - Always visible */}
      <div className="relative cursor-pointer text-gray-600 hover:text-[#7C3AED] p-2">
        <FaShoppingCart size={20} />
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 bg-[#7C3AED] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
            {cartCount}
          </span>
        )}
      </div>

      {/* Login Label - Hidden on small mobile, visible from sm up */}
      <span className="hidden sm:inline text-sm font-semibold text-gray-800 cursor-pointer hover:text-[#7C3AED]">
        Login
      </span>

      {/* Purple Pill Button - Smaller padding on mobile */}
      <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all shadow-md whitespace-nowrap">
        Get Started
      </button>
    </div>
  </nav>
);

export default Navbar;