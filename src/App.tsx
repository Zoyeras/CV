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

  // Función para descargar CV (simulada)
  const handleDownloadCV = () => {
    alert(
      "En una implementación real, aquí se descargaría el archivo PDF del CV"
    );
    // En una implementación real, aquí iría la lógica para descargar el PDF
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4 md:p-6">
      {/* Botón de WhatsApp flotante a la izquierda */}
      <a
        href="https://wa.me/573112617910"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-10 transition-colors"
        title="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 md:p-8 relative">
          {/* Botón de descargar CV flotante a la derecha */}
          <button
            onClick={handleDownloadCV}
            className="absolute top-4 right-4 bg-white text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg font-medium flex items-center transition-colors shadow-md"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Descargar CV
          </button>

          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Samuel Loaiza Ocampo
              </h1>
              <p className="text-indigo-100">Desarrollador Full Stack</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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

              {/* Iconos de redes sociales */}
              <div className="flex justify-center md:justify-start space-x-4 mt-6 pt-4 border-t border-indigo-400 border-opacity-30">
                <a
                  href="https://portafolio-xi-three-59.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-colors"
                  title="Portafolio"
                >
                  <PortfolioIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Zoyeras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-colors"
                  title="GitHub"
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/samueldavidloaiza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-colors"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Imagen circular a la derecha */}
            <div className="mt-6 md:mt-0 md:ml-6 flex justify-center md:justify-end">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/fotoMia-800.webp"
                  alt="Samuel Loaiza"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {["experience", "skills", "education", "activities"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-4 px-4 md:px-6 text-center font-medium transition-all duration-200 min-w-max ${
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
        <div className="p-6 md:p-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="md:col-span-2 mt-6">
                <h3 className="text-xl font-semibold mb-4">Idiomas</h3>
                <div className="flex flex-col md:flex-row justify-between gap-2">
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
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V极z"
    />
  </svg>
);

const LocationIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 极 24 24"
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
      d="M15 11a3 3 0 11-6 极 3 3 0 016 0z"
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
      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.极04 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2极7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
    />
  </svg>
);

const StarIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118极1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const DownloadIcon: React.FC<IconProps> = ({ className }) => (
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
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const GitHubIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234极3.338.726-4.033-1.416-4.033-1.416-.546-极.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PortfolioIcon: React.FC<IconProps> = ({ className }) => (
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
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.极98 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
  </svg>
);

export default App;
