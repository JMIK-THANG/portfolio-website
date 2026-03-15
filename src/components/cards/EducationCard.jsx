import React from "react";

const EducationCard = ({ certificate }) => {
  return (
    <div className="grid w-full items-center gap-5 md:grid-cols-2 md:gap-6">
      <div className="rounded-[20px] border border-white/10 bg-[#09153a] p-3">
        <div className="flex h-[210px] items-center justify-center md:h-[240px]">
          <img
            src={certificate.image}
            alt={certificate.subtitle}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-xs tracking-[0.18em] text-white/45 md:text-sm">
          {certificate.date}
        </p>

        <h3 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
          {certificate.title}
        </h3>

        <p className="mt-2 text-base font-medium leading-snug text-sky-300/95 md:text-2xl">
          {certificate.subtitle}
        </p>

        <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 md:text-base">
          {certificate.description}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;