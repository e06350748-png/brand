import { Navbar } from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";
import { supabase } from "../utils/supabase";
import { useState } from "react";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotal, getTotalItems, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!user) {
      alert("Please login to checkout!");
      navigate("/login");
      return;
    }

    if (!user.phone || !user.address) {
      alert("Please complete your profile before checkout!");
      navigate("/profile");
      return;
    }

    setLoading(true);

    try {
      // Create order
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert([
          {
            user_id: user.id,
            total_amount: getTotal(),
            status: 'pending',
            shipping_address: `${user.address}, ${user.city}, ${user.postal_code || ''}`,
            phone: user.phone,
          },
        ])
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = cart.map((item) => ({
        order_id: orderData.id,
        product_id: item.id,
        product_name: item.name,
        product_image_url: item.image_url,
        quantity: item.quantity,
        price: item.price,
        subtotal: item.price * item.quantity,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // Clear cart
      clearCart();

      alert(`Order placed successfully! 🎉\n\nOrder ID: ${orderData.id.substring(0, 8)}\nTotal: $${getTotal().toFixed(2)}\n\nThank you for shopping with us! 💖`);
      navigate("/profile");
    } catch (error: any) {
      console.error('Checkout error:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fff0f5' }}>
      <Navbar />

      <main className="w-full max-w-[1100px] mx-auto px-6 py-12">
        <h2 className="text-5xl font-bold text-center mb-10 title-gradient">
          Your Cart 🛍️
        </h2>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🛒</div>
            <p className="text-gray-500 text-2xl mb-8">Your cart is empty!</p>
            <Link 
              to="/products"
              className="inline-block px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              style={{ 
                backgroundColor: '#ff69b4', 
                color: 'white',
                boxShadow: '0 4px 12px rgba(255, 105, 180, 0.3)'
              }}
            >
              Start Shopping 🛒
            </Link>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {/* Login Warning */}
            {!user && (
              <div 
                className="mb-6 p-4 rounded-lg text-center"
                style={{ backgroundColor: '#fff3cd', border: '2px solid #ffc107' }}
              >
                <p className="font-medium">
                  ⚠️ Please{' '}
                  <Link 
                    to="/login" 
                    className="font-bold underline hover:opacity-80"
                    style={{ color: '#ff69b4' }}
                  >
                    login
                  </Link>
                  {' '}to complete your purchase
                </p>
              </div>
            )}

            {/* Cart Items */}
            <div 
              className="bg-white rounded-2xl shadow-lg p-6 mb-6"
            >
              {cart.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-center gap-6 py-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-xl"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/100x100/ffb6c1/ffffff?text=No+Image';
                        }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <h4 className="font-bold text-xl mb-1 text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-gray-500 mb-3">
                        ${item.price.toFixed(2)} each
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-lg font-bold transition-all hover:scale-110"
                          style={{ backgroundColor: '#ffe4ec', color: '#ff69b4' }}
                        >
                          −
                        </button>
                        <span className="font-bold text-lg min-w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-lg font-bold transition-all hover:scale-110"
                          style={{ backgroundColor: '#ff69b4', color: 'white' }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="text-right flex flex-col items-end gap-3">
                      <p className="font-bold text-2xl" style={{ color: '#ff69b4' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                        style={{
                          backgroundColor: '#fee',
                          color: '#dc2626'
                        }}
                      >
                        🗑️ Remove
                      </button>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  {index < cart.length - 1 && (
                    <div className="border-b" style={{ borderColor: '#ffe4ec' }}></div>
                  )}
                </div>
              ))}
            </div>

            {/* Total & Checkout */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4 pb-4 border-b" style={{ borderColor: '#ffe4ec' }}>
                <span className="text-gray-600 font-medium">
                  Subtotal ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})
                </span>
                <span className="font-bold text-xl">${getTotal().toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 font-medium">Shipping</span>
                <span className="font-bold text-lg" style={{ color: '#4CAF50' }}>
                  FREE 🎁
                </span>
              </div>
              
              <div className="pt-4 mb-6 border-t-2" style={{ borderColor: '#ff69b4' }}>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">Total</span>
                  <span className="text-3xl font-bold" style={{ color: '#ff69b4' }}>
                    ${getTotal().toFixed(2)}
                  </span>
                </div>
              </div>

              <button 
                className="w-full py-4 text-lg font-bold rounded-xl transition-all hover:scale-105 mb-3"
                onClick={handleCheckout}
                disabled={loading || !user}
                style={{
                  backgroundColor: loading || !user ? '#d1d5db' : '#ff69b4',
                  color: 'white',
                  cursor: loading || !user ? 'not-allowed' : 'pointer',
                  boxShadow: loading || !user ? 'none' : '0 4px 12px rgba(255, 105, 180, 0.3)'
                }}
              >
                {loading ? "Processing... ⏳" : "Proceed to Checkout 💳"}
              </button>

              <Link to="/products">
                <button 
                  className="w-full py-4 text-lg font-bold rounded-xl transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: 'transparent', 
                    color: '#ff69b4', 
                    border: '2px solid #ff69b4' 
                  }}
                >
                  Continue Shopping 🛍️
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}