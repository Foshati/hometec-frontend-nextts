"use client"
import { useState } from "react";
import Container from "@/components/global/container";
import Icons from "@/components/global/icons";
import { Fingerprint, Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="w-8 h-8" />
              <span className="hidden md:flex text-lg font-medium">
                Foshati
              </span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <nav className={`md:block ${menuOpen ? 'block' : 'hidden'} absolute md:static top-14 left-0 right-0 md:left-auto md:top-auto bg-background/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 md:p-0 transition-all duration-300`}>
            <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <Link href="#" className="hover:text-foreground/80 text-sm">Pricing</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Pricing</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">About</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Features</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Blog</Link>
            </ul>
          </nav>

          <div className="hidden md:flex">
            <Fingerprint className="w-6 h-6" />
          </div>
        </div>
      </Container>
    </header>
  );
};