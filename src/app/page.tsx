"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f0e6]">
      <Nav />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/theme-hero1.jpg"
            alt="Hillcrest Baptist Church"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1814]/80 via-[#2d5a3d]/50 to-[#1a1814]/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <ScrollReveal direction="up">
            <h1
              className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Hillcrest Baptist Church
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light">
              Whoever you are, wherever you are from, you are welcome here.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <Link
              href="/im-new"
              className="inline-block px-10 py-4 bg-[#c9a84c] hover:bg-[#e8c76a] text-[#1a1814] rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Join Us Sunday
            </Link>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#2d5a3d] mb-8"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Welcome to Hillcrest
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[#1a1814]/80 text-lg md:text-xl leading-relaxed mb-8">
              Hillcrest is a place where people can meet Jesus, believers can engage in life-giving community, and everyone is welcome. We believe in creating a space where people can have authentic encounters with Christ, discover their gifts and use them for Him. Join us for our Sunday services!
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link href="/our-story" className="btn-secondary">
              Learn More About Us
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Gathering Times */}
      <section className="py-24 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#2d5a3d] text-center mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Gathering Times
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="text-center text-[#7a5c3a] mb-16 text-lg">We would love to worship with you</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sunday */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#2d5a3d]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#2d5a3d]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#2d5a3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#2d5a3d]"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    Sunday
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[#f5f0e6]">
                    <span className="text-[#1a1814] font-medium">Bible Study</span>
                    <span className="text-[#2d5a3d] font-semibold">9:30 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[#1a1814] font-medium">Worship</span>
                    <span className="text-[#2d5a3d] font-semibold">10:45 AM</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Wednesday */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#c9a84c]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#c9a84c]"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    Wednesday
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-[#f5f0e6]">
                    <span className="text-[#1a1814] font-medium">Adults</span>
                    <span className="text-[#c9a84c] font-semibold">6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-[#1a1814] font-medium">College</span>
                    <span className="text-[#c9a84c] font-semibold">7:30 PM</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story Teaser */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/hero-worship.jpg"
                  alt="Worship at Hillcrest"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#2d5a3d] mb-6"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Our Story
              </h2>
              <p className="text-[#1a1814]/80 text-lg leading-relaxed mb-6">
                Hillcrest has a rich history of people and families who love the Lord with their whole heart. Since 1955, we have been committed to developing dedicated disciples of Jesus Christ and seeing lives transformed as they encounter the Living God.
              </p>
              <p className="text-[#7a5c3a] text-lg italic mb-8">
                "Hillcrest — Where streams of healing water flow."
              </p>
              <Link href="/our-story" className="btn-primary">
                Read Our Story
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 px-4 bg-[#1a1814]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-5xl font-bold text-white text-center mb-4"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Life at Hillcrest
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="text-white/60 text-center mb-16 text-lg">A place where community comes alive</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/church-photo1.jpg", alt: "Hillcrest Church Community" },
              { src: "/church-photo2.jpg", alt: "Fellowship at Hillcrest" },
              { src: "/church-photo3.jpg", alt: "Bible Study at Hillcrest" },
            ].map((photo, i) => (
              <ScrollReveal key={photo.src} delay={i * 0.1}>
                <div className="relative aspect-square rounded-2xl overflow-hidden group">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1814]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-4 bg-[#f5f0e6]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#2d5a3d] mb-6"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  Visit Us
                </h2>
                <p className="text-[#1a1814]/80 text-lg leading-relaxed mb-6">
                  We would love to see you this Sunday! Come as you are and join us for worship.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#2d5a3d] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-[#1a1814]">Address</p>
                      <p className="text-[#1a1814]/70">902 North Washington</p>
                      <p className="text-[#1a1814]/70">Stillwater, OK 74075</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#2d5a3d] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-[#1a1814]">Phone</p>
                      <a href="tel:4053727330" className="text-[#2d5a3d] hover:underline">405.372.7330</a>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="rounded-2xl overflow-hidden shadow-xl h-80 md:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.123456!2d-97.0584!3d36.1156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA2JzU0LjEiTiA5N8KwMDMnMzIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hillcrest Baptist Church Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
