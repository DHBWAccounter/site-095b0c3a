"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", active: true },
  {
    name: "News",
    href: "/blog",
    children: [
      { name: "News", href: "/bitcoin-association-switzerland" },
      { name: "Archive", href: "/archive" },
    ],
  },
  {
    name: "Events",
    href: "/events",
    children: [
      { name: "Roadshow 2025", href: "/roadshow-2025" },
      { name: "Bitcoin Meetup (Zurich)", href: "https://www.meetup.com/Bitcoin-Meetup-Switzerland/", external: true },
      { name: "Bitcoin Meetup Geneva", href: "https://www.meetup.com/Bitcoin-Meetup-Geneva", external: true },
      { name: "Bitcoin Meetup Luzern", href: "https://www.meetup.com/Bitcoin-Meetup-Luzern/", external: true },
      { name: "Bitcoin Meetup Neuchatel", href: "https://www.meetup.com/Bitcoin-Meetup-Neuchatel/", external: true },
      { name: "Bitcoin Meetup Basel", href: "https://www.meetup.com/bitcoin-meetup-basel/", external: true },
    ],
  },
  {
    name: "Membership",
    href: "/membership",
    children: [
      { name: "Private", href: "/private" },
      { name: "Corporate", href: "/corporate" },
      { name: "Our Corporate Members", href: "/our-corporate-members" },
    ],
  },
  {
    name: "Participate",
    href: "/participate",
    children: [
      { name: "Meetups & Events", href: "/meetups-events" },
    ],
  },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "About", href: "/about-1" },
      { name: "Board", href: "/board" },
      { name: "Finances", href: "/finances" },
      { name: "Statutes", href: "/statutes" },
      { name: "Media Kit", href: "/media-kit" },
      { name: "Contact", href: "/contact-1" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png?format=1500w"
              alt="Bitcoin Association Switzerland"
              width={140}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="group relative">
                {item.children ? (
                  <>
                    <button className="flex items-center text-white text-xs font-normal uppercase tracking-widest nav-link py-2">
                      {item.name}
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </button>
                    <div className="dropdown-menu absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-sm py-2 z-50">
                      {item.children.map((child) => (
                        child.external ? (
                          <a
                            key={child.name}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                          >
                            {child.name}
                          </a>
                        ) : (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-xs font-normal uppercase tracking-widest nav-link py-2 ${
                      item.active ? "text-white" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div className="space-y-2">
                      <span className="text-white text-sm font-normal uppercase tracking-widest">
                        {item.name}
                      </span>
                      <div className="pl-4 flex flex-col space-y-2">
                        {item.children.map((child) => (
                          child.external ? (
                            <a
                              key={child.name}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/80 text-sm hover:text-white transition-colors"
                            >
                              {child.name}
                            </a>
                          ) : (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="text-white/80 text-sm hover:text-white transition-colors"
                            >
                              {child.name}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white text-sm font-normal uppercase tracking-widest"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
