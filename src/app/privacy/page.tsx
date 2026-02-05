import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PrimeNym",
  description: "Learn how PrimeNym protects your data and maintains a secure bridge between your apps and Google Looker Studio.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* HEADER */}
      <section className="py-20 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last Updated: February 4, 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6 max-w-4xl mx-auto prose prose-blue text-gray-600 leading-relaxed">
        <div className="space-y-12">
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to PrimeNym (primenym.com). We are committed to protecting your privacy and ensuring a secure data connection experience. This policy explains how we collect, use, and safeguard your information when you use our Looker Studio connectors for WooCommerce, Instantly.ai, Beehiiv, and other supported platforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> When you sign up, we collect your name, email address, and billing information (processed securely via Stripe).</li>
              <li><strong>Authentication Data:</strong> To facilitate the data bridge, we securely handle API keys and OAuth tokens from your source platforms.</li>
              <li><strong>The Master Key:</strong> We generate and store a unique, encrypted PrimeNym Master Key used to authorize the flow of data to Google Looker Studio.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. The "Bridge" Mechanism & Data Storage</h2>
            <p className="mb-4">
              PrimeNym acts as a <strong>secure bridge</strong>. Our primary function is to fetch data from your source API and pass it to Google Looker Studio.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No Permanent Storage:</strong> We do not store your raw business data (e.g., specific customer names or order details) on our servers permanently.</li>
              <li><strong>Encrypted Transit:</strong> All data is encrypted in transit using industry-standard TLS protocols.</li>
              <li><strong>Caching:</strong> Short-term caching may be used solely to improve the performance and speed of your Looker Studio reports.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Use Your Data</h2>
            <p>We use the collected data exclusively to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain the PrimeNym Connector service.</li>
              <li>Process your subscription payments and manage your account.</li>
              <li>Send critical technical updates or security alerts regarding your Master Key.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p>We rely on trusted third-party providers to operate our platform:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google:</strong> To facilitate the connection to Looker Studio.</li>
              <li><strong>Firebase:</strong> For secure user authentication and account settings storage.</li>
              <li><strong>Stripe:</strong> For secure payment processing.</li>
              <li><strong>Vercel:</strong> For hosting our marketing and dashboard applications.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Security</h2>
            <p>
              The security of your data is our highest priority. We implement technical and organizational measures, including AES-256 encryption for Master Keys and regular security audits of our API bridge.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights (GDPR & CCPA)</h2>
            <p>
              Depending on your location, you have the right to access, correct, or delete your personal information. You may close your account and request the deletion of your Master Key at any time through the PrimeNym dashboard.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-100 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <a href="mailto:support@primenym.com" className="text-blue-600 font-bold hover:underline">
              support@primenym.com
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}