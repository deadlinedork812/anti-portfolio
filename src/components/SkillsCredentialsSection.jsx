import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Cloud, ShieldCheck, Wrench, GraduationCap, BookOpen, Award, ExternalLink, CheckCircle } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    color: '#6366f1',
    skills: ['C', 'C++', 'Java', 'JavaScript', 'Python']
  },
  {
    title: 'Frontend',
    icon: Layout,
    color: '#ec4899',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS', 'Material UI', 'Next.js']
  },
  {
    title: 'Backend',
    icon: Server,
    color: '#3b82f6',
    skills: ['Node.js', 'Express.js', 'Django', 'PHP']
  },
  {
    title: 'Databases',
    icon: Database,
    color: '#10b981',
    skills: ['MySQL', 'MongoDB']
  },
  {
    title: 'Cloud / Infrastructure',
    icon: Cloud,
    color: '#f97316',
    skills: ['AWS Lambda', 'AWS CloudWatch', 'Docker', 'Amazon ECR']
  },
  {
    title: 'QA / Product',
    icon: ShieldCheck,
    color: '#8b5cf6',
    skills: ['Manual Testing', 'Test Case Design', 'Defect Tracking', 'API Testing', 'Functional Testing', 'Regression Testing', 'Workflow Testing', 'Product Thinking', 'UI Prototyping', 'Wireframing']
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: '#64748b',
    skills: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Eclipse', 'ClickUp']
  }
];

const coursework = [
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Artificial Intelligence',
  'Operating Systems',
  'Cloud Computing',
  'Software Engineering',
  'Android Development',
  'MySQL'
];

const certifications = [
  {
    name: 'Generative AI',
    issuer: 'Google Cloud',
    urlPlaceholder: '[Certificate URL]'
  },
  {
    name: 'DevOps Foundations',
    issuer: 'Cloud Native / DevSecOps',
    urlPlaceholder: '[Certificate URL]'
  },
  {
    name: 'Google Cloud Foundational Certifications',
    issuer: 'Covering infrastructure, data, and machine learning',
    urlPlaceholder: '[Certificate URL]'
  }
];

