import React from "react";
import { Link } from "react-router-dom";
import type { CVData } from "../data/cvData";

interface CVLayoutProps {
  data: CVData;
  locale: "es" | "en";
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-bold text-slate-800 border-b-2 border-indigo-600 pb-1 mb-2 uppercase tracking-wider">
    {children}
  </h2>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[10px] font-semibold border border-slate-200">
    {children}
  </span>
);

export const CVLayout: React.FC<CVLayoutProps> = ({ data, locale }) => {
  const { profile, experience, projects, skills, education, labels } = data;
  const educationItems = Array.isArray(education) ? education : [education];
  const switchPath = locale === "es" ? "/en" : "/";
  const switchLabel = locale === "es" ? "View in English" : "Ver en Español";
  const downloadHref =
    locale === "es"
      ? "/CV_Samuel_Loaiza_Backend_NET_ES.pdf"
      : "/CV_Samuel_Loaiza_Backend_NET_EN.pdf";
  const downloadFileName =
    locale === "es"
      ? "CV_Samuel_Loaiza_Backend_NET_ES.pdf"
      : "CV_Samuel_Loaiza_Backend_NET_EN.pdf";

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4 font-sans print:bg-white print:p-0 print:m-0">
      <div className="max-w-[210mm] mx-auto bg-white shadow-xl overflow-hidden print:shadow-none print:w-full print:max-w-none">
        <div className="no-print bg-slate-100 border-b border-slate-200 px-6 py-3 flex justify-end gap-2">
          <Link
            to={switchPath}
            className="px-3 py-1.5 rounded bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 transition-colors"
          >
            {switchLabel}
          </Link>
          <a
            href={downloadHref}
            download={downloadFileName}
            className="px-3 py-1.5 rounded bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors"
          >
            {labels.download}
          </a>
        </div>
        {/* HEADER COMPACTO */}
        <header className="bg-slate-900 text-white p-6 print:p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tighter border-l-4 border-indigo-500 pl-4 uppercase">
                {profile.name}
              </h1>
              <p className="text-indigo-400 font-medium mt-1 text-lg pl-4">
                {profile.role}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span>📍</span> {profile.location}
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span> {profile.email}
              </div>
              <div className="flex items-center gap-2">
                <span>📱</span> {profile.phone}
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 print:p-6 grid grid-cols-1 md:grid-cols-3 gap-8 print:gap-6">
          {/* COLUMNA IZQUIERDA (Principal) */}
          <div className="md:col-span-2 space-y-6 print:space-y-4">
            <section>
              <SectionTitle>Perfil</SectionTitle>
              <p className="text-gray-700 leading-relaxed text-sm text-justify">
                {profile.summary}
              </p>
            </section>

            <section>
              <SectionTitle>{labels.experience}</SectionTitle>
              {experience.map((exp) => (
                <div key={exp.id} className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-md font-bold text-slate-800">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">
                    {exp.company}
                  </p>
                  <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section>
              <SectionTitle>{labels.projects}</SectionTitle>
              <div className="grid grid-cols-1 gap-3">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="border border-slate-100 p-3 rounded-lg"
                  >
                    <h3 className="font-bold text-sm text-slate-800 flex justify-between">
                      {project.title}
                      <span className="text-[10px] text-indigo-500">
                        {project.stack.join(" • ")}
                      </span>
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* COLUMNA DERECHA (Sidebar) */}
          <div className="space-y-6 print:space-y-4">
            <section>
              <SectionTitle>{labels.skills}</SectionTitle>
              <div className="space-y-3">
                {[
                  { label: "Frontend", items: skills.frontend },
                  { label: "Backend", items: skills.backend },
                  { label: "Database", items: skills.database },
                  { label: "Tools", items: skills.tools },
                ].map((group) => (
                  <div key={group.label}>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-1.5">
                      {group.label}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {group.items.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle>{labels.education}</SectionTitle>
              {educationItems.map((edu) => (
                <div key={edu.id} className="mb-2">
                  <h3 className="font-bold text-gray-800 text-xs">
                    {edu.degree}
                  </h3>
                  <p className="text-[11px] text-gray-600">{edu.institution}</p>
                  <p className="text-[10px] text-gray-400">{edu.period}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
