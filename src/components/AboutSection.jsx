import React from 'react';
import { motion } from 'framer-motion';

const pillarSteps = [
  { num: '01', title: 'Think', subtitle: 'like a user' },
  { num: '02', title: 'Question', subtitle: 'deeply' },
  { num: '03', title: 'Build', subtitle: 'purposefully' },
  { num: '04', title: 'Test', subtitle: 'relentlessly' },
  { num: '05', title: 'Improve', subtitle: 'continuously' },
];

const nodes = [
  {
    id: 'curiosity',
    title: 'Curiosity',
    subtitle: 'A small question starts somewhere.',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.6)',
    x: 50,
    y: 14,
    labelPos: 'top-left'
  },
  {
    id: 'context',
    title: 'Context',
    subtitle: 'Different angles. Deeper understanding.',
    color: '#c084fc',
    glow: 'rgba(192, 132, 252, 0.6)',
    x: 84,
    y: 18,
    labelPos: 'top-right'
  },
  {
    id: 'real-problems',
    title: 'Real Problems',
    subtitle: 'Messy, ambiguous, human problems.',
    color: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.6)',
    x: 28,
    y: 44,
    labelPos: 'left'
  },
  {
    id: 'connections',
    title: 'Connections',
    subtitle: 'Ideas, people, systems, patterns.',
    color: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.6)',
    x: 91,
    y: 36,
    labelPos: 'right'
  },
  {
    id: 'experiments',
    title: 'Experiments',
    subtitle: 'Build. Break. Learn. Iterate.',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.6)',
    x: 54,
    y: 64,
    labelPos: 'bottom-left'
  },
  {
    id: 'meaningful-impact',
    title: 'Meaningful Impact',
    subtitle: 'Better products. Happier users. A little progress forward.',
    color: '#f97316',
    glow: 'rgba(249, 115, 22, 0.7)',
    x: 79,
    y: 60,
    labelPos: 'bottom-right'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section section-dark about-section">
      {/* Background ambient cosmic glow & dot matrix */}
      <div className="about-bg-grid" />
      <div className="about-cosmic-glow-1" />
      <div className="about-cosmic-glow-2" />

      {/* Top Header Row */}
      <div className="about-top-bar">
        <div className="about-top-left-tag">
          <span className="section-num">02.</span>
          <span className="section-title">ABOUT</span>
        </div>
        <div className="about-top-right-tag">
          <div className="top-rule-line" />
          <span className="slogan-text">SAME CURIOSITY. DIFFERENT PROBLEMS.</span>
        </div>
      </div>

      <div className="about-slogan-sub">
        <span>A MORE COMPLETE PICTURE</span>
        <span className="dot">-</span>
        <span>PEOPLE PRODUCTS POSSIBILITIES</span>
      </div>

      {/* Main Grid: Left Column Text & Right Column Cosmic Planet Graphic */}
      <div className="about-main-grid">
        
        {/* Left Column Text */}
        <div className="about-left-col">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-giant-headline"
          >
            Part engineer.<br />
            Part tester.<br />
            Part designer.<br />
            Always a<br />
            <span className="builder-gradient">builder.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="about-body-text"
          >
            I work at the intersection of quality, engineering, and product — bridging the gap between ideas and reliable, real-world software.
          </motion.p>
        </div>

        {/* Right Column: Cosmic Planet Artwork & Orbital System */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="about-right-visual"
        >
          {/* Central Planet Sphere Container */}
          <div className="planet-system-wrapper">
            
            {/* Dark 3D Textured Planet Sphere */}
            <div className="planet-sphere">
              <div className="planet-texture-overlay" />
              <div className="planet-atmosphere-glow" />
              
              {/* Handwritten Script Overlay across Planet */}
              <div className="planet-script-container">
                <span className="planet-script-curiosity">From curiosity,</span>
                <span className="planet-script-impact">to impact.</span>
                <svg className="script-underline-svg" viewBox="0 0 160 20" fill="none">
                  <path d="M 10 12 Q 80 18 150 6" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                </svg>
              </div>
            </div>

            {/* SVG Background Orbital Ellipses */}
            <svg className="orbital-svg-layer" viewBox="0 0 700 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="planetGlowRad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.2" />
                  <stop offset="60%" stopColor="#c084fc" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Ambient Glow Disk */}
              <circle cx="450" cy="250" r="210" fill="url(#planetGlowRad)" />

              {/* Dashed Orbital Rings */}
              <ellipse cx="450" cy="250" rx="190" ry="140" stroke="rgba(168, 85, 247, 0.25)" strokeDasharray="3 5" strokeWidth="1.2" transform="rotate(-15 450 250)" />
              <ellipse cx="450" cy="250" rx="240" ry="170" stroke="rgba(129, 140, 248, 0.2)" strokeDasharray="4 6" strokeWidth="1" transform="rotate(12 450 250)" />
              <ellipse cx="450" cy="250" rx="270" ry="195" stroke="rgba(236, 72, 153, 0.15)" strokeDasharray="5 7" strokeWidth="1" transform="rotate(-5 450 250)" />
            </svg>

            {/* Interactive Orbital Nodes */}
            <div className="nodes-overlay">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={`orbital-node node-pos-${node.id}`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  {/* Glowing Node Dot */}
                  <div 
                    className="node-dot-core"
                    style={{ 
                      backgroundColor: node.color,
                      boxShadow: `0 0 14px ${node.glow}, 0 0 28px ${node.glow}`
                    }}
                  />

                  {/* Node Label Block */}
                  <div className={`node-text-block label-${node.labelPos}`}>
                    <span className="node-handwriting-title">{node.title}</span>
                    <span className="node-sub-text">{node.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom-Right Handwritten Callout Annotation */}
            <div className="bottom-right-annotation">
              <p className="annotation-script">Same person.</p>
              <p className="annotation-script">Different lenses.</p>
              <p className="annotation-script">More connected solutions.</p>
              
              {/* Curved Pointer Arrow to Orange Node */}
              <svg className="annotation-arrow-svg" width="60" height="50" viewBox="0 0 60 50" fill="none">
                <path d="M 10 10 Q 35 40 45 42" stroke="#cbd5e1" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M 40 36 L 45 42 L 48 35" stroke="#cbd5e1" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Bottom 5 Pillars Divider Line & Columns */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pillars-grid-row"
      >
        {pillarSteps.map((step) => (
          <div key={step.num} className="pillar-item">
            <span className="pillar-num">{step.num}</span>
            <span className="pillar-title">{step.title}</span>
            <span className="pillar-sub">{step.subtitle}</span>
          </div>
        ))}
      </motion.div>

      <style>{`
        .about-section {
          background-color: #05060c;
          position: relative;
          overflow: hidden;
          padding: 3.5rem 3rem 3rem 3rem;
          color: #f8fafc;
          min-height: 100vh;
        }

        .about-bg-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 1;
        }

        .about-cosmic-glow-1 {
          position: absolute;
          top: 10%;
          right: 15%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(129, 140, 248, 0.12) 0%, rgba(168, 85, 247, 0.06) 50%, transparent 70%);
          filter: blur(90px);
          pointer-events: none;
          z-index: 1;
        }

        .about-cosmic-glow-2 {
          position: absolute;
          bottom: 15%;
          right: 5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(236, 72, 153, 0.05) 60%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 1;
        }

        .about-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 10;
          margin-bottom: 0.4rem;
        }

        .about-top-left-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: #818cf8;
          letter-spacing: 0.1em;
        }

        .about-top-right-tag {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .top-rule-line {
          width: 100px;
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
        }

        .slogan-text {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #64748b;
        }

        .about-slogan-sub {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 10;
        }

        .about-slogan-sub .dot {
          color: #64748b;
        }

        /* Main 2-Column Layout */
        .about-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 2.5rem;
          align-items: center;
          margin-bottom: 3.5rem;
          position: relative;
          z-index: 10;
        }

        /* Left Column */
        .about-left-col {
          display: flex;
          flex-direction: column;
          margin-top: 1.5rem;
        }

        .about-giant-headline {
          font-family: var(--font-display);
          font-size: clamp(3.2rem, 4.5vw, 5.2rem);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.04em;
          color: #ffffff;
          margin-bottom: 2rem;
        }

        .builder-gradient {
          background: linear-gradient(90deg, #818cf8 0%, #c084fc 35%, #ec4899 70%, #f97316 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-body-text {
          font-size: clamp(0.95rem, 1.1vw, 1.1rem);
          color: #94a3b8;
          line-height: 1.6;
          max-width: 460px;
          font-weight: 400;
        }

        /* Right Column Cosmic Visual */
        .about-right-visual {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .planet-system-wrapper {
          position: relative;
          width: 100%;
          max-width: 620px;
          height: 460px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* 3D Dark Planet Sphere */
        .planet-sphere {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 65%, #1e1b4b 0%, #0f172a 45%, #030712 100%);
          box-shadow:
            0 0 50px rgba(129, 140, 248, 0.2),
            inset -15px -15px 40px rgba(0,0,0,0.9),
            inset 15px 15px 35px rgba(192, 132, 252, 0.25);
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .planet-texture-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 12px 12px;
          opacity: 0.25;
          pointer-events: none;
        }

        .planet-atmosphere-glow {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 1.5px solid rgba(192, 132, 252, 0.3);
          box-shadow: inset 0 0 20px rgba(168, 85, 247, 0.3);
          pointer-events: none;
        }

        /* Script Overlay across Planet Surface */
        .planet-script-container {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: rotate(-6deg);
          text-align: center;
        }

        .planet-script-curiosity {
          font-family: var(--font-handwriting);
          font-size: clamp(2rem, 2.8vw, 3rem);
          color: #c084fc;
          line-height: 0.95;
          text-shadow: 0 4px 15px rgba(192, 132, 252, 0.4);
        }

        .planet-script-impact {
          font-family: var(--font-handwriting);
          font-size: clamp(2.3rem, 3.1vw, 3.4rem);
          color: #f472b6;
          line-height: 1.05;
          text-shadow: 0 4px 20px rgba(244, 114, 182, 0.5);
          margin-top: 0.1rem;
        }

        .script-underline-svg {
          width: 140px;
          height: 18px;
          margin-top: -4px;
        }

        /* Orbital SVG Layer */
        .orbital-svg-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }

        /* Nodes Overlay */
        .nodes-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 12;
        }

        .orbital-node {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          pointer-events: auto;
          cursor: pointer;
        }

        .node-dot-core {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .orbital-node:hover .node-dot-core {
          transform: scale(1.5);
        }

        .node-text-block {
          position: absolute;
          display: flex;
          flex-direction: column;
          width: max-content;
          max-width: 160px;
        }

        .label-top-left { bottom: 14px; right: 12px; align-items: flex-end; text-align: right; }
        .label-top-right { bottom: 14px; left: 12px; align-items: flex-start; text-align: left; }
        .label-left { right: 14px; top: -10px; align-items: flex-end; text-align: right; }
        .label-right { left: 14px; top: -10px; align-items: flex-start; text-align: left; }
        .label-bottom-left { top: 14px; right: 12px; align-items: flex-end; text-align: right; }
        .label-bottom-right { top: 14px; left: 12px; align-items: flex-start; text-align: left; }

        .node-handwriting-title {
          font-family: var(--font-handwriting);
          font-size: 1.15rem;
          color: #f8fafc;
          line-height: 1.1;
          font-weight: 600;
        }

        .node-sub-text {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          color: #94a3b8;
          line-height: 1.25;
          margin-top: 1px;
          font-weight: 400;
        }

        /* Bottom Right Annotation */
        .bottom-right-annotation {
          position: absolute;
          right: 2%;
          bottom: 2%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          transform: rotate(3deg);
          pointer-events: none;
          z-index: 15;
        }

        .annotation-script {
          font-family: var(--font-handwriting);
          font-size: 0.92rem;
          color: #cbd5e1;
          margin: 0;
          line-height: 1.25;
        }

        .annotation-arrow-svg {
          margin-top: 0.2rem;
          margin-right: 2rem;
        }

        /* Bottom 5 Pillars Grid Row */
        .pillars-grid-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          z-index: 10;
        }

        .pillar-item {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .pillar-item .pillar-num {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 800;
          color: #818cf8;
          margin-bottom: 0.1rem;
        }

        .pillar-item .pillar-title {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
        }

        .pillar-item .pillar-sub {
          font-size: 0.78rem;
          color: #64748b;
        }

        /* Responsive Styles */
        @media (max-width: 1180px) {
          .about-main-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .about-section {
            padding: 3rem 2rem;
          }
          .planet-system-wrapper {
            max-width: 540px;
            height: 420px;
          }
          .planet-sphere {
            width: 240px;
            height: 240px;
          }
        }

        @media (max-width: 768px) {
          .pillars-grid-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.8rem;
          }
          .top-rule-line {
            display: none;
          }
          .about-slogan-sub {
            flex-wrap: wrap;
          }
          .about-giant-headline {
            font-size: 3rem;
          }
          .planet-sphere {
            width: 200px;
            height: 200px;
          }
          .planet-script-curiosity {
            font-size: 1.8rem;
          }
          .planet-script-impact {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
