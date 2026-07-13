"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems, pagePaths, type PageId, type ServiceId } from "@/lib/content";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

type NavigationProps = {
  activePage: PageId;
  onNavigate: (page: PageId, service?: ServiceId) => void;
};

export default function Navigation({
  activePage,
}: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="nav">
      <div className="nav-inner">
        <Link
          href={pagePaths.home}
          className="logo"
          onClick={() => setMenuOpen(false)}
          aria-label="Go to home"
        >
          <div className="logo-box">
            <PlaceholderImage
              src="/home/logo.png"
              label="Andalucia emblem"
              alt="Andalucia Engineering Consulting star emblem"
            />
          </div>
          <div className="logo-words">
            <b>Andalucia</b>
            <span>Engineering Consulting</span>
          </div>
        </Link>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={pagePaths[item.id]}
                className={activePage === item.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={pagePaths.contact}
              onClick={() => setMenuOpen(false)}
              className="nav-pill"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          className={`nav-menu-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <Link
            href={pagePaths[item.id]}
            key={item.id}
            className={activePage === item.id ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={pagePaths.contact}
          className={`mobile-contact ${activePage === "contact" ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
