import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PrimeNym | Get Support or Request a Connector",
  description: "Have questions about your Master Key? Need a custom Looker Studio connector? Our team is here to help you automate your reporting.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-20 px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            How can we help?
          </h1>
          <p className="text-lg text-gray-600">
            Whether you're stuck on a Master Key setup or need a brand new integration, 
            the PrimeNym engineering team is ready to assist.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN: CONTACT FORM */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">First Name</label>
                  <input type="text" placeholder="John" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Business Email</label>
                <input type="email" placeholder="john@company.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition">
                  <option>General Inquiry</option>
                  <option>Request a New Connector</option>
                  <option>Master Key Technical Issue</option>
                  <option>Billing & Subscription</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea rows={5} placeholder="Tell us more about your reporting needs..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"></textarea>
              </div>

              <button type="submit" className="w-full btn-primary py-4 text-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: CONTACT INFO & TRUST */}
          <div className="flex flex-col justify-center">
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Contact</h3>
                <p className="text-gray-600 mb-2">Our team typically responds within 24 hours.</p>
                <a href="mailto:support@primenym.com" className="text-blue-600 font-bold text-lg hover:underline">
                  support@primenym.com
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership & Requests</h3>
                <p className="text-gray-600 mb-4">
                  Are you a SaaS founder looking to list your tool on our marketplace? 
                  Reach out to our partnership team.
                </p>
                <a href="#" className="text-gray-900 font-semibold flex items-center gap-2 hover:text-blue-600 transition">
                  Partner with PrimeNym <span>→</span>
                </a>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Technical Support</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Check out our documentation for instant help with <strong>Master Key</strong> generation and data blending in Looker Studio.
                  </p>
                  <a href="https://app.primenym.com/docs" className="inline-block mt-4 text-blue-600 font-bold text-sm hover:underline">
                    View Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}