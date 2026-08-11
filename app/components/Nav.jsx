"use client";

import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/home/about", label: "About" },
  { href: "/home/events", label: "Events" },
  { href: "/home/gallery", label: "Gallery" },
  { href: "/home/music", label: "Music" },
  { href: "/home/video", label: "Video" },
  { href: "/home/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header>
      <nav id="nav-links" className="navLinks">
        <i className="fa fa-bars" id="hamburger"></i>
        <i className="fa fa-xmark" id="close"></i>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}