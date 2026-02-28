"use client";

import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/navbar-img.png";

const linkBase =
  "text-white/80 hover:text-white transition-colors duration-200";
const linkActive = "text-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Background style on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section while scrolling
  useEffect(() => {
    const ids = ["hero", "about-me", "featured-projects", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { root: null, threshold: 0.35 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close on outside click (mobile panel)
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("touchstart", onDown);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("touchstart", onDown);
    };
  }, [open]);

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
    <>
      <header
        className={[
          "fixed top-0 left-0 w-full z-50",
          "transition-all duration-300",
          scrolled || open
            ? "bg-slate-950/80 backdrop-blur border-b border-white/10"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <nav className="mx-auto max-w-6xl px-4 h-16">
          {/* ✅ Mobile uses flex; Desktop uses 3-col grid */}
          <div className="flex items-center justify-between h-full md:grid md:grid-cols-3 md:items-center">
            {/* Left */}
            <a href="#hero" className="flex items-center gap-2">
              <img
                src="/favicon-jm.ico"
                alt="logo"
                className="h-6 w-6 object-contain"
              />
              <h1 className="text-lg md:text-xl font-semibold text-white">
                Jmik Thang
              </h1>
            </a>

            {/* Center (Desktop links) */}
            <ul className="hidden md:flex items-center justify-center gap-8 text-sm font-medium">
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
            <div className="flex items-center gap-2 md:gap-3 md:justify-self-end">
              <a
                href="https://github.com/JMIK-THANG"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition"
                aria-label="GitHub profile"
              >
                <img
                  className="h-9 w-9 md:h-10 md:w-10 rounded-full object-cover ring-1 ring-white/10"
                  src={img}
                  alt="profile"
                />
              </a>

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
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={[
          "md:hidden fixed inset-0 z-40 transition-opacity duration-200",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Mobile panel (below header) */}
      <div
        className={[
          "md:hidden fixed left-0 right-0 z-50",
          "top-16 px-4",
          "transition-all duration-300",
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div
          ref={panelRef}
          className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur p-2 shadow-xl"
        >
          <a
            href="#about-me"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 text-base font-medium text-white/85 hover:bg-white/10 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#featured-projects"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 text-base font-medium text-white/85 hover:bg-white/10 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 text-base font-medium text-white/85 hover:bg-white/10 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-16" />
    </>
  );
}