export default function SkillsCredentialsSection() {
  return (
    <section id="skills" className="portfolio-section skills-credentials-section grid-background">
      <div className="skills-top-bar">
        <div className="section-header-tag">
          <span>05. SKILLS & BACKGROUND</span>
        </div>
        <span className="skills-slogan">FOUNDATIONS • QUALITY • CONTINUOUS LEARNING</span>
      </div>

      <div className="skills-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-main-title"
        >
          Capabilities &<br />
          foundations.
        </motion.h2>
        <p className="skills-subtitle">
          Organized across programming, full stack development, cloud infrastructure, thorough manual QA, and formal academic coursework.
        </p>
      </div>

      {/* 05 — SKILLS GRID */}
      <div className="skills-section-block">
        <div className="block-label-row">
          <span className="block-num">// 05</span>
          <h3 className="block-title">Technical Skills</h3>
          <span className="block-note">Primary QA focus: Manual Testing & Product Thinking</span>
        </div>

        <div className="skills-groups-grid">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div 
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="skill-group-card glass-panel"
              >
                <div className="skill-group-header">
                  <div className="icon-badge" style={{ backgroundColor: `${group.color}15`, color: group.color }}>
                    <Icon size={16} />
                  </div>
                  <h4 className="skill-group-name">{group.title}</h4>
                </div>
                <div className="skill-chips-wrap">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* DUAL COLUMN: EDUCATION & COURSEWORK (LEFT) / RESEARCH & CERTIFICATIONS (RIGHT) */}
      <div className="credentials-dual-grid">
        {/* Left Column: Education & Coursework */}
        <div className="credentials-column">
          {/* 06 — EDUCATION */}
          <div className="credentials-block glass-panel">
            <div className="block-label-row">
              <span className="block-num">// 06</span>
              <h3 className="block-title">Education</h3>
            </div>

            <div className="education-card">
              <div className="edu-icon-wrap">
                <GraduationCap size={22} className="edu-icon" />
              </div>
              <div className="edu-details">
                <span className="edu-degree">Bachelor of Technology</span>
                <h4 className="edu-institution">SJB Institute of Technology (SJBIT), Bengaluru</h4>
                <p className="edu-affiliation">Affiliated with Visvesvaraya Technological University (VTU)</p>
              </div>
            </div>
          </div>

          {/* 07 — COURSEWORK */}
          <div className="credentials-block glass-panel">
            <div className="block-label-row">
              <span className="block-num">// 07</span>
              <h3 className="block-title">Key Coursework</h3>
            </div>

            <div className="coursework-chips-grid">
              {coursework.map((course, i) => (
                <div key={i} className="course-chip">
                  <CheckCircle size={12} className="course-check" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Research & Certifications */}
        <div className="credentials-column">
          {/* 08 — RESEARCH */}
          <div className="credentials-block glass-panel">
            <div className="block-label-row">
              <span className="block-num">// 08</span>
              <h3 className="block-title">Research & Publication</h3>
            </div>

            <div className="research-card">
              <div className="research-icon-wrap">
                <BookOpen size={20} className="research-head-icon" />
              </div>
              <div className="research-content">
                <h4 className="research-title">Tracking Expenses using MERN Stack and Data Visualization</h4>
                <p className="research-desc">
                  Research work related to building an expense management application using the MERN stack and exploring financial data visualization workflows.
                </p>
                <div className="research-action-row">
                  <a 
                    href="#skills" 
                    className="btn-secondary research-link-btn"
                    onClick={(e) => { e.preventDefault(); alert('Publication: [Publication URL]'); }}
                  >
                    <span>[Publication URL]</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 09 — CERTIFICATIONS */}
          <div className="credentials-block glass-panel">
            <div className="block-label-row">
              <span className="block-num">// 09</span>
              <h3 className="block-title">Certifications</h3>
            </div>

            <div className="certifications-list">
              {certifications.map((cert, i) => (
                <div key={i} className="cert-row">
                  <div className="cert-left">
                    <Award size={16} className="cert-badge-icon" />
                    <div className="cert-text">
                      <span className="cert-name">{cert.name}</span>
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                  </div>
                  <a 
                    href="#skills" 
                    className="cert-link-placeholder"
                    onClick={(e) => { e.preventDefault(); alert(`Certification: ${cert.urlPlaceholder}`); }}
                  >
                    <span>{cert.urlPlaceholder}</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills-credentials-section {
          background-color: #f6f5f0;
          padding-top: 3.5rem;
          padding-bottom: 3.5rem;
        }

        .skills-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .skills-slogan {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #94a3b8;
        }

        .skills-header {
          margin-bottom: 2.5rem;
        }

        .skills-main-title {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #0f172a;
          margin-bottom: 0.8rem;
        }

        .skills-subtitle {
          font-size: 1rem;
          color: #64748b;
          max-width: 640px;
          line-height: 1.5;
        }

        /* Skills Section Block */
        .skills-section-block {
          margin-bottom: 2.5rem;
        }

        .block-label-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .block-num {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: #6366f1;
        }

        .block-title {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f172a;
        }

        .block-note {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #4f46e5;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 9999px;
          padding: 0.2rem 0.6rem;
          margin-left: auto;
        }

        .skills-groups-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }

        .skill-group-card {
          padding: 1.2rem;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .skill-group-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .icon-badge {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-group-name {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
        }

        .skill-chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .skill-pill {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          color: #334155;
          transition: all 0.15s ease;
        }

        .skill-pill:hover {
          border-color: #6366f1;
          color: #4338ca;
        }

        /* Dual Column Layout */
        .credentials-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .credentials-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .credentials-block {
          padding: 1.5rem;
          border-radius: 20px;
        }

        /* Education Card */
        .education-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .edu-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .edu-details {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .edu-degree {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: #4f46e5;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .edu-institution {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
        }

        .edu-affiliation {
          font-size: 0.85rem;
          color: #64748b;
        }

        /* Coursework */
        .coursework-chips-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }

        .course-chip {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          padding: 0.45rem 0.65rem;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          color: #334155;
        }

        .course-check {
          color: #10b981;
          flex-shrink: 0;
        }

        /* Research Card */
        .research-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .research-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(16, 185, 129, 0.1);
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .research-content {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .research-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.35;
        }

        .research-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
        }

        .research-action-row {
          margin-top: 0.4rem;
        }

        .research-link-btn {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 0.45rem 0.85rem;
        }

        /* Certifications List */
        .certifications-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .cert-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          gap: 0.8rem;
        }

        .cert-left {
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }

        .cert-badge-icon {
          color: #f59e0b;
          flex-shrink: 0;
        }

        .cert-text {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .cert-name {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          color: #0f172a;
        }

        .cert-issuer {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #64748b;
        }

        .cert-link-placeholder {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #6366f1;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        .cert-link-placeholder:hover {
          text-decoration: underline;
        }

        @media (max-width: 1024px) {
          .credentials-dual-grid {
            grid-template-columns: 1fr;
          }
          .coursework-chips-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .skills-main-title {
            font-size: 2.2rem;
            word-break: break-word;
          }
          .skills-groups-grid {
            grid-template-columns: 1fr;
          }
          .block-label-row {
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          .block-note {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
