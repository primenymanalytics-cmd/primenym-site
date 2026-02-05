import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | PrimeNym",
  description: "Read the terms of service for using PrimeNym connectors and our Master Key authentication system.",
};

export default function TermsAndConditions() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* HEADER */}
      <section className="py-20 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600">Last Updated: February 4, 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-6 max-w-4xl mx-auto prose prose-blue text-gray-600 leading-relaxed">
        <div className="space-y-12">
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using PrimeNym (primenym.com), you agree to be bound by these Terms & Conditions. These terms govern your use of our data connectors for platforms including, but not limited to, WooCommerce, Instantly.ai, and Beehiiv.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p>
              PrimeNym provides a technical bridge that allows users to fetch data from third-party APIs and visualize it within Google Looker Studio. We provide the infrastructure to facilitate this data flow but are not responsible for the accuracy or availability of the data provided by the source platforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Master Key & Security</h2>
            <p className="mb-4">
              Upon registration and configuration of your data sources, PrimeNym generates a unique <strong>Master Key</strong> for your account.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Responsibility:</strong> You are solely responsible for maintaining the confidentiality of your Master Key.</li>
              <li><strong>Unauthorized Access:</strong> You agree to notify us immediately of any unauthorized use of your Master Key or account.</li>
              <li><strong>Usage:</strong> The Master Key is intended for use within authorized Looker Studio reports only.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscriptions & Payments</h2>
            <p>
              Certain features of PrimeNym require a paid subscription. All payments are processed securely via Stripe.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Billing:</strong> You will be billed according to the plan selected (Starter, Professional, or Agency).</li>
              <li><strong>Cancellations:</strong> You may cancel your subscription at any time through your dashboard. Access will remain active until the end of the current billing cycle.</li>
              <li><strong>Refunds:</strong> Refunds are handled on a case-by-case basis at the discretion of PrimeNym.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prohibited Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the service for any illegal or unauthorized purpose.</li>
              <li>Attempt to reverse engineer, decompile, or bypass the PrimeNym API or Master Key system.</li>
              <li>Exceed the API rate limits set by PrimeNym or the source platforms (WooCommerce, Instantly, etc.).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p>
              PrimeNym shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use the service, including data loss or service interruptions caused by third-party API changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by and construed in accordance with the laws of <strong>Sri Lanka</strong>. Any disputes shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-100 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Legal Questions</h2>
            <p>For any legal inquiries or concerns regarding these terms, please reach out to us:</p>
            <a href="mailto:support@primenym.com" className="text-blue-600 font-bold hover:underline">
              support@primenym.com
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}