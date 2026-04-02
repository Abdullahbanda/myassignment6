import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 px-6 md:px-12 lg:px-20 py-12 md:py-24 bg-white overflow-hidden">
      
      {/* Left text section */}
      <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
        {/* Badge - Responsive padding */}
        <span className="inline-block text-xs md:text-sm font-bold text-white bg-[#7C3AED] rounded-full px-4 py-1.5 mb-6 shadow-sm">
          New: AI-Powered Tools Available
        </span>

        {/* Title - Responsive font size is CRITICAL here */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
          Supercharge Your <span className="text-[#7C3AED]">Digital Workflow</span>
        </h1>

        {/* Paragraph - max-width for readability on tablet */}
        <p className="text-gray-500 text-base md:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. 
          Start creating faster today.
        </p>
        
        {/* Buttons - Center on mobile, left on desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="w-full sm:w-auto text-white font-bold py-4 px-10 rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#8E73FF] hover:scale-105 transition-all shadow-lg shadow-indigo-100">
            Explore Products
          </button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-3 text-white font-bold py-4 px-10 rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#8E73FF] hover:scale-105 transition-all shadow-lg shadow-indigo-100">
            <div className="bg-white/20 p-2 rounded-full"><FaPlay size={10} /></div> 
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right image section */}
      <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full">
        <div className="relative">
          {/* Subtle background glow effect for premium feel */}
          <div className="absolute -inset-4 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
          <img
            src="/banner.png" 
            alt="Digital workflow"
            className="relative rounded-[2rem] shadow-2xl w-full max-w-[320px] md:max-w-md lg:max-w-xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;