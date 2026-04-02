const CTA = () => (
  <section className="py-12 md:py-20 px-4 md:px-8">
    <div className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[3rem] bg-linear-to-r from-[#4F39F6] to-[#8B2CF5] p-8 md:p-12 lg:p-20 text-white text-center shadow-2xl shadow-purple-200">
      
      {/* Title - Scales from 3xl on mobile to 5xl on desktop */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
        Ready To Transform Your <br className="hidden md:block" /> Digital Workflow?
      </h2>
      
      <p className="text-purple-100 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
        Join over 50,000+ professionals who are already using DigiTools to work smarter, 
        not harder. Start your 14-day free trial today.
      </p>
      
      {/* Buttons - Stack vertically on mobile, row on tablet+ */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
        <button className="w-full sm:w-auto bg-white text-[#4F39F6] font-bold py-3.5 md:py-4 px-8 md:px-10 rounded-xl md:rounded-2xl shadow-lg hover:bg-gray-50 transition-all active:scale-95">
          Explore Products
        </button>
        <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white text-white font-bold py-3.5 md:py-4 px-8 md:px-10 rounded-xl md:rounded-2xl transition-all active:scale-95">
          View Pricing
        </button>
      </div>
      
      {/* Feature list - Center-aligned and wrap-friendly */}
      <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs md:text-sm text-purple-200 font-medium">
        <span className="flex items-center gap-1">✓ 14-day free trial</span>
        <span className="flex items-center gap-1">✓ No credit card required</span>
        <span className="flex items-center gap-1">✓ Cancel anytime</span>
      </div>
    </div>
  </section>
);

export default CTA;