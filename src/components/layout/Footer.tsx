import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Pillars", path: "/pillars" },
  { name: "Events", path: "/events" },
  { name: "Opportunities", path: "/opportunities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const pillars = [
  { name: "Business", path: "/pillars#business" },
  { name: "Education", path: "/pillars#education" },
  { name: "Spirituality", path: "/pillars#spirituality" },
  { name: "Tourism", path: "/pillars#tourism" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-28 w-auto">
                <img src={logo} alt="Namma Puducherry Logo" className="h-full w-auto object-contain" />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-tight text-white">Namma Puducherry</span>
                <div className="text-xs text-background/60 font-medium">Since 2025</div>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Celebrating heritage, empowering communities, inspiring tomorrow.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <span className="text-xs">f</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <span className="text-xs">in</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <span className="text-xs">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold mb-5 text-background">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-background transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillars */}
          <div>
            <h4 className="font-display text-base font-semibold mb-5 text-background">Our Pillars</h4>
            <ul className="space-y-3">
              {[
                { name: "Community", path: "/pillars#community" },
                { name: "Education", path: "/pillars#education" },
                { name: "Entrepreneurship", path: "/pillars#entrepreneurship" },
                { name: "Tourism", path: "/pillars#tourism" },
                { name: "Environment", path: "/pillars#environment" },
                { name: "Collaboration", path: "/pillars#collaboration" },
              ].map((pillar) => (
                <li key={pillar.path}>
                  <Link
                    to={pillar.path}
                    className="text-background/70 hover:text-background transition-colors text-sm font-medium"
                  >
                    {pillar.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold mb-5 text-background">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors">
                <Mail size={18} className="text-background/50" />
                <span className="font-medium">hello@nammapuducherry.org</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70 hover:text-background transition-colors">
                <MapPin size={18} className="text-background/50 mt-0.5" />
                <span className="font-medium">Puducherry, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 lg:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Namma Puducherry. All Rights Reserved.
          </p>
          <p className="text-background/60 text-sm font-medium">
            Celebrating heritage, empowering communities, inspiring tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
