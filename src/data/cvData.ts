import { Linkedin, Github, Globe, Mail, Phone } from "lucide-react";

// 1. Definimos la interfaz para evitar errores de tipo
export interface CVData {
  profile: {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    summary: string;
    social: { name: string; url: string; icon: any }[];
  };
  experience: {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  }[];
  projects: {
    id: number;
    title: string;
    stack: string[];
    description: string;
    link: string;
  }[];
  skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  education: {
    id: number;
    degree: string;
    institution: string;
    period: string;
  }[];
  labels: {
    experience: string;
    projects: string;
    skills: string;
    education: string;
    download: string;
  };
}

// 2. Datos comunes (Links y Tech Stack son iguales en ambos idiomas)
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/samueldavidloaiza/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/Zoyeras",
    icon: Github,
  },
  {
    name: "Portafolio",
    url: "https://portafolio-xi-three-59.vercel.app/",
    icon: Globe,
  },
];

const techStack = {
  frontend: [
    "React.js",
    "TypeScript",
    "TailwindCSS",
    "JavaScript (ES6+)",
    "Vite",
  ],
  backend: ["PHP (Laravel)", "Python (Flask)", "C# (.NET)", "REST APIs"],
  database: ["MySQL", "PostgreSQL", "Diseño Relacional"],
  tools: ["Git/GitHub", "Docker", "Postman", "Linux/Bash"],
};

// 3. EXPORTACIÓN ESPAÑOL (cvDataEs)
export const cvDataEs: CVData = {
  profile: {
    name: "Samuel Loaiza Ocampo",
    role: "Full Stack Web Developer",
    location: "Bogotá, Colombia",
    email: "loaizaocampos@gmail.com",
    phone: "311 261 7910",
    summary:
      "Desarrollador Full Stack con enfoque en ecosistemas React y Laravel. Especializado en la construcción de aplicaciones web escalables, optimización de bases de datos y desarrollo de arquitecturas limpias. Orientado a resultados, con capacidad probada para transformar requerimientos de negocio en soluciones técnicas eficientes.",
    social: socialLinks,
  },
  experience: [
    {
      id: 1,
      role: "Full Stack Web Developer",
      company: "PC Ingeniería",
      period: "06/2023 – Actualidad",
      description:
        "Liderazgo técnico en desarrollo y mantenimiento de aplicaciones críticas usando el stack TALL y React.",
      achievements: [
        "Desarrollo de interfaces de usuario reactivas, mejorando la experiencia de cliente en un 30%.",
        "Implementación de scripts de automatización en Python/Bash que redujeron la carga operativa.",
        "Refactorización de código legacy en PHP, logrando una reducción del 20% en deuda técnica.",
        "Colaboración directa con gerencia para la planificación técnica de nuevos features.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Task Manager Pro",
      stack: ["Python", "Flask", "React", "JWT", "SQLAlchemy"],
      description:
        "Sistema de gestión de tareas con autenticación segura y arquitectura REST API.",
      link: "https://github.com/Zoyeras",
    },
    {
      id: 2,
      title: "Portafolio Profesional",
      stack: ["React", "Vite", "TailwindCSS"],
      description:
        "SPA de alto rendimiento con diseño responsivo y optimización SEO básica.",
      link: "https://portafolio-xi-three-59.vercel.app/",
    },
  ],
  skills: techStack,
  education: [
    {
      id: 1,
      degree: "Tecnólogo en Informática",
      institution: "Universidad UNIMINUTO",
      period: "2024 – 2026 (En curso)",
    },
  ],
  labels: {
    experience: "Experiencia Laboral",
    projects: "Proyectos Destacados",
    skills: "Stack Técnico",
    education: "Educación",
    download: "Descargar PDF",
  },
};

// 4. EXPORTACIÓN INGLÉS (cvDataEn)
export const cvDataEn: CVData = {
  profile: {
    name: "Samuel Loaiza Ocampo",
    role: "Full Stack Web Developer",
    location: "Bogotá, Colombia",
    email: "loaizaocampos@gmail.com",
    phone: "+57 311 261 7910",
    summary:
      "Full Stack Developer focused on React and Laravel ecosystems. Specialized in building scalable web applications, database optimization, and clean architecture development. Results-oriented, with proven ability to transform business requirements into efficient technical solutions.",
    social: socialLinks,
  },
  experience: [
    {
      id: 1,
      role: "Full Stack Web Developer",
      company: "PC Ingeniería",
      period: "06/2023 – Present",
      description:
        "Technical leadership in development and maintenance of critical applications using the TALL stack and React.",
      achievements: [
        "Developed reactive user interfaces, improving client experience metrics by 30%.",
        "Implemented automation scripts in Python/Bash reducing weekly maintenance operational load.",
        "Refactored legacy PHP code, achieving a 20% reduction in technical debt.",
        "Direct collaboration with management for technical planning of new features.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Task Manager Pro",
      stack: ["Python", "Flask", "React", "JWT", "SQLAlchemy"],
      description:
        "Task management system with secure authentication and REST API architecture.",
      link: "https://github.com/Zoyeras",
    },
    {
      id: 2,
      title: "Professional Portfolio",
      stack: ["React", "Vite", "TailwindCSS"],
      description:
        "High-performance SPA with responsive design and basic SEO optimization.",
      link: "https://portafolio-xi-three-59.vercel.app/",
    },
  ],
  skills: techStack,
  education: [
    {
      id: 1,
      degree: "Associate Degree in Informatics",
      institution: "UNIMINUTO University",
      period: "2024 – 2026 (In Progress)",
    },
  ],
  labels: {
    experience: "Work Experience",
    projects: "Featured Projects",
    skills: "Technical Stack",
    education: "Education",
    download: "Download PDF",
  },
};
