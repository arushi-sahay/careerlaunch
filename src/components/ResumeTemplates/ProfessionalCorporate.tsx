import { ResumeData } from "@/lib/resume-schema";

export function ProfessionalCorporate({ data }: { data: ResumeData }) {
  return (
    <div className="resume-paper bg-white w-full h-[1122px] max-w-[794px] mx-auto p-[1in] text-gray-900 font-serif overflow-hidden box-border leading-normal">
      {/* Header */}
      <header className="text-center mb-6 border-b-2 border-gray-800 pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest text-gray-900 mb-2">{data.fullName || "Your Name"}</h1>
        <div className="flex justify-center flex-wrap gap-x-3 text-sm text-gray-700 font-sans">
          {data.email && <span>{data.email}</span>}
          {data.phone && (
            <>
              <span>|</span>
              <span>{data.phone}</span>
            </>
          )}
          {data.linkedin && (
            <>
              <span>|</span>
              <a href={data.linkedin} className="hover:underline">{data.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</a>
            </>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-5">
        
        {/* Experience */}
        {data.experience.length > 0 && (
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-3 pb-1">Professional Experience</h2>
            <div className="space-y-4">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900">{exp.company}</h3>
                    <span className="text-sm font-sans text-gray-600">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="italic text-gray-800 mb-1">{exp.position}</div>
                  <div className="text-sm text-gray-800 font-sans text-justify">
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-3 pb-1">Education</h2>
            <div className="space-y-3">
              {data.education.map(edu => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                    <span className="text-sm font-sans text-gray-600">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-800 italic">
                    <span>{edu.degree}</span>
                    {edu.gpa && <span>GPA: {edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section>
            <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-3 pb-1">Key Projects</h2>
            <div className="space-y-3">
              {data.projects.map(proj => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline font-bold">
                    <span>{proj.title}</span>
                    <span className="font-normal font-sans text-xs text-gray-600">{proj.technologies}</span>
                  </div>
                  <p className="text-sm font-sans text-gray-800 mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Two column bottom */}
        <div className="grid grid-cols-2 gap-8">
          {/* Skills */}
          {data.skills.length > 0 && (
            <section>
              <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-3 pb-1">Core Competencies</h2>
              <ul className="list-disc list-outside ml-4 text-sm font-sans text-gray-800 grid grid-cols-2 gap-x-4">
                {data.skills.map(skill => (
                  <li key={skill.id} className="mb-1">{skill.name}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications & Achievements */}
          <div>
            {data.certifications.length > 0 && (
              <section className="mb-5">
                <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-3 pb-1">Certifications</h2>
                <ul className="text-sm font-sans text-gray-800 space-y-2">
                  {data.certifications.map(cert => (
                    <li key={cert.id}>
                      <span className="font-bold">{cert.name}</span> — {cert.issuer} ({cert.date})
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {data.achievements.length > 0 && (
              <section>
                <h2 className="text-lg font-bold uppercase tracking-widest border-b border-gray-300 mb-3 pb-1">Achievements</h2>
                <ul className="list-disc list-outside ml-4 text-sm font-sans text-gray-800 space-y-1">
                  {data.achievements.map(ach => (
                    <li key={ach.id}>{ach.description}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
