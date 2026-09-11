import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Compass } from 'lucide-react';

const timelineData = [
  {
    period: 'Present',
    title: 'Working on new problems',
    role: '[Your current role / focus area]',
    details: 'Leading quality architecture, building automated testing frameworks, and exploring LLM-assisted software verification.',
    isCurrent: true
  },
  {
    period: '2022 - 2024',
    title: '[Company / Project]',
    role: '[Your role and key focus areas]',
    details: 'Architected end-to-end regression suites, streamlined CI/CD pipelines, and reduced release cycle times by 65%.',
    isCurrent: false
  },
  {
    period: '2020 - 2022',
    title: '[Company / Project]',
    role: '[Your role and key focus areas]',
    details: 'Developed full stack features, built internal developer dashboards, and optimized API throughput.',
    isCurrent: false
  },
  {
    period: 'Earlier',
    title: 'Early explorations',
    role: '[Education / initial experience]',
    details: 'Computer Science studies, open source contributions, UI design explorations, and algorithmic problem solving.',
    isCurrent: false
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section experience-section grid-background">
      <div className="exp-top-bar">
        <div className="section-header-tag">
          <span>06. EXPERIENCE</span>
        </div>
        <span className="exp-slogan">EXPERIENCE IS COMPOUNDED CURIOSITY</span>
      </div>

      <div className="exp-grid">
        {/* Left Column: Timeline List */}
        <div className="exp-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="exp-title"
          >
            A continuously<br />
            evolving practice.
          </motion.h2>

          <p className="exp-subtitle">
            A timeline of the phases I've worked, the problems I've solved, and the skills I've built along the way.
          </p>

          <div className="timeline-container">
            {timelineData.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`timeline-item ${item.isCurrent ? 'current-item' : ''}`}
              >
                <div className="timeline-bullet">
                  <div className={`bullet-dot ${item.isCurrent ? 'pulse-dot' : ''}`} />
                  {idx < timelineData.length - 1 && <div className="timeline-line" />}
                </div>

                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span className="timeline-period">{item.period}</span>
                    {item.isCurrent && <span className="current-badge">ACTIVE</span>}
                  </div>
                  <h3 className="timeline-role-title">{item.title}</h3>
                  <span className="timeline-focus-tag">{item.role}</span>
                  <p className="timeline-desc">{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Isometric Ribbon Artwork */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="exp-right"
        >
          <div className="ribbon-art-container">
            <div className="gradient-ribbon" />

            <div className="handwriting-badge note-learning">
              <span className="handwriting">Still learning</span>
            </div>

            <div className="handwriting-badge note-altitude">
              <span className="handwriting">Same curiosity. Higher altitude.</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .experience-section {
          background-color: #f7f6f2;
        }

        .exp-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .exp-slogan {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #94a3b8;
        }

        .exp-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        .exp-title {
          font-family: var(--font-display);
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .exp-subtitle {
          font-size: 1.02rem;
          color: #64748b;
          max-width: 520px;
          margin-bottom: 2.5rem;
          line-height: 1.5;
        }

        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 1rem;
        }

        .timeline-bullet {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .bullet-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #64748b;
          margin-top: 4px;
        }

        .current-item .bullet-dot {
          background: #6366f1;
        }

        .pulse-dot {
          box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
          animation: pulseGlow 2s infinite;
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
          100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
        }

        .timeline-line {
          width: 2px;
          flex: 1;
          background: #e2e8f0;
          margin-top: 8px;
        }

        .timeline-content {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .timeline-meta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .timeline-period {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: #6366f1;
        }

        .current-badge {
          background: #10b981;
          color: #ffffff;
          font-family: var(--font-mono);
          font-size: 0.55rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .timeline-role-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
        }

        .timeline-focus-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #64748b;
        }

        .timeline-desc {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.5;
        }

        /* Right Ribbon Visual */
        .ribbon-art-container {
          position: relative;
          width: 100%;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gradient-ribbon {
          width: 200px;
          height: 320px;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
          clip-path: polygon(25% 0%, 100% 15%, 75% 100%, 0% 85%);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
          border-radius: 12px;
        }

        .handwriting-badge {
          position: absolute;
          background: #ffffff;
          padding: 0.6rem 1rem;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0,0,0,0.08);
        }

        .note-learning {
          top: 40px;
          right: 30px;
          transform: rotate(6deg);
        }

        .note-altitude {
          bottom: 40px;
          left: 10px;
          transform: rotate(-4deg);
        }

        @media (max-width: 1024px) {
          .exp-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
