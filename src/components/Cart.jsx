const Cart = ({ cartItems, removeFromCart, checkout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto min-h-[400px]">
      <h2 className="text-3xl font-black text-[#0F172A] mb-8 text-center md:text-left">
        Your Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200">
          <p className="text-gray-400 font-medium text-lg">Your cart is currently empty.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 text-[#7C3AED] font-bold hover:underline"
          >
            Go shop for tools
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Cart Items List */}
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col sm:flex-row justify-between items-center bg-white border border-gray-100 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow gap-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <span className="text-3xl bg-purple-50 p-3 rounded-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{item.tag}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto sm:gap-8">
                  <span className="text-xl font-black text-[#0F172A]">${item.price}</span>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="text-red-500 hover:text-red-700 font-bold text-sm bg-red-50 px-4 py-2 rounded-xl transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Section */}
          <div className="bg-[#0F172A] text-white p-8 md:p-10 rounded-[2.5rem] mt-10 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Total Amount</p>
                <p className="text-4xl font-black">${total.toFixed(2)}</p>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-gray-400 text-sm font-medium">Items in Cart</p>
                <p className="text-xl font-bold">{cartItems.length} Products</p>
              </div>
            </div>
            
            <button 
              onClick={checkout} 
              className="w-full py-5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-black text-lg rounded-2xl transition-all active:scale-[0.98] shadow-lg"
            >
              Proceed to Checkout
            </button>
            <p className="text-center text-gray-500 text-xs mt-4">
              Secure checkout • Instant access after purchase
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;