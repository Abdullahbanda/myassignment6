import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#0F172A] text-gray-400 py-20 px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
      
      {/* Brand Column */}
      <div className="lg:col-span-2">
        <h3 className="font-black text-3xl mb-6 text-white tracking-tight">
          Digi<span className="text-[#8B2CF5]">Tools</span>
        </h3>
        <p className="max-w-sm leading-relaxed mb-8">
          The world's most powerful suite of premium digital tools for creators, 
          professionals, and modern businesses.
        </p>
        <div className="flex gap-5 text-xl">
          <a href="#" className="hover:text-white transition-colors"><FaFacebookF /></a>
          <a href="#" className="hover:text-white transition-colors"><FaTwitter /></a>
          <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
          <a href="#" className="hover:text-white transition-colors"><FaYoutube /></a>
        </div>
      </div>

      {/* Links Columns */}
      <div>
        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Product</h4>
        <ul className="space-y-4 text-sm font-medium">
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Pricing</li>
          <li className="hover:text-white cursor-pointer">Templates</li>
          <li className="hover:text-white cursor-pointer">Integrations</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Company</h4>
        <ul className="space-y-4 text-sm font-medium">
          <li className="hover:text-white cursor-pointer">About Us</li>
          <li className="hover:text-white cursor-pointer">Our Blog</li>
          <li className="hover:text-white cursor-pointer">Careers</li>
          <li className="hover:text-white cursor-pointer">Press Kit</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Support</h4>
        <ul className="space-y-4 text-sm font-medium">
          <li className="hover:text-white cursor-pointer">Help Center</li>
          <li className="hover:text-white cursor-pointer">Documentation</li>
          <li className="hover:text-white cursor-pointer">Community</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>

    </div>

    <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold uppercase tracking-widest text-gray-600">
      <p>&copy; 2026 Digitools Inc. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;