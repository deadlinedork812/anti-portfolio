import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const nodes = [
  {
    id: 'curiosity',
    title: 'Curiosity',
    subtitle: 'A small question starts somewhere.',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.85)',
    x: 18,
    y: 15,
    labelPos: 'top-left'
  },
  {
    id: 'context',
    title: 'Context',
    subtitle: 'Different angles. Deeper understanding.',
    color: '#c084fc',
    glow: 'rgba(192, 132, 252, 0.85)',
    x: 82,
    y: 15,
    labelPos: 'top-right'
  },
  {
    id: 'real-problems',
    title: 'Real Problems',
    subtitle: 'Messy, ambiguous, human problems.',
    color: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.85)',
    x: 8,
    y: 48,
    labelPos: 'left'
  },
  {
    id: 'connections',
    title: 'Connections',
    subtitle: 'Ideas, people, systems, patterns.',
    color: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.85)',
    x: 92,
    y: 48,
    labelPos: 'right'
  },
  {
    id: 'experiments',
    title: 'Experiments',
    subtitle: 'Build. Break. Learn. Iterate.',
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.85)',
    x: 18,
    y: 82,
    labelPos: 'bottom-left'
  },
  {
    id: 'meaningful-impact',
    title: 'Meaningful Impact',
    subtitle: 'Better products. Happier users. A little progress forward.',
    color: '#f97316',
    glow: 'rgba(249, 115, 22, 0.95)',
    x: 78,
    y: 78,
    labelPos: 'top-right'
  }
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const offsetX = (e.clientX - centerX) / (rect.width / 2);
      const offsetY = (e.clientY - centerY) / (rect.height / 2);

      animationFrameId = requestAnimationFrame(() => {
        setMouseOffset({
          x: Math.max(-1, Math.min(1, offsetX)) * 10,
          y: Math.max(-1, Math.min(1, offsetY)) * 10
        });
      });
    };

    const sectionEl = sectionRef.current;
    if (sectionEl) {
      sectionEl.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (sectionEl) {
        sectionEl.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="portfolio-section section-dark about-canvas-container"
    >
      {/* Dark Continuous Canvas Background Layers */}
      <div className="about-bg-base" />
      <div className="about-indigo-glow" />
      <div className="about-violet-glow" />
      <div className="about-grid-lines" />
      <div className="about-stars-layer" />

      {/* Crosshair Technical Construction Markers */}
      <div className="tech-crosshair crosshair-tl">+</div>
      <div className="tech-crosshair crosshair-tr">+</div>
      <div className="tech-crosshair crosshair-bl">+</div>
      <div className="tech-crosshair crosshair-br">+</div>
      <div className="tech-axis-line vertical-axis" />
      <div className="tech-axis-line horizontal-axis" />

      {/* Main Continuous Canvas Content Wrapper */}
      <div className="about-canvas-layout">
        
        {/* Left Side — Editorial Typographic Manifesto (~50%) */}
        <div className="about-manifesto-col">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="manifesto-content"
          >
            <h1 className="manifesto-headline">
              <span className="manifesto-line">Part</span>
              <span className="manifesto-line">engineer.</span>
              <span className="manifesto-line gap-top">Part</span>
              <span className="manifesto-line">tester.</span>
              <span className="manifesto-line gap-top">Part</span>
              <span className="manifesto-line">designer.</span>
              <span className="manifesto-line gap-top">Always a</span>
              <span className="manifesto-line builder-highlight">builder.</span>
            </h1>

            <p className="manifesto-subcopy">
              I work at the intersection of quality, engineering, and product — bridging the gap between ideas and reliable, real-world software.
            </p>
          </motion.div>
        </div>

        {/* Right Side — Conceptual Thinking System Visualization (~50%) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="about-system-col"
          style={{
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`
          }}
        >
          <div className="thinking-system-stage">

            {/* Concentric Construction Rings */}
            <svg className="system-bg-rings" viewBox="0 0 600 520" fill="none">
              <circle cx="300" cy="260" r="220" stroke="rgba(129, 140, 248, 0.08)" strokeWidth="1" strokeDasharray="3 6" />
              <circle cx="300" cy="260" r="160" stroke="rgba(192, 132, 252, 0.1)" strokeWidth="1" strokeDasharray="4 8" />
              <ellipse cx="300" cy="260" rx="240" ry="170" stroke="rgba(236, 72, 153, 0.14)" strokeWidth="1" strokeDasharray="2 4" transform="rotate(-12 300 260)" className="rotating-orbit-1" />
              <ellipse cx="300" cy="260" rx="210" ry="140" stroke="rgba(168, 85, 247, 0.16)" strokeWidth="1.2" strokeDasharray="4 6" transform="rotate(18 300 260)" className="rotating-orbit-2" />
            </svg>

            {/* Central Glowing Conceptual Orb */}
            <div className="conceptual-orb-container">
              <div className="orb-ambient-halo" />
              <div className="orb-core">
                <div className="orb-radial-texture" />
                <div className="orb-inner-glow" />
                
                {/* Center Handwritten Text */}
                <div className="orb-center-script">
                  <span className="script-line-1">From curiosity</span>
                  <span className="script-line-2">to impact.</span>
                  <svg className="script-connector-svg" width="130" height="14" viewBox="0 0 130 14" fill="none">
                    <path d="M 5 8 Q 65 13 125 4" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 6 Surrounding Floating Nodes / Annotations */}
            <div className="system-nodes-overlay">
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={`about-system-node node-${node.id}`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  {/* Glowing Core Dot */}
                  <div 
                    className="about-node-dot"
                    style={{ 
                      backgroundColor: node.color,
                      boxShadow: `0 0 14px ${node.glow}, 0 0 28px ${node.glow}`
                    }}
                  />

                  {/* Floating Annotation Text */}
                  <div className={`about-node-annotation about-label-${node.labelPos}`}>
                    <span className="about-node-title">{node.title}</span>
                    <span className="about-node-subtitle">{node.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Handwritten System Callout & Arrow (Lower Right) */}
            <div className="handwritten-callout-block">
              <span className="callout-script-line">Same person.</span>
              <span className="callout-script-line">Different lens.</span>
              <span className="callout-script-line">More connected solutions.</span>
              
              {/* Subtle Hand-Drawn SVG Arrow Pointing Back to System Orb */}
              <svg className="callout-arrow-svg" width="65" height="45" viewBox="0 0 65 45" fill="none">
                <path d="M 12 8 Q 36 34 46 34" stroke="#cbd5e1" strokeWidth="1.3" strokeLinecap="round" />
                <path d="M 40 28 L 46 34 L 50 28" stroke="#cbd5e1" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>

          </div>
        </motion.div>

      </div>

      <style>{`
        /* Full Screen Dark Continuous Canvas */
        .about-canvas-container {
          background-color: #06070d;
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          padding: 4rem 4rem;
          color: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-bg-base {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, #090b16 0%, #06070d 100%);
          z-index: 1;
        }

        .about-indigo-glow {
          position: absolute;
          top: 15%;
          right: 20%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 75%);
          filter: blur(100px);
          pointer-events: none;
          z-index: 2;
        }

        .about-violet-glow {
          position: absolute;
          bottom: 10%;
          left: 30%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.07) 0%, rgba(249, 115, 22, 0.04) 60%, transparent 75%);
          filter: blur(90px);
          pointer-events: none;
          z-index: 2;
        }

        /* Technical Grid & Linework */
        .about-grid-lines {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 3;
        }

        /* Subtle Star Particles */
        .about-stars-layer {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(1.5px 1.5px at 10% 20%, rgba(255, 255, 255, 0.3), transparent),
            radial-gradient(1px 1px at 30% 65%, rgba(255, 255, 255, 0.25), transparent),
            radial-gradient(1.5px 1.5px at 60% 15%, rgba(255, 255, 255, 0.35), transparent),
            radial-gradient(1px 1px at 85% 45%, rgba(255, 255, 255, 0.25), transparent),
            radial-gradient(1.2px 1.2px at 75% 85%, rgba(255, 255, 255, 0.3), transparent),
            radial-gradient(1px 1px at 45% 90%, rgba(255, 255, 255, 0.2), transparent);
          background-size: 100% 100%;
          pointer-events: none;
          z-index: 3;
          animation: starDrift 30s linear infinite alternate;
        }

        @keyframes starDrift {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }

        /* Technical Crosshairs & Axes */
        .tech-crosshair {
          position: absolute;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.15);
          pointer-events: none;
          z-index: 4;
          user-select: none;
        }
        .crosshair-tl { top: 2.5rem; left: 3rem; }
        .crosshair-tr { top: 2.5rem; right: 3rem; }
        .crosshair-bl { bottom: 2.5rem; left: 3rem; }
        .crosshair-br { bottom: 2.5rem; right: 3rem; }

        .tech-axis-line {
          position: absolute;
          background: rgba(255, 255, 255, 0.04);
          pointer-events: none;
          z-index: 4;
        }
        .vertical-axis { top: 0; bottom: 0; left: 50%; width: 1px; }
        .horizontal-axis { left: 0; right: 0; top: 50%; height: 1px; }

        /* Main Canvas Layout Grid (~50% / ~50%) */
        .about-canvas-layout {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
        }

        /* Left Manifesto Column */
        .about-manifesto-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .manifesto-headline {
          font-family: var(--font-display);
          font-size: clamp(3.4rem, 4.8vw, 5.8rem);
          font-weight: 900;
          line-height: 0.98;
          letter-spacing: -0.04em;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          margin-bottom: 2.2rem;
        }

        .manifesto-line {
          display: block;
        }

        .manifesto-line.gap-top {
          margin-top: 0.45rem;
        }

        .builder-highlight {
          background: linear-gradient(90deg, #818cf8 0%, #c084fc 35%, #f472b6 70%, #fb923c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .manifesto-subcopy {
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 1.1vw, 1.12rem);
          color: #94a3b8;
          line-height: 1.65;
          max-width: 440px;
          font-weight: 400;
          letter-spacing: -0.01em;
        }

        /* Right System Column */
        .about-system-col {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          transition: transform 0.2s ease-out;
          will-change: transform;
        }

        .thinking-system-stage {
          position: relative;
          width: 100%;
          max-width: 620px;
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .system-bg-rings {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }

        .rotating-orbit-1 {
          transform-origin: 300px 260px;
          animation: orbitRotate1 90s linear infinite;
        }

        .rotating-orbit-2 {
          transform-origin: 300px 260px;
          animation: orbitRotate2 70s linear infinite reverse;
        }

        @keyframes orbitRotate1 {
          from { transform: rotate(-12deg); }
          to { transform: rotate(348deg); }
        }

        @keyframes orbitRotate2 {
          from { transform: rotate(18deg); }
          to { transform: rotate(-342deg); }
        }

        /* Central Conceptual Orb (NOT a planet) */
        .conceptual-orb-container {
          position: relative;
          width: 220px;
          height: 220px;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orb-ambient-halo {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(129, 140, 248, 0.08) 50%, transparent 75%);
          filter: blur(22px);
          animation: orbHaloBreathe 6s ease-in-out infinite alternate;
        }

        @keyframes orbHaloBreathe {
          0% { transform: scale(0.96); opacity: 0.7; }
          100% { transform: scale(1.06); opacity: 1; }
        }

        .orb-core {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #1e1b4b 0%, #0d1127 55%, #04060e 100%);
          box-shadow: 
            0 0 45px rgba(129, 140, 248, 0.22),
            inset 0 0 30px rgba(192, 132, 252, 0.25),
            inset -10px -10px 25px rgba(0, 0, 0, 0.8);
          border: 1.5px solid rgba(192, 132, 252, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          animation: orbBreath 8s ease-in-out infinite alternate;
        }

        @keyframes orbBreath {
          0% { transform: scale(0.98); }
          100% { transform: scale(1.02); }
        }

        .orb-radial-texture {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 14px 14px;
          opacity: 0.4;
          pointer-events: none;
        }

        .orb-inner-glow {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .orb-center-script {
          position: relative;
          z-index: 12;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: rotate(-5deg);
          text-align: center;
          user-select: none;
        }

        .script-line-1 {
          font-family: var(--font-handwriting);
          font-size: clamp(1.8rem, 2.4vw, 2.6rem);
          color: #e9d5ff;
          line-height: 0.95;
          text-shadow: 0 4px 14px rgba(192, 132, 252, 0.6);
        }

        .script-line-2 {
          font-family: var(--font-handwriting);
          font-size: clamp(2.1rem, 2.8vw, 3rem);
          color: #f472b6;
          line-height: 1.05;
          text-shadow: 0 4px 18px rgba(244, 114, 182, 0.6);
          margin-top: 0.15rem;
        }

        .script-connector-svg {
          margin-top: -2px;
        }

        /* Surrounding Floating Nodes Overlay */
        .system-nodes-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 20;
        }

        .about-system-node {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          pointer-events: auto;
          cursor: default;
        }

        .about-node-dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          animation: dotPulse 3s ease-in-out infinite alternate;
        }

        @keyframes dotPulse {
          0% { transform: scale(0.9); }
          100% { transform: scale(1.3); }
        }

        .about-system-node:hover .about-node-dot {
          transform: scale(1.6);
        }

        .about-node-annotation {
          position: absolute;
          display: flex;
          flex-direction: column;
          width: max-content;
          max-width: 175px;
        }

        /* Directional Label Layouts Extending Outwards */
        .about-label-top-left { bottom: 12px; right: 12px; align-items: flex-end; text-align: right; }
        .about-label-top-right { bottom: 12px; left: 12px; align-items: flex-start; text-align: left; }
        .about-label-left { right: 14px; top: -12px; align-items: flex-end; text-align: right; }
        .about-label-right { left: 14px; top: -12px; align-items: flex-start; text-align: left; }
        .about-label-bottom-left { top: 12px; right: 12px; align-items: flex-end; text-align: right; }
        .about-label-bottom-right { top: 12px; left: 12px; align-items: flex-start; text-align: left; }

        .about-node-title {
          font-family: var(--font-handwriting) !important;
          font-size: 1.4rem !important;
          color: #ffffff !important;
          line-height: 1.1 !important;
          font-weight: 700 !important;
          letter-spacing: 0.01em !important;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.95), 0 0 10px rgba(0, 0, 0, 0.9) !important;
        }

        .about-node-subtitle {
          font-family: var(--font-sans) !important;
          font-size: 0.73rem !important;
          color: #e2e8f0 !important;
          line-height: 1.3 !important;
          margin-top: 2px !important;
          font-weight: 400 !important;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.95) !important;
        }

        /* Handwritten Callout Block (Lower Right) */
        .handwritten-callout-block {
          position: absolute;
          right: -2%;
          bottom: -8%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          transform: rotate(3deg);
          pointer-events: none;
          z-index: 25;
        }

        .callout-script-line {
          font-family: var(--font-handwriting);
          font-size: 1rem;
          color: #f1f5f9;
          margin: 0;
          line-height: 1.25;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95);
        }

        .callout-arrow-svg {
          margin-top: 0.25rem;
          margin-right: 2.2rem;
        }

        /* Responsive Layout Behavior */
        @media (max-width: 1200px) {
          .about-canvas-layout {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .about-canvas-container {
            padding: 4rem 2rem;
          }
          .thinking-system-stage {
            max-width: 520px;
            height: 460px;
          }
          .conceptual-orb-container {
            width: 200px;
            height: 200px;
          }
        }

        @media (max-width: 768px) {
          .about-canvas-container {
            padding: 3rem 1.5rem;
          }
          .manifesto-headline {
            font-size: clamp(2.6rem, 8vw, 3.8rem);
          }
          .manifesto-subcopy {
            font-size: 0.95rem;
          }
          .thinking-system-stage {
            max-width: 100%;
            height: 440px;
          }
          .conceptual-orb-container {
            width: 160px;
            height: 160px;
          }
          .about-node-title {
            font-size: 1.15rem !important;
          }
          .about-node-subtitle {
            font-size: 0.68rem !important;
          }
          .handwritten-callout-block {
            right: 0;
            bottom: -6%;
          }
          .tech-crosshair, .tech-axis-line {
            display: none;
          }
        }

        /* Prefers Reduced Motion Compliance */
        @media (prefers-reduced-motion: reduce) {
          .about-stars-layer,
          .rotating-orbit-1,
          .rotating-orbit-2,
          .orb-ambient-halo,
          .orb-core,
          .about-node-dot {
            animation: none !important;
          }
          .about-system-col {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
