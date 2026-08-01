import { FaUsers, FaBolt, FaChartLine, FaCode } from "react-icons/fa6";

export const experience = {
  role: "Senior Engineer",
  company: "Qburst",
  location: "Kochi, India",
  period: "Jul 2022 — Ongoing",
  bulletGroups: [
    {
      heading: "Leadership & Delivery",
      icon: FaUsers,
      points: [
        "Led end-to-end frontend development across multiple projects — from requirement analysis to delivery — supervising cross-team knowledge transfer and code reviews.",
        "Managed and delivered 30+ change requests aligned with stakeholder timelines, and resolved 400+ QA-reported defects across multiple release cycles.",
        "Partnered with backend teams to define workflows, supported QA with test case execution, and led client demos for milestone deliveries.",
      ],
    },
    {
      heading: "Real-Time & Collaborative Systems",
      icon: FaBolt,
      points: [
        "Designed and implemented real-time features using WebSocket (Socket.IO), including multi-user data synchronization with role-based access control and live collaborative voting workflows.",
        "Built reusable, high-performance React components and managed complex state with Redux across multi-tab interfaces and multi-component data flows, improving maintainability and scalability.",
      ],
    },
    {
      heading: "Performance & Data at Scale",
      icon: FaChartLine,
      points: [
        "Boosted Lighthouse score from 46 to 79 and reduced initial load time by 50%+ through lazy loading and strategic memoization to cut unnecessary re-renders.",
        "Integrated and customized AG Grid with React for large-scale data handling, real-time updates, and client-specific theme matching.",
      ],
    },
    {
      heading: "UI Architecture & Quality",
      icon: FaCode,
      points: [
        "Converted complex UI designs — including a honeycomb-layout interface — into fully responsive React components, revamping filters and recommendation modules for a seamless mobile-to-laptop experience.",
        "Developed a dynamic cascading filter system that intelligently narrows valid filter options based on prior selections and product availability.",
        "Integrated SonarQube and ESLint into the development pipeline and enforced semantic HTML5 standards, strengthening code quality across projects.",
      ],
    },
  ],
};

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  institution: "APJ Abdul Kalam Technological University",
  period: "2018 — 2022",
};

export const certificate = {
  name: "Google Associate Cloud Engineer",
  issuer: "Google Cloud",
};
