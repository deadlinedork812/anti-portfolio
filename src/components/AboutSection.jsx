import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import aboutBgAvif from '../assets/about-background.avif';
import aboutBgWebp from '../assets/about-background.webp';
import aboutBgPng from '../assets/about-background.png';

// Spatial distribution mapped to proportional 1736 x 906 artwork viewBox coordinates
const conceptualNodes = [
  {
    id: 'context',
    title: 'Context',
    subtitle: 'Different angles. Deeper understanding.',
    color: '#c084fc',
    glow: 'rgba(192, 132, 252, 0.85)',
    dotX: 72.5,   // ~1258px
    dotY: 18.7,   // ~170px
    labelX: 72.5, // ~1258px
    labelY: 6.5,  // ~58px
    align: 'center',
    leaderSvg: 'M 1258 100 L 1258 162'
  },
  {
    id: 'meaningful-impact',
    title: 'Meaningful Impact',
    subtitle: 'Better products. Happier users. A little progress forward.',
    color: '#fb923c',
    glow: 'rgba(251, 146, 60, 0.95)',
    dotX: 73.7,   // ~1280px
    dotY: 8.2,    // ~75px
    labelX: 86.5, // ~1500px
    labelY: 10.5, // ~95px
    align: 'left',
    leaderSvg: 'M 1495 95 L 1290 75'
  },
  {
    id: 'real-problems',
    title: 'Real Problems',
    subtitle: 'Messy, ambiguous, human problems.',
    color: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.85)',
    dotX: 69.7,   // ~1210px
    dotY: 37.3,   // ~338px
    labelX: 52.5, // ~910px
    labelY: 30.5, // ~276px
    align: 'right',
    leaderSvg: 'M 930 295 L 1200 335'
  },
  {
    id: 'connections',
    title: 'Connections',
    subtitle: 'Ideas, people, systems, patterns.',
    color: '#e879f9',
    glow: 'rgba(232, 121, 249, 0.85)',
    dotX: 78.9,   // ~1370px
    dotY: 49.2,   // ~446px
    labelX: 87.5, // ~1520px
    labelY: 48.0, // ~435px
    align: 'left',
    leaderSvg: 'M 1515 440 L 1380 446'
  },
  {
    id: 'experiments',
    title: 'Experiments',
    subtitle: 'Build. Break. Learn. Iterate.',
    color: '#fb7185',
    glow: 'rgba(251, 113, 133, 0.85)',
    dotX: 71.7,   // ~1245px
    dotY: 64.6,   // ~585px
    labelX: 53.0, // ~920px
    labelY: 76.0, // ~688px
    align: 'right',
    leaderSvg: 'M 935 675 L 1235 590'
  },
  {
    id: 'curiosity',
    title: 'Curiosity',
    subtitle: 'A small question starts somewhere.',
    color: '#a78bfa',
    glow: 'rgba(167, 139, 250, 0.85)',
    dotX: 87.0,   // ~1510px
    dotY: 93.2,   // ~845px
    labelX: 86.5, // ~1500px
    labelY: 81.0, // ~733px
    align: 'left',
    leaderSvg: 'M 1500 770 L 1510 835'
  }
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

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
        // Subtle micro parallax (max 3px)
        setParallaxOffset({
          x: Math.max(-1, Math.min(1, offsetX)) * 3,
          y: Math.max(-1, Math.min(1, offsetY)) * 3
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
      {/* 1. Static Background Asset with AVIF -> WebP -> PNG Fallback */}
      <picture className="about-bg-picture">
        <source srcSet={aboutBgAvif} type="image/avif" />
        <source srcSet={aboutBgWebp} type="image/webp" />
        <img 
          src={aboutBgPng} 
          alt="Mysterious Conceptual Landscape Background" 
          className="about-bg-img"
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* Vignette Overlay for High Manifesto Readability */}
      <div className="about-left-vignette" />

      {/* Main Layout Grid */}
      <div className="about-canvas-layout">
        
        {/* Left Column — Manifesto */}
        <div className="about-manifesto-col">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
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

          {/* Handwritten Annotation Callout */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="handwritten-callout-block"
          >
            <span className="callout-script-line">Same person.</span>
            <span className="callout-script-line">Different lens.</span>
            <span className="callout-script-line">More connected solutions.</span>
            
            <svg className="callout-arrow-svg" width="70" height="36" viewBox="0 0 70 36" fill="none">
              <path d="M 8 8 C 26 28, 48 30, 60 22" stroke="#cbd5e1" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 3" opacity="0.8" />
              <path d="M 53 17 L 60 22 L 58 29" stroke="#cbd5e1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            </svg>
          </motion.div>
        </div>

        {/* Right Column — Landscape Stage & Annotations */}
        <div className="about-landscape-stage-col">
          <div 
            className="about-interactive-stage"
            style={{
              transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`
            }}
          >
            {/* SVG Overlay: Energy Stream + Leader Lines */}
            <svg className="about-stream-svg-overlay" viewBox="0 0 1736 906" fill="none">
              <defs>
                <filter id="aboutSoftGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="8" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="aboutWideGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="24"/>
                </filter>
                <linearGradient id="aboutEnergyGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#a78bfa"/>
                  <stop offset="45%" stopColor="#e879f9"/>
                  <stop offset="78%" stopColor="#fb7185"/>
                  <stop offset="100%" stopColor="#fb923c"/>
                </linearGradient>
              </defs>

              {/* Layer 1: Base Path */}
              <path 
                className="stream-base-path"
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="url(#aboutEnergyGrad)" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                opacity="0.22"
              />

              {/* Layer 2: Soft Atmosphere Glow */}
              <path 
                className="stream-glow-path"
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="url(#aboutEnergyGrad)" 
                strokeWidth="18" 
                strokeLinecap="round"
                opacity="0.14" 
                filter="url(#aboutWideGlow)"
              />

              {/* Layer 3: Moving Energy Segment */}
              <path 
                className="stream-moving-energy"
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="url(#aboutEnergyGrad)" 
                strokeWidth="5.5" 
                strokeLinecap="round"
                filter="url(#aboutSoftGlow)"
              />

              {/* Subtle Leader Lines connecting dots to text annotations */}
              {conceptualNodes.map((node) => (
                <path
                  key={`leader-${node.id}`}
                  d={node.leaderSvg}
                  stroke="rgba(255, 255, 255, 0.22)"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                  strokeLinecap="round"
                />
              ))}
            </svg>

            {/* Monolith Breathing Aura */}
            <div className="monolith-glow-aura" />

            {/* Central Message — Positioned in Dedicated Safe Zone (Mid-Left Atmosphere) */}
            <div className="central-message-safezone">
              <span className="central-msg-line1">See the system.</span>
              <span className="central-msg-line2">Shape the outcome.</span>
              <svg className="central-msg-underline" width="140" height="10" viewBox="0 0 140 10" fill="none">
                <path d="M 4 5 Q 70 9 136 3" stroke="url(#aboutEnergyGrad)" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
              </svg>
            </div>

            {/* Node Dots & Distributed Editorial Text Annotations */}
            <div className="conceptual-nodes-overlay">
              {conceptualNodes.map((node) => (
                <React.Fragment key={node.id}>
                  {/* Glowing Node Dot on Artwork */}
                  <div
                    className={`about-concept-dot node-dot-${node.id}`}
                    style={{ left: `${node.dotX}%`, top: `${node.dotY}%` }}
                  >
                    <div 
                      className="about-dot-core"
                      style={{ 
                        backgroundColor: node.color,
                        boxShadow: `0 0 10px ${node.glow}, 0 0 20px ${node.glow}`
                      }}
                    />
                  </div>

                  {/* Non-overlapping Text Label Annotation */}
                  <div 
                    className={`about-concept-label label-align-${node.align}`}
                    style={{ left: `${node.labelX}%`, top: `${node.labelY}%` }}
                  >
                    <span className="about-node-title">{node.title}</span>
                    <span className="about-node-subtitle">{node.subtitle}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>

      </div>

      <style>{`
        /* 1. Environment & Container */
        .about-canvas-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background-color: #05060b;
          color: #f8fafc;
          display: flex;
          align-items: center;
          padding: 4rem 3rem 4rem 4rem;
        }

        .about-bg-picture {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .about-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
          display: block;
        }

        .about-left-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #05060b 0%, rgba(5, 6, 11, 0.95) 30%, rgba(5, 6, 11, 0.55) 55%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* Layout Grid */
        .about-canvas-layout {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: minmax(380px, 42%) 1fr;
          gap: 3rem;
          align-items: center;
          width: 100%;
          max-width: 1560px;
          margin: 0 auto;
        }

        /* Left Manifesto Column */
        .about-manifesto-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 12;
        }

        .manifesto-headline {
          font-family: var(--font-display);
          font-size: clamp(3.2rem, 4.6vw, 5.6rem);
          font-weight: 900;
          line-height: 0.98;
          letter-spacing: -0.04em;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          margin-bottom: 1.8rem;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        }

        .manifesto-line {
          display: block;
        }

        .manifesto-line.gap-top {
          margin-top: 0.4rem;
        }

        .builder-highlight {
          background: linear-gradient(90deg, #a78bfa 0%, #c084fc 35%, #f472b6 70%, #fb923c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .manifesto-subcopy {
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 1.1vw, 1.12rem);
          color: #cbd5e1;
          line-height: 1.65;
          max-width: 440px;
          font-weight: 400;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
        }

        .handwritten-callout-block {
          margin-top: 2.8rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .callout-script-line {
          font-family: var(--font-handwriting);
          font-size: 1.1rem;
          color: #e2e8f0;
          margin: 0;
          line-height: 1.25;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.95);
        }

        .callout-arrow-svg {
          margin-top: 0.35rem;
          margin-left: 1.2rem;
        }

        /* Right Landscape Interactive Stage */
        .about-landscape-stage-col {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-interactive-stage {
          position: relative;
          width: 100%;
          aspect-ratio: 1736 / 906;
          max-height: 820px;
          transition: transform 0.25s ease-out;
          will-change: transform;
        }

        .about-stream-svg-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 15;
        }

        .stream-moving-energy {
          stroke-dasharray: 40 1060;
          stroke-dashoffset: 0;
          animation: energyFlowUpward 9s linear infinite;
        }

        @keyframes energyFlowUpward {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1100; }
        }

        .monolith-glow-aura {
          position: absolute;
          top: 3.5%;
          left: 71.5%;
          width: 90px;
          height: 110px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(251, 146, 60, 0.35) 0%, rgba(244, 114, 182, 0.18) 45%, transparent 75%);
          filter: blur(18px);
          pointer-events: none;
          z-index: 12;
          animation: monolithLightBreathe 5s ease-in-out infinite alternate;
        }

        @keyframes monolithLightBreathe {
          0% { opacity: 0.35; transform: scale(0.92); }
          100% { opacity: 0.85; transform: scale(1.12); }
        }

        /* Central Message — Dedicated Safe Zone Position (Mid-Left Negative Space) */
        .central-message-safezone {
          position: absolute;
          top: 55.5%;
          left: 52.0%;
          transform: translate(-50%, -50%) rotate(-3deg);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 22;
          pointer-events: none;
          user-select: none;
          padding: 0.8rem 1.2rem;
        }

        .central-msg-line1 {
          font-family: var(--font-handwriting);
          font-size: clamp(1.4rem, 1.8vw, 2.0rem);
          color: #e9d5ff;
          line-height: 1.0;
          text-shadow: 0 0 16px rgba(167, 139, 250, 0.75), 0 2px 10px rgba(0, 0, 0, 0.95);
        }

        .central-msg-line2 {
          font-family: var(--font-handwriting);
          font-size: clamp(1.6rem, 2.1vw, 2.3rem);
          color: #f472b6;
          line-height: 1.05;
          margin-top: 0.1rem;
          text-shadow: 0 0 20px rgba(244, 114, 182, 0.8), 0 2px 10px rgba(0, 0, 0, 0.95);
        }

        .central-msg-underline {
          margin-top: -2px;
        }

        /* Node Dots & Text Annotations Overlay */
        .conceptual-nodes-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 25;
        }

        .about-concept-dot {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 26;
          pointer-events: auto;
        }

        .about-dot-core {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          animation: dotPulse 3.5s ease-in-out infinite alternate;
        }

        @keyframes dotPulse {
          0% { transform: scale(0.85); opacity: 0.8; }
          100% { transform: scale(1.35); opacity: 1; }
        }

        .about-concept-label {
          position: absolute;
          transform: translate(0, -50%);
          display: flex;
          flex-direction: column;
          width: max-content;
          max-width: 190px;
          pointer-events: auto;
          z-index: 26;
        }

        .label-align-left {
          align-items: flex-start;
          text-align: left;
        }

        .label-align-right {
          transform: translate(-100%, -50%);
          align-items: flex-end;
          text-align: right;
        }

        .label-align-center {
          transform: translate(-50%, -100%);
          align-items: center;
          text-align: center;
        }

        .about-node-title {
          font-family: var(--font-handwriting) !important;
          font-size: 1.25rem !important;
          color: #ffffff !important;
          line-height: 1.1 !important;
          font-weight: 700 !important;
          letter-spacing: 0.01em !important;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.95), 0 0 10px rgba(0, 0, 0, 0.9) !important;
        }

        .about-node-subtitle {
          font-family: var(--font-sans) !important;
          font-size: 0.72rem !important;
          color: #cbd5e1 !important;
          line-height: 1.3 !important;
          margin-top: 2px !important;
          font-weight: 400 !important;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.95) !important;
        }

        /* Responsive Layout Behavior */
        @media (max-width: 1200px) {
          .about-canvas-layout {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .about-canvas-container {
            padding: 4rem 2rem;
          }
          .about-landscape-stage-col {
            max-width: 800px;
            margin: 0 auto;
          }
          .manifesto-subcopy {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .about-canvas-container {
            padding: 3rem 1.25rem;
          }
          .manifesto-headline {
            font-size: clamp(2.5rem, 8vw, 3.8rem);
          }
          .manifesto-subcopy {
            font-size: 0.95rem;
          }
          .central-msg-line1 { font-size: 1.2rem; }
          .central-msg-line2 { font-size: 1.4rem; }
          .about-node-title { font-size: 1.05rem !important; }
          .about-node-subtitle { font-size: 0.65rem !important; }
        }

        /* Prefers Reduced Motion Compliance */
        @media (prefers-reduced-motion: reduce) {
          .stream-moving-energy,
          .monolith-glow-aura,
          .about-dot-core {
            animation: none !important;
          }
          .about-interactive-stage {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
