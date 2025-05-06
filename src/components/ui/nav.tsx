'use client';

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X, Download, Github, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/sammyowase",
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/samuelowase",
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/+2348025984967", 
    icon: <MessageCircle className="w-5 h-5" />,
    label: "WhatsApp",
  },
];

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    if (href.startsWith("http") || href.startsWith("https") || href.startsWith("wa.me")) {
      window.open(href, "_blank");
      return;
    }

    const element = document.querySelector(href);
    if (!element) return;

    setIsMobileMenuOpen(false);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const renderThemeToggle = () => {
    if (!mounted) return null;
    
    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
    );
  };

  const renderMobileThemeToggle = () => {
    if (!mounted) return null;

    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-full text-left px-3 py-2 text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2"
      >
        {theme === "dark" ? (
          <>
            <Sun className="h-4 w-4" />
            Light Mode
          </>
        ) : (
          <>
            <Moon className="h-4 w-4" />
            Dark Mode
          </>
        )}
      </button>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            onClick={handleNavClick}
            className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Samuel Owase
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-text-secondary hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            
            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                       bg-primary/80 hover:bg-primary text-white
                       shadow-lg shadow-primary/20 hover:shadow-primary/30
                       border border-primary/50 hover:border-primary
                       backdrop-blur-sm transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            
            {/* Theme Toggle */}
            {renderThemeToggle()}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background/95 backdrop-blur-md"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="block px-3 py-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center gap-4 px-3 py-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-text-secondary hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            
            {/* Mobile Download Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-text-secondary hover:text-primary transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            
            {/* Mobile Theme Toggle */}
            {renderMobileThemeToggle()}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}; 