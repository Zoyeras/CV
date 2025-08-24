import React, { useState } from "react";

// Define types for our components
interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface SkillItemProps {
  name: string;
  level: number;
}

interface EducationItemProps {
  title: string;
  institution: string;
  period: string;
}

interface IconProps {
  className?: string;
}

const App = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8">
          <h1 className="text-4xl font-bold mb-2">Samuel Loaiza Ocampo</h1>
          <p className="text-indigo-100">Desarrollador Full Stack</p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center">
              <MailIcon className="w-5 h-5 mr-2" />
              <span>loaizaocampos@gmail.com</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" />
              <span>3112617910</span>
            </div>
            <div className="flex items-center">
              <LocationIcon className="w-5 h-5 mr-2" />
              <span>Carrera 103 #73-51 sur Bosa</span>
            </div>
            <div className="flex items-center">
              <CakeIcon className="w-5 h-5 mr-2" />
              <span>18/2/2006</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex border-b border-gray-200">
          {["experience", "skills", "education", "activities"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-4 px-6 text-center font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-indigo-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "experience" && "Experiencia"}
              {tab === "skills" && "Competencias"}
              {tab === "education" && "Formación"}
              {tab === "activities" && "Actividades"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-8">
          {activeTab === "experience" && (
            <div className="space-y-6">
              <ExperienceItem
                title="Asistente de Manager de Proyecto"
                company="PC Ingeniería, Bogotá"
                period="6/2023 - Actual"
                description="Apoyo en la gestión y coordinación de proyectos, contribuyendo en la planificación y ejecución junto al project manager. Adaptación y mejra de proyectos web según necesidades del cliente."
              />
              <ExperienceItem
                title="Técnico en sistemas"
                company="JASA IT SAS, Bogotá"
                period="9/2024 - 12/2024"
                description="Mantenimiento preventivo de equipos, gestión de inventarios en GLPI y elaboración de informes técnicos precisos."
              />
              <ExperienceItem
                title="On Site Support"
                company="CLIENT FIRST SERVICES, Bogotá"
                period="8/2024 - 9/2024"
                description="Soporte técnico a cajeros automáticos y gestión de reubicación de equipos informáticos."
              />
              <ExperienceItem
                title="Auxiliar de tesorero"
                company="Fondo Nacional Económico del Partido Conservador Colombiano, Bogotá"
                period="10/2023 - 12/2023"
                description="Gestión de información en libros de Excel, contabilizaciones en Helisa y organización de archivos físicos y digitales."
              />
              <ExperienceItem
                title="Técnico en sistemas"
                company="Fondo Nacional Económico del Partido Conservador Colombiano, Bogotá"
                period="4/2023 - 9/2023"
                description="Mantenimiento, optimización y formateo de computadores, configuración y reparación de impresoras."
              />
            </div>
          )}

          {activeTab === "skills" && (
            <div className="grid grid-cols-2 gap-6">
              <SkillItem name="Soporte Técnico" level={4} />
              <SkillItem name="Gestión de Proyectos" level={3} />
              <SkillItem name="Optimización de Equipos" level={3} />
              <SkillItem name="Manejo de Excel" level={3} />
              <SkillItem name="Desarrollo de Software" level={3} />
              <SkillItem name="Mantenimiento de Sistemas" level={3} />
              <SkillItem name="Resolución de Incidencias" level={3} />
              <SkillItem name="Comunicación Clara" level={3} />
              <SkillItem name="Desarrollo frontend" level={3} />
              <SkillItem name="Programación backend" level={3} />
              <SkillItem name="Bases de datos MySQL" level={3} />
              <SkillItem name="Git y GitHub" level={3} />

              <div className="col-span-2 mt-6">
                <h3 className="text-xl font-semibold mb-4">Idiomas</h3>
                <div className="flex justify-between">
                  <span>Español: Nativo</span>
                  <span>Inglés: Intermedio</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-6">
              <EducationItem
                title="Tecnólogo en informática"
                institution="Universidad UNIMINUTO, Bogotá"
                period="1/2024 - 12/2026"
              />
              <EducationItem
                title="Técnico en Sistemas"
                institution="Servicio Nacional de Aprendizaje, Bogotá"
                period="2022 - 2023"
              />
            </div>
          )}

          {activeTab === "activities" && (
            <div className="space-y-4">
              <p className="text-gray-700">
                Desarrollé proyectos propios en mi tiempo libre, entre ellos un
                gestor de tareas fullstack con Python Flask, SQLAlchemy y
                React.js (Vite + TailwindCSS), integrando autenticación segura
                con tokens JWT.
              </p>
              <p className="text-gray-700">
                Desarrollé mi portafolio personal utilizando React.js, Vite y
                TailwindCSS, aplicando principios de diseño responsivo y buenas
                prácticas de desarrollo frontend.
              </p>
              <p className="text-gray-700">
                Desarrollé una tarjeta profesional de presentación digital con
                React.js, Vite y TailwindCSS.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
}) => (
  <div className="border-l-4 border-indigo-500 pl-4 py-2">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-indigo-600 font-medium">{company}</p>
    <p className="text-gray-500 text-sm">{period}</p>
    <p className="text-gray-700 mt-2">{description}</p>
  </div>
);

const SkillItem: React.FC<SkillItemProps> = ({ name, level }) => (
  <div className="flex items-center justify-between">
    <span className="text-gray-700">{name}</span>
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${
            i < level ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  </div>
);

const EducationItem: React.FC<EducationItemProps> = ({
  title,
  institution,
  period,
}) => (
  <div className="border-l-4 border-purple-500 pl-4 py-2">
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-purple-600 font-medium">{institution}</p>
    <p className="text-gray-500 text-sm">{period}</p>
  </div>
);

// Icon components
const MailIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const LocationIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const CakeIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
    />
  </svg>
);

const StarIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default App;
