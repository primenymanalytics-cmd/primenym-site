import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "WooCommerce to Looker Studio Connector | PrimeNym",
  description: "Automate your e-commerce reporting. Sync Net Sales, Order Status, and Coupon usage from WooCommerce to Google Looker Studio using the PrimeNym Master Key.",
  keywords: ["WooCommerce Looker Studio", "Data Studio WooCommerce API", "E-commerce Dashboard", "Net Sales Looker Studio"],
};

export default function WooCommerceConnector() {
  const metrics = [
    { name: "Gross Sales", desc: "The total amount of all orders before any deductions (refunds, coupons, etc.)." },
    { name: "Net Sales", desc: "Total sales minus refunds and coupons. The true measure of your store's performance." },
    { name: "Order Count", desc: "Total number of orders, filterable by status (Processing, Completed, Cancelled)." },
    { name: "Average Order Value (AOV)", desc: "The average amount spent each time a customer places an order." },
    { name: "Total Tax & Shipping", desc: "Breakdown of taxes collected and shipping costs paid by customers." },
    { name: "Coupon Usage", desc: "Track which coupon codes are driving the most revenue and their total discount value." },
    { name: "Customer Type", desc: "Segment your data by New vs. Returning customers to track retention." },
    { name: "Refund Amount", desc: "The total value of refunded items to monitor product satisfaction." },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest mb-6">
              Official Connector
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Connect WooCommerce to <span className="text-blue-600">Looker Studio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Stop fighting with CSV exports. Use your PrimeNym Master Key to sync real-time sales, 
              tax, and customer data directly into your marketing dashboards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="https://app.primenym.com/signup" className="btn-primary text-lg px-8 py-4">Get Started for Free</a>
              <a href="#metrics" className="btn-outline text-lg px-8 py-4 bg-white">View Schema</a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 bg-white rounded-3xl shadow-2xl border border-gray-100 flex items-center justify-center text-8xl">
              🛍️
            </div>
          </div>
        </div>
      </section>

      {/* METRICS TABLE SECTION */}
      <section id="metrics" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Supported Metrics & Dimensions</h2>
          <p className="text-gray-600 mt-4">We pull granular data fields so you can build deep-dive e-commerce reports.</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 font-bold text-gray-900 uppercase text-xs tracking-wider">Field Name</th>
                <th className="px-6 py-4 font-bold text-gray-900 uppercase text-xs tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {metrics.map((m) => (
                <tr key={m.name} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-5 font-bold text-blue-600">{m.name}</td>
                  <td className="px-6 py-5 text-gray-600 text-sm leading-relaxed">{m.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-blue-800 text-sm">
            <strong>Pro Tip:</strong> All metrics are automatically aggregate-ready in Looker Studio, 
            allowing you to group by Date, Order Status, or Category instantly.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS (REINFORCING THE MASTER KEY) */}
      <section className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Set Up in 3 Minutes</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="space-y-4">
              <div className="text-blue-400 text-2xl font-bold">01.</div>
              <h4 className="font-bold text-xl">Connect API</h4>
              <p className="text-gray-400 text-sm">Input your WooCommerce Consumer Key & Secret in the PrimeNym Dashboard.</p>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 text-2xl font-bold">02.</div>
              <h4 className="font-bold text-xl">Get Master Key</h4>
              <p className="text-gray-400 text-sm">PrimeNym generates a secure, encrypted Master Key for your store.</p>
            </div>
            <div className="space-y-4">
              <div className="text-blue-400 text-2xl font-bold">03.</div>
              <h4 className="font-bold text-xl">Paste & Run</h4>
              <p className="text-gray-400 text-sm">Paste the key into our Looker Studio Connector and your data flows instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to automate your WooCommerce reporting?</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Start your 14-day free trial today and build your first dashboard in minutes.
        </p>
        <a href="https://app.primenym.com/signup" className="btn-primary px-12 py-4 text-lg shadow-xl shadow-blue-500/20">
          Start Your Free Trial
        </a>
      </section>
    </div>
  );
}