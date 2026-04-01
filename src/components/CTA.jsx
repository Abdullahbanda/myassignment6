const CTA = () => (
  <section className="py-20 px-8">
    <div className="max-w-6xl mx-auto rounded-[3rem] bg-linear-to-r from-[#4F39F6] to-[#8B2CF5] p-12 lg:p-20 text-white text-center shadow-2xl shadow-purple-200">
      <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
        Ready To Transform Your <br /> Digital Workflow?
      </h2>
      <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
        Join over 50,000+ professionals who are already using DigiTools to work smarter, 
        not harder. Start your 14-day free trial today.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="bg-white text-[#4F39F6] font-bold py-4 px-10 rounded-2xl shadow-lg hover:bg-gray-50 transition-all active:scale-95">
          Explore Products
        </button>
        <button className="bg-transparent border-2 border-white/30 hover:border-white text-white font-bold py-4 px-10 rounded-2xl transition-all active:scale-95">
          View Pricing
        </button>
      </div>
      
      <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-purple-200 font-medium">
        <span>✓ 14-day free trial</span>
        <span>✓ No credit card required</span>
        <span>✓ Cancel anytime</span>
      </div>
    </div>
  </section>
);

export default CTA;