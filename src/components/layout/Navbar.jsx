import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Github } from "lucide-react";
import img from "../../assets/navbar-img.png";

const linkBase =
  "text-white/80 hover:text-white transition-colors duration-200";
const linkActive = "text-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-white">
                Jmik Thang
              </h1>
              <div className="mt-0.5 flex items-center gap-2 text-xs text-white/70">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                <span>Available</span>
              </div>
            </div>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right */}
          <div className="flex items-center gap-3">


            {/* Avatar */}
            <img
              className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10"
              src={img}
              alt="profile"
            />

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
            open ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                About
              </NavLink>
            </li>

            <li className="mt-1">
              <NavLink
                to="/projects"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                Projects
              </NavLink>
            </li>

            <li className="mt-1">
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                Contact
              </NavLink>
            </li>

            {/* Mobile GitHub link */}
            <li className="mt-2">
              <a
                href="https://github.com/JMIK-THANG"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
