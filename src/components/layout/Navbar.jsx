import React, { useEffect, useState } from "react";

import img from "../../assets/navbar-img.png";

const linkBase =
  "text-white/80 hover:text-white transition-colors duration-200";
const linkActive = "text-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Optional: highlight active section while scrolling
  useEffect(() => {
    const ids = ["home", "about-me", "skills", "projects", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { root: null, threshold: 0.3 },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const NavItem = ({ href, id, children, onClick, className = "" }) => (
    <a
      href={href}
      onClick={onClick}
      className={`${linkBase} ${activeId === id ? linkActive : ""} ${className}`}
    >
      {children}
    </a>
  );

  return (
    <header className="z-50 bg-slate-900 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left */}
          <a href="#" className="flex items-center gap-4">
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-white">
                Jmik Thang
              </h1>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            <li>
              <NavItem href="#about-me" id="about-me">
                About
              </NavItem>
            </li>
            <li>
              <NavItem href="#featured-projects" id="featured-projects">
                Projects
              </NavItem>
            </li>
            <li>
              <NavItem href="#contact" id="contact">
                Contact
              </NavItem>
            </li>
            
          </ul>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/JMIK-THANG"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition"
              aria-label="GitHub profile"
            >
              {" "}
              <img
                className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10"
                src={img}
                alt="profile"
              />
            </a>

            {/* Avatar */}

            {/* Hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="relative h-5 w-6">
                <span
                  className={[
                    "absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-white transition-all duration-300",
                    open ? "rotate-45" : "-translate-y-2",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-white transition-all duration-200",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-white transition-all duration-300",
                    open ? "-rotate-45" : "translate-y-2",
                  ].join(" ")}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-72 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
            <li>
              <a
                href="#about-me"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                About
              </a>
            </li>

            <li className="mt-1">
              <a
                href="#featured-projects"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                Projects
              </a>
            </li>

            <li className="mt-1">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                Contact 
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}