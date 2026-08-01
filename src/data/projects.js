import { FaLayerGroup, FaUsersLine } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

export const projects = [
  {
    id: "microfrontend-explorer",
    title: "Microfrontend Architecture Explorer",
    description:
      "A personal project exploring a microfrontend setup built with Webpack Module Federation - independently deployable frontend modules that share common dependencies at runtime instead of bundling duplicates. Built to sharpen my understanding of scaling frontend architecture beyond a single monolith.",
    tags: ["React", "Webpack", "Module Federation"],
    githubUrl: null,
    gitlabUrl: "https://gitlab.com/pynadathantonyg/microfrontend-with-react",
    demoUrl: null,
    accent: { from: "from-indigo-400", to: "to-indigo-600" },
    Icon: FaLayerGroup,
    isPlaceholder: true,
  },
  {
    id: "realtime-collaboration-board",
    title: "Real-Time Collaboration Board",
    description:
      "An illustrative concept board demonstrating live, multi-user state synchronization - built around the same WebSocket (Socket.IO) and Redux patterns I use to ship collaborative features at work. Multiple users see each other's changes reflected instantly, with role-based access controlling who can edit what.",
    tags: ["React", "Socket.IO", "Redux"],
    githubUrl: null,
    gitlabUrl: null,
    demoUrl: null,
    accent: { from: "from-emerald-400", to: "to-emerald-600" },
    Icon: FaUsersLine,
    isPlaceholder: true,
  },
  {
    id: "data-grid-dashboard",
    title: "Data Grid Dashboard",
    description:
      "A placeholder dashboard concept for rendering, filtering, and theming large datasets with AG Grid inside a Next.js app - the kind of large scale data handling and client-specific theming work I regularly do in production.",
    tags: ["Next.js", "AG Grid", "Redux"],
    githubUrl: null,
    gitlabUrl: null,
    demoUrl: null,
    accent: { from: "from-sky-400", to: "to-sky-600" },
    Icon: MdDashboard,
    isPlaceholder: true,
  },
];
