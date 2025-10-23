import { Link } from "react-router";
import { Navbar } from "../components/Navbar";

export default function Home() {
  const products = [
    { name: "Pink Bag", price: "$49.99", emoji: "👜" },
    { name: "T-Shirt", price: "$29.99", emoji: "👕" },
    { name: "Sneakers", price: "$79.99", emoji: "👟" }
  ];

  return (
    <div className="min-h-screen text-gray-800 flex flex-col" style={{ backgroundColor: '#fff0f5' }}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-6">
          <h2 className="text-5xl font-bold mb-4" style={{ color: '#ff69b4' }}>
            Discover Your Perfect Style 💖
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-xl">
            Explore our exclusive pink-inspired collection that brings out your confidence and charm.
          </p>
          <a
            href="/products"
            className="px-8 py-3 rounded-full shadow-lg transition-all inline-block"
            style={{ backgroundColor: '#ff69b4', color: 'white' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff4fa1'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff69b4'}
          >
            Shop Now
          </a>
        </section>

        {/* Featured Products */}
        <section className="px-8 py-12" id="products">
          <h3 className="text-3xl font-semibold text-center mb-10" style={{ color: '#ff69b4' }}>
            Featured Products ✨
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((item, index) => (
              <div
                key={index}
                className="card"
              >
                <div 
                  className="rounded-xl mb-4 flex items-center justify-center"
                  style={{ 
                    backgroundColor: '#ffb6c1',
                    height: '280px',
                    fontSize: '8rem'
                  }}
                >
                  {item.emoji}
                </div>
                <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                <p className="text-gray-500 mb-4 text-lg font-medium">{item.price}</p>
                <button className="w-full">
                  Add to Cart 🛒
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-8" style={{ backgroundColor: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-semibold text-center mb-12" style={{ color: '#ff69b4' }}>
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