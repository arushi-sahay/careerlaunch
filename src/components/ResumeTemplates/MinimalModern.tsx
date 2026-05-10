import { ResumeData } from "@/lib/resume-schema";

export function MinimalModern({ data }: { data: ResumeData }) {
  return (
    <div className="resume-paper bg-white w-full h-[1122px] max-w-[794px] mx-auto p-8 text-gray-900 font-sans shadow-sm overflow-hidden box-border leading-relaxed">
      {/* Header */}
      <header className="mb-6 border-b-2 border-gray-100 pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">{data.fullName || "Your Name"}</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
          {data.email && <span>{data.email}</span>}
          {data.phone && (
            <>
              <span className="text-gray-300">•</span>
              <span>{data.phone}</span>
            </>
          )}
          {data.linkedin && (
            <>
              <span className="text-gray-300">•</span>
              <a href={data.linkedin} className="text-gray-700 hover:underline">{data.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</a>
            </>
          )}
          {data.portfolio && (
            <>
              <span className="text-gray-300">•</span>
              <a href={data.portfolio} className="text-gray-700 hover:underline">{data.portfolio.replace(/^https?:\/\/(www\.)?/, '')}</a>
            </>
          )}
        </div>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-6">
        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Education</h2>
            <div className="space-y-3">
              {data.education.map(edu => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-900">{edu.institution}</h3>
                    <span className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>{edu.degree}</span>
                    {edu.gpa && <span>GPA: {edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Experience</h2>
            <div className="space-y-3">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                    <span className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium mb-2">{exp.company}</div>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Projects</h2>
            <div className="space-y-3">
              {data.projects.map(proj => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-gray-900">
                      {proj.title}
                      {proj.link && <a href={proj.link} className="text-gray-700 ml-2 text-xs font-normal hover:underline">Link</a>}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{proj.technologies}</span>
                  </div>
                  <p className="text-sm text-gray-700">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills & Certifications */}
        <div className="grid grid-cols-2 gap-6">
          {data.skills.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map(skill => (
                  <span key={skill.id} className="text-sm text-gray-700 bg-gray-100 border border-gray-300 px-2 py-1 rounded">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {data.certifications.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Certifications</h2>
              <div className="space-y-2">
                {data.certifications.map(cert => (
                  <div key={cert.id} className="text-sm">
                    <div className="font-medium text-gray-900">{cert.name}</div>
                    <div className="text-gray-500 flex justify-between">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Achievements</h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              {data.achievements.map(ach => (
                <li key={ach.id} className="text-sm text-gray-700">{ach.description}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
