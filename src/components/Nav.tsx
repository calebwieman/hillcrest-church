"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/im-new", label: "I'm New" },
  { href: "/sermons", label: "Sermons" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:hover:opacity-80 transition-opacity">
            <div className="relative w-40 h-12 flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Hillcrest Baptist Church"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden md:block">
              <p className="text-[#2d5a3d] font-bold text-lg leading-tight" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                Hillcrest
              </p>
              <p className="text-[#7a5c3a] text-xs leading-tight">Baptist Church</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1a1814] hover:text-[#2d5a3d] font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/im-new"
              className="px-5 py-2.5 bg-[#2d5a3d] hover:bg-[#3a7a52] text-white rounded-lg font-semibold text-sm transition-colors"
            >
              Join Us Sunday
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-[#2d5a3d]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#e5e0d5] py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1a1814] hover:text-[#2d5a3d] font-medium text-base px-2 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/im-new"
              className="mt-2 px-5 py-3 bg-[#2d5a3d] text-white rounded-lg font-semibold text-center text-base transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Us Sunday
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
