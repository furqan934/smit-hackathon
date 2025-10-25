import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] text-center animate-fade-up">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          🛒 Your Cart is Empty
        </h2>
        <Link
          to="/"
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-all shadow-md"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-fade-up">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Your Cart
      </h2>

      <div className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="font-semibold text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-indigo-600 font-bold">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-3 sm:mt-0">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-semibold"
              >
                -
              </button>
              <span className="text-lg font-semibold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-semibold"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 
             text-white px-3 py-1.5 rounded-lg text-sm font-medium 
             shadow-md transition-all duration-300 
             hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] hover:brightness-110 hover:scale-105"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 p-6 rounded-xl text-white flex flex-col sm:flex-row justify-between items-center gap-4 shadow-lg">
        <div>
          <p className="font-medium">
            Total Items: <span className="font-bold">{totalItems}</span>
          </p>
          <p className="font-medium">
            Total Price: <span className="font-bold">${totalPrice}</span>
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-white text-red-500 font-semibold px-4 py-2 rounded-lg hover:bg-red-100 transition"
          >
            Clear Cart
          </button>
          <Link
            to="/checkout"
            className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded-lg hover:bg-indigo-50 transition"
          >
            Checkout →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
