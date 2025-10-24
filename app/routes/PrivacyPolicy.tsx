import { Navbar } from "../components/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#fff0f5] text-[#333] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 md:px-20 py-16 max-w-4xl mx-auto fade-in">
        <h1 className="text-4xl font-bold text-[#ff69b4] mb-8 text-center">
          Privacy Policy
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed">
          At <strong>Bassant Brand</strong>, we are committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard your information
          when you visit our website and use our services.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4 text-gray-700">
          We may collect personal information that you provide directly to us, such as:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Name and contact details (email, phone number, etc.)</li>
          <li>Account login details (email and password)</li>
          <li>Profile information (address, city, country, etc.)</li>
          <li>Usage data such as pages visited, time spent, and browser information</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4 text-gray-700">
          We use your information to:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Provide and improve our services</li>
          <li>Authenticate and manage your user account</li>
          <li>Personalize your dashboard experience</li>
          <li>Communicate with you regarding updates or support</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          3. Data Protection and Security
        </h2>
        <p className="mb-6 text-gray-700">
          We use secure technologies, including <strong>Supabase Authentication</strong> and 
          <strong> Supabase Database</strong>, to protect your personal information. However, no online
          service is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          4. Cookies
        </h2>
        <p className="mb-6 text-gray-700">
          We may use cookies and similar technologies to enhance your experience, analyze usage,
          and improve our website. You can choose to disable cookies in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          5. Third-Party Services
        </h2>
        <p className="mb-6 text-gray-700">
          Our website may include links or integrations with third-party services such as Supabase.
          These services have their own privacy policies, which we encourage you to review.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          6. Your Rights
        </h2>
        <p className="mb-6 text-gray-700">
          You have the right to access, correct, or delete your personal data at any time.
          To exercise these rights, please contact us at:{" "}
          <a
            href="mailto:e.faras12@gmail.com"
            className="text-[#ff69b4] underline hover:text-[#ff4fa1]"
          >
            e.faras12@gmail.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          7. Changes to This Policy
        </h2>
        <p className="mb-6 text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will be posted
          on this page with an updated revision date.
        </p>

        <h2 className="text-2xl font-semibold text-[#ff69b4] mt-10 mb-4">
          8. Contact Us
        </h2>
        <p className="mb-6 text-gray-700">
          If you have questions about this Privacy Policy, please contact us at:{" "}
          <a
            href="mailto:contact@yourbrand.com"
            className="text-[#ff69b4] underline hover:text-[#ff4fa1]"
          >
            contact@yourbrand.com
          </a>
          .
        </p>

        <p className="text-gray-500 mt-10 text-sm">
          Last updated: {new Date().getFullYear()}
        </p>
      </main>
    </div>
  );
}
