import { LuUserPlus, LuPackageSearch, LuRocket } from "react-icons/lu";

const Steps = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: <LuUserPlus />,
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: <LuPackageSearch />,
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: <LuRocket />,
    },
  ];

  return (
    <section className="py-24 bg-white px-6">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-[#0F172A] mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 text-lg">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-white border border-gray-100 p-12 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
          >
            {/* Number Circle (Top Right) */}
            <div className="absolute top-6 right-6 w-8 h-8 bg-[#8B2CF5] text-white text-xs font-bold rounded-full flex items-center justify-center">
              {step.id}
            </div>

            {/* Icon Container */}
            <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center text-5xl text-[#8B2CF5] mb-8">
              {step.icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-extrabold text-[#0F172A] mb-4">
              {step.title}
            </h3>
            <p className="text-gray-500 leading-relaxed max-w-md">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;