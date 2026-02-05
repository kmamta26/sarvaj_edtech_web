import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // ~20% viewport scroll ≈ 120px (more reliable than percentage)
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm"
          : "bg-gradient-to-r from-slate-900 to-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Sarvaj Edtech Pvt Ltd"
              className="h-10 w-auto"
            />
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10">
            {["Services", "Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition ${
                  scrolled
                    ? "text-gray-800 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
                scrolled
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
