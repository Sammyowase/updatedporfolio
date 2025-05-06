"use client";

import { useState, useEffect, } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X, Download, Github, Linkedin, MessageCircle } from "lucide-react";
import Link from "next/link";

const navItemms = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills"},
    { href: "#projects", label: "Projects"},
    { href: "#contact", label: "Contact"},
];

const socialLinks = [
    {
        href: "https://github.com/sammyowase",
        icon: <Github className="	w-5 h-5" />,
        label: "GitHub",
    },
    {
        href: "https://linkedin.com/in/samuelowase",
        icon: <Linkedin className="	w-5 h-5" />,
        label: "Linkedin",
    },
    {
        href: "https://wa.me/+2348025984967",
        icon: <MessageCircle className="	w-5 h-5" />,
        label: "WhatsApp",
    },
];

export const Nav = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect (() =>{
        setMounted(true);

    }, []);

    useEffect(() =>{
        const handleScroll = ()=> {
            setIsScrolled(window.scrollY > 50)
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
}


