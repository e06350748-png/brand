import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { Navbar } from "../components/Navbar";

export default function Register() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    full_name: "",
    phone: "",
    address: "",
    city: "",
    postal_code: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    setLoading(true);

    const { data, error } = await signUp(formData.email, formData.password, {
      full_name: formData.full_name,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      postal_code: formData.postal_code,
      country: "Egypt",
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      alert("Account created successfully! Please check your email to verify your account.");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen text-gray-800 flex flex-col" style={{ backgroundColor: '#fff0f5' }}>
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-8">
        <div className="card max-w-md w-full">
          <h2 className="text-3xl font-bold text-center mb-2" style={{ color: '#ff69b4' }}>
            Create Account 💖
          </h2>
          <p className="text-center text-gray-600 mb-6">Join our community!</p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+20 123 456 7890"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Street address"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Cairo"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Postal Code</label>
                <input
                  type="text"
                  name="postal_code"
                  value={formData.postal_code}
                  onChange={handleChange}
                  placeholder="12345"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Password *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Min. 6 characters"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Re-enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-lg"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up 🎉"}
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" style={{ color: '#ff69b4' }} className="font-semibold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}