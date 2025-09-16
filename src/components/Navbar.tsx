"use client";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { href: "/", label: "About" },
    // { href: "/blogs", label: "Blogs" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex items-center flex-wrap gap-2 mb-8">
      {navItems.map((item) => (
        <Link key={item.href} to={item.href}>
          <motion.div
            whileTap={{ scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className={`relative text-sm transition-colors px-3 py-2 rounded-md ${
              location.pathname === item.href 
                ? "text-nav-active-foreground" 
                : "text-nav-inactive hover:bg-nav-inactive-hover"
            }`}
          >
            <span className="relative z-10">{item.label}</span>
            <motion.span
              className={`absolute inset-0 z-0 rounded-md ${
                location.pathname === item.href ? "bg-nav-active" : "bg-transparent"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            />
          </motion.div>
        </Link>
      ))}
    </div>
  );
}