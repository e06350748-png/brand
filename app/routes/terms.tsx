import { Navbar } from "../components/Navbar";

export default function TermsAndConditions() {
  return (
    <div className="bg-[#fff0f5] text-gray-800 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 md:px-20 py-16 max-w-4xl mx-auto fade-in">
        <h1 className="text-4xl font-bold text-[#ff69b4] mb-8 text-center">
          Terms & Conditions
        </h1>

        <p className="mb-6 text-gray-600">
          Welcome to <strong>basant Brand</strong>! These Terms & Conditions outline
          the rules and regulations for the use of our website and services.
          By accessing this website, we assume you accept these terms in full.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          1. Use of Our Services
        </h2>
        <p className="mb-4 text-gray-600">
          You agree to use our website and services only for lawful purposes and in a
          manner that does not infringe the rights of others or restrict their use and
          enjoyment of the website.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          2. Accounts and Registration
        </h2>
        <p className="mb-4 text-gray-600">
          When creating an account, you must provide accurate and complete information.
          You are responsible for maintaining the confidentiality of your account
          credentials and for all activities under your account.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          3. Data Storage and Security
        </h2>
        <p className="mb-4 text-gray-600">
          We securely store your information using <strong>Supabase</strong> and other
          trusted technologies. While we strive to protect your data, no system is
          completely secure, and you acknowledge this risk when using our services.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          4. Intellectual Property
        </h2>
        <p className="mb-4 text-gray-600">
          All content, designs, and materials available on this website are the
          property of <strong>basant Brand</strong> and are protected by copyright
          laws. You may not reproduce or distribute any part of the website without
          prior written permission.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          5. Limitation of Liability
        </h2>
        <p className="mb-4 text-gray-600">
          We are not responsible for any indirect or consequential losses that may
          result from your use of our website or services. Our total liability will
          not exceed the amount paid by you (if any) for using our services.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          6. Modifications to the Terms
        </h2>
        <p className="mb-4 text-gray-600">
          We reserve the right to update or modify these Terms & Conditions at any
          time. The updated version will be posted on this page, and continued use of
          our website constitutes acceptance of any changes.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          7. Contact Us
        </h2>
        <p className="mb-4 text-gray-600">
          If you have any questions about these Terms & Conditions, please reach out to
          us through our{" "}
          <button
            onClick={() =>
              (window.location.href = "/contact")
            }
            className="text-[#fffff] underline font-medium hover:text-[#333] transition"
          >
            contact page
          </button>
          .
        </p>

        <p className="text-gray-500 mt-10 text-sm text-center">
          Last updated: {new Date().getFullYear()}
        </p>
      </main>
    </div>
  );
}
