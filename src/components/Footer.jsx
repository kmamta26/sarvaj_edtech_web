import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP */}
        <div className="grid gap-12 lg:grid-cols-4 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">
              Sarvaj
            </h3>

            <p className="text-sm text-gray-400 max-w-md leading-relaxed mb-6">
              A private limited service company specializing in web
              development, mobile applications, and innovative digital
              solutions that transform businesses.
            </p>

            {/* Social icons (visual only) */}
            <div className="flex gap-4">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20">
                in
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20">
                X
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20">
                G
              </div>
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20">
                ⬤
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#work" className="hover:text-white">Work</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>UI/UX Design</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="grid gap-6 sm:grid-cols-3 py-6 border-b border-white/10 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            info@sarvaj.com
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} />
            +1 (555) 123-4567
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            San Francisco, CA
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Sarvaj Private Limited. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
