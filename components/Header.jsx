"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  // "/" only matches exactly; other links also match their sub-routes
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  // Close the mobile menu after navigating
  useEffect(() => setMenuOpen(false), [pathname]);

  // Shadow while scrolling down, none while scrolling up (as in the original site)
  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const top = window.scrollY;
      setShadow(top > last);
      last = Math.max(top, 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on outside click or when the window gets wide
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    document.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav
      className="navbar"
      ref={navRef}
      style={{ boxShadow: shadow ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none" }}
    >
      <div className="nav-container">
        <Link href="/" className="logo">
          <img src={site.logo} alt="Singson Logo" />
        </Link>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={active ? "active" : ""}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
