import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { Navbar } from "../components/Navbar";

export default function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await signIn(formData.email, formData.password);

      if (error || !data?.user) {
        setError(error?.message || "Invalid email or password. Please try again.");
        return; // ❌ لا يتم التوجيه هنا
      }

      // ✅ تسجيل الدخول ناجح
      navigate("/");
    } catch (err: any) {
      setError("An unexpected error occurred. Please try again later.");
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

      <main className="flex-grow flex items-center justify-center p-8">
        <div className="card max-w-md w-full bg-white shadow-lg rounded-xl p-6">
          <h2
            className="text-3xl font-bold text-center mb-2"
            style={{ color: "#ff69b4" }}
          >
            Welcome Back! 💖
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Login to your account
          </p>

          {/* ✅ عرض رسالة الخطأ */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 text-lg rounded-lg transition-all duration-200 ${
                loading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-pink-500 hover:bg-pink-600 text-white"
              }`}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login 🔐"}
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              style={{ color: "#ff69b4" }}
              className="font-semibold hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
