import React from 'react'
import scWorkReadyImg from "../../assets/sc-work-ready.jpg"; 
import tripletenImg from "../../assets/tripleten-certificate.jpg"; 
import EducationCard from '../cards/EducationCard';

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

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <EducationCard
              title="TripleTen"
              subtitle="Software Engineering Certificate"
              date="Sep 2025"
              description="Completed an intensive full-stack software engineering program focused on real-world projects, collaboration, and modern web development."
              image={tripletenImg}
              skills={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Git",
                "GitHub",
                "Google Cloud",
              ]}
            />

            <EducationCard
              title="South Carolina Work Credential"
              subtitle="Workplace Readiness Certificate"
              date="Sep 2025"
              description="Credential earned for demonstrating essential workplace readiness and professional skills."
              image={scWorkReadyImg}
              skills={[
                "Employability Skills",
                "Professionalism",
                "Communication",
                "Workplace Readiness",
              ]}
            />
          </div>

        </div>
     
      </section>
   </>
  )
}

export default Education