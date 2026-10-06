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

// ─── 1. VERIFIED EXPERIENCE DATA (REVERSE CHRONOLOGICAL: NEWEST → OLDEST) ───
const experiencesData = [
  {
    id: 'stackpro-fulltime',
    idx: '01',
    company: 'StackPro Technologies Pvt. Ltd.',
    shortCompany: 'StackPro Technologies',
    role: 'Full-Time — QA / Product Engineering',
    shortRole: 'Full-Time — QA / Product Eng',
    period: 'Current / Present',
    navPeriod: 'PRESENT',
    logo: stackproLogo,
    badge: 'FULL-TIME · QA & PRODUCT ENG',
    badgeType: 'emerald',
    isProgression: true,
    progressionRelation: 'Promoted from QA Engineering Intern → Full-Time QA / Product Engineering',
    stageId: 'stage-04',
    summary: 'Working across QA engineering and product development, with ownership spanning manual testing, product validation, UI prototyping, and release readiness.',
    whatIWorkedOn: [
      'Led manual QA across core product workflows and releases.',
      'Designed and executed test cases for critical product functionality.',
      'Identified, documented, and tracked 80+ critical defects using ClickUp.',
      'Worked closely with engineering and product teams to validate fixes and release quality.',
      'Contributed to UI prototyping, wireframing, and high-fidelity product screens.',
      'Worked on Warehouse Management System workflows including outbound, inbound, replenishment, PTL, and strategy-based operations.',
      'Helped connect product requirements, usability, and quality validation.'
    ],
    tools: ['Manual QA', 'Product Engineering', 'WMS', 'Product Design', 'Defect Tracking', 'Release Quality'],
    metrics: [
      { label: 'Role Scope', value: 'QA + Product Engineering' },
      { label: 'Defects Tracked', value: '80+ Critical (ClickUp)' },
      { label: 'Domain', value: 'WMS Core Operations' },
      { label: 'Impact', value: 'Release Readiness & Prototypes' }
    ]
  },
  {
    id: 'stackpro-intern',
    idx: '02',
    company: 'StackPro Technologies Pvt. Ltd.',
    shortCompany: 'StackPro Technologies',
    role: 'QA Engineering Intern',
    shortRole: 'QA Engineering Intern',
    period: 'Jan 2026 – Transitioned to Full-Time',
    navPeriod: 'JAN 2026',
    logo: stackproLogo,
    badge: 'ENTERPRISE QA INTERNSHIP',
    badgeType: 'amber',
    isProgression: true,
    progressionRelation: 'Stepped up into Full-Time QA / Product Engineering at StackPro',
    stageId: 'stage-03',
    summary: 'Joined StackPro as a QA Engineering Intern, working primarily on manual testing and validation of enterprise warehouse and distribution workflows.',
    whatIWorkedOn: [
      'Tested core Warehouse Management System workflows.',
      'Created and executed structured manual test cases.',
      'Validated inbound, outbound, replenishment, picking, PTL, and strategy workflows.',
      'Reported and tracked defects through ClickUp.',
      'Performed regression and functional testing across releases.',
      'Collaborated with developers to reproduce, verify, and close issues.',
      'Developed a strong understanding of enterprise operational workflows.'
    ],
    tools: ['Manual QA', 'Functional Testing', 'WMS', 'Regression Testing', 'ClickUp'],
    metrics: [
      { label: 'Workflows', value: 'Inbound, Outbound, PTL' },
      { label: 'Testing Scope', value: 'Manual & Regression QA' },
      { label: 'Tracking Tool', value: 'ClickUp Defect Pipeline' },
      { label: 'Milestone', value: 'Promoted to Full-Time' }
    ]
  },
  {
    id: 'stackbox-qa',
    idx: '03',
    company: 'StackBOX',
    shortCompany: 'StackBOX',
    role: 'QA Intern',
    shortRole: 'QA Intern',
    period: 'Jun 2024 – Nov 2024',
    navPeriod: 'JUN 2024',
    logo: stackboxLogo,
    badge: 'QUALITY ENGINEERING INTERNSHIP',
    badgeType: 'indigo',
    isProgression: false,
    progressionRelation: null,
    stageId: 'stage-02',
    summary: 'Worked on quality validation for software products and operational workflows, developing practical experience in manual testing and defect analysis.',
    whatIWorkedOn: [
      'Designed and executed manual test cases.',
      'Performed functional and regression testing.',
      'Identified and documented product defects.',
      'Validated workflows across different product scenarios.',
      'Worked with developers to reproduce and verify issues.',
      'Gained hands-on experience with startup product development and QA processes.'
    ],
    tools: ['Manual QA', 'Functional Testing', 'Regression', 'Defect Analysis'],
    metrics: [
      { label: 'Core Discipline', value: 'Functional Testing' },
      { label: 'Environment', value: 'Startup Supply Chain SaaS' },
      { label: 'Methodology', value: 'Manual Test Execution' },
      { label: 'Focus', value: 'Defect Analysis & Edge Cases' }
    ]
  },
  {
    id: 'amatres-technologies',
    idx: '04',
    company: 'Amatres Technologies',
    shortCompany: 'Amatres Technologies',
    role: 'Software Engineer Intern',
    shortRole: 'Software Engineer Intern',
    period: 'Aug 2023 – Dec 2023',
    navPeriod: 'AUG 2023',
    logo: amatresLogo,
    badge: 'SOFTWARE ENGINEERING INTERNSHIP',
    badgeType: 'blue',
    isProgression: false,
    progressionRelation: null,
    stageId: 'stage-01',
    summary: 'Worked as a Software Engineer Intern on AMAHealth, a tele-consultation product, contributing to backend services and notification infrastructure.',
    whatIWorkedOn: [
      'Built a notification system for the AMAHealth platform.',
      'Developed RESTful API integrations.',
      'Worked with AWS Lambda for serverless backend functionality.',
      'Used AWS CloudWatch for monitoring and observability.',
      'Integrated MSG91 for communication and notification delivery.',
      'Worked on backend workflows supporting the tele-consultation product.'
    ],
    tools: ['AWS Lambda', 'REST APIs', 'CloudWatch', 'MSG91', 'Backend Development'],
    metrics: [
      { label: 'Product Platform', value: 'AMAHealth Tele-Consultation' },
      { label: 'Architecture', value: 'AWS Lambda Serverless' },
      { label: 'Alerting Infra', value: 'MSG91 Gateway Integration' },
      { label: 'Observability', value: 'AWS CloudWatch Logging' }
    ]
  }
];

