import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Script from "next/script"; // Import the Script component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrimeNym | Premium Looker Studio Data Connectors",
  description: "Automate your marketing and e-commerce reporting with PrimeNym. Connect WooCommerce, Instantly.ai, and more.",
  keywords: ["Looker Studio Connector", "WooCommerce Analytics", "PrimeNym", "Data Automation"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag (gtag.js) - External Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NYWG9R5XJB"
          strategy="afterInteractive"
        />
        {/* Google Tag (gtag.js) - Inline Initialization */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NYWG9R5XJB');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-white text-gray-900 flex flex-col min-h-screen`}>
        <Navbar />
        
        <main className="flex-grow pt-16">{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            
            {/* BRAND COLUMN */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center mb-6">
                <Image 
                  src="/footer_logo.svg" 
                  alt="PrimeNym" 
                  width={160} 
                  height={32} 
                  priority
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                The trusted bridge between your favorite SaaS tools and Google Looker Studio. Secure, fast, and no-code.
              </p>
            </div>

            {/* PRODUCT COLUMN */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Marketplace</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/connectors/woocommerce" className="hover:text-white transition">WooCommerce</a></li>
                <li><a href="/connectors/instantly" className="hover:text-white transition">Instantly.ai</a></li>
                <li><a href="/connectors/beehiiv" className="hover:text-white transition">Beehiiv</a></li>
              </ul>
            </div>

            {/* COMPANY COLUMN */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="https://app.primenym.com" className="hover:text-white transition">Login</a></li>
              </ul>
            </div>

            {/* LEGAL COLUMN */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="/security" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2026 PrimeNym LLC. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Systems Operational
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}