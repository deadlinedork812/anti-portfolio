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
    num: '01',
    title: 'THINK',
    subtitle: 'Understand the problem',
    color: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.5)',
    x: 17,
    y: 75,
  },
  {
    num: '02',
    title: 'QUESTION',
    subtitle: 'Look deeper',
    color: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.5)',
    x: 39,
    y: 57,
  },
  {
    num: '03',
    title: 'BUILD',
    subtitle: 'Turn ideas into systems',
    color: '#c084fc',
    glow: 'rgba(192, 132, 252, 0.5)',
    x: 58,
    y: 47,
  },
  {
    num: '04',
    title: 'TEST',
    subtitle: 'Find what can go wrong',
    color: '#f472b6',
    glow: 'rgba(244, 114, 182, 0.5)',
    x: 77,
    y: 32,
  },
  {
    num: '05',
    title: 'IMPACT',
    subtitle: 'Create lasting value',
    color: '#fb923c',
    glow: 'rgba(251, 146, 60, 0.7)',
    x: 93,
    y: 16,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section section-dark about-section">
      {/* Background ambient aurora & dot matrix */}
      <div className="about-bg-grid" />
      <div className="about-aurora-bg" />

      {/* Top Header Row */}
      <div className="about-top-bar">
        <div className="section-header-tag">
          <span>02. ABOUT</span>
        </div>
        <div className="about-top-right-tag">
          <span className="slogan-text">SAME CURIOSITY. DIFFERENT PROBLEMS.</span>
          <div className="top-rule-line" />
        </div>
      </div>

      <div className="about-slogan-sub">
        <span>A MORE COMPLETE PICTURE</span>
        <span className="dot">•</span>
        <span>PEOPLE PRODUCTS POSSIBILITIES</span>
      </div>

      {/* Main Grid: Left Column Text & Right Column Interactive Curve Graphic */}
      <div className="about-main-grid">
        
        {/* Left Column Text */}
        <div className="about-left-col">
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-bold-headline"
          >
            Part engineer.<br />
            Part tester.<br />
            Part designer.<br />
            Always a <span className="gradient-builder-text">builder.</span>
          </motion.h2>

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

        {/* Right Column: "From curiosity, to impact." Curve Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="about-right-visual"
        >
          {/* Main Headline Script */}
          <div className="curiosity-impact-header">
            <span className="curiosity-script-text">From curiosity,</span>
            <span className="impact-script-text">to impact.</span>
          </div>

          {/* Interactive Graphic Container */}
          <div className="curve-graphic-container">
            {/* SVG Background Orbits & Glowing Bezier Line */}
            <svg className="curve-svg-layer" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Curve Linear Gradient */}
                <linearGradient id="curveGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="25%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#c084fc" />
                  <stop offset="75%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>

                {/* Drop shadow filter for stroke */}
                <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Orbital Blueprint Circles */}
              <circle cx="180" cy="220" r="140" stroke="rgba(255, 255, 255, 0.04)" strokeDasharray="3 4" strokeWidth="1" />
              <circle cx="380" cy="180" r="190" stroke="rgba(129, 140, 248, 0.06)" strokeDasharray="4 6" strokeWidth="1" />
              <circle cx="550" cy="58" r="60" stroke="rgba(251, 146, 60, 0.15)" strokeWidth="1" />

              {/* Flow Path Bezier Curve */}
              <path
                d="M 100 270 Q 210 220 234 205 T 348 170 T 462 115 T 558 58"
                stroke="url(#curveGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
                filter="url(#glowFilter)"
              />

              {/* Arrow Head at End of Path */}
              <path
                d="M 548 66 L 558 56 L 552 72"
                stroke="#fb923c"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Handwritten Callout Arrow 1: "Ask better questions." */}
              <g className="annotation-arrow-1">
                <path
                  d="M 45 200 Q 60 220 72 245"
                  stroke="#cbd5e1"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 66 239 L 72 245 L 75 237"
                  stroke="#cbd5e1"
                  strokeWidth="1.2"
                  fill="none"
                />
              </g>

              {/* Handwritten Callout Circle & Arrow 2: "Build -> Learn -> Repeat." */}
              <g className="annotation-arrow-2">
                {/* Oval Loop around text */}
                <ellipse cx="505" cy="160" rx="42" ry="22" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="100" fill="none" opacity="0.8" />
                {/* Pointer Arrow */}
                <path d="M 480 142 Q 490 120 525 90" stroke="#cbd5e1" strokeWidth="1.2" fill="none" />
                <path d="M 520 90 L 526 89 L 524 96" stroke="#cbd5e1" strokeWidth="1.2" fill="none" />
              </g>
            </svg>

            {/* Floating Annotation Texts */}
            <div className="handwriting-callout callout-1">
              <span>Ask<br />better<br />questions.</span>
            </div>

            <div className="handwriting-callout callout-2">
              <span>Build ➔ Learn ➔<br />Repeat.</span>
            </div>

            {/* Interactive Nodes HTML overlay */}
            <div className="nodes-overlay">
              {nodes.map((node) => (
                <div
                  key={node.num}
                  className={`timeline-node-item node-${node.num}`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  {/* Node Glowing Point */}
                  <div 
                    className="node-dot-wrapper"
                    style={{ 
                      boxShadow: `0 0 16px ${node.glow}, inset 0 0 8px ${node.glow}`,
                      borderColor: node.color
                    }}
                  >
                    <div className="node-dot-core" style={{ background: node.color }} />
                  </div>

                  {/* Node Label Details */}
                  <div className="node-label-box">
                    <div className="node-label-header">
                      <span className="node-num" style={{ color: node.color }}>{node.num}</span>
                      <span className="node-title">{node.title}</span>
                    </div>
                    <span className="node-sub">{node.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>

      {/* Bottom 5 Pillars Divider Line & Grid */}
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
          background-color: #080911;
          position: relative;
          overflow: hidden;
          padding: 4rem 3.5rem;
          color: #f8fafc;
        }

        .about-bg-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
          z-index: 1;
        }

        .about-aurora-bg {
          position: absolute;
          top: 15%;
          right: 5%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(129, 140, 248, 0.18) 0%, rgba(217, 70, 239, 0.1) 45%, transparent 70%);
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
          margin-bottom: 0.5rem;
        }

        .about-top-right-tag {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .slogan-text {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #64748b;
        }

        .top-rule-line {
          width: 90px;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
        }

        .about-slogan-sub {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 3.5rem;
          position: relative;
          z-index: 10;
        }

        .about-slogan-sub .dot {
          color: #6366f1;
        }

        /* Main 2-Column Grid Layout */
        .about-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 3.5rem;
          align-items: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 10;
        }

        /* Left Column Text */
        .about-left-col {
          display: flex;
          flex-direction: column;
        }

        .about-bold-headline {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 4vw, 4.2rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #f8fafc;
          margin-bottom: 2rem;
        }

        .gradient-builder-text {
          background: linear-gradient(90deg, #818cf8 0%, #c084fc 35%, #f472b6 70%, #fb923c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-body-text {
          font-size: clamp(1rem, 1.15vw, 1.15rem);
          color: #94a3b8;
          line-height: 1.65;
          max-width: 520px;
          font-weight: 400;
        }

        /* Right Column Interactive Curve Visual */
        .about-right-visual {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        /* "From curiosity, to impact." Script Title */
        .curiosity-impact-header {
          position: absolute;
          top: -25px;
          left: 20%;
          z-index: 15;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transform: rotate(-4deg);
          pointer-events: none;
        }

        .curiosity-script-text {
          font-family: var(--font-handwriting);
          font-size: clamp(2.4rem, 3.2vw, 3.8rem);
          color: #a78bfa;
          line-height: 0.9;
          text-shadow: 0 4px 15px rgba(167, 139, 250, 0.3);
        }

        .impact-script-text {
          font-family: var(--font-handwriting);
          font-size: clamp(2.6rem, 3.5vw, 4.2rem);
          background: linear-gradient(135deg, #c084fc 0%, #f472b6 50%, #fb923c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          margin-left: 2.5rem;
          filter: drop-shadow(0 4px 20px rgba(244, 114, 182, 0.4));
        }

        /* Graphic Canvas Container */
        .curve-graphic-container {
          position: relative;
          width: 100%;
          height: 380px;
        }

        .curve-svg-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        /* Floating Handwritten Callout Texts */
        .handwriting-callout {
          position: absolute;
          font-family: var(--font-handwriting);
          color: #cbd5e1;
          pointer-events: none;
          z-index: 12;
        }

        .callout-1 {
          left: 1%;
          top: 48%;
          font-size: clamp(1.1rem, 1.4vw, 1.35rem);
          transform: rotate(-8deg);
          line-height: 1.1;
        }

        .callout-2 {
          right: 0%;
          top: 26%;
          font-size: clamp(1.1rem, 1.4vw, 1.35rem);
          transform: rotate(5deg);
          line-height: 1.1;
        }

        /* Timeline Nodes Container & Overlay */
        .nodes-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .timeline-node-item {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: auto;
          cursor: pointer;
        }

        .node-dot-wrapper {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid;
          background: rgba(15, 23, 42, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .timeline-node-item:hover .node-dot-wrapper {
          transform: scale(1.35);
        }

        .node-dot-core {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .node-label-box {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: max-content;
          max-width: 150px;
        }

        /* Positioning node text relative to dots */
        .node-01 .node-label-box { top: 22px; left: -15px; }
        .node-02 .node-label-box { top: 22px; left: -20px; }
        .node-03 .node-label-box { top: 22px; left: -20px; }
        .node-04 .node-label-box { top: 24px; left: -45px; }
        .node-05 .node-label-box { bottom: 24px; left: -15px; }

        .node-label-header {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .node-num {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 800;
        }

        .node-title {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
        }

        .node-sub {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: #cbd5e1;
          line-height: 1.25;
          margin-top: 2px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
          font-weight: 500;
        }

        /* Bottom 5 Pillars Grid Row */
        .pillars-grid-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          padding-top: 2.2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 10;
        }

        .pillar-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .pillar-item .pillar-num {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 800;
          color: #818cf8;
          margin-bottom: 0.2rem;
        }

        .pillar-item .pillar-title {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 800;
          color: #f8fafc;
        }

        .pillar-item .pillar-sub {
          font-size: 0.82rem;
          color: #64748b;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1180px) {
          .about-main-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .about-section {
            padding: 3rem 2rem;
          }
          .curiosity-impact-header {
            top: -15px;
            left: 10%;
          }
        }

        @media (max-width: 768px) {
          .pillars-grid-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .top-rule-line {
            display: none;
          }
          .about-slogan-sub {
            flex-wrap: wrap;
          }
          .curiosity-impact-header {
            position: relative;
            top: 0;
            left: 0;
            transform: rotate(0deg);
            margin-bottom: 1rem;
          }
          .curiosity-script-text {
            font-size: 2.2rem;
          }
          .impact-script-text {
            font-size: 2.4rem;
            margin-left: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
