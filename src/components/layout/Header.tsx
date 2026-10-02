"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const homeLinks = [
  { label: "Home", href: "#top" },
  { label: "Courses", href: "/search" },
  { label: "Creators", href: "/creators/purepearl-studio" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = usePathname() === "/";
  const links = isHome ? homeLinks : [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/search" },
    { label: "Creators", href: "/creators/purepearl-studio" },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand brand--light" href={isHome ? "/#top" : "/"} aria-label="ByteSpace home">
          <img src="/assets/bytespace-symbol.svg" alt="" />
          <span>ByteSpace</span>
        </Link>
        <nav className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`} aria-label="Main navigation">
          {links.map((link) => <Link key={link.label} href={link.href}>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link href="/login">Sign In</Link>
          <Link href="/register">Join Us</Link>
          <Link href="/search" className="bag-link" aria-label="Browse courses">
            <img src="/assets/shopping-bag.svg" alt="" />
          </Link>
        </div>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
