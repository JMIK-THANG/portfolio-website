import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/navbar-img.png";

const linkBase =
  "text-white/80 hover:text-white transition-colors duration-200";
const linkActive = "text-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Name + availability */}
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-white">
                Jmik Thang
              </h1>
              <div className="mt-1 flex items-center gap-2 text-sm text-white/70">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                <span>Available</span>
              </div>
            </div>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 text-lg font-medium">
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

          {/* Right: avatar + hamburger */}
          <div className="flex items-center gap-3">
            <img
              className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10"
              src={img}
              alt="profile"
            />

            {/* Hamburger button (mobile) */}
           <button
  type="button"
  className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
  aria-label="Toggle menu"
  aria-expanded={open}
  onClick={() => setOpen((v) => !v)}
>
  <div className="relative h-5 w-6">
    {/* top bar */}
    <span
      className={[
        "absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-white",
        "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        open ? "rotate-45" : "-translate-y-2",
      ].join(" ")}
    />
    {/* middle bar */}
    <span
      className={[
        "absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-white",
        "transition-all duration-200 ease-out",
        open ? "opacity-0 scale-x-75" : "opacity-100 scale-x-100",
      ].join(" ")}
    />
    {/* bottom bar */}
    <span
      className={[
        "absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-white",
        "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        open ? "-rotate-45" : "translate-y-2",
      ].join(" ")}
    />
  </div>
</button>

          </div>
        </div>

        {/* Mobile menu (smooth dropdown) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <ul
            className={`rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur transition-all duration-300 ${
              open ? "translate-y-0" : "-translate-y-2"
            }`}
          >
            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-base font-medium ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  } transition`
                }
              >
                About
              </NavLink>
            </li>

            <li className="mt-1">
              <NavLink
                to="/projects"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-base font-medium ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  } transition`
                }
              >
                Projects
              </NavLink>
            </li>

            <li className="mt-1">
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-base font-medium ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  } transition`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
