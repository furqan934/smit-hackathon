import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function Home() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
      fetch("https://fakestoreapi.com/products/categories").then((res) =>
        res.json()
      ),
    ])
      .then(([productData, categoryData]) => {
        setProducts(productData);
        setFiltered(productData);
        setCategories(categoryData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      let result = products.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) &&
          item.price <= maxPrice &&
          (category === "all" || item.category === category)
      );
      setFiltered(result);
    }, 300);
    return () => clearTimeout(delay);
  }, [search, category, maxPrice, products]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] text-gray-600">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600 border-solid mb-4"></div>
        <p className="text-lg font-semibold">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-sky-600 via-blue-600 to-teal-500 text-white rounded-b-[2rem] shadow-lg animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          Discover the Best Deals
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          Shop smart, save big — find everything you love in one place!
        </p>
      </section>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 animate-fade-up">
          {/* Search */}
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

          {/* Price Range */}
          <div className="flex items-center gap-3 w-full md:w-1/3">
            <label className="font-medium text-gray-700 whitespace-nowrap">
              Max Price:
            </label>
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full accent-indigo-600"
            />
            <span className="font-semibold">${maxPrice}</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 animate-fade-up">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between hover:ring-2 hover:ring-cyan-400/50"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-52 w-full object-contain p-4"
                />
                <div className="px-4 py-2 flex-1 flex flex-col justify-between">
                  <h3 className="text-md font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-indigo-600 font-bold text-lg">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:from-teal-600 hover:to-blue-600 hover:shadow-lg active:scale-95 transition-all duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
