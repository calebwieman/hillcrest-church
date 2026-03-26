"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const timeline = [
  {
    year: "1955",
    title: "A Church is Born",
    description:
      "Land at Tyler St. and Washington St. purchased; first auditorium (now nursery) completed. By Christmas, called first full-time pastor Rev. Tom Tipton and ordained six deacons.",
  },
  {
    year: "1957",
    title: "Growing Strong",
    description:
      "Two-story educational building dedicated to meet the growing need for space as the congregation continued to expand.",
  },
  {
    year: "1964",
    title: "A Place to Worship",
    description:
      "New sanctuary dedicated — seats 500 worshipers. A significant milestone as Hillcrest became a landmark in the Stillwater community.",
  },
  {
    year: "1984",
    title: "A New Sanctuary",
    description:
      "Built the current sanctuary and converted old space into fellowship hall. All education space and old sanctuary remain in use today.",
  },
];

const treeDelays = ["0s", "0.75s", "1.5s", "2.25s"];

export default function OurStory() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f0e6]">
      <Nav />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/theme-hero3.jpg"
            alt="Our Story"
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
              Our Story
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto">
              How it all started — a legacy of faith since 1955
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Mission */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-4">
                Our Mission
              </p>
              <h2
                className="text-3xl md:text-5xl font-bold text-[#2d5a3d] mb-6"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Developing Dedicated Disciples of Jesus Christ
              </h2>
              <div className="w-24 h-1 bg-[#c9a84c] mx-auto rounded-full" />
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal delay={0.1}>
            <div className="bg-[#f5f0e6] rounded-2xl p-8 md:p-12 text-center mb-20">
              <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-4">
                Our Vision
              </p>
              <blockquote
                className="text-2xl md:text-3xl text-[#2d5a3d] italic mb-6 leading-snug"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                "Seek the welfare of the city where I have sent you into exile, and pray to the Lord on its behalf; for in its welfare you will have welfare."
              </blockquote>
              <p className="text-[#1a1814]/70 text-sm md:text-base">— Jeremiah 29:7</p>
              <p className="text-[#1a1814]/80 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
                We believe that Hillcrest is the place where streams of healing water flow. Our vision is to see lives transformed as they encounter the Living God.
              </p>
            </div>
          </ScrollReveal>

          {/* Our Story Intro */}
          <ScrollReveal>
            <div className="text-center">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#2d5a3d] mb-6"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                How It All Started
              </h2>
              <p className="text-[#1a1814]/80 text-lg leading-relaxed max-w-3xl mx-auto">
                Hillcrest has a rich history of people and families who love the Lord with their whole heart. It is our mission to continue that mission into the future by developing dedicated disciples of Jesus Christ. It is our vision to see lives transformed as they encounter the Living God.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-24 px-4 bg-[#f5f0e6]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#2d5a3d] text-center mb-16"
              style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
            >
              Our History
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-[#c9a84c]/30" />

            <div className="space-y-8">
              {timeline.map((entry, i) => (
                <ScrollReveal key={entry.year} delay={i * 0.1}>
                  <div className="relative pl-12 md:pl-20">
                    {/* Year badge */}
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#2d5a3d] flex items-center justify-center shadow-md z-10 overflow-hidden">
                      {i === 0 ? (
                        /* Cross — Church is Born */
                        <svg viewBox="0 0 32 32" className="w-6 h-6 text-[#f5f0e6] icon-cross" fill="currentColor">
                          <rect x="13" y="4" width="6" height="24" rx="1" />
                          <rect x="6" y="11" width="20" height="6" rx="1" />
                        </svg>
                      ) : i === 1 ? (
                        /* Pine tree — Growing Strong */
                        <svg viewBox="0 0 32 40" className="w-6 h-7 text-[#f5f0e6] icon-tree" style={{ animationDelay: treeDelays[i] }} fill="currentColor">
                          <polygon points="16,22 2,36 5,33 9,37 12,33 16,36 20,33 23,37 27,33 30,36 16,22" />
                          <polygon points="16,13 6,25 9,23 13,26 16,23 19,26 23,23 26,25 16,13" />
                          <polygon points="16,4 10,13 12,12 14,14 16,11 18,14 20,12 22,13 16,4" />
                          <rect x="13" y="36" width="6" height="4" rx="1" opacity="0.6" />
                        </svg>
                      ) : i === 2 ? (
                        /* Bible — A Place to Worship */
                        <svg viewBox="0 0 32 32" className="w-6 h-6 text-[#f5f0e6] icon-bible" fill="currentColor">
                          <rect x="4" y="5" width="24" height="22" rx="2" />
                          <rect x="6" y="7" width="20" height="18" rx="1" fill="#2d5a3d" />
                          <rect x="9" y="10" width="14" height="2" rx="0.5" fill="currentColor" opacity="0.5" />
                          <rect x="9" y="14" width="14" height="1" rx="0.5" fill="currentColor" opacity="0.3" />
                          <rect x="9" y="17" width="10" height="1" rx="0.5" fill="currentColor" opacity="0.3" />
                          <rect x="9" y="20" width="12" height="1" rx="0.5" fill="currentColor" opacity="0.3" />
                          <rect x="9" y="23" width="8" height="1" rx="0.5" fill="currentColor" opacity="0.3" />
                        </svg>
                      ) : (
                        /* Cup of wine — A New Sanctuary */
                        <svg viewBox="0 0 32 32" className="w-6 h-6 text-[#f5f0e6] icon-cup" fill="currentColor">
                          <path d="M10 4 L22 4 L20 18 Q19.5 22 16 22 Q12.5 22 12 18 Z" />
                          <rect x="14.5" y="22" width="3" height="4" rx="0.5" />
                          <rect x="11" y="26" width="10" height="2" rx="1" />
                          {/* Wine in cup */}
                          <path d="M11 10 Q10.5 14 11 18 L21 18 Q21.5 14 21 10 Z" fill="#8b1a1a" opacity="0.8" />
                          {/* Rim highlight */}
                          <ellipse cx="16" cy="4" rx="6" ry="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                        </svg>
                      )}
                    </div>

                    <div className="card p-6 md:p-8">
                      <span
                        className="text-2xl md:text-3xl font-bold text-[#c9a84c] block mb-1"
                        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                      >
                        {entry.year}
                      </span>
                      <h3
                        className="text-lg font-bold text-[#2d5a3d] mb-2"
                        style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                      >
                        {entry.title}
                      </h3>
                      <p className="text-[#1a1814]/70 text-sm md:text-base leading-relaxed">{entry.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 px-4 bg-[#2d5a3d]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-white/80 text-xl mb-6">
              Join us every Sunday as we gather to worship together at 10:45
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
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
