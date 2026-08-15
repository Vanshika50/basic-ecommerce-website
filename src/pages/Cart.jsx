import React, { useContext } from "react";
import DataContext from "../context/DataContextProvider";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(DataContext);

  if (cart.length === 0) {
    return <p className="text-2xl text-center p-6">Your cart is empty.</p>;
  }

  // add up price * quantity for every item
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,0);

  return (
    <div className="p-4 sm:p-6 text-white">
      {cart.map((item) => (
        <div key={item.id} className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 sm:gap-0 border-b py-4">
          <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />

          <p className="flex-1 min-w-30 mx-0 sm:mx-4">{item.title}</p>

          <p className="order-4 sm:order-0">${item.price}</p>

          <div className="flex items-center gap-2 mx-0 sm:mx-4">
            <button onClick={() => updateQuantity(item.id, -1)} className="px-2 border rounded">-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)} className="px-2 border rounded">+</button>
          </div>

          <p className="order-5 sm:order-0">${(item.price * item.quantity).toFixed(2)}</p>

          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-0 sm:ml-4 text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="text-right mt-6 text-lg sm:text-xl font-bold">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;