"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#top" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand brand--light" href="#top" aria-label="ByteSpace home">
          <img src="/assets/bytespace-symbol.svg" alt="" />
          <span>ByteSpace</span>
        </a>
        <nav className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`} aria-label="Main navigation">
          {links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="header-actions">
          <a href="/login">Sign In</a>
          <a href="/register">Join Us</a>
          <a href="#courses" className="bag-link" aria-label="Browse courses">
            <img src="/assets/shopping-bag.svg" alt="" />
          </a>
        </div>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
