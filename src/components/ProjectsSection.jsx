import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, ArrowRight, BookOpen, CheckCircle2, X } from 'lucide-react';

// Responsive Background Assets
import projectsBgAvif from '../assets/projects-background-production.avif';
import projectsBgWebp from '../assets/projects-background.webp';
import projectsBg1920Avif from '../assets/projects-background-1920.avif';
import projectsBg1920Webp from '../assets/projects-background-1920.webp';
import projectsBgPng from '../assets/projects-background.png';

const GithubIcon = ({ size = 15, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const filterCategories = ['All', 'Full Stack', 'Web Apps', 'Interactive', 'Product', 'Open Source'];

const projectsData = [
  {
    id: 'financial-management-tool',
    num: '01',
    category: 'FULL STACK',
    filterCategory: 'Full Stack',
    title: 'Financial Management Tool',
    subtitle: 'Expense Tracking & Visualization Platform',
    desc: 'A financial management tool designed to help users track expenses, organize financial activity, and visualize spending patterns.',
    tags: ['React', 'Node.js', 'MongoDB', 'NodeMailer'],
    fullTags: ['MERN Stack', 'React', 'Node.js', 'Express.js', 'MongoDB', 'NodeMailer'],
    whatIBuilt: 'Designed the application around expense tracking, financial organization, visualization, and reminder workflows.',
    details: 'Includes email-based reminders and expense tracking workflows.',
    research: 'Tracking Expenses using MERN Stack and Data Visualization',
    researchNote: 'A research paper developed around the project during BTech.',
    focus: [
      'Expense tracking workflows & budget categories',
      'Financial data visualization with interactive charts',
      'Automated email reminders via NodeMailer',
      'Full-stack MERN architecture with MongoDB persistence'
    ],
    outcome: 'Demonstrated end-to-end full stack architecture, data visualization design, and integrating automated communication services.',
    githubUrl: null,
    liveUrl: null,
    image: null,
    bentoSpan: 'col-span-2'
  },
  {
    id: 'pharmacy-management-system',
    num: '02',
    category: 'WEB APPLICATION',
    filterCategory: 'Web Apps',
    title: 'Pharmacy Management System',
    subtitle: 'Inventory & Prescription Workflow System',
    desc: 'A pharmacy management system focused on organizing medicine records, inventory-related workflows, and day-to-day pharmacy operations.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    fullTags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Relational DB'],
    whatIBuilt: 'Constructed database-driven workflows for medicine stock tracking, inventory alerts, and sales transaction logs.',
    details: 'Focus on inventory management, medicine records, and pharmacy workflows.',
    research: null,
    focus: [
      'Inventory management & medicine records',
      'Day-to-day pharmacy operations & stock tracking',
      'Relational database schema with MySQL',
      'Prescription handling and sales record workflows'
    ],
    outcome: 'Gained hands-on experience designing relational data models, backend CRUD logic, and practical business workflows.',
    githubUrl: null,
    liveUrl: null,
    image: null,
    bentoSpan: 'col-span-1'
  },
  {
    id: 'maze-game-opengl',
    num: '03',
    category: 'INTERACTIVE / ACADEMIC',
    filterCategory: 'Interactive',
    title: 'Maze Game',
    subtitle: 'OpenGL',
    desc: 'A 2D maze game built using OpenGL with interactive navigation and game logic.',
    tags: ['C++', 'OpenGL'],
    fullTags: ['C++', 'OpenGL', 'Computer Graphics', 'Game Logic', 'Pathfinding'],
    whatIBuilt: 'Implemented 2D computer graphics rendering pipeline, maze traversal rules, and real-time player navigation.',
    details: 'Focus on interactive graphics, game logic, and navigation.',
    research: null,
    focus: [
      'Interactive 2D computer graphics rendering',
      'Game logic and maze traversal rules',
      'Real-time collision detection and player navigation',
      'OpenGL coordinate system and state machine'
    ],
    outcome: 'Deepened understanding of low-level graphics pipelines, matrix transformations, coordinate systems, and game loops.',
    githubUrl: null,
    liveUrl: null,
    image: null,
    bentoSpan: 'col-span-1'
  },
  {
    id: 'amahealth',
    num: '04',
    category: 'PRODUCT / INTERNSHIP',
    filterCategory: 'Product',
    title: 'AMAHealth',
    subtitle: 'Tele-consultation Platform',
    desc: 'A tele-consultation product for which I worked on a notification system connecting application events with reliable user communication.',
    tags: ['AWS Lambda', 'REST APIs', 'CloudWatch', 'MSG91'],
    fullTags: ['AWS Lambda', 'REST APIs', 'AWS CloudWatch', 'MSG91', 'Serverless'],
    whatIBuilt: 'Built a notification system using serverless infrastructure and external messaging APIs.',
    details: 'Connected application events with reliable user communication channels for tele-consultation workflows.',
    research: null,
    focus: [
      'Backend integration & event-driven notifications',
      'Serverless architecture with AWS Lambda & CloudWatch',
      'Integration with MSG91 communication gateway',
      'Healthcare product development & tele-consultation flows'
    ],
    outcome: 'Gained experience building and monitoring production cloud infrastructure, connecting third-party communication APIs, and handling real-world product requirements.',
    githubUrl: null,
    liveUrl: null,
    image: null,
    bentoSpan: 'col-span-2'
  },
  {
    id: 'django-poll-app',
    num: '05',
    category: 'OPEN SOURCE',
    filterCategory: 'Open Source',
    title: 'Django Poll App',
    subtitle: 'Open Source Contribution',
    desc: 'An open-source contribution built around a Django polling application, focusing on understanding an existing codebase and contributing within an established project structure.',
    tags: ['Python', 'Django'],
    fullTags: ['Python', 'Django', 'Open Source', 'Codebase Navigation', 'MVC / MVT'],
    whatIBuilt: 'Navigated an existing Django repository, understood project conventions, and contributed improvements within an established structure.',
    details: 'Open-source contribution built around a Django polling application.',
    isContribution: true,
    contributionBadge: 'OPEN SOURCE CONTRIBUTION',
    research: null,
    focus: [
      'Open-source contribution & codebase comprehension',
      'Django MVT architecture and ORM models',
      'Collaboration within an established repository',
      'Testing and code review in an open-source workflow'
    ],
    outcome: 'Strengthened ability to read unfamiliar codebases quickly, adapt to established architectural styles, and contribute cleanly within team conventions.',
    githubUrl: null,
    liveUrl: null,
    image: null,
    bentoSpan: 'col-span-2'
  }
];

// High-fidelity Preview Graphics for each project
function ProjectCardArtwork({ id }) {
  switch (id) {
    case 'financial-management-tool':
      return (
        <svg viewBox="0 0 280 130" preserveAspectRatio="xMidYMid meet" className="card-artwork-svg" fill="none">
          <rect width="280" height="130" fill="#111425" />
          <circle cx="80" cy="105" r="90" fill="#6366f1" fillOpacity="0.2" filter="blur(25px)" />
          
          {/* Left Title Typography */}
          <text x="22" y="44" fill="#ffffff" fontSize="15" fontFamily="'Syne', sans-serif" fontWeight="800" letterSpacing="-0.5">Track</text>
          <text x="22" y="66" fill="#ffffff" fontSize="15" fontFamily="'Syne', sans-serif" fontWeight="800" letterSpacing="-0.5">Save</text>
          <text x="22" y="88" fill="#a855f7" fontSize="15" fontFamily="'Syne', sans-serif" fontWeight="800" letterSpacing="-0.5">Grow</text>
          
          {/* Right Dashboard Screen */}
          <g transform="translate(104, 10)">
            <rect width="160" height="110" rx="8" fill="#1b1f35" stroke="#2a304e" strokeWidth="1" />
            <line x1="14" y1="18" x2="60" y2="18" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <line x1="14" y1="26" x2="45" y2="26" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
            <circle cx="144" cy="18" r="4" fill="#6366f1" />
            
            <line x1="14" y1="84" x2="146" y2="84" stroke="#2a3150" strokeWidth="1" strokeDasharray="3 3" />
            
            <rect x="20" y="52" width="10" height="32" rx="2" fill="#818cf8" />
            <rect x="36" y="40" width="10" height="44" rx="2" fill="#a855f7" />
            <rect x="52" y="60" width="10" height="24" rx="2" fill="#c084fc" />
            <rect x="68" y="32" width="10" height="52" rx="2" fill="#6366f1" />
            <rect x="84" y="48" width="10" height="36" rx="2" fill="#a855f7" />
            <rect x="100" y="28" width="10" height="56" rx="2" fill="#818cf8" />
            <rect x="116" y="42" width="10" height="42" rx="2" fill="#c084fc" />

            <path d="M 25 46 Q 52 28 84 44 T 121 24" stroke="#34d399" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      );

    case 'pharmacy-management-system':
      return (
        <svg viewBox="0 0 280 120" preserveAspectRatio="xMidYMid meet" className="card-artwork-svg" fill="none">
          <rect width="280" height="120" fill="#f8fafc" />
          
          <rect x="0" y="0" width="280" height="22" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <text x="14" y="15" fill="#0284c7" fontSize="9" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800">✚ MediTrack</text>
          <text x="82" y="15" fill="#475569" fontSize="8.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600">Dashboard</text>

          <rect x="8" y="28" width="58" height="84" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <rect x="12" y="34" width="50" height="16" rx="4" fill="#6366f1" />
          <text x="18" y="45" fill="#ffffff" fontSize="7" fontWeight="700">Dashboard</text>
          <text x="18" y="60" fill="#64748b" fontSize="7">Medicines</text>
          <text x="18" y="74" fill="#64748b" fontSize="7">Sales</text>
          <text x="18" y="88" fill="#64748b" fontSize="7">Inventory</text>
          <text x="18" y="102" fill="#64748b" fontSize="7">Suppliers</text>

          <rect x="74" y="28" width="56" height="30" rx="5" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <text x="82" y="42" fill="#0f172a" fontSize="11" fontWeight="800">152</text>
          <text x="82" y="52" fill="#10b981" fontSize="6.5" fontWeight="600">● Medicines</text>

          <rect x="136" y="28" width="56" height="30" rx="5" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <text x="144" y="42" fill="#0f172a" fontSize="11" fontWeight="800">23</text>
          <text x="144" y="52" fill="#f59e0b" fontSize="6.5" fontWeight="600">▲ Low Stock</text>

          <rect x="198" y="28" width="70" height="30" rx="5" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <text x="206" y="42" fill="#0f172a" fontSize="11" fontWeight="800">8</text>
          <text x="206" y="52" fill="#ef4444" fontSize="6.5" fontWeight="600">■ Expiring</text>

          <rect x="74" y="64" width="194" height="48" rx="5" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          <text x="82" y="77" fill="#1e293b" fontSize="7.5" fontWeight="700">Recent Sales</text>
          
          <line x1="82" y1="83" x2="260" y2="83" stroke="#f1f5f9" strokeWidth="1" />
          <text x="82" y="93" fill="#475569" fontSize="7">Paracetamol</text>
          <text x="165" y="93" fill="#64748b" fontSize="7">600</text>
          <circle cx="250" cy="91" r="2.5" fill="#10b981" />

          <line x1="82" y1="99" x2="260" y2="99" stroke="#f1f5f9" strokeWidth="1" />
          <text x="82" y="108" fill="#475569" fontSize="7">Amoxicillin</text>
          <text x="165" y="108" fill="#64748b" fontSize="7">100</text>
          <circle cx="250" cy="106" r="2.5" fill="#10b981" />
        </svg>
      );

    case 'maze-game-opengl':
      return (
        <svg viewBox="0 0 280 150" preserveAspectRatio="xMidYMid meet" className="card-artwork-svg" fill="none">
          <rect width="280" height="150" fill="#080a14" />
          
          <g filter="drop-shadow(0 0 8px #6366f1)">
            <path d="M 28 22 H 252 V 128 H 28 Z" stroke="#3b82f6" strokeWidth="3" fill="none" />
            <path d="M 64 22 V 88 H 108 V 52 H 164 V 98 H 208 V 22" stroke="#a855f7" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 64 108 H 148 V 128" stroke="#06b6d4" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 208 72 H 244 V 108 H 178" stroke="#ec4899" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 108 108 V 128" stroke="#8b5cf6" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>

          <circle cx="46" cy="42" r="6" fill="#00f5ff" filter="drop-shadow(0 0 10px #00f5ff)" />
          <circle cx="228" cy="116" r="7" fill="#10b981" filter="drop-shadow(0 0 10px #10b981)" />
        </svg>
      );

    case 'amahealth':
      return (
        <svg viewBox="0 0 280 110" preserveAspectRatio="xMidYMid meet" className="card-artwork-svg" fill="none">
          <rect width="280" height="110" fill="#ffffff" />
          
          <circle cx="118" cy="16" r="3.5" fill="#06b6d4" />
          <text x="127" y="19" fill="#0f172a" fontSize="10.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800">AMAHealth</text>

          <g transform="translate(14, 32)">
            <rect width="48" height="58" rx="8" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1.5" />
            <path d="M 24 16 L 16 38 M 24 28 L 32 38" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="5" y="49" fill="#9a3412" fontSize="6.5" fontWeight="700">AWS Lambda</text>
          </g>

          <line x1="66" y1="61" x2="78" y2="61" stroke="#94a3b8" strokeWidth="1.5" />
          <path d="M 75 58 L 79 61 L 75 64" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          <g transform="translate(80, 32)">
            <rect width="48" height="58" rx="8" fill="#faf5ff" stroke="#e9d5ff" strokeWidth="1.5" />
            <polygon points="24,14 34,25 24,36 14,25" fill="none" stroke="#9333ea" strokeWidth="2" strokeLinejoin="round" />
            <text x="6" y="49" fill="#6b21a8" fontSize="6.5" fontWeight="700">API Gateway</text>
          </g>

          <line x1="132" y1="61" x2="144" y2="61" stroke="#94a3b8" strokeWidth="1.5" />
          <path d="M 141 58 L 145 61 L 141 64" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          <g transform="translate(146, 32)">
            <rect width="48" height="58" rx="8" fill="#fdf2f8" stroke="#fbcfe8" strokeWidth="1.5" />
            <circle cx="24" cy="25" r="9" fill="none" stroke="#db2777" strokeWidth="2" />
            <line x1="24" y1="25" x2="29" y2="20" stroke="#db2777" strokeWidth="2" strokeLinecap="round" />
            <text x="6" y="49" fill="#9d174d" fontSize="6.5" fontWeight="700">CloudWatch</text>
          </g>

          <line x1="198" y1="61" x2="210" y2="61" stroke="#94a3b8" strokeWidth="1.5" />
          <path d="M 207 58 L 211 61 L 207 64" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          <g transform="translate(212, 32)">
            <rect width="52" height="58" rx="8" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="1.5" />
            <path d="M 18 16 H 34 V 29 H 24 L 18 34 Z" fill="#0284c7" />
            <text x="13" y="49" fill="#075985" fontSize="7" fontWeight="800">MSG91</text>
          </g>
        </svg>
      );

    case 'django-poll-app':
      return (
        <svg viewBox="0 0 280 140" preserveAspectRatio="xMidYMid meet" className="card-artwork-svg" fill="none">
          <rect width="280" height="140" fill="#0c111a" />
          
          {/* Header Bar */}
          <rect x="0" y="0" width="280" height="24" fill="#141c2b" stroke="#232f45" strokeWidth="1" />
          <circle cx="16" cy="12" r="3.5" fill="#10b981" />
          <text x="26" y="15" fill="#f8fafc" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">django / poll-app</text>
          <rect x="180" y="5" width="88" height="14" rx="7" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="0.8" />
          <text x="188" y="15" fill="#38bdf8" fontSize="6.8" fontFamily="'JetBrains Mono', monospace" fontWeight="700">OPEN SOURCE</text>

          {/* Left Polling Question Card */}
          <g transform="translate(12, 32)">
            <rect width="134" height="96" rx="6" fill="#141c2b" stroke="#232f45" strokeWidth="1" />
            <text x="10" y="18" fill="#f1f5f9" fontSize="8.5" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">Community Poll</text>
            <text x="10" y="28" fill="#94a3b8" fontSize="7">Cast vote on active proposal</text>
            
            {/* Option 1 - Active */}
            <rect x="8" y="34" width="118" height="23" rx="4" fill="#064e3b" fillOpacity="0.35" stroke="#10b981" strokeWidth="1" />
            <circle cx="18" cy="45" r="4" fill="#10b981" />
            <circle cx="18" cy="45" r="1.5" fill="#ffffff" />
            <text x="28" y="48" fill="#34d399" fontSize="7.5" fontWeight="600">Feature Proposal A</text>

            {/* Option 2 */}
            <rect x="8" y="62" width="118" height="23" rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
            <circle cx="18" cy="73" r="4" fill="none" stroke="#64748b" strokeWidth="1.2" />
            <text x="28" y="76" fill="#94a3b8" fontSize="7.5">Refactor Core Module</text>
          </g>

          {/* Right Results Metrics */}
          <g transform="translate(154, 32)">
            <rect width="114" height="96" rx="6" fill="#141c2b" stroke="#232f45" strokeWidth="1" />
            <text x="10" y="18" fill="#94a3b8" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">LIVE TALLY</text>

            <text x="10" y="34" fill="#f1f5f9" fontSize="7.5">Proposal A</text>
            <text x="86" y="34" fill="#34d399" fontSize="7.5" fontWeight="700">68%</text>
            <rect x="10" y="39" width="94" height="6" rx="3" fill="#1e293b" />
            <rect x="10" y="39" width="64" height="6" rx="3" fill="#10b981" />

            <text x="10" y="58" fill="#f1f5f9" fontSize="7.5">Proposal B</text>
            <text x="86" y="58" fill="#94a3b8" fontSize="7.5" fontWeight="700">32%</text>
            <rect x="10" y="63" width="94" height="6" rx="3" fill="#1e293b" />
            <rect x="10" y="63" width="30" height="6" rx="3" fill="#38bdf8" />

            <rect x="10" y="76" width="94" height="12" rx="3" fill="#0c4b33" fillOpacity="0.4" />
            <text x="16" y="85" fill="#44b78b" fontSize="6.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">Django · Python ORM</text>
          </g>
        </svg>
      );

    default:
      return null;
  }
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const cardRefs = useRef({});
  const closeBtnRef = useRef(null);
  const lastActiveCardId = useRef(null);

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.filterCategory === activeFilter);

  const openModal = (proj) => {
    lastActiveCardId.current = proj.id;
    setSelectedProject(proj);
  };

  const closeModal = React.useCallback(() => {
    setSelectedProject(null);
    if (lastActiveCardId.current && cardRefs.current[lastActiveCardId.current]) {
      cardRefs.current[lastActiveCardId.current].focus();
    }
  }, []);

  const handlePrev = React.useCallback(() => {
    setSelectedProject((current) => {
      if (!current) return null;
      const currIdx = projectsData.findIndex(p => p.id === current.id);
      const prevIdx = (currIdx - 1 + projectsData.length) % projectsData.length;
      return projectsData[prevIdx];
    });
  }, []);

  const handleNext = React.useCallback(() => {
    setSelectedProject((current) => {
      if (!current) return null;
      const currIdx = projectsData.findIndex(p => p.id === current.id);
      const nextIdx = (currIdx + 1) % projectsData.length;
      return projectsData[nextIdx];
    });
  }, []);

  // Keyboard accessibility: ESC key to close, Left/Right arrow to cycle
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [selectedProject, handlePrev, handleNext, closeModal]);

  return (
    <>
      <section id="projects" className="portfolio-section projects-showcase-section">
        {/* ─── 1. ATMOSPHERIC LANDSCAPE BACKGROUND ─── */}
        <picture className="projects-bg-picture">
          <source
            media="(min-width: 1920px)"
            srcSet={projectsBg1920Avif}
            type="image/avif"
          />
          <source
            media="(min-width: 1920px)"
            srcSet={projectsBg1920Webp}
            type="image/webp"
          />
          <source
            srcSet={projectsBgAvif}
            type="image/avif"
          />
          <source
            srcSet={projectsBgWebp}
            type="image/webp"
          />
          <img
            src={projectsBgPng}
            alt=""
            className="projects-bg-img"
            loading="lazy"
            decoding="async"
          />
        </picture>

        {/* Ambient Top Glow Veil to maintain readability */}
        <div className="projects-sky-ambient" />

        {/* ─── 2. MAIN CONTENT SURFACE ─── */}
        <div className="projects-content-wrap">
          
          {/* Top Sub-Header Bar */}
          <div className="projects-top-bar">
            <span className="top-problems-meta">
              REAL PROBLEMS · PRACTICAL SOLUTIONS · CONTINUOUS LEARNING
            </span>

            <div className="top-ideas-quote">
              <svg className="planet-orbit-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="5" fill="#818cf8" fillOpacity="0.4" stroke="#6366f1" strokeWidth="1.5" />
                <ellipse cx="12" cy="12" rx="9" ry="3" stroke="#6366f1" strokeWidth="1.2" transform="rotate(-25 12 12)" />
              </svg>
              <div className="ideas-text">
                <span>Ideas don't change the world.</span>
                <span>Built things do.</span>
              </div>
              <div className="ideas-line" />
            </div>
          </div>

          {/* Headline + Paragraph + Filter Pills Row */}
          <div className="projects-hero-row">
            <div className="projects-title-col">
              <div className="projects-tag-num">
                <span className="num-blue">03.</span>
                <span className="tag-dark">PROJECTS</span>
              </div>
              <h2 className="projects-display-headline">
                Projects that<br />
                turn <span className="word-curiosity">curiosity</span><br />
                into <span className="word-impact">impact.</span>
              </h2>
            </div>

            <div className="projects-intro-col">
              <p className="projects-sub-paragraph">
                A curated index of things I built, tested, and contributed to — click any project to inspect its architecture, workflows, and outcomes.
              </p>

              {/* Filter Pills */}
              <div className="projects-filter-pills" role="tablist">
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-pill-btn ${activeFilter === cat ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ─── 3. REFERENCE-MATCHING BENTO BOX PROJECT GRID ─── */}
          {activeFilter === 'All' ? (
            <div className="bento-reference-container">
              
              {/* ── LEFT COLUMN: 01 Financial Management Tool (Full Height) ── */}
              <div className="bento-col-left">
                
                {/* BOX 1: 01 Financial Management Tool (Full-Height Featured Card) */}
                <motion.article
                  key="proj-01"
                  ref={(el) => { cardRefs.current['financial-management-tool'] = el; }}
                  tabIndex={0}
                  role="button"
                  aria-haspopup="dialog"
                  aria-label="Open details for Financial Management Tool"
                  className="bento-box bento-box-1-dark full-height-card"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  onClick={() => openModal(projectsData[0])}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openModal(projectsData[0]);
                    }
                  }}
                >
                  <div className="bento-box-top-row">
                    <div className="bento-card-meta">
                      <span className="bento-idx-pill">01</span>
                      <span className="bento-cat-text">FULL STACK · FEATURED</span>
                    </div>
                    <div className="bento-arrow-icon" aria-hidden="true">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  {/* Prominent Artwork Preview */}
                  <div className="bento-preview-wrap dark-preview">
                    <ProjectCardArtwork id="financial-management-tool" />
                  </div>

                  <div className="bento-box-info dark-info-expanded">
                    <div className="dark-card-title-group">
                      <h3 className="bento-card-title text-white">Financial Management Tool</h3>
                      <span className="dark-card-subtitle">Expense Tracking &amp; Visualization Platform</span>
                      <div className="bento-badge-row">
                        <span className="bento-badge-research">RESEARCH PUBLISHED</span>
                      </div>
                    </div>

                    <p className="bento-card-desc text-slate-300">
                      A comprehensive financial platform designed to track expenses, organize spending activity, visualize patterns with interactive charts, and trigger automated reminders.
                    </p>

                    <div className="dark-card-focus-points">
                      <div className="dark-focus-line">
                        <span className="focus-accent-dot" />
                        <span>Interactive spending visualizations &amp; charts</span>
                      </div>
                      <div className="dark-focus-line">
                        <span className="focus-accent-dot" />
                        <span>Automated email reminder workflows via NodeMailer</span>
                      </div>
                      <div className="dark-focus-line">
                        <span className="focus-accent-dot" />
                        <span>Full-stack MERN architecture with MongoDB</span>
                      </div>
                    </div>

                    <div className="bento-tags-row">
                      {['MERN Stack', 'React', 'Node.js', 'Express', 'MongoDB', 'NodeMailer'].map(t => (
                        <span key={t} className="bento-tech-chip chip-dark">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>

              </div>

              {/* ── RIGHT SECTION: Top Row (Box 3 + Box 2) & Bottom Row (Box 5 + Box 6) ── */}
              <div className="bento-col-right">
                
                {/* ─ TOP ROW: Box 3 (Django Poll App) + Box 2 (Maze Game) ─ */}
                <div className="bento-right-top-row">
                  
                  {/* BOX 3: 05 Django Poll App */}
                  <motion.article
                    key="proj-05"
                    ref={(el) => { cardRefs.current['django-poll-app'] = el; }}
                    tabIndex={0}
                    role="button"
                    aria-haspopup="dialog"
                    aria-label="Open details for Django Poll App"
                    className="bento-box bento-box-top-card"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    onClick={() => openModal(projectsData[4])}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(projectsData[4]);
                      }
                    }}
                  >
                    <div className="bento-box-split-content">
                      <div className="bento-box-top-row">
                        <div className="bento-card-meta">
                          <span className="bento-idx-pill">05</span>
                          <span className="bento-badge-contrib">OPEN SOURCE</span>
                        </div>
                        <div className="bento-arrow-icon" aria-hidden="true">
                          <ArrowUpRight size={14} />
                        </div>
                      </div>

                      <h3 className="bento-card-title">Django Poll App</h3>
                      <p className="bento-card-desc">
                        Open-source contribution to a polling application focusing on Django ORM models, querysets, and test-driven workflows.
                      </p>

                      <div className="bento-tags-row">
                        {['Python', 'Django', 'Open Source', 'MVC'].map(t => (
                          <span key={t} className="bento-tech-chip">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="bento-preview-wrap box-artwork-wrap">
                      <ProjectCardArtwork id="django-poll-app" />
                    </div>
                  </motion.article>

                  {/* BOX 2: 03 Maze Game (OpenGL) (Moved in place of Tools I Use) */}
                  <motion.article
                    key="proj-03"
                    ref={(el) => { cardRefs.current['maze-game-opengl'] = el; }}
                    tabIndex={0}
                    role="button"
                    aria-haspopup="dialog"
                    aria-label="Open details for Maze Game (OpenGL)"
                    className="bento-box bento-box-top-card"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.08 }}
                    onClick={() => openModal(projectsData[2])}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(projectsData[2]);
                      }
                    }}
                  >
                    <div className="bento-box-split-content">
                      <div className="bento-box-top-row">
                        <div className="bento-card-meta">
                          <span className="bento-idx-pill">03</span>
                          <span className="bento-cat-text">INTERACTIVE / ACADEMIC</span>
                        </div>
                        <div className="bento-arrow-icon" aria-hidden="true">
                          <ArrowUpRight size={14} />
                        </div>
                      </div>

                      <h3 className="bento-card-title">Maze Game</h3>
                      <span className="maze-opengl-subtitle">OpenGL · C++ · 2D Graphics</span>
                      <p className="bento-card-desc">
                        2D computer graphics rendering pipeline, collision logic, and real-time player navigation.
                      </p>

                      <div className="bento-tags-row">
                        {['C++', 'OpenGL', 'Game Logic', 'Graphics'].map(t => (
                          <span key={t} className="bento-tech-chip">{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="bento-preview-wrap box-artwork-wrap">
                      <ProjectCardArtwork id="maze-game-opengl" />
                    </div>
                  </motion.article>

                </div>

                {/* ─ BOTTOM ROW: Box 5 (Pharmacy System) + Box 6 (AMAHealth) ─ */}
                <div className="bento-right-bottom-row">
                  
                  {/* BOX 5: 02 Pharmacy Management System (Product Image 1) */}
                  <motion.article
                    key="proj-02"
                    ref={(el) => { cardRefs.current['pharmacy-management-system'] = el; }}
                    tabIndex={0}
                    role="button"
                    aria-haspopup="dialog"
                    aria-label="Open details for Pharmacy Management System"
                    className="bento-box bento-box-product"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    onClick={() => openModal(projectsData[1])}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(projectsData[1]);
                      }
                    }}
                  >
                    <div className="bento-box-top-row">
                      <div className="bento-card-meta">
                        <span className="bento-idx-pill">02</span>
                        <span className="bento-cat-text">WEB APP</span>
                      </div>
                      <div className="bento-arrow-icon" aria-hidden="true">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>

                    <div className="bento-preview-wrap product-preview">
                      <ProjectCardArtwork id="pharmacy-management-system" />
                    </div>

                    <div className="bento-product-info">
                      <h3 className="bento-card-title">Pharmacy Management System</h3>
                      <p className="bento-card-desc">
                        Organizing medicine records, inventory stock alerts, and sales transaction workflows with relational DB.
                      </p>

                      <div className="bento-tags-row">
                        {['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'].map(t => (
                          <span key={t} className="bento-tech-chip">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.article>

                  {/* BOX 6: 04 AMAHealth (Product Image 2) */}
                  <motion.article
                    key="proj-04"
                    ref={(el) => { cardRefs.current['amahealth'] = el; }}
                    tabIndex={0}
                    role="button"
                    aria-haspopup="dialog"
                    aria-label="Open details for AMAHealth"
                    className="bento-box bento-box-product"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.12 }}
                    onClick={() => openModal(projectsData[3])}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(projectsData[3]);
                      }
                    }}
                  >
                    <div className="bento-box-top-row">
                      <div className="bento-card-meta">
                        <span className="bento-idx-pill">04</span>
                        <span className="bento-cat-text">PRODUCT / INTERNSHIP</span>
                      </div>
                      <div className="bento-arrow-icon" aria-hidden="true">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>

                    <div className="bento-preview-wrap product-preview">
                      <ProjectCardArtwork id="amahealth" />
                    </div>

                    <div className="bento-product-info">
                      <h3 className="bento-card-title">AMAHealth</h3>
                      <p className="bento-card-desc">
                        Serverless tele-consultation notification system connecting application events with AWS Lambda and MSG91 communication channels.
                      </p>

                      <div className="bento-tags-row">
                        {['AWS Lambda', 'REST APIs', 'CloudWatch', 'MSG91'].map(t => (
                          <span key={t} className="bento-tech-chip">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.article>

                </div>

              </div>

            </div>
          ) : (
            /* Filtered View (Clean grid when filtering by category) */
            <div className="projects-filtered-grid">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  ref={(el) => { cardRefs.current[project.id] = el; }}
                  tabIndex={0}
                  role="button"
                  aria-haspopup="dialog"
                  aria-label={`Open details for ${project.title}`}
                  className="bento-box bento-filtered-card"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  onClick={() => openModal(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openModal(project);
                    }
                  }}
                >
                  <div className="bento-preview-wrap">
                    <ProjectCardArtwork id={project.id} />
                  </div>
                  <div className="bento-product-info">
                    <div className="bento-box-top-row">
                      <div className="bento-card-meta">
                        <span className="bento-idx-pill">{project.num}</span>
                        <span className="bento-cat-text">{project.category}</span>
                      </div>
                      <div className="bento-arrow-icon" aria-hidden="true">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                    <h3 className="bento-card-title">{project.title}</h3>
                    <p className="bento-card-desc">{project.desc}</p>
                    <div className="bento-tags-row">
                      {project.tags.map(t => (
                        <span key={t} className="bento-tech-chip">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* ─── 4. BOTTOM LANDSCAPE EDITORIAL ANNOTATIONS ─── */}
          <div className="projects-landscape-annotations">
            {/* Lower-left / mid-left handwritten editorial statement */}
            <div className="landscape-editorial-left">
              <div className="handwritten-statement">
                <span>Different problems.</span>
                <span>Different lenses.</span>
                <span>Same goal —</span>
                <span className="statement-punchline">make something useful.</span>
              </div>
            </div>

            {/* Lower-right subtle landscape annotation */}
            <div className="landscape-editorial-right">
              <span className="landscape-subtle-mono">
                built across code, product &amp; experimentation
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 5. SOPHISTICATED LIGHT-GLASS EDITORIAL MODAL ─── */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="editorial-modal-backdrop"
            onClick={closeModal}
            role="presentation"
          >
            <motion.div
              className="editorial-modal-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="modal-top-bar">
                <div className="modal-header-meta">
                  <span className="modal-entry-num">{selectedProject.num}</span>
                  <span className="modal-sep">/</span>
                  <span className="modal-category">{selectedProject.category}</span>
                  {selectedProject.isContribution && (
                    <span className="modal-top-contrib-badge">
                      {selectedProject.contributionBadge}
                    </span>
                  )}
                </div>

                <button
                  ref={closeBtnRef}
                  className="modal-close-trigger"
                  onClick={closeModal}
                  aria-label="Close project details modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Two-Column Editorial Body */}
              <div className="modal-body-split">
                
                {/* Visual / Typographic Presentation Column (~40%) */}
                <div className="modal-visual-col">
                  {selectedProject.image ? (
                    <div className="modal-image-frame">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="modal-project-photo"
                      />
                    </div>
                  ) : (
                    /* High-End Typographic & Vector Composition when image === null */
                    <div className="modal-typo-graphic-card">
                      <div className="typo-card-watermark">{selectedProject.num}</div>
                      
                      <div className="typo-header-meta">
                        <span className="typo-mono-idx">PROJECT_{selectedProject.num}</span>
                        <span className="typo-category-chip">{selectedProject.tags[0]}</span>
                      </div>

                      <div className="typo-display-titles">
                        <h4 className="typo-big-name">{selectedProject.title}</h4>
                        {selectedProject.subtitle && (
                          <span className="typo-sub-name">{selectedProject.subtitle}</span>
                        )}
                      </div>

                      {/* Vector Artwork Illustration */}
                      <div className="typo-artwork-window">
                        <ProjectCardArtwork id={selectedProject.id} />
                      </div>

                      {/* Geometric Decorative Blueprint Accents */}
                      <div className="typo-footer-meta">
                        <div className="typo-meta-coord">
                          <span>ARCHIVE // CORE_0{selectedProject.num}</span>
                          <span>SPEC_VERIFIED</span>
                        </div>
                        <div className="typo-grid-accent">
                          <span className="typo-dot" />
                          <span className="typo-line" />
                          <span className="typo-dot" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Editorial Information Column (~60%) */}
                <div className="modal-info-col">
                  <div className="modal-title-group">
                    <h3 id="modal-project-title" className="modal-project-title">
                      {selectedProject.title}
                    </h3>
                    {selectedProject.subtitle && (
                      <p className="modal-project-subtitle">
                        {selectedProject.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="modal-lead-desc">
                    {selectedProject.desc}
                  </p>

                  {/* Built With */}
                  <div className="modal-info-section">
                    <h4 className="modal-section-title">BUILT WITH</h4>
                    <div className="modal-tech-chips">
                      {selectedProject.fullTags.map((tech) => (
                        <span key={tech} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What I Built */}
                  <div className="modal-info-section">
                    <h4 className="modal-section-title">WHAT I BUILT</h4>
                    <p className="modal-section-body">
                      {selectedProject.whatIBuilt}
                    </p>
                  </div>

                  {/* Research Paper Callout (Project 01) */}
                  {selectedProject.research && (
                    <div className="modal-research-callout">
                      <BookOpen size={16} className="modal-research-icon" />
                      <div className="modal-research-content">
                        <span className="research-meta-lbl">RESEARCH PUBLICATION</span>
                        <p className="research-paper-name">{selectedProject.research}</p>
                        {selectedProject.researchNote && (
                          <p className="research-paper-sub">{selectedProject.researchNote}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Key Focus & Architecture */}
                  <div className="modal-info-section">
                    <h4 className="modal-section-title">KEY FOCUS &amp; WORKFLOWS</h4>
                    <ul className="modal-focus-list">
                      {selectedProject.focus.map((item, idx) => (
                        <li key={idx} className="modal-focus-item">
                          <CheckCircle2 size={14} className="focus-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome / Learning */}
                  <div className="modal-info-section">
                    <h4 className="modal-section-title">OUTCOME &amp; LEARNING</h4>
                    <p className="modal-section-body modal-outcome-text">
                      {selectedProject.outcome}
                    </p>
                  </div>

                  {/* Real Links (only rendered if URLs exist) */}
                  {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                    <div className="modal-action-row">
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-action-btn"
                        >
                          <GithubIcon size={14} />
                          <span>GitHub</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-action-btn primary"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

              </div>

              {/* Modal Pagination Navigation Footer */}
              <div className="modal-nav-footer">
                <button
                  className="modal-nav-btn"
                  onClick={handlePrev}
                  aria-label="Previous project"
                >
                  <ArrowLeft size={14} />
                  <span>Previous</span>
                </button>

                <div className="modal-paging-counter">
                  <span className="counter-curr">{selectedProject.num}</span>
                  <span className="counter-sep">/</span>
                  <span className="counter-tot">05</span>
                </div>

                <button
                  className="modal-nav-btn"
                  onClick={handleNext}
                  aria-label="Next project"
                >
                  <span>Next</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        /* ══════════════════════════════════════════════════════
           03 / PROJECTS — VIEWPORT-FITTING BENTO BOX SHOWCASE
           ══════════════════════════════════════════════════════ */

        .projects-showcase-section {
          position: relative;
          min-height: 100svh;
          height: 100dvh;
          max-height: 100dvh;
          width: 100%;
          background-color: #f7f9fd;
          overflow: hidden;
          box-sizing: border-box;
          padding: clamp(0.75rem, 1.8vh, 1.5rem) clamp(1.2rem, 3vw, 3.2rem);
        }

        /* ─── 1. Background Landscape ─── */
        .projects-bg-picture {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .projects-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          display: block;
        }

        .projects-sky-ambient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(246, 248, 253, 0.88) 0%,
            rgba(246, 248, 253, 0.52) 36%,
            rgba(246, 248, 253, 0.12) 72%,
            rgba(246, 248, 253, 0) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* ─── 2. Content Wrap ─── */
        .projects-content-wrap {
          position: relative;
          z-index: 10;
          max-width: clamp(1120px, 86vw, 1440px);
          margin: 0 auto;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        /* Top Sub-Header Bar */
        .projects-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: clamp(0.2rem, 0.5vh, 0.4rem);
          flex-shrink: 0;
        }

        .top-problems-meta {
          font-family: var(--font-mono);
          font-size: clamp(0.6rem, 0.76vh, 0.68rem);
          font-weight: 600;
          letter-spacing: 0.13em;
          color: #64748b;
          text-transform: uppercase;
        }

        .top-ideas-quote {
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }

        .planet-orbit-icon {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        .ideas-text {
          display: flex;
          flex-direction: column;
          font-size: clamp(0.62rem, 0.76vh, 0.7rem);
          color: #475569;
          line-height: 1.25;
          text-align: right;
        }

        .ideas-line {
          width: 36px;
          height: 1px;
          background-color: #cbd5e1;
        }

        /* Headline & Filter Row */
        .projects-hero-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: clamp(0.25rem, 0.6vh, 0.5rem);
          gap: 1.2rem;
          flex-shrink: 0;
        }

        .projects-tag-num {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: clamp(0.7rem, 0.9vh, 0.78rem);
          font-weight: 800;
          letter-spacing: 0.08em;
          margin-bottom: clamp(0.08rem, 0.2vh, 0.2rem);
        }

        .num-blue {
          color: #4f46e5;
        }

        .tag-dark {
          color: #0f172a;
        }

        .projects-display-headline {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 1.6vw + 0.8vh, 2.2rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #0f172a;
        }

        .word-curiosity {
          color: #4f46e5;
          background: linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .word-impact {
          color: #9333ea;
          background: linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .projects-intro-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          max-width: 480px;
          gap: clamp(0.2rem, 0.5vh, 0.45rem);
        }

        .projects-sub-paragraph {
          font-size: clamp(0.7rem, 0.88vh, 0.78rem);
          line-height: 1.35;
          color: #475569;
          text-align: right;
        }

        /* Filter Pills */
        .projects-filter-pills {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .filter-pill-btn {
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(0, 0, 0, 0.05);
          font-family: var(--font-sans);
          font-size: clamp(0.64rem, 0.78vh, 0.7rem);
          font-weight: 600;
          color: #475569;
          padding: 0.18rem 0.6rem;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-pill-btn:hover {
          color: #0f172a;
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(99, 102, 241, 0.25);
        }

        .filter-pill-btn.active {
          background: #4f46e5;
          color: #ffffff;
          border-color: #4f46e5;
          box-shadow: 0 3px 10px rgba(79, 70, 229, 0.25);
        }

        /* ─── 3. REFERENCE-MATCHING BENTO BOX STYLES ─── */
        .bento-reference-container {
          display: flex;
          gap: clamp(0.65rem, 1vw, 1rem);
          width: 100%;
          height: clamp(480px, 58vh, 560px);
          max-height: clamp(480px, 60vh, 570px);
          min-height: 0;
          margin-top: clamp(0.25rem, 0.6vh, 0.5rem);
          margin-bottom: clamp(0.25rem, 0.6vh, 0.5rem);
          flex-shrink: 0;
        }

        /* ── LEFT COLUMN (Box 1 Full-Height Featured Card) ── */
        .bento-col-left {
          width: clamp(300px, 29%, 390px);
          display: flex;
          flex-direction: column;
          height: 100%;
          flex-shrink: 0;
          min-height: 0;
        }

        /* ── RIGHT COLUMN (Top Row + Bottom Row) ── */
        .bento-col-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(0.65rem, 1vw, 1rem);
          min-width: 0;
          min-height: 0;
        }

        .bento-right-top-row {
          display: flex;
          gap: clamp(0.65rem, 1vw, 1rem);
          flex: 1;
          min-height: 0;
        }

        .bento-right-bottom-row {
          display: flex;
          gap: clamp(0.65rem, 1vw, 1rem);
          flex: 1.25;
          min-height: 0;
        }

        /* Base Bento Box Card Styling */
        .bento-box {
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 4px 20px -3px rgba(0, 0, 0, 0.05);
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, border-color 0.22s ease;
          position: relative;
          outline: none;
          min-height: 0;
          overflow: hidden;
          cursor: pointer;
        }

        .bento-box:hover,
        .bento-box:focus-visible {
          transform: translateY(-2.5px);
          box-shadow: 0 10px 22px -4px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(99, 102, 241, 0.35);
          border-color: rgba(99, 102, 241, 0.45);
        }

        /* Common Elements inside Bento Boxes */
        .bento-box-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: clamp(0.25rem, 0.5vh, 0.45rem);
          flex-shrink: 0;
        }

        .bento-card-meta {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .bento-idx-pill {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 800;
          color: #4f46e5;
        }

        .bento-box-1-dark .bento-idx-pill {
          color: #818cf8;
        }

        .bento-cat-text {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .bento-box-1-dark .bento-cat-text {
          color: #94a3b8;
        }

        .bento-arrow-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .bento-box:hover .bento-arrow-icon {
          background: #4f46e5;
          color: #ffffff;
          border-color: #4f46e5;
          transform: translate(2px, -2px);
        }

        .bento-card-title {
          font-family: var(--font-sans);
          font-size: clamp(0.88rem, 1.12vh, 1.04rem);
          font-weight: 700;
          color: #0f172a;
          line-height: 1.25;
          margin-bottom: clamp(0.18rem, 0.35vh, 0.28rem);
        }

        .bento-card-title.text-white {
          color: #ffffff;
        }

        .bento-card-desc {
          font-size: clamp(0.68rem, 0.84vh, 0.76rem);
          line-height: 1.45;
          color: #475569;
          margin-bottom: clamp(0.3rem, 0.6vh, 0.5rem);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .bento-card-desc.text-slate-300 {
          color: #cbd5e1;
        }

        .bento-tags-row {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          flex-wrap: wrap;
          margin-top: auto;
        }

        .bento-tech-chip {
          font-family: var(--font-mono);
          font-size: clamp(0.58rem, 0.72vh, 0.64rem);
          font-weight: 600;
          color: #475569;
          background: #f1f5f9;
          padding: 0.12rem 0.42rem;
          border-radius: 4px;
        }

        .bento-tech-chip.chip-dark {
          background: #1e243b;
          color: #cbd5e1;
        }

        /* ── SPECIFIC BOX CUSTOMIZATIONS ── */

        .card-artwork-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* BOX 1: Dark Box (Full-Height Left Featured Anchor) */
        .bento-box-1-dark {
          background: #0f1322;
          border-color: rgba(255, 255, 255, 0.12);
          padding: clamp(0.75rem, 1.1vh, 1.1rem);
          display: flex;
          flex-direction: column;
          height: 100%;
          flex: 1;
        }

        .dark-preview {
          width: 100%;
          height: clamp(110px, 15vh, 150px);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: clamp(0.4rem, 0.7vh, 0.65rem);
          background: #161a2e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dark-info-expanded {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
          justify-content: space-between;
        }

        .dark-card-title-group {
          display: flex;
          flex-direction: column;
          gap: clamp(0.12rem, 0.25vh, 0.25rem);
          margin-bottom: clamp(0.15rem, 0.35vh, 0.3rem);
        }

        .dark-card-subtitle {
          font-family: var(--font-mono);
          font-size: clamp(0.64rem, 0.78vh, 0.72rem);
          font-weight: 600;
          color: #818cf8;
          letter-spacing: 0.01em;
          display: block;
        }

        .dark-card-focus-points {
          display: flex;
          flex-direction: column;
          gap: clamp(0.2rem, 0.4vh, 0.35rem);
          margin: clamp(0.3rem, 0.55vh, 0.5rem) 0;
          padding: clamp(0.35rem, 0.5vh, 0.5rem) clamp(0.45rem, 0.7vw, 0.65rem);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 8px;
        }

        .dark-focus-line {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: clamp(0.64rem, 0.76vh, 0.72rem);
          color: #cbd5e1;
          line-height: 1.3;
        }

        .focus-accent-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 6px rgba(52, 211, 153, 0.6);
          flex-shrink: 0;
        }

        /* ── TOP ROW CARDS: 05 Django Poll App & 03 Maze Game (OpenGL) ── */
        .bento-box-top-card {
          background: rgba(255, 255, 255, 0.9);
          padding: clamp(0.65rem, 0.95vh, 0.95rem);
          display: flex;
          gap: clamp(0.5rem, 0.8vw, 0.85rem);
          flex: 1;
          min-width: 0;
          align-items: center;
        }

        .bento-box-split-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
          height: 100%;
          justify-content: space-between;
        }

        .box-artwork-wrap {
          width: clamp(100px, 9.5vw, 135px);
          height: clamp(80px, 10.5vh, 105px);
          border-radius: 9px;
          overflow: hidden;
          background: #0c111a;
          align-self: center;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .maze-opengl-subtitle {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 700;
          color: #6366f1;
          display: block;
          margin-top: -0.15rem;
          margin-bottom: 0.2rem;
        }

        /* BOXES 5 & 6: Product Cards (Bottom Row) */
        .bento-box-product {
          background: rgba(255, 255, 255, 0.9);
          padding: clamp(0.65rem, 0.95vh, 0.95rem);
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
        }

        .product-preview {
          width: 100%;
          height: clamp(80px, 10.5vh, 105px);
          border-radius: 9px;
          overflow: hidden;
          margin-bottom: clamp(0.35rem, 0.6vh, 0.55rem);
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.06);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bento-product-info {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
        }

        /* Filtered Grid View */
        .projects-filtered-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: clamp(0.5rem, 0.9vh, 0.85rem);
          width: 100%;
          flex: 1;
        }

        .bento-filtered-card {
          background: rgba(255, 255, 255, 0.9);
          padding: clamp(0.65rem, 0.95vh, 0.95rem);
          display: flex;
          flex-direction: column;
        }

        .bento-badge-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: clamp(0.2rem, 0.4vh, 0.35rem);
        }

        .bento-badge-contrib {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 700;
          color: #0284c7;
          background: rgba(2, 132, 199, 0.1);
          border: 1px solid rgba(2, 132, 199, 0.25);
          padding: 0.1rem 0.42rem;
          border-radius: 4px;
          letter-spacing: 0.04em;
        }

        .bento-badge-research {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 700;
          color: #7c3aed;
          background: rgba(124, 58, 237, 0.09);
          border: 1px solid rgba(124, 58, 237, 0.22);
          padding: 0.1rem 0.42rem;
          border-radius: 4px;
          letter-spacing: 0.04em;
        }

        .card-tech-tag {
          font-family: var(--font-mono);
          font-size: clamp(0.56rem, 0.68vh, 0.62rem);
          font-weight: 500;
          color: #475569;
          background: #f1f5f9;
          padding: 0.1rem 0.34rem;
          border-radius: 3px;
        }

        /* ─── 4. Bottom Landscape Editorial Annotations ─── */
        .projects-landscape-annotations {
          margin-top: auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-top: clamp(0.2rem, 0.7vh, 0.6rem);
          padding-bottom: clamp(0.15rem, 0.5vh, 0.4rem);
          position: relative;
          z-index: 10;
          flex-shrink: 0;
          width: 100%;
        }

        .landscape-editorial-left {
          display: flex;
          flex-direction: column;
        }

        .handwritten-statement {
          font-family: var(--font-handwriting);
          font-size: clamp(1.15rem, 1.4vw + 0.4vh, 1.45rem);
          font-weight: 600;
          line-height: 1.15;
          color: #1e293b;
          display: flex;
          flex-direction: column;
          transform: rotate(-1.5deg);
          user-select: none;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.9);
        }

        .statement-punchline {
          color: #4f46e5;
          font-weight: 700;
        }

        .landscape-editorial-right {
          display: flex;
          align-items: center;
          padding-bottom: 0.15rem;
        }

        .landscape-subtle-mono {
          font-family: var(--font-mono);
          font-size: clamp(0.64rem, 0.8vh, 0.72rem);
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #64748b;
          white-space: nowrap;
          user-select: none;
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(4px);
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.65);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        /* ─── 5. Light-Glass Editorial Modal ─── */
        .editorial-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.48);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1rem, 2.5vh, 2rem);
        }

        .editorial-modal-panel {
          background: rgba(255, 255, 255, 0.93);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 30px 70px -15px rgba(15, 23, 42, 0.2), 0 0 0 1px rgba(99, 102, 241, 0.08);
          width: clamp(70vw, 76vw, 82vw);
          max-width: 1150px;
          max-height: clamp(520px, 82vh, 85vh);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .modal-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.6rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          background: rgba(250, 250, 249, 0.85);
          flex-shrink: 0;
        }

        .modal-header-meta {
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }

        .modal-entry-num {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 800;
          color: #4f46e5;
        }

        .modal-sep {
          color: #cbd5e1;
        }

        .modal-category {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: #475569;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .modal-top-contrib-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          color: #0284c7;
          background: rgba(2, 132, 199, 0.1);
          border: 1px solid rgba(2, 132, 199, 0.25);
          padding: 0.1rem 0.5rem;
          border-radius: 9999px;
          margin-left: 0.4rem;
        }

        .modal-close-trigger {
          background: none;
          border: 1px solid transparent;
          color: #64748b;
          cursor: pointer;
          padding: 6px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.18s ease;
        }

        .modal-close-trigger:hover,
        .modal-close-trigger:focus-visible {
          color: #0f172a;
          background: rgba(0, 0, 0, 0.06);
          border-color: rgba(0, 0, 0, 0.08);
          outline: none;
        }

        /* Two-Column Split Inside Modal */
        .modal-body-split {
          display: grid;
          grid-template-columns: 42% 58%;
          overflow-y: auto;
          flex: 1;
        }

        /* Left Visual / Typographic Column (~42%) */
        .modal-visual-col {
          background: #f8fafc;
          border-right: 1px solid rgba(0, 0, 0, 0.06);
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }

        .modal-image-frame {
          width: 100%;
          height: 100%;
          min-height: 280px;
          border-radius: 12px;
          overflow: hidden;
          background: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-project-photo {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Typographic Card when image === null */
        .modal-typo-graphic-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 14px;
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.04);
          overflow: hidden;
        }

        .typo-card-watermark {
          position: absolute;
          right: 0.8rem;
          top: 0.4rem;
          font-family: var(--font-display);
          font-size: 5rem;
          font-weight: 800;
          color: rgba(99, 102, 241, 0.05);
          line-height: 1;
          user-select: none;
          pointer-events: none;
        }

        .typo-header-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.8rem;
          position: relative;
          z-index: 1;
        }

        .typo-mono-idx {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 800;
          color: #4f46e5;
          letter-spacing: 0.05em;
        }

        .typo-category-chip {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          color: #64748b;
          background: #f1f5f9;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }

        .typo-display-titles {
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .typo-big-name {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .typo-sub-name {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #64748b;
          display: block;
          margin-top: 0.2rem;
        }

        .typo-artwork-window {
          width: 100%;
          aspect-ratio: 280 / 145;
          border-radius: 10px;
          overflow: hidden;
          background: #0b0f19;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .typo-footer-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.62rem;
          color: #94a3b8;
          padding-top: 0.6rem;
          border-top: 1px dashed rgba(0, 0, 0, 0.08);
          position: relative;
          z-index: 1;
        }

        .typo-meta-coord {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .typo-grid-accent {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .typo-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #818cf8;
        }

        .typo-line {
          width: 20px;
          height: 1px;
          background: #cbd5e1;
        }

        /* Right Editorial Information Column (~58%) */
        .modal-info-col {
          padding: 1.6rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          overflow-y: auto;
        }

        .modal-title-group {
          display: flex;
          flex-direction: column;
        }

        .modal-project-title {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 1.8vw, 1.9rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 0.25rem;
        }

        .modal-project-subtitle {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #6366f1;
          font-weight: 600;
        }

        .modal-lead-desc {
          font-size: 0.9rem;
          color: #334155;
          line-height: 1.55;
        }

        .modal-info-section {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .modal-section-title {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #64748b;
        }

        .modal-section-body {
          font-size: 0.86rem;
          color: #334155;
          line-height: 1.55;
        }

        .modal-outcome-text {
          color: #1e293b;
          font-weight: 500;
          background: rgba(99, 102, 241, 0.04);
          padding: 0.65rem 0.85rem;
          border-radius: 8px;
          border-left: 3px solid #6366f1;
        }

        .modal-tech-chips {
          display: flex;
          gap: 0.35rem;
          flex-wrap: wrap;
        }

        .tech-chip {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          padding: 0.2rem 0.55rem;
          border-radius: 5px;
          background: #f1f5f9;
          color: #1e293b;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        /* Research Callout */
        .modal-research-callout {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: rgba(99, 102, 241, 0.06);
          border: 1px solid rgba(99, 102, 241, 0.18);
          border-radius: 10px;
          padding: 0.85rem 1.1rem;
        }

        .modal-research-icon {
          color: #4f46e5;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .modal-research-content {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .research-meta-lbl {
          font-family: var(--font-mono);
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #4f46e5;
        }

        .research-paper-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #1e1b4b;
          line-height: 1.35;
        }

        .research-paper-sub {
          font-size: 0.76rem;
          color: #475569;
          line-height: 1.3;
        }

        /* Focus List */
        .modal-focus-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.38rem;
          padding: 0;
          margin: 0;
        }

        .modal-focus-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.84rem;
          color: #334155;
          line-height: 1.4;
        }

        .focus-check {
          color: #10b981;
          margin-top: 2px;
          flex-shrink: 0;
        }

        /* Action Row */
        .modal-action-row {
          display: flex;
          gap: 0.6rem;
          margin-top: 0.3rem;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .modal-action-btn {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 600;
          color: #0f172a;
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 0.45rem 0.9rem;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          text-decoration: none;
          transition: all 0.18s ease;
        }

        .modal-action-btn:hover {
          background: #0f172a;
          color: #ffffff;
        }

        .modal-action-btn.primary {
          background: #4f46e5;
          color: #ffffff;
          border-color: #4f46e5;
        }

        .modal-action-btn.primary:hover {
          background: #4338ca;
        }

        /* Modal Footer */
        .modal-nav-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.6rem;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          background: rgba(250, 250, 249, 0.9);
          flex-shrink: 0;
        }

        .modal-nav-btn {
          background: none;
          border: 1px solid transparent;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          transition: all 0.15s ease;
        }

        .modal-nav-btn:hover,
        .modal-nav-btn:focus-visible {
          color: #0f172a;
          background: rgba(0, 0, 0, 0.05);
          outline: none;
        }

        .modal-paging-counter {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .counter-curr {
          color: #4f46e5;
        }

        .counter-sep {
          color: #cbd5e1;
        }

        .counter-tot {
          color: #64748b;
        }

        /* ─── Responsive Breakpoints ─── */
        @media (max-width: 960px) {
          .bento-reference-container {
            flex-direction: column;
            max-height: none;
            gap: 0.6rem;
          }
          .bento-col-left {
            width: 100%;
            height: auto;
          }
          .bento-box-1-dark {
            width: 100%;
          }
          .bento-right-top-row {
            flex-direction: column;
          }
          .modal-body-split {
            grid-template-columns: 1fr;
          }
          .modal-visual-col {
            border-right: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
            padding: 1.2rem;
          }
          .modal-info-col {
            padding: 1.2rem 1.4rem;
          }
        }

        @media (max-width: 768px) {
          .projects-showcase-section {
            padding: clamp(0.9rem, 2vh, 1.5rem) 1.2rem;
            height: auto;
            min-height: 100svh;
            max-height: none;
            overflow-y: auto;
          }
          .bento-col-left {
            flex-direction: column;
          }
          .bento-right-bottom-row {
            flex-direction: column;
          }
          .projects-hero-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          .projects-intro-col {
            align-items: flex-start;
            max-width: 100%;
          }
          .projects-sub-paragraph {
            text-align: left;
          }
          .projects-filter-pills {
            justify-content: flex-start;
          }
          .projects-landscape-annotations {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            margin-top: 1.2rem;
          }
          .editorial-modal-panel {
            width: calc(100% - 24px);
            max-height: calc(100dvh - 24px);
          }
        }

        @media (max-width: 540px) {
          .projects-top-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.4rem;
          }
          .top-ideas-quote {
            display: none;
          }
          .modal-top-bar {
            padding: 0.8rem 1rem;
          }
          .modal-info-col {
            padding: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-grid-card,
          .modal-close-trigger,
          .modal-nav-btn {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