// ─── 2. CAREER TRAJECTORY STAGES (CHRONOLOGICAL EVOLUTION: DEV → QA → ENTERPRISE QA → QA + PRODUCT) ───
const trajectoryStages = [
  {
    stageId: 'stage-01',
    stageNum: 'STAGE 01',
    roleTitle: 'Software Engineering',
    company: 'Amatres Technologies',
    desc: 'Backend development, APIs and cloud infrastructure.',
    expId: 'amatres-technologies'
  },
  {
    stageId: 'stage-02',
    stageNum: 'STAGE 02',
    roleTitle: 'Quality Engineering',
    company: 'StackBOX',
    desc: 'Manual testing, functional validation and defect analysis.',
    expId: 'stackbox-qa'
  },
  {
    stageId: 'stage-03',
    stageNum: 'STAGE 03',
    roleTitle: 'Enterprise QA',
    company: 'StackPro Technologies',
    desc: 'WMS validation, release quality and operational workflows.',
    expId: 'stackpro-intern'
  },
  {
    stageId: 'stage-04',
    stageNum: 'STAGE 04',
    roleTitle: 'QA + Product Engineering',
    company: 'StackPro Technologies',
    desc: 'Broader ownership across quality, product thinking and product development.',
    expId: 'stackpro-fulltime'
  }
];

