const Pricing = () => {
  const plans = [
    {
      title: "Starter",
      subtitle: "Perfect for getting started",
      price: "0",
      period: "/Month",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      title: "Pro",
      subtitle: "Best for professionals",
      price: "29",
      period: "/Month",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      title: "Enterprise",
      subtitle: "For teams and businesses",
      price: "99",
      period: "/Month",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false,
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-[#0F172A] mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative p-10 roundedd-[2rem] border transition-all duration-300 shadow-sm hover:shadow-xl ${
              plan.isPopular 
              ? 'bg-[#8B2CF5] border-[#8B2CF5] text-white scale-105 z-10' 
              : 'bg-white border-gray-100 text-slate-900'
            }`}
          >
            {/* Floating Badge for Popular Plan */}
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-md border border-[#FDE68A]">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className={`text-sm ${plan.isPopular ? 'text-purple-100' : 'text-gray-400'}`}>
                {plan.subtitle}
              </p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-black">${plan.price}</span>
              <span className={`text-lg font-medium ${plan.isPopular ? 'text-purple-200' : 'text-gray-400'}`}>
                {plan.period}
              </span>
            </div>

            <ul className="space-y-4 mb-10 text-sm font-medium">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg className={`w-5 h-5 mr-3 ${plan.isPopular ? 'text-white' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-lg ${
              plan.isPopular 
              ? 'bg-white text-[#8B2CF5] hover:bg-gray-50' 
              : 'bg-[#8B2CF5] text-white hover:bg-[#7a24db]'
            }`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;