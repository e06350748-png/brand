import { Navbar } from "../components/Navbar";

export default function Contact() {
  return (
    <div className="bg-lightPink min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-brandPink mb-6">
            Contact Us 💌
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandPink"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandPink"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brandPink"
            ></textarea>
            <button
              type="submit"
              className="bg-brandPink w-full text-white py-3 rounded-lg hover:bg-pink-500 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
