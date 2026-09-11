import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ExternalLink, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';

const filterCategories = ['All', 'QA & Testing', 'Development', 'Design', 'System Architecture'];

const projectsData = [
  {
    id: 'nova',
    num: '01',
    title: 'NOVA',
    tagline: 'A unified platform to test, monitor and improve digital products.',
    category: 'QA & Testing',
    tags: ['QA', 'Automation', 'Product', 'System Design'],
    badge: 'Quality is a feature.',
    challenge: 'Fragmented testing, limited visibility and slow feedback loops were making it difficult to ensure quality across multiple products.',
    role: 'QA Engineering, Test Automation, Frontend Development, System Design',
    approach: [
      'Unified test execution and reporting platform',
      'Scalable architecture for multiple microservice products',
      'Clear, actionable insights and automated test run alerts',
      'Developer-friendly workflows and CI/CD integrations'
    ],
    impact: 'Faster releases, higher stability, 98% pass rate visibility, and better collaboration across engineering teams.'
  },
  {
    id: 'meridian',
    num: '02',
    title: 'Meridian',
    tagline: 'Billing & subscription platform built for scale.',
    category: 'Development',
    tags: ['Development', 'System Architecture', 'Fintech'],
    badge: 'High Precision',
    challenge: 'Managing multi-tier subscription billing with low latency transaction auditing.',
    role: 'Full Stack Engineer, System Architect',
    approach: [
      'Idempotent payment webhook processing',
      'Automated revenue analytics pipeline',
      'End-to-end integration test suites'
    ],
    impact: '99.99% billing accuracy and 40% speedup in checkout completion.'
  },
  {
    id: 'lumen',
    num: '03',
    title: 'Lumen',
    tagline: 'Internal tools & developer experience workspace.',
    category: 'System Architecture',
    tags: ['Tools', 'DevEx', 'Design'],
    badge: 'Dev First',
    challenge: 'Slow local environment provisioning causing developer friction.',
    role: 'DevEx Lead, Tooling Architect',
    approach: [
      'One-command cloud development environments',
      'CLI tool for mock test dataset generation',
      'Unified component library'
    ],
    impact: 'Reduced developer onboarding from 3 days to under 30 minutes.'
  }
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(projectsData[0]);
  const [caseStudyTab, setCaseStudyTab] = useState('Overview');
  const [showModal, setShowModal] = useState(false);

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.tags.includes(activeFilter) || p.category === activeFilter);

  const openCaseStudy = (proj) => {
    setSelectedCaseStudy(proj);
    setShowModal(true);
  };

  return (
    <>
      <section id="projects" className="portfolio-section projects-section grid-background">
        {/* Section Header */}
        <div className="projects-header-bar">
          <div className="section-header-tag">
            <span>03. PROJECTS (OVERVIEW)</span>
          </div>
          <span className="subtitle-tag">SELECTED WORK</span>
        </div>

        <div className="projects-title-row">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="projects-main-title"
          >
            Real problems.<br />
            Built end to end.
          </motion.h2>

          {/* Filter Categories */}
          <div className="filter-pills">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Card (NOVA) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="featured-project-card"
        >
          <div className="featured-content">
            <span className="featured-badge">Featured Project</span>
            <h3 className="featured-title">{projectsData[0].title}</h3>
            <p className="featured-desc">{projectsData[0].tagline}</p>

            <div className="featured-tags">
              {projectsData[0].tags.map(t => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>

            <button className="btn-primary case-study-btn" onClick={() => openCaseStudy(projectsData[0])}>
              <span>View case study</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="featured-preview" onClick={() => openCaseStudy(projectsData[0])}>
            <div className="dark-mockup-frame">
              <div className="mockup-header-bar">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="mockup-title-text">nova-testing-platform.internal</span>
              </div>
              <div className="mockup-inner-preview">
                <div className="inner-chart-bar"></div>
                <div className="inner-stats-grid">
                  <div className="stat-box">98%<span>Pass Rate</span></div>
                  <div className="stat-box">1,428<span>Runs</span></div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="floating-quality-badge">
                <ShieldCheck size={14} className="shield-icon" />
                <span>{projectsData[0].badge}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Sub-Projects Row */}
        <div className="secondary-projects-grid">
          {filteredProjects.slice(1).map((proj) => (
            <motion.div 
              key={proj.id}
              whileHover={{ y: -6 }}
              className="sub-project-card glass-panel"
            >
              <div className="sub-card-top">
                <span className="sub-card-num">{proj.num}</span>
                <span className="tag-pill">{proj.tags[0]}</span>
              </div>
              <h4 className="sub-card-title">{proj.title}</h4>
              <p className="sub-card-desc">{proj.tagline}</p>

              <button className="sub-card-link" onClick={() => openCaseStudy(proj)}>
                <span>View</span>
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 04: PROJECT DETAILS (CASE STUDY MODAL OR INLINE VIEW) */}
      <AnimatePresence>
        {showModal && (
          <div className="case-study-overlay" onClick={() => setShowModal(false)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="case-study-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="modal-header">
                <div className="modal-title-wrap">
                  <span className="modal-header-tag">04. PROJECT DETAILS (CASE STUDY)</span>
                  <span className="modal-proj-num">PROJECT {selectedCaseStudy.num} / {selectedCaseStudy.title}</span>
                </div>

                <div className="modal-tabs">
                  {['Overview', 'Process', 'Tech', 'Impact'].map((tab) => (
                    <button 
                      key={tab} 
                      className={`modal-tab-btn ${caseStudyTab === tab ? 'active' : ''}`}
                      onClick={() => setCaseStudyTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                  <button className="modal-tab-btn live-btn" onClick={() => alert('Launching live preview...')}>
                    <span>Live Preview</span>
                    <ExternalLink size={12} />
                  </button>
                </div>

                <button className="modal-close-btn" onClick={() => setShowModal(false)}>✕</button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                {/* Left Preview Side */}
                <div className="modal-left">
                  <h2 className="modal-headline">{selectedCaseStudy.title}</h2>
                  <p className="modal-sub-tagline">{selectedCaseStudy.tagline}</p>

                  <div className="modal-tag-group">
                    {selectedCaseStudy.tags.map(t => (
                      <span key={t} className="tag-pill">{t}</span>
                    ))}
                  </div>

                  <div className="modal-graphic-preview">
                    <div className="graphic-dark-card">
                      <div className="graphic-header">
                        <span className="graphic-logo">{selectedCaseStudy.title} System</span>
                      </div>
                      <div className="graphic-content">
                        <div className="pulse-metric">
                          <span className="big-num">98.4%</span>
                          <span className="small-lbl">Automated Quality Coverage</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Details Side */}
                <div className="modal-right">
                  <div className="details-block">
                    <h4>The challenge</h4>
                    <p>{selectedCaseStudy.challenge}</p>
                  </div>

                  <div className="details-block">
                    <h4>My role</h4>
                    <p className="role-text">{selectedCaseStudy.role}</p>
                  </div>

                  <div className="details-block">
                    <h4>The approach</h4>
                    <ul className="approach-list">
                      {selectedCaseStudy.approach.map((item, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="details-block">
                    <h4>The impact</h4>
                    <p className="impact-text">{selectedCaseStudy.impact}</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="modal-footer">
                <button 
                  className="prev-next-btn"
                  onClick={() => {
                    const idx = projectsData.findIndex(p => p.id === selectedCaseStudy.id);
                    const prevIdx = (idx - 1 + projectsData.length) % projectsData.length;
                    setSelectedCaseStudy(projectsData[prevIdx]);
                  }}
                >
                  <ArrowLeft size={14} />
                  <span>Previous Project</span>
                </button>

                <span className="pagination-count">
                  {selectedCaseStudy.num} / 03
                </span>

                <button 
                  className="prev-next-btn"
                  onClick={() => {
                    const idx = projectsData.findIndex(p => p.id === selectedCaseStudy.id);
                    const nextIdx = (idx + 1) % projectsData.length;
                    setSelectedCaseStudy(projectsData[nextIdx]);
                  }}
                >
                  <span>Next Project</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .projects-section {
          background-color: #f7f6f2;
        }

        .projects-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .subtitle-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #94a3b8;
        }

        .projects-title-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .projects-main-title {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #0f172a;
        }

        .filter-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          color: #0f172a;
          border-color: #0f172a;
        }

        .filter-btn.active {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
        }

        /* Featured Card */
        .featured-project-card {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2.5rem;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 2.5rem;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.04);
          margin-bottom: 2rem;
        }

        .featured-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #6366f1;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.5rem;
        }

        .featured-title {
          font-family: var(--font-display);
          font-size: 2.4rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.8rem;
        }

        .featured-desc {
          font-size: 1rem;
          color: #475569;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .featured-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .case-study-btn {
          margin-top: auto;
        }

        .featured-preview {
          position: relative;
          cursor: pointer;
        }

        .dark-mockup-frame {
          position: relative;
          background: #0f172a;
          border-radius: 16px;
          height: 100%;
          min-height: 240px;
          padding: 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 30px rgba(15, 23, 42, 0.2);
          overflow: hidden;
        }

        .mockup-header-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 0.6rem;
        }

        .mockup-header-bar .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .mockup-header-bar .red { background: #ef4444; }
        .mockup-header-bar .yellow { background: #f59e0b; }
        .mockup-header-bar .green { background: #10b981; }

        .mockup-title-text {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: #64748b;
          margin-left: 8px;
        }

        .mockup-inner-preview {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .inner-chart-bar {
          height: 80px;
          background: linear-gradient(90deg, rgba(99, 102, 241, 0.2), rgba(217, 70, 239, 0.2));
          border-radius: 8px;
          border: 1px dashed rgba(255, 255, 255, 0.15);
        }

        .inner-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }

        .stat-box {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.8rem;
          border-radius: 8px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.2rem;
          color: #f8fafc;
        }

        .stat-box span {
          display: block;
          font-size: 0.6rem;
          font-family: var(--font-mono);
          color: #94a3b8;
          font-weight: 400;
        }

        .floating-quality-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: #ffffff;
          color: #0f172a;
          padding: 0.4rem 0.8rem;
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .shield-icon {
          color: #10b981;
        }

        /* Sub Projects */
        .secondary-projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .sub-project-card {
          padding: 1.8rem;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .sub-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sub-card-num {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1rem;
          color: #6366f1;
        }

        .sub-card-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
        }

        .sub-card-desc {
          font-size: 0.9rem;
          color: #64748b;
        }

        .sub-card-link {
          background: none;
          border: none;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: #0f172a;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          margin-top: 0.5rem;
        }

        /* Case Study Modal */
        .case-study-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .case-study-modal {
          background: #ffffff;
          width: 100%;
          max-width: 1000px;
          max-height: 90vh;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          border-bottom: 1px solid var(--border-light);
        }

        .modal-title-wrap {
          display: flex;
          flex-direction: column;
        }

        .modal-header-tag {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          font-weight: 700;
          color: #94a3b8;
        }

        .modal-proj-num {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 800;
          color: #0f172a;
        }

        .modal-tabs {
          display: flex;
          gap: 0.5rem;
        }

        .modal-tab-btn {
          background: none;
          border: none;
          padding: 0.4rem 0.8rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          border-radius: 6px;
        }

        .modal-tab-btn.active {
          background: #f1f5f9;
          color: #0f172a;
        }

        .modal-tab-btn.live-btn {
          background: #0f172a;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .modal-close-btn {
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          color: #64748b;
        }

        .modal-body {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 2rem;
          padding: 2rem;
        }

        .modal-headline {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
        }

        .modal-sub-tagline {
          font-size: 0.95rem;
          color: #64748b;
          margin-bottom: 1.2rem;
        }

        .modal-tag-group {
          display: flex;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .graphic-dark-card {
          background: #0f172a;
          border-radius: 16px;
          padding: 1.5rem;
          color: #ffffff;
        }

        .graphic-header {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #818cf8;
          margin-bottom: 1rem;
        }

        .pulse-metric {
          display: flex;
          flex-direction: column;
        }

        .big-num {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 800;
          color: #34d399;
        }

        .small-lbl {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .modal-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .details-block h4 {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #64748b;
          margin-bottom: 0.4rem;
        }

        .details-block p {
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.5;
        }

        .approach-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .approach-list li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: #334155;
        }

        .check-icon {
          color: #6366f1;
        }

        .modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 2rem;
          border-top: 1px solid var(--border-light);
          background: #f8fafc;
          border-bottom-left-radius: 24px;
          border-bottom-right-radius: 24px;
        }

        .prev-next-btn {
          background: none;
          border: none;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: #0f172a;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .pagination-count {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #64748b;
        }

        @media (max-width: 1024px) {
          .featured-project-card {
            grid-template-columns: 1fr;
          }
          .secondary-projects-grid {
            grid-template-columns: 1fr;
          }
          .modal-body {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
