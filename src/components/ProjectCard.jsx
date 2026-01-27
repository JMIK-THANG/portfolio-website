import React from "react";
import { ArrowUpRight, Github, Trophy } from "lucide-react";

const ProjectCard = ({
  title,
  badge,
  description,
  image,
  tech,
  liveDemo,
  github,
}) => {
  const hasLive = !!liveDemo && liveDemo !== "#";

  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 md:p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover md:h-52 transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 inline-flex items-center gap-2 text-sm text-white/70">
            <Trophy className="h-4 w-4" />
            {badge}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
          CodeJam
        </span>
      </div>

      <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-white/70">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        {hasLive && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition"
          >
            Live Demo <ArrowUpRight className="h-4 w-4" />
          </a>
        )}

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition"
        >
          GitHub <Github className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
