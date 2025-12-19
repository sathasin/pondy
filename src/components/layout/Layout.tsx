import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-28 md:pt-32 w-full">{children}</main>
      <Footer />
      {/* Gradient accent line at bottom of page */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
    </div>
  );
}
