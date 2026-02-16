import React from "react";
import scWorkReadyImg from "../../assets/sc-work-ready.jpg";
import tripletenImg from "../../assets/tripleten-certificate.jpg";
import EducationCard from "../cards/EducationCard";
import ExternshipImg from "../../assets/tripleten-externship.jpg";

const Education = () => {
  return (
    <>
      {/* ===== EDUCATION ===== */}
      <section id="education" className="bg-black py-20 px-4 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm tracking-[0.25em] text-white/60">EDUCATION</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
              Certifications & Credentials
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-white/65">
              Professional training and workplace readiness achievements.
            </p>
          </div>

          <div className="mt-10 grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <EducationCard
              title="TripleTen"
              subtitle="Software Engineering Certificate"
              date="Sep 2025"
              description="Completed an intensive full-stack software engineering program focused on real-world projects, collaboration, and modern web development."
              image={tripletenImg}
            />

            <EducationCard
              title="South Carolina Work Credential"
              subtitle="Workplace Readiness Certificate"
              date="Sep 2025"
              description="Credential earned for demonstrating essential workplace readiness and professional skills."
              image={scWorkReadyImg}
            />

            <EducationCard
              title="TripleTen"
              subtitle="Full-Stack Engineering Externship — Fox Finance"
              date="Jan 2026"
              description="Completed a real-world externship building secure full-stack applications using React, Express, Prisma, and PostgreSQL."
              image={ExternshipImg}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
