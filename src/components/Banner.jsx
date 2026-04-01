import { FaPlay } from "react-icons/fa"; // icon for Watch Demo button

const Banner = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 px-8 lg:px-20 py-16 bg-white">
      
      {/* Left text section */}
      <div className="flex-1">
        {/* Badge */}
        <span className="inline-block text-sm font-medium text-white bg-blue-500 rounded-full px-3 py-1 mb-4">
          New: AI-Powered Tools Available
        </span>

        {/* Title */}
        <h1 className="text-[72px] font-extrabold text-gray-900 leading-tight mb-6">
          Supercharge Your Digital Workflow
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 text-lg mb-8">
          Access premium AI tools, design assets, templates, and productivity software—all in one place.
          Start creating faster today.
        </p>
        
        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          {/* Explore Products */}
          <button className="text-white font-semibold py-4 px-8 rounded-lg bg-linear-to-r from-[#4F39F6] to-[#8E73FF] hover:opacity-90 transition-all">
            Explore Products
          </button>

          {/* Watch Demo */}
          <button className="flex items-center gap-2 text-white font-semibold py-4 px-8 rounded-lg bg-linear-to-r from-[#4F39F6] to-[#8E73FF] hover:opacity-90 transition-all">
            <FaPlay /> Watch Demo
          </button>
        </div>
      </div>

      {/* Right image section */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          src="/banner.png" // replace with your image path
          alt="Digital workflow"
          className="rounded-xl shadow-xl w-full max-w-md lg:max-w-lg"
        />
      </div>
    </section>
  );
};

export default Banner;