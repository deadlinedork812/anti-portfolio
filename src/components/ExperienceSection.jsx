import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, TrendingUp, Compass } from 'lucide-react';

import experienceBgAvif3840 from '../assets/experience-background-3840.avif';
import experienceBgWebp3840 from '../assets/experience-background-3840.webp';
import experienceBgAvif2560 from '../assets/experience-background-2560.avif';
import experienceBgWebp2560 from '../assets/experience-background-2560.webp';
import experienceBgAvif1920 from '../assets/experience-background-1920.avif';
import experienceBgWebp1920 from '../assets/experience-background-1920.webp';
import experienceBgAvif1440 from '../assets/experience-background-1440.avif';
import experienceBgWebp1440 from '../assets/experience-background-1440.webp';
import experienceBgJpg from '../assets/experience-background.jpg';
import amatresLogo from '../assets/amatres-logo.png';
import stackboxLogo from '../assets/stackbox-logo.png';
import stackproLogo from '../assets/stackpro-logo.png';

// ─── 1. VERIFIED EXPERIENCE DATA ───
const experiencesData = [
  {
    id: 'amatres-technologies',
    idx: '01',
    company: 'Amatres Technologies',
    shortCompany: 'Amatres Technologies',
    role: 'Software Engineer Intern',
    fullRole: 'Software Engineer Intern / Product Development Intern',
    period: 'Aug 2023 – Dec 2023',
    logo: amatresLogo,
    badge: 'PRODUCT DEVELOPMENT · STARTUP',
    badgeType: 'blue',
    product: 'AMAHealth — Tele-Consultation Platform',
    summary: 'Contributed to overall product development for the AMAHealth tele-consultation platform in a startup environment, focusing on serverless backend functionality, notification workflows, and observability.',
    whatIWorkedOn: [
      'Built and deployed a notification system for the tele-consultation platform to support patient-doctor communication.',
      'Developed serverless backend functionality using AWS Lambda and REST APIs for service communication.',
      'Integrated MSG91 API for multi-channel SMS and critical alert delivery.',
      'Used AWS CloudWatch for operational logging, alerts, and system observability.'
    ],
    tools: ['AWS Lambda', 'REST APIs', 'AWS CloudWatch', 'MSG91'],
    progressionStage: null,
    wmsWorkflows: null,
    trajectoryNote: 'Foundational product development and serverless architecture in a fast-paced environment.'
  },
  {
    id: 'stackbox-qa',
    idx: '02',
    company: 'StackBOX',
    shortCompany: 'StackBOX',
    role: 'QA Intern',
    fullRole: 'QA Intern',
    period: 'Jun 2024 – Nov 2024',
    logo: stackboxLogo,
    badge: 'CORE QA & VALIDATION',
    badgeType: 'indigo',
    product: 'Supply Chain & Fulfillment SaaS',
    summary: 'Focused on software quality assurance and functional validation across multi-tiered supply chain product workflows, ensuring seamless order transitions and system reliability.',
    whatIWorkedOn: [
      'Performed manual testing across product workflows to validate business logic and journeys.',
      'Created and executed detailed test cases covering both expected paths and complex edge cases.',
      'Reported and tracked defects systematically through resolution and verification.',
      'Worked closely with product and development workflows to validate REST API integrations.'
    ],
    tools: ['Manual QA', 'Test Cases', 'Defect Tracking', 'API Testing'],
    progressionStage: null,
    wmsWorkflows: null,
    trajectoryNote: 'Transitioned deep focus into functional testing, test case design, and defect management.'
  },
  {
    id: 'stackpro-intern',
    idx: '03',
    company: 'StackPro Technologies Pvt. Ltd.',
    shortCompany: 'StackPro Technologies',
    role: 'QA Engineering Intern',
    fullRole: 'QA Engineering Intern',
    period: 'Jan 2026 – Present',
    logo: stackproLogo,
    badge: 'WMS TESTING & PRODUCT QA',
    badgeType: 'amber',
    product: 'Warehouse Management System (WMS)',
    summary: 'Spearheaded manual QA across 10+ core product features, validating complex Warehouse Management System operational logistics while contributing to UI/product design.',
    whatIWorkedOn: [
      'Spearheaded manual QA across 10+ core product features and operational workflows.',
      'Documented 80+ critical defects systematically using ClickUp.',
      'Tested Warehouse Management System workflows: outbound pick/drop, inbound, replenishment, and PTL.',
      'Worked with warehouse strategies, bin-search flows, and operational journeys with product & engineering.',
      'Contributed to UI/product design through wireframes, prototypes, and high-fidelity screens.'
    ],
    tools: ['Manual QA', 'ClickUp', 'API Testing', 'WMS', 'UI Prototyping'],
    progressionStage: {
      current: 'internship',
      stageNum: 1,
      title: 'QA Engineering Intern',
      detail: 'Spearheaded core feature QA, 80+ defects documented, deep WMS workflow testing'
    },
    wmsWorkflows: [
      'Outbound pick/drop',
      'Inbound workflows',
      'Replenishment',
      'Pick-to-Light (PTL)',
      'Strategy-based',
      'Bin-search flows'
    ],
    trajectoryNote: 'Spearheaded testing for mission-critical warehouse operations and expanded into UI design.'
  },
  {
    id: 'stackpro-fulltime',
    idx: '04',
    company: 'StackPro Technologies Pvt. Ltd.',
    shortCompany: 'StackPro Technologies',
    role: 'Full-Time — QA / Product Eng',
    fullRole: 'Full-Time — QA / Product Engineering',
    period: 'Present',
    logo: stackproLogo,
    badge: 'CAREER PROGRESSION · FULL-TIME',
    badgeType: 'emerald',
    product: 'Enterprise Product & Quality Engineering',
    summary: 'Career progression from internship to full-time role at StackPro, expanding from pure QA into broader product ownership, cross-functional collaboration, and product thinking.',
    whatIWorkedOn: [
      'Assumed broader ownership over product quality, validation guardrails, and release readiness.',
      'Drove cross-functional collaboration between engineering, QA, and product teams on complex features.',
      'Led comprehensive testing, edge case discovery, and regression validation for operational flows.',
      'Applied product thinking to improve user workflows, evaluate system edge cases, and contribute beyond pure QA.'
    ],
    tools: ['Product Quality', 'Cross-Functional QA', 'System Validation', 'Product Thinking', 'UX Workflows'],
    progressionStage: {
      current: 'fulltime',
      stageNum: 3,
      title: 'Full-Time — QA / Product Engineering',
      detail: 'Broader ownership, cross-functional collaboration, testing & validation, product thinking'
    },
    wmsWorkflows: null,
    trajectoryNote: 'Direct internal progression: Intern → Expanded Ownership → Full-Time Engineering.'
  },
  {
    id: 'stackbox-services',
    idx: '05',
    company: 'StackBOX Services Pvt. Ltd.',
    shortCompany: 'StackBOX Services',
    role: 'QA & Operations Validation',
    fullRole: 'QA & Operations Validation',
    period: '2024 – 2025',
    logo: stackboxLogo,
    badge: 'ENTERPRISE SUPPLY CHAIN QA',
    badgeType: 'indigo',
    product: 'Enterprise Distribution & Logistics Engine',
    summary: 'Validated enterprise supply chain and distribution software systems, verifying critical inventory dispatch workflows, integration reliability, and enterprise operational compliance.',
    whatIWorkedOn: [
      'Validated end-to-end supply chain modules and operational journeys for enterprise distribution.',
      'Conducted manual and functional verification of inventory flows, order states, and fulfillment rules.',
      'Documented and tracked operational anomalies, collaborating with dev teams to harden business logic.',
      'Ensured release stability and workflow consistency across enterprise distribution scenarios.'
    ],
    tools: ['Manual QA', 'Supply Chain Workflows', 'Defect Tracking', 'Operations Validation'],
    progressionStage: null,
    wmsWorkflows: null,
    trajectoryNote: 'Hands-on enterprise distribution validation and operations quality assurance.'
  }
];

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState('stackpro-intern');

  const selectedExp = experiencesData.find(e => e.id === selectedId) || experiencesData[0];

  return (
    <section id="experience" className="portfolio-section experience-showcase-section">
      {/* ─── 1. ENVIRONMENTAL LANDSCAPE BACKGROUND LAYER ─── */}
      <div className="exp-bg-wrapper" aria-hidden="true">
        <picture className="exp-bg-picture">
          <source
            type="image/avif"
            srcSet={`
              ${experienceBgAvif1440} 1440w,
              ${experienceBgAvif1920} 1920w,
              ${experienceBgAvif2560} 2560w,
              ${experienceBgAvif3840} 3840w
            `}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`
              ${experienceBgWebp1440} 1440w,
              ${experienceBgWebp1920} 1920w,
              ${experienceBgWebp2560} 2560w,
              ${experienceBgWebp3840} 3840w
            `}
            sizes="100vw"
          />
          <img
            src={experienceBgJpg}
            alt="Cinematic Landscape Environment"
            className="exp-bg-img"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="exp-ambient-glow" />
      </div>

      {/* ─── 2. MAIN CONTENT SURFACE ─── */}
      <div className="exp-content-wrap">
        
        {/* Top Sub-Header Bar */}
        <div className="exp-top-bar">
          <div className="exp-meta-group">
            <span className="exp-section-tag">04. EXPERIENCE</span>
            <span className="exp-sep">/</span>
            <span className="exp-top-subtext">CAREER PROGRESSION · QUALITY · PRODUCT THINKING</span>
          </div>

          <div className="exp-quote-block">
            <Sparkles size={13} className="exp-quote-icon" />
            <span className="exp-quote-text">Build it. Break it. Understand it.</span>
          </div>
        </div>

        {/* Headline + Paragraph Row */}
        <div className="exp-hero-row">
          <div className="exp-title-col">
            <h2 className="exp-display-headline">
              From building software<br />
              to improving <span className="word-improve">how it works.</span>
            </h2>
          </div>

          <div className="exp-intro-col">
            <p className="exp-sub-paragraph">
              My experience has moved across development, quality, product thinking, and real-world software delivery — with each role adding another lens to how I build and evaluate products.
            </p>
          </div>
        </div>

        {/* ─── 3. ASYMMETRIC 3-ZONE CAREER MAP BOARD ─── */}
        <div className="exp-career-board">
          
          {/* ZONE 1: Career Progression Selector (Left) */}
          <div className="exp-selector-col" role="tablist" aria-label="Career Experience Entries">
            <div className="selector-header-meta">
              <span className="selector-title">CAREER MAP</span>
              <span className="selector-count">{experiencesData.length} ENTRIES</span>
            </div>

            <div className="exp-selector-list">
              {experiencesData.map((exp) => {
                const isSelected = exp.id === selectedId;
                return (
                  <button
                    key={exp.id}
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`panel-${exp.id}`}
                    id={`tab-${exp.id}`}
                    tabIndex={0}
                    className={`exp-nav-card ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedId(exp.id)}
                  >
                    <div className="nav-card-left">
                      <span className="nav-card-idx">{exp.idx}</span>
                      <div className="nav-card-logo-wrap">
                        <img src={exp.logo} alt="" className="nav-card-logo-img" />
                      </div>
                      <div className="nav-card-text">
                        <span className="nav-card-company">{exp.shortCompany || exp.company}</span>
                        <span className="nav-card-role">{exp.role}</span>
                      </div>
                    </div>

                    <div className="nav-card-right">
                      {isSelected ? (
                        <span className="nav-active-pip" />
                      ) : (
                        <span className="nav-card-period">{exp.period.split('–')[0].trim()}</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ZONE 2: Active Experience Card (Center / Dominant) */}
          <div className="exp-active-main-col">
            <AnimatePresence mode="wait">
              <motion.article
                key={selectedExp.id}
                id={`panel-${selectedExp.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${selectedExp.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="exp-card-dominant"
              >
                {/* Top Card Header */}
                <div className="dominant-card-header">
                  <div className="header-company-info">
                    <div className="company-logo-frame">
                      <img src={selectedExp.logo} alt={selectedExp.company} className="company-logo-img" />
                    </div>
                    <div className="company-titles">
                      <div className="company-badge-row">
                        <span className={`exp-badge badge-${selectedExp.badgeType}`}>{selectedExp.badge}</span>
                        <span className="exp-period-pill">{selectedExp.period}</span>
                      </div>
                      <h3 className="dominant-company-name">{selectedExp.company}</h3>
                      <h4 className="dominant-role-name">{selectedExp.fullRole || selectedExp.role}</h4>
                    </div>
                  </div>
                </div>

                {/* Short Description */}
                <p className="dominant-card-summary">
                  {selectedExp.summary}
                </p>

                {/* What I Worked On */}
                <div className="dominant-work-section">
                  <span className="dominant-section-label">WHAT I WORKED ON</span>
                  <ul className="dominant-work-list">
                    {selectedExp.whatIWorkedOn.map((item, idx) => (
                      <li key={idx} className="dominant-work-item">
                        <CheckCircle2 size={13} className="work-bullet-icon" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WMS Operational Workflows (Specific to StackPro Internship) */}
                {selectedExp.wmsWorkflows && (
                  <div className="wms-workflows-box">
                    <span className="wms-workflows-label">WMS OPERATIONAL FLOWS VALIDATED:</span>
                    <div className="wms-chips-grid">
                      {selectedExp.wmsWorkflows.map((flow, i) => (
                        <span key={i} className="wms-flow-chip">{flow}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tools & Technologies */}
                <div className="dominant-tools-footer">
                  <span className="tools-footer-label">TOOLS &amp; TECHNOLOGIES</span>
                  <div className="dominant-tools-row">
                    {selectedExp.tools.map((tool) => (
                      <span key={tool} className="exp-tech-chip">{tool}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* ZONE 3: Context & Progression Trajectory (Right) */}
          <div className="exp-context-col">
            
            {/* Progression Trajectory Card for StackPro */}
            <div className="exp-context-card progression-trajectory-card">
              <div className="context-card-header">
                <TrendingUp size={14} className="context-icon" />
                <span className="context-card-title">CAREER TRAJECTORY</span>
              </div>

              <div className="progression-timeline">
                {/* Stage 1: Intern */}
                <div className={`timeline-stage-node ${selectedExp.id === 'stackpro-intern' ? 'current-stage' : 'completed-stage'}`}>
                  <div className="stage-marker">
                    <span className="marker-dot" />
                    <span className="marker-line" />
                  </div>
                  <div className="stage-content">
                    <span className="stage-tag">STAGE 01</span>
                    <span className="stage-name">QA Engineering Intern</span>
                    <span className="stage-desc">Core feature testing, 80+ defects, WMS logistics workflows</span>
                  </div>
                </div>

                {/* Stage 2: Expanded Ownership */}
                <div className={`timeline-stage-node ${selectedExp.id === 'stackpro-intern' || selectedExp.id === 'stackpro-fulltime' ? 'active-transition' : ''}`}>
                  <div className="stage-marker">
                    <span className="marker-dot-subtle" />
                    <span className="marker-line" />
                  </div>
                  <div className="stage-content">
                    <span className="stage-tag">EXPANDED OWNERSHIP</span>
                    <span className="stage-name">UI Prototyping &amp; Quality</span>
                    <span className="stage-desc">High-fidelity screens, user workflows &amp; cross-functional review</span>
                  </div>
                </div>

                {/* Stage 3: Full-Time */}
                <div className={`timeline-stage-node ${selectedExp.id === 'stackpro-fulltime' ? 'current-stage' : 'future-stage'}`}>
                  <div className="stage-marker">
                    <span className="marker-dot" />
                  </div>
                  <div className="stage-content">
                    <span className="stage-tag">STAGE 02 · FULL-TIME</span>
                    <span className="stage-name">Full-Time QA / Product Eng</span>
                    <span className="stage-desc">Broader ownership, release readiness &amp; product thinking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental Philosophy Card */}
            <div className="exp-context-card philosophy-context-card">
              <div className="context-card-header">
                <Compass size={14} className="context-icon" />
                <span className="context-card-title">CORE PERSPECTIVE</span>
              </div>
              <p className="philosophy-context-body">
                Quality isn't just catching bugs before deployment. It's understanding how users, business logic, and operational edge cases converge in the real world.
              </p>
              <div className="philosophy-micro-tags">
                <span className="micro-tag">Development</span>
                <span className="micro-arrow">→</span>
                <span className="micro-tag">Quality</span>
                <span className="micro-arrow">→</span>
                <span className="micro-tag">Product</span>
              </div>
            </div>

          </div>

        </div>

        {/* ─── 4. BOTTOM LANDSCAPE SPACER (Integrated Artwork Typography Layer) ─── */}
        <div className="exp-landscape-spacer" aria-hidden="true" />

      </div>

      <style>{`
        /* ─── Section Root & Viewport Fit ─── */
        .experience-showcase-section {
          position: relative;
          min-height: 100svh;
          height: 100dvh;
          max-height: 100dvh;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          background-color: #f3f6fa;
          color: #0f172a;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(0.75rem, 1.8vh, 1.25rem) clamp(1.4rem, 2.8vw, 3rem);
          scroll-snap-align: start;
        }

        /* ─── 1. Background Environmental Layer ─── */
        .exp-bg-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .exp-bg-picture {
          width: 100%;
          height: 100%;
          display: block;
        }

        .exp-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          display: block;
        }

        .exp-ambient-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.48) 0%,
            rgba(255, 255, 255, 0.22) 35%,
            rgba(255, 255, 255, 0.05) 70%,
            transparent 100%
          );
          pointer-events: none;
        }

        /* ─── 2. Main Content Surface ─── */
        .exp-content-wrap {
          position: relative;
          z-index: 5;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Top Bar */
        .exp-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
          margin-bottom: clamp(0.2rem, 0.4vh, 0.4rem);
        }

        .exp-meta-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .exp-section-tag {
          font-family: var(--font-mono);
          font-size: clamp(0.68rem, 0.85vh, 0.76rem);
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #4f46e5;
        }

        .exp-sep {
          color: #cbd5e1;
          font-weight: 300;
        }

        .exp-top-subtext {
          font-family: var(--font-mono);
          font-size: clamp(0.6rem, 0.75vh, 0.68rem);
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #64748b;
        }

        .exp-quote-block {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(8px);
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .exp-quote-icon {
          color: #6366f1;
        }

        .exp-quote-text {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          color: #334155;
          letter-spacing: 0.02em;
        }

        /* Headline & Paragraph Row */
        .exp-hero-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: clamp(1rem, 2vw, 2.5rem);
          margin-bottom: clamp(0.35rem, 0.7vh, 0.65rem);
          flex-shrink: 0;
        }

        .exp-title-col {
          flex: 1.1;
        }

        .exp-display-headline {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2vw + 0.6vh, 2.3rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.025em;
          color: #0f172a;
          margin: 0;
        }

        .word-improve {
          color: #4f46e5;
          position: relative;
        }

        .exp-intro-col {
          flex: 1;
          max-width: 480px;
        }

        .exp-sub-paragraph {
          font-family: var(--font-sans);
          font-size: clamp(0.72rem, 0.88vh, 0.84rem);
          line-height: 1.45;
          color: #475569;
          margin: 0;
        }

        /* ─── 3. ASYMMETRIC 3-ZONE CAREER MAP BOARD ─── */
        .exp-career-board {
          display: flex;
          gap: clamp(0.65rem, 1vw, 1.1rem);
          width: 100%;
          height: clamp(450px, 58vh, 550px);
          max-height: clamp(450px, 60vh, 560px);
          min-height: 0;
          flex-shrink: 0;
        }

        /* ── ZONE 1: Career Progression Selector (Left) ── */
        .exp-selector-col {
          width: clamp(230px, 21vw, 275px);
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          flex-shrink: 0;
          min-height: 0;
        }

        .selector-header-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 0.2rem;
          flex-shrink: 0;
        }

        .selector-title {
          font-family: var(--font-mono);
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #475569;
        }

        .selector-count {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          font-weight: 700;
          color: #6366f1;
        }

        .exp-selector-list {
          display: flex;
          flex-direction: column;
          gap: clamp(0.35rem, 0.6vh, 0.5rem);
          flex: 1;
          min-height: 0;
          justify-content: space-between;
        }

        .exp-nav-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(0.45rem, 0.75vh, 0.65rem) clamp(0.55rem, 0.8vw, 0.75rem);
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          outline: none;
          box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.03);
          flex: 1;
        }

        .exp-nav-card:hover {
          background: rgba(255, 255, 255, 0.92);
          border-color: rgba(99, 102, 241, 0.35);
          transform: translateY(-1.5px);
          box-shadow: 0 6px 14px -3px rgba(0, 0, 0, 0.06);
        }

        .exp-nav-card.active {
          background: #ffffff;
          border-color: #4f46e5;
          box-shadow: 0 8px 20px -4px rgba(79, 70, 229, 0.16), 0 0 0 1px #4f46e5;
        }

        .nav-card-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 0;
        }

        .nav-card-idx {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 800;
          color: #94a3b8;
          flex-shrink: 0;
        }

        .exp-nav-card.active .nav-card-idx {
          color: #4f46e5;
        }

        .nav-card-logo-wrap {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
          padding: 2px;
        }

        .nav-card-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .nav-card-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
          gap: 0.05rem;
        }

        .nav-card-company {
          font-family: var(--font-sans);
          font-size: clamp(0.68rem, 0.85vh, 0.76rem);
          font-weight: 700;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .nav-card-role {
          font-family: var(--font-mono);
          font-size: clamp(0.55rem, 0.68vh, 0.62rem);
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .exp-nav-card.active .nav-card-role {
          color: #4f46e5;
          font-weight: 600;
        }

        .nav-card-right {
          flex-shrink: 0;
          margin-left: 0.4rem;
        }

        .nav-active-pip {
          display: block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4f46e5;
          box-shadow: 0 0 8px rgba(79, 70, 229, 0.8);
        }

        .nav-card-period {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          color: #94a3b8;
          white-space: nowrap;
        }

        /* ── ZONE 2: Active Experience Card (Center / Dominant) ── */
        .exp-active-main-col {
          flex: 1.4;
          display: flex;
          flex-direction: column;
          min-width: 0;
          height: 100%;
        }

        .exp-card-dominant {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          border-radius: 18px;
          padding: clamp(0.85rem, 1.3vh, 1.25rem);
          box-shadow: 0 12px 32px -8px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(99, 102, 241, 0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          min-height: 0;
          overflow: hidden;
        }

        .dominant-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.8rem;
          flex-shrink: 0;
        }

        .header-company-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          min-width: 0;
        }

        .company-logo-frame {
          width: clamp(42px, 4.5vw, 50px);
          height: clamp(42px, 4.5vw, 50px);
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
          padding: 6px;
        }

        .company-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .company-titles {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          min-width: 0;
        }

        .company-badge-row {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          flex-wrap: wrap;
        }

        .exp-badge {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 0.12rem 0.45rem;
          border-radius: 4px;
        }

        .badge-blue {
          color: #0284c7;
          background: rgba(2, 132, 199, 0.09);
          border: 1px solid rgba(2, 132, 199, 0.22);
        }

        .badge-indigo {
          color: #4f46e5;
          background: rgba(79, 70, 229, 0.09);
          border: 1px solid rgba(79, 70, 229, 0.22);
        }

        .badge-amber {
          color: #d97706;
          background: rgba(217, 119, 6, 0.09);
          border: 1px solid rgba(217, 119, 6, 0.22);
        }

        .badge-emerald {
          color: #059669;
          background: rgba(5, 150, 105, 0.09);
          border: 1px solid rgba(5, 150, 105, 0.22);
        }

        .exp-period-pill {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          font-weight: 600;
          color: #64748b;
          background: #f1f5f9;
          padding: 0.12rem 0.45rem;
          border-radius: 4px;
        }

        .dominant-company-name {
          font-family: var(--font-display);
          font-size: clamp(1rem, 1.35vw, 1.25rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
        }

        .dominant-role-name {
          font-family: var(--font-mono);
          font-size: clamp(0.66rem, 0.8vh, 0.74rem);
          font-weight: 600;
          color: #4f46e5;
          margin: 0;
        }

        .dominant-card-summary {
          font-family: var(--font-sans);
          font-size: clamp(0.68rem, 0.84vh, 0.78rem);
          line-height: 1.45;
          color: #334155;
          margin: clamp(0.35rem, 0.6vh, 0.55rem) 0;
          flex-shrink: 0;
        }

        /* What I Worked On Section */
        .dominant-work-section {
          display: flex;
          flex-direction: column;
          gap: clamp(0.2rem, 0.4vh, 0.35rem);
          margin-bottom: clamp(0.3rem, 0.55vh, 0.5rem);
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          padding-right: 0.35rem;
        }

        .dominant-work-section::-webkit-scrollbar {
          width: 3.5px;
        }

        .dominant-work-section::-webkit-scrollbar-track {
          background: transparent;
        }

        .dominant-work-section::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.25);
          border-radius: 4px;
        }

        .dominant-work-section::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.5);
        }

        .dominant-section-label {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #64748b;
          display: block;
        }

        .dominant-work-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(0.2rem, 0.4vh, 0.35rem);
        }

        .dominant-work-item {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: clamp(0.66rem, 0.8vh, 0.75rem);
          line-height: 1.38;
          color: #1e293b;
        }

        .work-bullet-icon {
          color: #10b981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* WMS Workflows Box */
        .wms-workflows-box {
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 8px;
          padding: clamp(0.35rem, 0.55vh, 0.5rem) clamp(0.5rem, 0.7vw, 0.7rem);
          margin-bottom: clamp(0.35rem, 0.6vh, 0.55rem);
          flex-shrink: 0;
        }

        .wms-workflows-label {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #475569;
          display: block;
          margin-bottom: 0.25rem;
        }

        .wms-chips-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.25rem;
        }

        .wms-flow-chip {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          font-weight: 600;
          color: #0f172a;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 0.1rem 0.38rem;
          border-radius: 4px;
        }

        /* Dominant Tools Footer */
        .dominant-tools-footer {
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding-top: clamp(0.35rem, 0.6vh, 0.55rem);
          flex-shrink: 0;
        }

        .tools-footer-label {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #64748b;
          display: block;
          margin-bottom: 0.3rem;
        }

        .dominant-tools-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }

        .exp-tech-chip {
          font-family: var(--font-mono);
          font-size: clamp(0.58rem, 0.72vh, 0.64rem);
          font-weight: 600;
          color: #475569;
          background: #f1f5f9;
          padding: 0.14rem 0.45rem;
          border-radius: 4px;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        /* ── ZONE 3: Context & Progression Trajectory (Right) ── */
        .exp-context-col {
          width: clamp(230px, 21vw, 280px);
          display: flex;
          flex-direction: column;
          gap: clamp(0.45rem, 0.8vh, 0.7rem);
          flex-shrink: 0;
          min-height: 0;
        }

        .exp-context-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 14px;
          padding: clamp(0.65rem, 1vh, 0.95rem);
          box-shadow: 0 4px 16px -3px rgba(0, 0, 0, 0.04);
        }

        .progression-trajectory-card {
          flex: 1.35;
          display: flex;
          flex-direction: column;
          min-height: 0;
          justify-content: space-between;
        }

        .context-card-header {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: clamp(0.35rem, 0.6vh, 0.6rem);
          flex-shrink: 0;
        }

        .context-icon {
          color: #4f46e5;
        }

        .context-card-title {
          font-family: var(--font-mono);
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #0f172a;
        }

        /* Trajectory Timeline */
        .progression-timeline {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          flex: 1;
          justify-content: space-around;
        }

        .timeline-stage-node {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          position: relative;
        }

        .stage-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 14px;
          flex-shrink: 0;
          padding-top: 3px;
        }

        .marker-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4f46e5;
          box-shadow: 0 0 8px rgba(79, 70, 229, 0.7);
        }

        .marker-dot-subtle {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #94a3b8;
        }

        .timeline-stage-node.current-stage .marker-dot {
          background: #10b981;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
        }

        .timeline-stage-node.active-transition .marker-dot-subtle {
          background: #6366f1;
        }

        .marker-line {
          width: 1.5px;
          height: clamp(26px, 4vh, 38px);
          background: linear-gradient(to bottom, #cbd5e1, #e2e8f0);
          margin-top: 4px;
        }

        .stage-content {
          display: flex;
          flex-direction: column;
          min-width: 0;
          gap: 0.08rem;
        }

        .stage-tag {
          font-family: var(--font-mono);
          font-size: 0.52rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #64748b;
        }

        .stage-name {
          font-family: var(--font-sans);
          font-size: clamp(0.66rem, 0.8vh, 0.74rem);
          font-weight: 700;
          color: #0f172a;
          line-height: 1.15;
        }

        .timeline-stage-node.current-stage .stage-name {
          color: #4f46e5;
        }

        .stage-desc {
          font-family: var(--font-sans);
          font-size: clamp(0.58rem, 0.7vh, 0.65rem);
          color: #64748b;
          line-height: 1.25;
        }

        /* Philosophy Card */
        .philosophy-context-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .philosophy-context-body {
          font-family: var(--font-sans);
          font-size: clamp(0.64rem, 0.78vh, 0.72rem);
          line-height: 1.45;
          color: #334155;
          margin: 0 0 0.35rem 0;
        }

        .philosophy-micro-tags {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-mono);
          font-size: 0.58rem;
          font-weight: 700;
          color: #4f46e5;
          flex-wrap: wrap;
        }

        .micro-tag {
          background: rgba(79, 70, 229, 0.08);
          padding: 0.1rem 0.35rem;
          border-radius: 3px;
        }

        .micro-arrow {
          color: #94a3b8;
          font-size: 0.65rem;
        }

        /* ─── 4. Bottom Landscape Viewport Clearance ─── */
        .exp-landscape-spacer {
          margin-top: auto;
          min-height: clamp(1.2rem, 2.5vh, 2.2rem);
          width: 100%;
          flex-shrink: 0;
          pointer-events: none;
        }

        /* ─── Responsive Breakpoints ─── */
        @media (max-width: 1024px) {
          .exp-career-board {
            flex-direction: column;
            height: auto;
            max-height: none;
          }
          .exp-selector-col,
          .exp-active-main-col,
          .exp-context-col {
            width: 100%;
          }
          .exp-selector-list {
            flex-direction: row;
            overflow-x: auto;
            gap: 0.5rem;
          }
          .exp-nav-card {
            flex: 0 0 220px;
          }
          .experience-showcase-section {
            height: auto;
            min-height: 100svh;
            max-height: none;
            overflow-y: auto;
          }
        }

        @media (max-width: 768px) {
          .experience-showcase-section {
            padding: 1rem;
          }
          .exp-hero-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .exp-intro-col {
            max-width: 100%;
          }
          .dominant-card-header {
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .exp-nav-card,
          .exp-card-dominant {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
