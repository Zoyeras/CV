import React from "react";
import type { CVData } from "../data/cvData";

interface CVLayoutProps {
  data: CVData;
}

// Subcomponentes para mantener el código limpio
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-bold text-slate-800 border-b-2 border-indigo-600 pb-1 mb-3 uppercase tracking-wider">
    {children}
  </h2>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-semibold border border-slate-200">
    {children}
  </span>
);

export const CVLayout: React.FC<CVLayoutProps> = ({ data }) => {
  const { profile, experience, projects, skills, education, labels } = data;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 font-sans print:bg-white print:p-0 print:m-0">
      <div className="max-w-[210mm] mx-auto bg-white shadow-xl rounded-none md:rounded-lg overflow-hidden print:shadow-none print:w-full print:max-w-none">
        {/* HEADER COMPACTO */}
        <header className="bg-slate-900 text-white p-6 print:p-6 print:bg-white print:text-black print:border-b-2 print:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight mb-1">
                {profile.name}
              </h1>
              <p className="text-indigo-400 text-lg font-medium print:text-indigo-700">
                {profile.role}
              </p>
              <div className="text-slate-400 mt-2 flex flex-wrap gap-3 text-xs print:text-slate-600">
                <span className="flex items-center gap-1">
                  📍 {profile.location}
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  ✉️ {profile.email}
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  📱 {profile.phone}
                </span>
              </div>
            </div>

            {/* Redes Sociales - Visibles en Web, Texto en Print */}
            <div className="flex gap-3 print:hidden">
              {profile.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Links para versión impresa */}
            <div className="hidden print:flex flex-col text-xs text-right text-slate-600">
              {profile.social.map((s) => (
                <div key={s.name}>{s.url}</div>
              ))}
            </div>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL - LAYOUT 1 PÁGINA */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 print:p-6 print:gap-6">
          {/* COLUMNA IZQUIERDA (Principal - 66%) */}
          <div className="md:col-span-8 space-y-6">
            {/* Perfil */}
            <section>
              <SectionTitle>
                {profile.role === "Full Stack Web Developer"
                  ? "Perfil"
                  : "Profile"}
              </SectionTitle>
              <p className="text-sm text-gray-700 leading-relaxed text-justify">
                {profile.summary}
              </p>
            </section>

            {/* Experiencia */}
            <section>
              <SectionTitle>{labels.experience}</SectionTitle>
              <div className="space-y-4">
                {experience.map((job) => (
                  <div
                    key={job.id}
                    className="relative pl-3 border-l-2 border-slate-200"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-gray-800 text-base">
                        {job.role}
                      </h3>
                      <span className="text-xs text-indigo-700 font-bold whitespace-nowrap bg-indigo-50 px-2 py-0.5 rounded">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 font-semibold mb-1">
                      {job.company}
                    </p>
                    <p className="text-xs text-gray-600 mb-2 italic">
                      {job.description}
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-gray-600 marker:text-indigo-500">
                      {job.achievements.map((ach, index) => (
                        <li key={index}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Proyectos */}
            <section>
              <SectionTitle>{labels.projects}</SectionTitle>
              <div className="grid gap-3">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-slate-50 p-3 rounded border border-slate-100 print:bg-white print:border-slate-200"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-gray-800 text-sm">
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] text-indigo-600 hover:underline print:hidden"
                      >
                        Link ↗
                      </a>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono text-slate-500 bg-white px-1.5 border rounded print:border-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* COLUMNA DERECHA (Lateral - 33%) */}
          <div className="md:col-span-4 space-y-6">
            {/* Skills */}
            <section>
              <SectionTitle>{labels.skills}</SectionTitle>

              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 mb-1 uppercase">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 mb-1 uppercase">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.backend.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 mb-1 uppercase">
                    Database
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.database.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-500 mb-1 uppercase">
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.tools.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Educación */}
            <section>
              <SectionTitle>{labels.education}</SectionTitle>
              {education.map((edu) => (
                <div key={edu.id} className="mb-3">
                  <h3 className="font-bold text-gray-800 text-sm">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-gray-600">{edu.institution}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {edu.period}
                  </p>
                </div>
              ))}
            </section>

            {/* Botón Descarga (Oculto en impresión) */}
            <div className="pt-4 print:hidden">
              <button
                onClick={() => window.print()}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded font-bold text-sm hover:bg-indigo-700 transition-all shadow active:scale-95 flex justify-center items-center gap-2"
              >
                <span>🖨️</span> {labels.download}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
