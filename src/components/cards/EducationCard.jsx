import React, { useState } from "react";
import { GraduationCap, FileText, X } from "lucide-react";

const EducationCard = ({ title, subtitle, description, image, date }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group cursor-pointer rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 md:p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
      >
        {/* PREVIEW */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 h-48 md:h-52 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="mt-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {title}
            </h3>
            <p className="mt-1 inline-flex items-center gap-2 text-sm text-white/70">
              <GraduationCap className="h-4 w-4" />
              {subtitle}
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
            {date}
          </span>
        </div>

        <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-white/70">
          {description}
        </p>
      </div>

      {/* FULL VIEW MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-6xl bg-black rounded-2xl border border-white/10">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/60 border border-white/10 p-2 text-white hover:bg-white hover:text-black transition"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EducationCard;
