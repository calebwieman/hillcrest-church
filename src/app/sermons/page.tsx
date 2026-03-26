"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Sermons() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f0e6]">
      <Nav />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/theme-hero1.jpg"
            alt="Sermons"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1814]/80 via-[#2d5a3d]/50 to-[#1a1814]/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <ScrollReveal direction="up">
            <h1
              className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Sermons
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto">
              Hear from our pastors and leaders
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sermons Content */}
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="bg-[#f5f0e6] rounded-2xl p-10 md:p-14">
              <div className="w-20 h-20 bg-[#2d5a3d]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-[#2d5a3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[#2d5a3d] mb-4"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                New Sermons Coming Soon
              </h2>
              <p className="text-[#1a1814]/70 text-lg leading-relaxed mb-6">
                We release Sunday services the following week. Check back soon for new sermons.
              </p>
              <p className="text-[#7a5c3a] text-base">
                Our sermon archive is being updated. Stay tuned!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 px-4 bg-[#2d5a3d]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Join Us In Person
            </h2>
            <p className="text-white/80 text-xl mb-8">
              Experience worship with us this Sunday at 10:45 AM
            </p>
            <Link
              href="/im-new"
              className="inline-block px-10 py-4 bg-white hover:bg-[#f5f0e6] text-[#2d5a3d] rounded-xl font-bold text-lg transition-all duration-300 md:hover:scale-105"
            >
              Plan Your Visit
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
