// import { useEffect, useState } from "react";
// import logo from "../assets/logo.png";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       // ~20% viewport scroll ≈ 120px (more reliable than percentage)
//       if (window.scrollY > 120) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white shadow-sm"
//           : "bg-gradient-to-r from-slate-900 to-slate-800"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="h-20 flex items-center justify-between">
//           {/* LOGO */}
//           <div className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="Sarvaj Edtech Pvt Ltd"
//               className="h-10 w-auto"
//             />
//           </div>

//           {/* NAV LINKS */}
//           <nav className="hidden md:flex items-center gap-10">
//             {["Services", "Work", "About", "Contact"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className={`text-sm font-medium transition ${
//                   scrolled
//                     ? "text-gray-800 hover:text-gray-900"
//                     : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 {item}
//               </a>
//             ))}

//             {/* CTA */}
//             <a
//               href="#contact"
//               className={`px-6 py-3 rounded-full text-sm font-semibold transition ${
//                 scrolled
//                   ? "bg-gray-900 text-white hover:bg-gray-800"
//                   : "bg-white text-gray-900 hover:bg-gray-100"
//               }`}
//             >
//               Get Started
//             </a>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu when clicking a link
  const handleLinkClick = () => setMobileOpen(false);

  const navItems = ["Services", "Work", "About", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
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

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-sm font-medium
              after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0
              after:transition-all after:duration-300
              hover:after:w-full
              ${scrolled
                    ? "text-gray-800 hover:text-gray-900 after:bg-gray-900"
                    : "text-white/90 hover:text-white after:bg-white"
                  }`}
              >
                {item}
              </a>

            ))}

            <a
              href="#contact"
              className={`px-6 py-3 rounded-full text-sm font-semibold transition ${scrolled
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-white text-gray-900 hover:bg-gray-100"
                }`}
            >
              Get Started
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden transition ${scrolled ? "text-gray-900" : "text-white"
              }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full transition-all duration-300 ${mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
          } ${scrolled ? "bg-white" : "bg-slate-900"
          } shadow-lg`}
      >
        <nav className="flex flex-col items-center gap-6 py-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick}
              className={`text-base font-medium ${scrolled
                  ? "text-gray-900"
                  : "text-white"
                }`}
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleLinkClick}
            className={`px-6 py-3 rounded-full text-sm font-semibold ${scrolled
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900"
              }`}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}

