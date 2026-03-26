import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/im-new", label: "I'm New" },
  { href: "/sermons", label: "Sermons" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1814] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.jpg"
                  alt="Hillcrest Baptist Church"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  Hillcrest
                </p>
                <p className="text-white/60 text-xs leading-tight">Baptist Church</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Whoever you are, wherever you are from, you are welcome here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#c9a84c] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Service Times
            </h4>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm">
                <span className="text-white font-medium">Sunday Bible Study</span>
                <br />9:30 AM
              </li>
              <li className="text-white/60 text-sm">
                <span className="text-white font-medium">Sunday Worship</span>
                <br />10:45 AM
              </li>
              <li className="text-white/60 text-sm">
                <span className="text-white font-medium">Wednesday Adults</span>
                <br />6:30 PM
              </li>
              <li className="text-white/60 text-sm">
                <span className="text-white font-medium">Wednesday College</span>
                <br />7:30 PM
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>902 North Washington</li>
              <li>Stillwater, OK 74075</li>
              <li className="pt-2">
                <a href="tel:4053727330" className="hover:text-[#c9a84c] transition-colors">
                  405.372.7330
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Hillcrest Baptist Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
