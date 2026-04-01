import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="relative bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all flex flex-col">
      
      {/* Badge (Top Right) */}
      {product.tag && (
        <span className="absolute top-6 right-8 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-50 text-blue-500">
          {product.tag}
        </span>
      )}

      {/* Icon */}
      <div className="text-5xl mb-8 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl">
        {product.icon}
      </div>

      <h3 className="text-3xl font-bold text-[#0F172A] mb-3">{product.name}</h3>
      <p className="text-gray-400 text-base leading-relaxed mb-8 flexd-grow">
        {product.description}
      </p>

      {/* Pricing */}
      <div className="mb-8 flex items-baseline">
        <span className="text-4xl font-extrabold text-[#0F172A]">${product.price}</span>
        <span className="text-gray-400 text-sm font-semibold ml-1">/{product.period}</span>
      </div>

      {/* Features with checkmarks */}
      <ul className="space-y-4 mb-10">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center text-gray-500 font-medium">
            <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <button 
        onClick={handleAdd} 
        className={`w-full py-4 rounded-2xl font-black text-lg transition-all transform active:scale-95 
          ${added ? 'bg-green-500 text-white' : 'bg-[#8B2CF5] text-white hover:bg-[#7a24db] shadow-lg shadow-purple-100'}`}
      >
        {added ? "✓ Added" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;