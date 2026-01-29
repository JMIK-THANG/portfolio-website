import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          {/* Left */}
          <p className="text-sm text-white/60 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white/80 font-medium">Jmik Thang</span>.  
            All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a
              href="https://github.com/JMIK-THANG"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jmik-thang-8b6728179/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href="mailto:jmikthang5@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>

        {/* subtle divider */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
