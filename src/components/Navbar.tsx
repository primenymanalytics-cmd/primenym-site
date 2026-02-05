"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const connectorList = [
    { name: "WooCommerce", href: "/connectors/woocommerce", icon: "🛒" },
    { name: "Instantly.ai", href: "/connectors/instantly", icon: "📧" },
    { name: "Beehiiv", href: "/connectors/beehiiv", icon: "🐝" },
    { name: "View All Marketplace", href: "#connectors", icon: "🌐" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* REPLACED: Both logo and text are now one single image link */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/full-logo.svg" // Save your new combined logo as full-logo.png in the public folder
            alt="PrimeNym" 
            width={160} // This is the width it will take up on the screen
            height={32} // This is the height it will take up on the screen
            priority // Ensures the logo loads immediately for SEO
            className="object-contain"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600 items-center">
          <Link href="#features" className="hover:text-blue-600 transition">Why Us</Link>
          
          {/* CONNECTORS DROPDOWN */}
          <div className="relative group">
            <button 
              onMouseEnter={() => setIsOpen(true)}
              className="flex items-center gap-1 hover:text-blue-600 transition py-4"
            >
              Connectors
              <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div 
              onMouseLeave={() => setIsOpen(false)}
              className={`absolute left-0 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl p-2 transition-all duration-200 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
            >
              {connectorList.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors group/item"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 group-hover/item:text-blue-600">{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="#pricing" className="hover:text-blue-600 transition">Pricing</Link>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex items-center space-x-4">
          <a href="https://app.primenym.com/signin" className="hidden sm:block text-sm font-medium text-gray-600">Login</a>
          <a href="https://app.primenym.com/signup" className="btn-primary !py-2 !px-4 text-sm">Get Started</a>
        </div>
      </div>
    </nav>
  );
}