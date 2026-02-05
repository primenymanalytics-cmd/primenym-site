import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PrimeNym | #1 WooCommerce & Instantly to Looker Studio Connector",
  description: "The only no-code connector for deep-data analytics. Sync WooCommerce, Instantly.ai, and Beehiiv to Google Looker Studio using your PrimeNym Master Key.",
  keywords: ["Looker Studio Connector", "WooCommerce Analytics", "Instantly.ai Reporting", "Master Key Data Studio", "PrimeNym"],
};

export default function Home() {
  const features = [
    {
      title: "WooCommerce Deep-Dive",
      desc: "Don't just see 'Sales'. See Net Sales, Refunds, Coupon Usage, and Customer Lifetime Value (LTV).",
      icon: "🛍️"
    },
    {
      title: "Instantly.ai Campaign Sync",
      desc: "Visualize cold email performance: Sent, Opened, Replied, and Opportunities directly in Looker Studio.",
      icon: "📧"
    },
    {
      title: "Agency-Grade Security",
      desc: "We never store your data. PrimeNym acts as a secure, encrypted bridge between your API and Google.",
      icon: "🔒"
    }
  ];

  const faqs = [
    {
      question: "What is a PrimeNym Master Key?",
      answer: "The Master Key is a unique encrypted string generated in your PrimeNym dashboard. You paste this key into the Looker Studio connector to securely authorize the data flow without sharing your original API passwords."
    },
    {
      question: "Do I need coding skills?",
      answer: "Zero. If you can copy and paste a key, you can use PrimeNym. We've handled all the complex API mapping for you."
    },
    {
      question: "Is the data real-time?",
      answer: "Yes. Depending on your plan, we support hourly refreshes, ensuring your Looker Studio reports stay current."
    }
  ];

  return (
    <div className="overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative py-28 px-6 bg-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Now Live: Master Key Authentication
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8">
            The Missing Link Between <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Your Apps & Looker Studio.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop manually exporting CSVs. Use your <span className="text-blue-600 font-bold tracking-tight">PrimeNym Master Key</span> to automate reporting for 
            <span className="font-semibold text-gray-900"> WooCommerce, Instantly.ai, and Beehiiv.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://app.primenym.com/signup" className="btn-primary text-lg px-10 py-4 shadow-blue-500/30">Get My Master Key</a>
            <a href="#how-it-works" className="btn-outline text-lg px-10 py-4 bg-white">How Master Keys Work</a>
          </div>
        </div>
      </section>

      {/* METRICS GRID */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Data We Actually Sync</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Extract granular fields through our secure bridge to build professional, client-ready reports.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-6 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPDATED WORKFLOW: THE MASTER KEY PROCESS */}
      <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl rotate-1 transform hover:rotate-0 transition-all duration-500">
              <div className="flex gap-2 mb-6 border-b border-gray-800 pb-4 text-xs font-mono text-gray-500">
                <span>Looker Studio Connector Setup</span>
              </div>
              <div className="space-y-4 font-mono">
                <p className="text-gray-400 text-sm italic">// Enter your authentication details</p>
                <div className="space-y-2">
                  <label className="text-blue-400 text-xs">PrimeNym Master Key:</label>
                  <div className="bg-gray-800 p-3 rounded text-green-400 text-sm overflow-hidden whitespace-nowrap border border-blue-900/50">
                    pn_live_8k2m9x_masterkey_77q...
                  </div>
                </div>
                <div className="pt-4">
                  <div className="bg-blue-600 text-white text-center py-2 rounded text-sm font-bold">Connect Data Source</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm italic">The Master Key Workflow</span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-gray-900">3 Steps to Automated Bliss</h2>
            <div className="space-y-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">1</div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900">Generate Your Master Key</h4>
                  <p className="text-gray-600 leading-relaxed mt-1">Connect your accounts in the PrimeNym dashboard to generate one unique Master Key for all your data sources.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">2</div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900">Open Looker Studio</h4>
                  <p className="text-gray-600 leading-relaxed mt-1">Search for the <strong>PrimeNym Connector</strong> in the Google Connector Gallery and select your desired source.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">3</div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900">Paste & Sync</h4>
                  <p className="text-gray-600 leading-relaxed mt-1">Paste your Master Key into the configuration field. Your data flows into your report instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Master Key FAQ</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors bg-gray-50/50">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-blue-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to generate your Master Key?</h2>
        <p className="text-blue-200 text-xl max-w-2xl mx-auto mb-10">
          Simplify your reporting stack. One key, endless insights.
        </p>
        <a href="https://app.primenym.com/signup" className="inline-block bg-white text-blue-900 font-bold text-lg px-12 py-4 rounded-lg hover:bg-gray-100 transition shadow-2xl">
          Get Started for Free
        </a>
      </section>

    </div>
  );
}