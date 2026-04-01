import ProductCard from "./ProductCard";

const Products = ({ products, addToCart, view, setView, cartCount }) => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-[#0F172A] mb-4">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        {/* This container matches the 'best.PNG' toggle perfectly */}
        <div className="inline-flex p-1 bg-white border border-blue-100 rounded-full shadow-sm">
          <button 
            onClick={() => setView('products')}
            className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              view === 'products' 
                ? 'bg-[#8B2CF5] text-white shadow-lg' 
                : 'text-gray-400 hover:text-black'
            }`}
          >
            Products
          </button>
          <button 
            onClick={() => setView('cart')}
            className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              view === 'cart' 
                ? 'bg-[#8B2CF5] text-white shadow-lg' 
                : 'text-gray-400 hover:text-black'
            }`}
          >
            Cart ({cartCount})
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default Products;