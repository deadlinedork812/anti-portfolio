import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Box, Terminal, Layers, Plus } from 'lucide-react';

const experimentCategories = ['All', 'AI', 'Automation', 'UI Experiments', 'Tools'];

const experiments = [
  {
    id: 'exp1',
    num: '01',
    title: 'AI Test Generator',
    category: 'AI',
    desc: 'Experimenting with LLMs for automatic test case generation from user user stories.',
    tech: ['GPT-4', 'Python', 'Playwright'],
    icon: Sparkles
  },
  {
    id: 'exp2',
    num: '02',
    title: 'API Testing Toolkit',
    category: 'Automation',
    desc: 'A small toolkit for faster API test development and automated mock schema validation.',
    tech: ['Node.js', 'Postman', 'Jest'],
    icon: Terminal
  },
  {
    id: 'exp3',
    num: '03',
    title: 'UI Motion Studies',
    category: 'UI Experiments',
    desc: 'Exploring fluid interactive gestures, micro-animations, and glassmorphic spatial design.',
    tech: ['Framer Motion', 'React', 'Three.js'],
    icon: Layers
  },
  {
    id: 'exp4',
    num: '04',
    title: 'More experiments',
    category: 'Tools',
    desc: 'Exploring state machine testing, chaos engineering tools, and visual diff algorithms.',
    tech: ['WIP', 'Lab'],
    icon: Plus,
    isUpcoming: true
  }
];

export default function PlaygroundSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedExp, setSelectedExp] = useState(null);

  const filteredExperiments = activeFilter === 'All'
    ? experiments
    : experiments.filter(e => e.category === activeFilter);

  return (
    <>
      <section id="playground" className="portfolio-section playground-section grid-background">
        <div className="pg-top-bar">
          <div className="section-header-tag">
            <span>07. PLAYGROUND</span>
          </div>
          <span className="pg-slogan">PLAY LEARN BUILD REPEAT</span>
        </div>

        <div className="pg-grid">
          {/* Left Side: Text, Filters, Cards */}
          <div className="pg-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pg-title"
            >
              A space to<br />
              explore freely.
            </motion.h2>

            <p className="pg-subtitle">
              Small experiments, side projects and ideas I'm exploring — because curiosity often leads to the next opportunity.
            </p>

            {/* Filter Pills */}
            <div className="filter-pills pg-filters">
              {experimentCategories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cards Grid */}
            <div className="experiments-grid">
              {filteredExperiments.map((exp) => {
                const Icon = exp.icon;
                return (
                  <motion.div 
                    key={exp.id}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="exp-card glass-panel"
                    onClick={() => setSelectedExp(exp)}
                  >
                    <div className="exp-card-header">
                      <span className="exp-card-num">{exp.num}</span>
                      <Icon size={16} className="exp-icon" />
                    </div>

                    <h3 className="exp-card-title">{exp.title}</h3>
                    <p className="exp-card-desc">{exp.desc}</p>

                    <div className="exp-card-footer">
                      <div className="exp-tech-tags">
                        {exp.tech.map(t => (
                          <span key={t} className="tag-pill">{t}</span>
                        ))}
                      </div>
                      <ArrowRight size={16} className="exp-arrow" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Glowing 3D Glass Prism Rendering */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pg-right"
          >
            <div className="prism-art-container">
              {/* Animated 3D Glass Cube Mockup */}
              <motion.div 
                animate={{ rotateY: [0, 360], rotateX: [15, 25, 15] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="glass-cube"
              >
                <div className="cube-face face-front"></div>
                <div className="cube-face face-back"></div>
                <div className="cube-face face-right"></div>
                <div className="cube-face face-left"></div>
                <div className="cube-face face-top"></div>
                <div className="cube-face face-bottom"></div>
              </motion.div>

              <div className="handwriting-badge prism-tag">
                <span className="handwriting">Ideas today.<br />Better tools tomorrow.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experiment Details Modal */}
      <AnimatePresence>
        {selectedExp && (
          <div className="case-study-overlay" onClick={() => setSelectedExp(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="exp-modal glass-panel-dark"
              onClick={e => e.stopPropagation()}
            >
              <div className="exp-modal-header">
                <span className="exp-card-num">{selectedExp.num}</span>
                <h3 className="modal-headline" style={{ color: '#fff' }}>{selectedExp.title}</h3>
                <button className="modal-close-btn" onClick={() => setSelectedExp(null)}>✕</button>
              </div>

              <p className="exp-card-desc" style={{ color: '#cbd5e1', fontSize: '1rem', margin: '1rem 0' }}>
                {selectedExp.desc}
              </p>

              <div className="exp-tech-tags" style={{ marginBottom: '1.5rem' }}>
                {selectedExp.tech.map(t => (
                  <span key={t} className="tag-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>{t}</span>
                ))}
              </div>

              <div className="exp-demo-box">
                <p>Interactive demonstration prototype running in simulated environment.</p>
                <button className="btn-primary" onClick={() => alert('Launching demo environment...')}>
                  Run Live Sandbox
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .playground-section {
          background-color: #f6f5f0;
        }

        .pg-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .pg-slogan {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #94a3b8;
        }

        .pg-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .pg-title {
          font-family: var(--font-display);
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .pg-subtitle {
          font-size: 1.02rem;
          color: #64748b;
          max-width: 520px;
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .pg-filters {
          margin-bottom: 2rem;
        }

        .experiments-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
        }

        .exp-card {
          padding: 1.5rem;
          border-radius: 20px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .exp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .exp-card-num {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 0.9rem;
          color: #6366f1;
        }

        .exp-icon {
          color: #8b5cf6;
        }

        .exp-card-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
        }

        .exp-card-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.4;
        }

        .exp-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.5rem;
        }

        .exp-tech-tags {
          display: flex;
          gap: 0.3rem;
          flex-wrap: wrap;
        }

        .exp-arrow {
          color: #0f172a;
        }

        /* 3D Prism Visual */
        .prism-art-container {
          position: relative;
          width: 100%;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 800px;
        }

        .glass-cube {
          width: 140px;
          height: 140px;
          position: relative;
          transform-style: preserve-3d;
        }

        .cube-face {
          position: absolute;
          width: 140px;
          height: 140px;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(236, 72, 153, 0.5);
          backdrop-filter: blur(8px);
          box-shadow: inset 0 0 20px rgba(99, 102, 241, 0.3);
        }

        .face-front  { transform: rotateY(  0deg) translateZ(70px); }
        .face-back   { transform: rotateY(180deg) translateZ(70px); }
        .face-right  { transform: rotateY( 90deg) translateZ(70px); }
        .face-left   { transform: rotateY(-90deg) translateZ(70px); }
        .face-top    { transform: rotateX( 90deg) translateZ(70px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(70px); }

        .prism-tag {
          position: absolute;
          bottom: 20px;
          right: 10px;
          transform: rotate(-3deg);
        }

        /* Exp Modal */
        .exp-modal {
          width: 90%;
          max-width: 500px;
          border-radius: 20px;
          padding: 2rem;
          color: #fff;
        }

        .exp-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .exp-demo-box {
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
          font-size: 0.85rem;
          color: #94a3b8;
        }

        @media (max-width: 1024px) {
          .pg-grid {
            grid-template-columns: 1fr;
          }
          .experiments-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
