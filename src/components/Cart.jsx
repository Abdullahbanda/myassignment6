const Cart = ({ cartItems, removeFromCart, checkout }) => {
  const total = cartItems.reduce((sum,item)=>sum+item.price,0);
  return (
    <section className="p-8">
      {cartItems.length===0 ? <p>Your cart is empty</p> : (
        <div className="flex flex-col gap-4">
          {cartItems.map(item=>(
            <div key={item.id} className="flex justify-between items-center border p-2">
              <span>{item.icon} {item.name}</span>
              <span>${item.price}</span>
              <button onClick={()=>removeFromCart(item.id)} className="btn btn-sm btn-error">Remove</button>
            </div>
          ))}
          <p className="font-bold">Total: ${total}</p>
          <button onClick={checkout} className="btn btn-success">Proceed to Checkout</button>
        </div>
      )}
    </section>
  );
};

export default Cart;