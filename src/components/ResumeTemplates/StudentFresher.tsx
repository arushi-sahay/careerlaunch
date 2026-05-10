import { ResumeData } from "@/lib/resume-schema";

export function StudentFresher({ data }: { data: ResumeData }) {
  return (
    <div className="resume-paper bg-white w-full h-[1122px] max-w-[794px] mx-auto text-gray-900 font-sans overflow-hidden box-border flex">
      {/* Sidebar - Prominent Skills & Info */}
      <aside className="w-1/3 bg-slate-50 p-8 border-r border-slate-200 flex flex-col gap-8 h-full">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 mb-2 leading-none">{data.fullName || "Your Name"}</h1>
          <div className="h-1 w-12 bg-blue-600 mb-4"></div>
          
          <div className="space-y-2 text-sm text-slate-600 break-words">
            {data.email && <div>{data.email}</div>}
            {data.phone && <div>{data.phone}</div>}
            {data.linkedin && <div><a href={data.linkedin} className="hover:text-blue-600">{data.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</a></div>}
            {data.portfolio && <div><a href={data.portfolio} className="hover:text-blue-600">{data.portfolio.replace(/^https?:\/\/(www\.)?/, '')}</a></div>}
          </div>
        </div>

        {data.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-300 mb-3 pb-1">Skills</h2>
            <div className="flex flex-col gap-2">
              {data.skills.map(skill => (
                <div key={skill.id} className="text-sm font-medium text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-sm">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {data.certifications.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-300 mb-3 pb-1">Certifications</h2>
            <div className="space-y-3">
              {data.certifications.map(cert => (
                <div key={cert.id} className="text-sm">
                  <div className="font-bold text-slate-800">{cert.name}</div>
                  <div className="text-slate-500 text-xs">{cert.issuer} • {cert.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="w-2/3 p-8 bg-white flex flex-col gap-6">
        
        {/* Education (Top priority for students) */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">🎓</span>
              Education
            </h2>
            <div className="space-y-4 border-l-2 border-slate-100 ml-3 pl-4">
              {data.education.map(edu => (
                <div key={edu.id} className="relative">
                  <div className="absolute w-2.5 h-2.5 bg-blue-600 rounded-full -left-[21px] top-1.5 border-2 border-white"></div>
                  <h3 className="font-bold text-slate-800">{edu.degree}</h3>
                  <div className="text-slate-600 text-sm font-medium">{edu.institution}</div>
                  <div className="flex gap-4 text-xs text-slate-500 mt-1">
                    <span>{edu.startDate} - {edu.endDate}</span>
                    {edu.gpa && <span className="font-semibold text-slate-700">GPA: {edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects (Secondary priority to show practical skills) */}
        {data.projects.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">🚀</span>
              Academic & Personal Projects
            </h2>
            <div className="space-y-5">
              {data.projects.map(proj => (
                <div key={proj.id}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h3 className="font-bold text-slate-800">{proj.title}</h3>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{proj.technologies}</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience (If any) */}
        {data.experience.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">💼</span>
              Experience
            </h2>
            <div className="space-y-5">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <h3 className="font-bold text-slate-800">{exp.position}</h3>
                  <div className="flex justify-between text-sm text-slate-500 mb-2">
                    <span className="font-medium text-slate-700">{exp.company}</span>
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Achievements */}
        {data.achievements.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs">🏆</span>
              Achievements & Awards
            </h2>
            <ul className="space-y-2">
              {data.achievements.map(ach => (
                <li key={ach.id} className="text-sm text-slate-700 flex gap-2">
                  <span className="text-yellow-500">★</span>
                  <span>{ach.description}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

      </main>
    </div>
  );
}
