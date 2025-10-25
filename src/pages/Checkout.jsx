import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.zip
    ) {
      alert("Please fill all the fields!");
      return;
    }
    alert("✅ Order placed successfully!");
    clearCart();
    navigate("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] text-center animate-fade-up">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          No items in your cart!
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-up">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Checkout
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT: ORDER SUMMARY */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
            Order Summary
          </h3>

          <div className="flex flex-col gap-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <p className="text-gray-800 text-sm line-clamp-1">
                  {item.title}
                </p>
                <p className="font-semibold text-indigo-600">
                  {item.quantity} × ${item.price}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 text-lg font-bold text-gray-800 flex justify-between">
            <span>Total:</span>
            <span className="text-indigo-600">${totalPrice}</span>
          </div>
        </div>

        {/* RIGHT: FORM SECTION */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
             Billing Information
          </h3>

          {["name", "email", "address", "city", "zip"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={
                field === "zip"
                  ? "ZIP Code"
                  : field.charAt(0).toUpperCase() + field.slice(1)
              }
              value={formData[field]}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 mb-3 w-full focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white font-semibold py-2.5 rounded-lg hover:opacity-90 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
