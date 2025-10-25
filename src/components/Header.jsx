import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

function Header() {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-sky-600 via-blue-600 to-teal-500 text-white shadow-xl sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold tracking-wide hover:scale-105 transition-transform"
        >
          <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
            MiniShop
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-lg items-center">
          <Link to="/" className="hover:text-amber-300 transition font-medium">
            Home
          </Link>
          <Link
            to="/cart"
            className="relative hover:text-amber-300 transition flex items-center gap-1 font-medium"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-amber-400 text-gray-900 rounded-full text-xs font-bold px-1.5 animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            to="/checkout"
            className="hover:text-amber-300 transition font-medium"
          >
            Checkout
          </Link>
        </nav>

        {/* mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/*Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-sky-700 via-blue-700 to-teal-600 px-6 py-4 flex flex-col gap-4 text-lg animate-slide-down shadow-inner">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-amber-300 transition"
          >
            Home
          </Link>
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="hover:text-amber-300 transition"
          >
            Cart ({totalItems})
          </Link>
          <Link
            to="/checkout"
            onClick={() => setMenuOpen(false)}
            className="hover:text-amber-300 transition"
          >
            Checkout
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
