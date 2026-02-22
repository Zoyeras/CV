import { Linkedin, Github, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// 1. Definición de la Interfaz
export interface CVData {
  profile: {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    summary: string;
    social: { name: string; url: string; icon: LucideIcon }[];
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
  };
  labels: {
    experience: string;
    projects: string;
    skills: string;
    education: string;
    download: string;
  };
}

// 2. Datos Comunes (Redes Sociales)
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/samuel-loaiza-ocampo",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/Zoyeras",
    icon: Github,
  },
  {
    name: "Portfolio",
    url: "https://portafolio-xi-three-59.vercel.app/",
    icon: Globe,
  },
];

// 3. Stack Tecnológico (Estrictamente enfocado en .NET y React)
const techStack = {
  frontend: ["React.js", "TypeScript", "TailwindCSS", "Vite"],
  backend: ["C#", "ASP.NET Core", "Entity Framework Core", "REST APIs"],
  database: ["PostgreSQL", "Diseño Relacional"],
  tools: ["Git/GitHub", "Playwright", "Docker", "Linux/Bash"],
};

// 4. Versión en ESPAÑOL
export const cvDataEs: CVData = {
  profile: {
    name: "SAMUEL DAVID LOAIZA OCAMPO",
    role: "Software Developer | C# .NET Core & React (TSX) | PostgreSQL",
    location: "Bogotá, Colombia",
    email: "loaizaocampos@gmail.com",
    phone: "311 261 7910",
    summary:
      "Desarrollador Full Stack especializado en el ecosistema .NET (ASP.NET Core) y React. Experto en la construcción de arquitecturas robustas con Entity Framework Core y PostgreSQL. Enfocado en la optimización de procesos backend y creación de interfaces escalables, con capacidad probada para reducir deuda técnica y mejorar la eficiencia operativa.",
    social: socialLinks,
  },
  experience: [
    {
      id: 1,
      role: "Ingeniero de Software Júnior",
      company: "PC INGENIERIA",
      period: "06/2025 – Actualidad",
      description:
        "Desarrollo Full-Stack y automatización de procesos críticos de negocio.",
      achievements: [
        "Diseñé y construí un sistema de automatización end-to-end utilizando ASP.NET Core, PostgreSQL y React con TypeScript (TSX), reemplazando procesos manuales mediante la orquestación de tareas asíncronas en segundo plano.",
        "Implementé flujos de automatización web con Microsoft Playwright para interactuar de forma autónoma con portales externos (SIC) y desarrollé un motor de notificaciones integrando WhatsApp Web con persistencia de sesiones.",
        "Audité y refactoricé aplicaciones web existentes, resolviendo errores críticos en consola, disminuyendo la latencia de respuesta del servidor y mejorando las métricas de rendimiento y SEO.",
        "Modelé y administré la base de datos relacional con PostgreSQL y Entity Framework Core, gestionando migraciones complejas para asegurar la integridad de los datos en los registros de automatización.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Sistema de Automatización de Procesos",
      stack: [
        "C#",
        "ASP.NET Core",
        "PostgreSQL",
        "Entity Framework Core",
        "React",
        "TypeScript",
        "Microsoft Playwright",
      ],
      description:
        "Plataforma end-to-end para automatizar procesos críticos de negocio, con orquestación de tareas en segundo plano, integración con portales externos y motor de notificaciones con persistencia de sesiones.",
      link: "https://github.com/Zoyeras",
    },
    {
      id: 2,
      title: "Inventory Management API",
      stack: ["C#", "ASP.NET Core", "PostgreSQL", "Entity Framework Core"],
      description:
        "API RESTful para gestión de inventarios con sistema de auditoría integrado, desarrollada bajo principios de arquitectura limpia y buenas prácticas en .NET.",
      link: "https://github.com/Zoyeras",
    },
  ],
  skills: techStack,
  education: {
    id: 1,
    degree: "Tecnólogo en Informática",
    institution: "UNIMINUTO Colombia",
    period: "2024 – 2026 (En curso)",
  },
  labels: {
    experience: "Experiencia Laboral",
    projects: "Proyectos Destacados",
    skills: "Stack Técnico",
    education: "Educación",
    download: "Descargar CV",
  },
};

// 5. Versión en INGLÉS
export const cvDataEn: CVData = {
  profile: {
    name: "SAMUEL DAVID LOAIZA OCAMPO",
    role: "Software Developer | C# .NET Core & React (TSX) | PostgreSQL",
    location: "Bogotá, Colombia",
    email: "loaizaocampos@gmail.com",
    phone: "+57 311 261 7910",
    summary:
      "Full Stack Developer specialized in the .NET ecosystem (ASP.NET Core) and React. Expert in building robust architectures with Entity Framework Core and PostgreSQL. Focused on optimizing backend processes and creating scalable interfaces, with a proven ability to reduce technical debt and improve operational efficiency.",
    social: socialLinks,
  },
  experience: [
    {
      id: 1,
      role: "Junior Software Engineer",
      company: "PC INGENIERIA",
      period: "06/2025 – Present",
      description:
        "Full-Stack development and automation of critical business processes.",
      achievements: [
        "Designed and built an end-to-end automation system using ASP.NET Core, PostgreSQL, and React with TypeScript (TSX), replacing manual processes via background asynchronous task orchestration.",
        "Implemented web automation flows with Microsoft Playwright for autonomous interaction with external portals and developed a notification engine integrating WhatsApp Web with session persistence.",
        "Audited and refactored existing web applications, resolving critical console errors, decreasing server response latency, and improving performance and SEO metrics.",
        "Modeled and managed relational databases using PostgreSQL and Entity Framework Core, handling complex migrations to ensure data integrity in automation records.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Business Process Automation System",
      stack: [
        "C#",
        "ASP.NET Core",
        "PostgreSQL",
        "Entity Framework Core",
        "React",
        "TypeScript",
        "Microsoft Playwright",
      ],
      description:
        "End-to-end platform to automate critical business workflows, including background task orchestration, external portal integrations, and a notification engine with session persistence.",
      link: "https://github.com/Zoyeras",
    },
    {
      id: 2,
      title: "Inventory Management API",
      stack: ["C#", "ASP.NET Core", "PostgreSQL", "Entity Framework Core"],
      description:
        "RESTful API for inventory management with integrated auditing system, developed following clean architecture principles and best practices in .NET.",
      link: "https://github.com/Zoyeras",
    },
  ],
  skills: techStack,
  education: {
    id: 1,
    degree: "Associate Degree in Informatics",
    institution: "UNIMINUTO Colombia",
    period: "2024 – 2026 (In Progress)",
  },
  labels: {
    experience: "Work Experience",
    projects: "Featured Projects",
    skills: "Technical Stack",
    education: "Education",
    download: "Download CV",
  },
};
