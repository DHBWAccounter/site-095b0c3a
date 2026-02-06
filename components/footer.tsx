"use client";

import Link from "next/link";

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms and Conditions", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-dark py-6">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back to Top */}
        <div className="text-center mb-4">
          <Link
            href="#header"
            className="text-white/60 text-xs hover:text-white transition-colors"
          >
            Back to Top
          </Link>
        </div>

        {/* Footer Links */}
        <nav className="flex justify-center items-center space-x-6">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