export default function ExperienceSection() {
  // Newest experience (StackPro Full-Time) is visually selected by default
  const [selectedId, setSelectedId] = useState('stackpro-fulltime');

  const selectedExp = experiencesData.find(e => e.id === selectedId) || experiencesData[0];

  return (
    <section id="experience" className="portfolio-section experience-showcase-section">
      {/* ─── 1. ENVIRONMENTAL LANDSCAPE BACKGROUND LAYER (ORIGINAL ARTWORK KEPT UNCHANGED) ─── */}
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
              <span className="selector-count">{experiencesData.length} ROLES</span>
            </div>

            <div className="exp-selector-list">
              {experiencesData.map((exp) => {
                const isSelected = exp.id === selectedId;
                const isStackProFullTime = exp.id === 'stackpro-fulltime';

                return (
                  <React.Fragment key={exp.id}>
                    <button
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
                          <div className="nav-card-company-row">
                            <span className="nav-card-company">{exp.shortCompany || exp.company}</span>
                            {isStackProFullTime && (
                              <span className="nav-promotion-tag">PROMOTED</span>
                            )}
                          </div>
                          <span className="nav-card-role">{exp.shortRole || exp.role}</span>
                        </div>
                      </div>

                      <div className="nav-card-right">
                        {isSelected ? (
                          <span className="nav-active-pip" />
                        ) : (
                          <span className="nav-card-period">{exp.navPeriod}</span>
                        )}
                      </div>
                    </button>

                    {/* Visual Progression Linker between 01 (Full-Time) and 02 (Intern) */}
                    {isStackProFullTime && (
                      <div className="nav-progression-connector" title="Career Progression: Intern to Full-Time">
                        <span className="connector-stem" />
                        <span className="connector-pill">
                          <span className="connector-arrow">↑</span> PROMOTION: INTERN → FULL-TIME
                        </span>
                        <span className="connector-stem" />
                      </div>
                    )}
                  </React.Fragment>
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
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="exp-card-dominant"
              >
                {/* 1. Card Header */}
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
                      <h4 className="dominant-role-name">{selectedExp.role}</h4>
                    </div>
                  </div>
                </div>

                {/* 2. Career Progression Highlight Banner for StackPro entries */}
                {selectedExp.isProgression && (
                  <div className="dominant-progression-banner">
                    <div className="progression-banner-left">
                      <span className="progression-pulse-dot" />
                      <span className="progression-banner-tag">CAREER PROGRESSION</span>
                    </div>
                    <div className="progression-banner-content">
                      <span className="progression-banner-path">
                        QA Engineering Intern <span className="progression-arrow">→</span> Full-Time QA / Product Engineering
                      </span>
                    </div>
                  </div>
                )}

                {/* 3. Short 1–2 Line Summary */}
                <p className="dominant-card-summary">
                  {selectedExp.summary}
                </p>

                {/* 4. Meaningful Snapshot Highlights Strip (4 Key Attributes) */}
                <div className="dominant-metrics-strip">
                  {selectedExp.metrics.map((m, idx) => (
                    <div key={idx} className="metric-pill">
                      <span className="metric-label">{m.label}</span>
                      <span className="metric-value">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* 5. What I Worked On (Rich Detailed Bullets) */}
                <div className="dominant-work-section">
                  <div className="work-section-header">
                    <span className="dominant-section-label">WHAT I WORKED ON</span>
                    <span className="work-bullets-count">{selectedExp.whatIWorkedOn.length} CORE RESPONSIBILITIES</span>
                  </div>
                  <ul className="dominant-work-list">
                    {selectedExp.whatIWorkedOn.map((item, idx) => (
                      <li key={idx} className="dominant-work-item">
                        <CheckCircle2 size={13} className="work-bullet-icon" aria-hidden="true" />
                        <span className="work-bullet-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 6. Tools / Technologies / Focus Footer */}
                <div className="dominant-tools-footer">
                  <span className="tools-footer-label">FOCUS &amp; TECHNOLOGIES</span>
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
            
            {/* Real Career Trajectory Card: 4 Stages */}
            <div className="exp-context-card progression-trajectory-card">
              <div className="context-card-header">
                <TrendingUp size={14} className="context-icon" />
                <span className="context-card-title">CAREER TRAJECTORY</span>
              </div>

              <div className="progression-timeline">
                {trajectoryStages.map((stage, idx) => {
                  const isCurrent = selectedExp.id === stage.expId;
                  const isLast = idx === trajectoryStages.length - 1;

                  return (
                    <div
                      key={stage.stageId}
                      className={`timeline-stage-node ${isCurrent ? 'current-stage' : ''}`}
                      onClick={() => setSelectedId(stage.expId)}
                      role="button"
                      tabIndex={0}
                      title={`View ${stage.roleTitle} at ${stage.company}`}
                    >
                      <div className="stage-marker">
                        <span className="marker-dot" />
                        {!isLast && <span className="marker-line" />}
                      </div>
                      <div className="stage-content">
                        <div className="stage-tag-row">
                          <span className="stage-tag">{stage.stageNum}</span>
                          <span className="stage-company-name">{stage.company}</span>
                        </div>
                        <span className="stage-name">{stage.roleTitle}</span>
                        <span className="stage-desc">{stage.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trajectory Evolution Summary Footer */}
              <div className="trajectory-footer-evolution">
                <span className="evolution-label">EVOLUTION:</span>
                <span className="evolution-flow">Dev → QA → Enterprise QA → QA + Product</span>
              </div>
            </div>

            {/* Core Perspective Panel */}
            <div className="exp-context-card philosophy-context-card">
              <div className="context-card-header">
                <Compass size={14} className="context-icon" />
                <span className="context-card-title">CORE PERSPECTIVE</span>
              </div>
              <p className="philosophy-context-body">
                Quality isn't just catching bugs before deployment. It's understanding how users, business logic, product decisions, and operational edge cases converge in the real world.
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

        {/* ─── 4. BOTTOM LANDSCAPE VIEWPORT CLEARANCE (Preserves artwork calligraphy unobstructed) ─── */}
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
          padding: clamp(0.6rem, 1.3vh, 1.1rem) clamp(1.2rem, 2.5vw, 2.8rem);
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
          margin-bottom: clamp(0.12rem, 0.3vh, 0.3rem);
        }

        .exp-meta-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .exp-section-tag {
          font-family: var(--font-mono);
          font-size: clamp(0.66rem, 0.8vh, 0.74rem);
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
          font-size: clamp(0.58rem, 0.7vh, 0.66rem);
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #64748b;
        }

        .exp-quote-block {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(255, 255, 255, 0.76);
          backdrop-filter: blur(8px);
          padding: 0.18rem 0.65rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.88);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
        }

        .exp-quote-icon {
          color: #6366f1;
        }

        .exp-quote-text {
          font-family: var(--font-mono);
          font-size: 0.62rem;
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
          margin-bottom: clamp(0.2rem, 0.45vh, 0.45rem);
          flex-shrink: 0;
        }

        .exp-title-col {
          flex: 1.1;
        }

        .exp-display-headline {
          font-family: var(--font-display);
          font-size: clamp(1.25rem, 1.75vw + 0.45vh, 2.1rem);
          font-weight: 800;
          line-height: 1.06;
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
          max-width: 490px;
        }

        .exp-sub-paragraph {
          font-family: var(--font-sans);
          font-size: clamp(0.7rem, 0.84vh, 0.82rem);
          line-height: 1.42;
          color: #475569;
          margin: 0;
        }

        /* ─── 3. ASYMMETRIC 3-ZONE CAREER MAP BOARD ─── */
        .exp-career-board {
          display: flex;
          gap: clamp(0.6rem, 0.9vw, 1rem);
          width: 100%;
          height: clamp(450px, 57vh, 550px);
          max-height: clamp(450px, 58vh, 560px);
          min-height: 0;
          flex-shrink: 0;
        }

        /* ── ZONE 1: Career Progression Selector (Left) ── */
        .exp-selector-col {
          width: clamp(230px, 20vw, 275px);
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          flex-shrink: 0;
          min-height: 0;
          height: 100%;
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
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #475569;
        }

        .selector-count {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          font-weight: 700;
          color: #6366f1;
        }

        .exp-selector-list {
          display: flex;
          flex-direction: column;
          gap: clamp(0.3rem, 0.55vh, 0.45rem);
          flex: 1;
          min-height: 0;
          justify-content: space-between;
        }

        .exp-nav-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(0.4rem, 0.7vh, 0.6rem) clamp(0.55rem, 0.75vw, 0.75rem);
          background: rgba(255, 255, 255, 0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.88);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: left;
          outline: none;
          box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.03);
          flex: 1;
          min-height: 0;
        }

        .exp-nav-card:hover {
          background: rgba(255, 255, 255, 0.94);
          border-color: rgba(99, 102, 241, 0.35);
          transform: translateY(-1.5px);
          box-shadow: 0 6px 14px -3px rgba(0, 0, 0, 0.06);
        }

        .exp-nav-card.active {
          background: #ffffff;
          border-color: #4f46e5;
          box-shadow: 0 8px 20px -4px rgba(79, 70, 229, 0.16), 0 0 0 1.5px #4f46e5;
        }

        .nav-card-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 0;
        }

        .nav-card-idx {
          font-family: var(--font-mono);
          font-size: 0.64rem;
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
          padding: 2.5px;
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

        .nav-card-company-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          min-width: 0;
        }

        .nav-card-company {
          font-family: var(--font-sans);
          font-size: clamp(0.66rem, 0.82vh, 0.74rem);
          font-weight: 700;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .nav-promotion-tag {
          font-family: var(--font-mono);
          font-size: 0.5rem;
          font-weight: 800;
          color: #059669;
          background: rgba(5, 150, 105, 0.1);
          border: 1px solid rgba(5, 150, 105, 0.2);
          padding: 0.04rem 0.3rem;
          border-radius: 3px;
          letter-spacing: 0.04em;
          flex-shrink: 0;
        }

        .nav-card-role {
          font-family: var(--font-mono);
          font-size: clamp(0.54rem, 0.66vh, 0.6rem);
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
          margin-left: 0.35rem;
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
          font-size: 0.56rem;
          color: #94a3b8;
          white-space: nowrap;
          font-weight: 600;
        }

        /* Career Progression Connector between 01 and 02 */
        .nav-progression-connector {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0 0.4rem;
          flex-shrink: 0;
        }

        .connector-stem {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, rgba(99, 102, 241, 0.15), rgba(99, 102, 241, 0.35));
        }

        .connector-pill {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-family: var(--font-mono);
          font-size: 0.52rem;
          font-weight: 700;
          color: #4f46e5;
          background: rgba(79, 70, 229, 0.08);
          border: 1px solid rgba(79, 70, 229, 0.18);
          padding: 0.08rem 0.4rem;
          border-radius: 999px;
          white-space: nowrap;
          letter-spacing: 0.04em;
        }

        .connector-arrow {
          font-size: 0.6rem;
          font-weight: 800;
        }

        /* ── ZONE 2: Active Experience Card (Center / Dominant) ── */
        .exp-active-main-col {
          flex: 1.45;
          display: flex;
          flex-direction: column;
          min-width: 0;
          height: 100%;
        }

        .exp-card-dominant {
          background: rgba(255, 255, 255, 0.89);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.96);
          border-radius: 18px;
          padding: clamp(0.7rem, 1.1vh, 1rem);
          box-shadow: 0 12px 32px -8px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(99, 102, 241, 0.06);
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 0;
          overflow: hidden;
          gap: clamp(0.25rem, 0.5vh, 0.45rem);
        }

        .dominant-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .header-company-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          min-width: 0;
        }

        .company-logo-frame {
          width: clamp(38px, 4.2vw, 46px);
          height: clamp(38px, 4.2vw, 46px);
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
          padding: 5px;
        }

        .company-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .company-titles {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          min-width: 0;
        }

        .company-badge-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .exp-badge {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 0.1rem 0.42rem;
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
          font-size: 0.56rem;
          font-weight: 600;
          color: #64748b;
          background: #f1f5f9;
          padding: 0.1rem 0.42rem;
          border-radius: 4px;
        }

        .dominant-company-name {
          font-family: var(--font-display);
          font-size: clamp(0.95rem, 1.3vw, 1.2rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
        }

        .dominant-role-name {
          font-family: var(--font-mono);
          font-size: clamp(0.64rem, 0.78vh, 0.72rem);
          font-weight: 600;
          color: #4f46e5;
          margin: 0;
        }

        /* Career Progression Highlight Banner */
        .dominant-progression-banner {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(90deg, rgba(79, 70, 229, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%);
          border: 1px solid rgba(79, 70, 229, 0.16);
          border-radius: 8px;
          padding: clamp(0.22rem, 0.38vh, 0.35rem) clamp(0.55rem, 0.8vw, 0.75rem);
          flex-shrink: 0;
        }

        .progression-banner-left {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-shrink: 0;
        }

        .progression-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
        }

        .progression-banner-tag {
          font-family: var(--font-mono);
          font-size: 0.54rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #4f46e5;
        }

        .progression-banner-content {
          min-width: 0;
        }

        .progression-banner-path {
          font-family: var(--font-sans);
          font-size: clamp(0.6rem, 0.75vh, 0.68rem);
          font-weight: 600;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: block;
        }

        .progression-arrow {
          color: #10b981;
          font-weight: 800;
          padding: 0 0.2rem;
        }

        .dominant-card-summary {
          font-family: var(--font-sans);
          font-size: clamp(0.66rem, 0.82vh, 0.76rem);
          line-height: 1.42;
          color: #334155;
          margin: 0;
          flex-shrink: 0;
        }

        /* Meaningful Metrics Strip */
        .dominant-metrics-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.35rem;
          flex-shrink: 0;
        }

        .metric-pill {
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 6px;
          padding: clamp(0.2rem, 0.35vh, 0.3rem) 0.45rem;
          display: flex;
          flex-direction: column;
          gap: 0.03rem;
        }

        .metric-label {
          font-family: var(--font-mono);
          font-size: 0.48rem;
          font-weight: 700;
          color: #64748b;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .metric-value {
          font-family: var(--font-sans);
          font-size: clamp(0.6rem, 0.74vh, 0.68rem);
          font-weight: 700;
          color: #0f172a;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* What I Worked On Section */
        .dominant-work-section {
          display: flex;
          flex-direction: column;
          gap: clamp(0.14rem, 0.28vh, 0.24rem);
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

        .work-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.1rem;
          flex-shrink: 0;
        }

        .dominant-section-label {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #64748b;
          display: block;
        }

        .work-bullets-count {
          font-family: var(--font-mono);
          font-size: 0.52rem;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.05em;
        }

        .dominant-work-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(0.14rem, 0.28vh, 0.24rem);
        }

        .dominant-work-item {
          display: flex;
          align-items: flex-start;
          gap: 0.42rem;
          font-size: clamp(0.64rem, 0.78vh, 0.73rem);
          line-height: 1.34;
          color: #1e293b;
          background: rgba(248, 250, 252, 0.7);
          border: 1px solid rgba(0, 0, 0, 0.03);
          border-radius: 6px;
          padding: clamp(0.18rem, 0.32vh, 0.28rem) clamp(0.35rem, 0.5vw, 0.5rem);
        }

        .work-bullet-icon {
          color: #10b981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .work-bullet-text {
          flex: 1;
        }

        /* Dominant Tools Footer */
        .dominant-tools-footer {
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding-top: clamp(0.24rem, 0.4vh, 0.38rem);
          flex-shrink: 0;
        }

        .tools-footer-label {
          font-family: var(--font-mono);
          font-size: 0.56rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #64748b;
          display: block;
          margin-bottom: 0.2rem;
        }

        .dominant-tools-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.28rem;
        }

        .exp-tech-chip {
          font-family: var(--font-mono);
          font-size: clamp(0.56rem, 0.7vh, 0.62rem);
          font-weight: 600;
          color: #475569;
          background: #f1f5f9;
          padding: 0.12rem 0.42rem;
          border-radius: 4px;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        /* ── ZONE 3: Context & Progression Trajectory (Right) ── */
        .exp-context-col {
          width: clamp(230px, 20vw, 280px);
          display: flex;
          flex-direction: column;
          gap: clamp(0.35rem, 0.6vh, 0.55rem);
          flex-shrink: 0;
          min-height: 0;
          height: 100%;
        }

        .exp-context-card {
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.92);
          border-radius: 14px;
          padding: clamp(0.55rem, 0.9vh, 0.85rem);
          box-shadow: 0 4px 16px -3px rgba(0, 0, 0, 0.04);
        }

        .progression-trajectory-card {
          flex: 1.45;
          display: flex;
          flex-direction: column;
          min-height: 0;
          justify-content: space-between;
        }

        .context-card-header {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: clamp(0.25rem, 0.45vh, 0.45rem);
          flex-shrink: 0;
        }

        .context-icon {
          color: #4f46e5;
        }

        .context-card-title {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #0f172a;
        }

        /* Trajectory Timeline */
        .progression-timeline {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          flex: 1;
          justify-content: space-between;
        }

        .timeline-stage-node {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          position: relative;
          cursor: pointer;
          padding: 0.12rem 0.25rem;
          border-radius: 6px;
          transition: background 0.15s ease;
        }

        .timeline-stage-node:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        .timeline-stage-node.current-stage {
          background: rgba(79, 70, 229, 0.06);
        }

        .stage-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 12px;
          flex-shrink: 0;
          padding-top: 3px;
        }

        .marker-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #94a3b8;
          transition: all 0.2s ease;
        }

        .timeline-stage-node.current-stage .marker-dot {
          background: #4f46e5;
          box-shadow: 0 0 8px rgba(79, 70, 229, 0.8);
          transform: scale(1.15);
        }

        .marker-line {
          width: 1.5px;
          height: clamp(18px, 2.8vh, 28px);
          background: linear-gradient(to bottom, #cbd5e1, #e2e8f0);
          margin-top: 3px;
        }

        .timeline-stage-node.current-stage + .timeline-stage-node .marker-line,
        .timeline-stage-node.current-stage .marker-line {
          background: linear-gradient(to bottom, #818cf8, #cbd5e1);
        }

        .stage-content {
          display: flex;
          flex-direction: column;
          min-width: 0;
          gap: 0.05rem;
        }

        .stage-tag-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .stage-tag {
          font-family: var(--font-mono);
          font-size: 0.5rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #64748b;
        }

        .stage-company-name {
          font-family: var(--font-mono);
          font-size: 0.5rem;
          font-weight: 600;
          color: #94a3b8;
        }

        .stage-name {
          font-family: var(--font-sans);
          font-size: clamp(0.64rem, 0.78vh, 0.72rem);
          font-weight: 700;
          color: #0f172a;
          line-height: 1.15;
        }

        .timeline-stage-node.current-stage .stage-name {
          color: #4f46e5;
        }

        .stage-desc {
          font-family: var(--font-sans);
          font-size: clamp(0.56rem, 0.68vh, 0.63rem);
          color: #64748b;
          line-height: 1.22;
        }

        .trajectory-footer-evolution {
          margin-top: clamp(0.2rem, 0.35vh, 0.35rem);
          padding-top: 0.22rem;
          border-top: 1px dashed rgba(0, 0, 0, 0.07);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .evolution-label {
          font-family: var(--font-mono);
          font-size: 0.5rem;
          font-weight: 800;
          color: #475569;
          letter-spacing: 0.06em;
        }

        .evolution-flow {
          font-family: var(--font-mono);
          font-size: 0.52rem;
          font-weight: 700;
          color: #4f46e5;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
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
          font-size: clamp(0.62rem, 0.76vh, 0.7rem);
          line-height: 1.42;
          color: #334155;
          margin: 0 0 0.3rem 0;
        }

        .philosophy-micro-tags {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-mono);
          font-size: 0.56rem;
          font-weight: 700;
          color: #4f46e5;
          flex-wrap: wrap;
        }

        .micro-tag {
          background: rgba(79, 70, 229, 0.08);
          padding: 0.08rem 0.32rem;
          border-radius: 3px;
        }

        .micro-arrow {
          color: #94a3b8;
          font-size: 0.62rem;
        }

        /* ─── 4. Bottom Landscape Viewport Clearance ─── */
        .exp-landscape-spacer {
          margin-top: auto;
          min-height: clamp(1.2rem, 2.5vh, 2.5rem);
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
          .nav-progression-connector {
            display: none;
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
