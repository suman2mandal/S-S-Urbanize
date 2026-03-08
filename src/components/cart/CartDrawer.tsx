"use client";

import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, removeFromCart, increase, decrease } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl p-6">
      <h2 className="text-xl font-semibold mb-6">Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} className="mb-6 border-b pb-4">
          <h3 className="font-medium">{item.name}</h3>
          <p>₹{item.price}</p>

          <div className="flex gap-2 mt-2">
            <button onClick={() => decrease(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increase(item.id)}>+</button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-sm mt-2"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-8 font-semibold">
        Total: ₹{total}
      </div>
    </div>
  );
}