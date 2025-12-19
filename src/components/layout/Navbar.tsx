import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Pillars", path: "/pillars" },
  { name: "Events", path: "/events" },
  { name: "Opportunities", path: "/opportunities" },
  { name: "Gallery", path: "/gallery" },
  { name: "Membership", path: "/membership" },
  { name: "Nominee", path: "/nominee" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-xl border-b border-border/40 shadow-sm">
      <div className="w-full px-2 md:px-4">
        <nav className="flex items-center justify-between h-28 md:h-32">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0 hover:opacity-80 transition-opacity">
            <div className="h-[90px] md:h-[110px] w-auto">
              <img src="/logo.png" alt="Namma Puducherry Logo" className="h-full w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-all duration-200 px-4 py-2 rounded-lg relative",
                  location.pathname === link.path
                    ? "text-primary bg-accent/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gradient" size="sm" asChild className="shadow-soft">
              <Link to="/membership">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/40 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors px-4 py-3 rounded-lg",
                    location.pathname === link.path
                      ? "text-primary bg-accent/60 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button variant="gradient" className="w-full" asChild>
                  <Link to="/membership" onClick={() => setIsOpen(false)}>
                    Join the Movement
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
