import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About PrimeNym | Our Mission & Story",
  description: "Discover why we built PrimeNym—the secure data bridge for Google Looker Studio that empowers modern marketers and agency owners.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="py-24 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            The Story Behind <span className="text-blue-600">PrimeNym</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We believe that data automation shouldn't be a privilege of giant corporations. 
            PrimeNym was born to give every e-commerce founder and agency owner 
            the power of real-time analytics.
          </p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Reporting used to mean hours of manual CSV exports and messy spreadsheets. 
              We saw marketers struggling to see their true ROI because their data was 
              trapped inside siloed tools like WooCommerce and Instantly.ai.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to build the world's most reliable <strong>data bridge</strong>. 
              By using our Master Key system, we've eliminated the technical friction, 
              allowing you to connect your apps to Google Looker Studio in seconds, 
              not hours.
            </p>
          </div>
          <div className="relative">
             {/* Decorative UI element representing the "Bridge" */}
            <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-2xl relative z-10">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4">500+ Reports Automated</h3>
              <p className="text-blue-100 text-lg">
                Since our launch in early 2026, we've helped hundreds of users 
                reclaim thousands of hours previously spent on manual data entry.
              </p>
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-gray-100 rounded-3xl -z-0"></div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-bold mb-2">Privacy First</h4>
              <p className="text-gray-600">
                We act as a bridge, not a warehouse. We never store your 
                sensitive customer data permanently on our servers.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-2">Speed & Accuracy</h4>
              <p className="text-gray-600">
                Data is only valuable if it's fresh. Our connectors are 
                optimized for hourly refreshes to keep your dashboards live.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold mb-2">Sri Lankan Roots</h4>
              <p className="text-gray-600">
                Proudly developed in Sri Lanka, serving a global market with 
                world-class engineering standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER / TEAM TEASE SECTION */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Join the Automation Revolution</h2>
        <p className="text-lg text-gray-600 mb-12">
          We are just getting started. With new connectors for Shopify, Beehiiv, 
          and TikTok Ads coming every month, PrimeNym is becoming the central 
          hub for the modern data analyst.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://app.primenym.com/signup" className="btn-primary px-10 py-4 shadow-xl">Get Started for Free</a>
          <a href="/contact" className="btn-outline px-10 py-4 bg-white">Talk to Us</a>
        </div>
      </section>
    </div>
  );
}