"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

const serviceTimes = [
  { label: "Bible Study (All Ages)", time: "9:30 AM" },
  { label: "Sunday Worship", time: "10:45 AM" },
  { label: "Wednesday", time: "6:30 PM" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f0e6]">
      <Nav />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/theme-hero3.jpg"
            alt="Contact Us"
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
              We'd Love to Hear From You
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto">
              Questions, prayers, or just want to say hello?
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <ScrollReveal direction="left">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#2d5a3d] mb-8"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  Get in Touch
                </h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2d5a3d]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#2d5a3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a1814] mb-1">Phone</p>
                      <a href="tel:4053727330" className="text-[#2d5a3d] hover:underline text-lg">405.372.7330</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2d5a3d]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#2d5a3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a1814] mb-1">Address</p>
                      <p className="text-[#1a1814]/70">902 North Washington</p>
                      <p className="text-[#1a1814]/70">Stillwater, OK 74075</p>
                    </div>
                  </div>
                </div>

                {/* Service Times */}
                <div className="bg-[#f5f0e6] rounded-2xl p-8">
                  <h3
                    className="text-xl font-bold text-[#2d5a3d] mb-4"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    Service Times
                  </h3>
                  <div className="space-y-3">
                    {serviceTimes.map((s) => (
                      <div key={s.label} className="flex justify-between items-center py-2 border-b border-[#e5e0d5] last:border-0">
                        <span className="text-[#1a1814] font-medium">{s.label}</span>
                        <span className="text-[#2d5a3d] font-semibold">{s.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Form */}
            <ScrollReveal direction="right" delay={0.1}>
              <div>
                <h3
                  className="text-2xl font-bold text-[#2d5a3d] mb-6"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  Send Us a Message
                </h3>

                {submitted ? (
                  <div className="bg-[#f5f0e6] rounded-2xl p-10 text-center">
                    <div className="w-16 h-16 bg-[#2d5a3d] rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4
                      className="text-2xl font-bold text-[#2d5a3d] mb-3"
                      style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                    >
                      Message Sent!
                    </h4>
                    <p className="text-[#1a1814]/70">
                      Thank you for reaching out. We'll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1814] mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#e5e0d5] bg-[#f5f0e6] text-[#1a1814] focus:outline-none focus:ring-2 focus:ring-[#2d5a3d] transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1814] mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#e5e0d5] bg-[#f5f0e6] text-[#1a1814] focus:outline-none focus:ring-2 focus:ring-[#2d5a3d] transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1814] mb-2">Phone (optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#e5e0d5] bg-[#f5f0e6] text-[#1a1814] focus:outline-none focus:ring-2 focus:ring-[#2d5a3d] transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1a1814] mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#e5e0d5] bg-[#f5f0e6] text-[#1a1814] focus:outline-none focus:ring-2 focus:ring-[#2d5a3d] transition-all resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-primary text-center"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-0 bg-[#f5f0e6]">
        <div className="h-80 md:h-96 w-full">
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
      </section>

      <Footer />
    </div>
  );
}
