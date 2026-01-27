import React from "react";
import { ArrowUpRight, GraduationCap, FileText } from "lucide-react";

const EducationCard = ({
  title,
  subtitle,
  description,
  image, // optional
  date,
  linkLabel,
  linkHref,
  skills = [],
}) => {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 md:p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      
      {/* IMAGE OR PLACEHOLDER */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 h-48 md:h-52 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-white/60">
            <FileText className="h-10 w-10" />
            <span className="text-sm">Certificate (PDF)</span>
          </div>
        )}
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

      {skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {linkHref && (
        <div className="mt-6">
          <a
            href={linkHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition"
          >
            {linkLabel}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
};

export default EducationCard;
