import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { supabase } from "../utils/supabase";
import { Link } from "react-router";

interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🛍️ Fetch first 10 products from Supabase
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("id, name, price, image_url")
        .order("name", { ascending: true })
        .limit(10); // 👈 limit to 10 items

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen text-gray-800 flex flex-col"
      style={{ backgroundColor: "#fff0f5" }}
    >
      <Navbar />

      <main className="flex-grow">
        {/* 🩷 Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-6">
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#ff69b4" }}>
            Discover Your Perfect Style 💖
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-xl">
            Explore our exclusive pink-inspired collection that brings out your
            confidence and charm.
          </p>
          <Link
            to="/products"
            className="px-8 py-3 rounded-full shadow-lg transition-all inline-block"
            style={{ backgroundColor: "#ff69b4", color: "white" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#ff4fa1")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#ff69b4")
            }
          >
            Shop Now
          </Link>
        </section>

        {/* ✨ Featured Products */}
        <section className="px-8 py-12" id="products">
          <h3
            className="text-3xl font-semibold text-center mb-10"
            style={{ color: "#ff69b4" }}
          >
            Featured Products ✨
          </h3>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl shadow-lg p-4 bg-white text-center hover:scale-105 transition-all"
                >
                  <div
                    className="rounded-xl mb-4 flex items-center justify-center overflow-hidden"
                    style={{
                      backgroundColor: "#ffb6c1",
                      height: "260px",
                    }}
                  >
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/400x400/ffb6c1/ffffff?text=No+Image";
                      }}
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                  <p className="text-gray-500 mb-4 text-lg font-medium">
                    ${item.price.toFixed(2)}
                  </p>
                  <Link
                    to="/products"
                    className="px-5 py-2 rounded-full text-white font-medium transition-all"
                    style={{
                      backgroundColor: "#ff69b4",
                      boxShadow: "0 4px 12px rgba(255, 105, 180, 0.3)",
                    }}
                  >
                    View Product 💕
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 🌟 Features Section */}
        <section className="py-16 px-8" style={{ backgroundColor: "white" }}>
          <div className="max-w-6xl mx-auto">
            <h3
              className="text-3xl font-semibold text-center mb-12"
              style={{ color: "#ff69b4" }}
            >
              Why Choose Us? 🌟
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🚚</div>
                <h4 className="text-xl font-semibold mb-2">Free Shipping</h4>
                <p className="text-gray-600">On orders over $50</p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">💝</div>
                <h4 className="text-xl font-semibold mb-2">Quality Products</h4>
                <p className="text-gray-600">Carefully curated items</p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🎁</div>
                <h4 className="text-xl font-semibold mb-2">Gift Wrapping</h4>
                <p className="text-gray-600">Free on all purchases</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
