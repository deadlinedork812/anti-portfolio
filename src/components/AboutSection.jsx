import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import aboutBgAvif from '../assets/about-background.avif';
import aboutBgWebp from '../assets/about-background.webp';
import aboutBgPng from '../assets/about-background.png';

const conceptualNodes = [
  {
    id: 'curiosity',
    title: 'Curiosity',
    subtitle: 'A small question starts somewhere.',
    color: '#a78bfa',
    glow: 'rgba(167, 139, 250, 0.9)',
    x: 87,
    y: 86,
    labelPos: 'left'
  },
  {
    id: 'context',
    title: 'Context',
    subtitle: 'Different angles. Deeper understanding.',
    color: '#c084fc',
    glow: 'rgba(192, 132, 252, 0.9)',
    x: 74,
    y: 73,
    labelPos: 'top-left'
  },
  {
    id: 'connections',
    title: 'Connections',
    subtitle: 'Ideas, people, systems, patterns.',
    color: '#e879f9',
    glow: 'rgba(232, 121, 249, 0.9)',
    x: 82,
    y: 49,
    labelPos: 'right'
  },
  {
    id: 'real-problems',
    title: 'Real Problems',
    subtitle: 'Messy, ambiguous, human problems.',
    color: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.9)',
    x: 65,
    y: 37,
    labelPos: 'left'
  },
  {
    id: 'experiments',
    title: 'Experiments',
    subtitle: 'Build. Break. Learn. Iterate.',
    color: '#fb7185',
    glow: 'rgba(251, 113, 133, 0.9)',
    x: 77,
    y: 22,
    labelPos: 'right'
  },
  {
    id: 'meaningful-impact',
    title: 'Meaningful Impact',
    subtitle: 'Better products. Happier users. A little progress forward.',
    color: '#fb923c',
    glow: 'rgba(251, 146, 60, 0.95)',
    x: 72,
    y: 8,
    labelPos: 'left'
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
        // Restrained micro parallax (max 3px)
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

      {/* Ambient Gradient Overlays for Visual Contrast & Vignette */}
      <div className="about-left-vignette" />
      <div className="about-top-glow" />

      {/* Main Content Layout Container */}
      <div className="about-canvas-layout">
        
        {/* Left Column — Editorial Manifesto Typography */}
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

          {/* 12. Handwritten Callout & Arrow */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="handwritten-callout-block"
          >
            <span className="callout-script-line">Same person.</span>
            <span className="callout-script-line">Different lens.</span>
            <span className="callout-script-line">More connected solutions.</span>
            
            <svg className="callout-arrow-svg" width="75" height="42" viewBox="0 0 75 42" fill="none">
              <path d="M 10 10 C 30 32, 55 35, 65 25" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" opacity="0.85" />
              <path d="M 57 20 L 65 25 L 63 33" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
            </svg>
          </motion.div>
        </div>

        {/* Right Column — Landscape Interactive Stage Overlay */}
        <div className="about-landscape-stage-col">
          <div 
            className="about-interactive-stage"
            style={{
              transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`
            }}
          >
            {/* 4 & 5. SVG Energy Stream Overlay */}
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

              {/* Layer 1: Subtle Base Path */}
              <path 
                className="stream-base-path"
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="url(#aboutEnergyGrad)" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                opacity="0.25"
              />

              {/* Layer 2: Soft Atmosphere Glow */}
              <path 
                className="stream-glow-path"
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="url(#aboutEnergyGrad)" 
                strokeWidth="20" 
                strokeLinecap="round"
                opacity="0.16" 
                filter="url(#aboutWideGlow)"
              />

              {/* Layer 3: Upward Moving Luminous Segment (Foreground to Monolith) */}
              <path 
                className="stream-moving-energy"
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="url(#aboutEnergyGrad)" 
                strokeWidth="6" 
                strokeLinecap="round"
                filter="url(#aboutSoftGlow)"
              />
            </svg>

            {/* 13. Monolith Breathing Light Overlay */}
            <div className="monolith-glow-aura" />

            {/* 10. Central Message: "See the system. Shape the outcome." */}
            <div className="central-message-overlay">
              <span className="central-msg-line1">See the system.</span>
              <span className="central-msg-line2">Shape the outcome.</span>
              <svg className="central-msg-underline" width="160" height="12" viewBox="0 0 160 12" fill="none">
                <path d="M 6 6 Q 80 11 154 4" stroke="url(#aboutEnergyGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
              </svg>
            </div>

            {/* 8 & 9. Conceptual Nodes Overlay */}
            <div className="conceptual-nodes-overlay">
              {conceptualNodes.map((node) => (
                <div
                  key={node.id}
                  className={`about-concept-node node-${node.id}`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  {/* Small Glowing Core Dot */}
                  <div 
                    className="about-node-dot"
                    style={{ 
                      backgroundColor: node.color,
                      boxShadow: `0 0 12px ${node.glow}, 0 0 24px ${node.glow}`
                    }}
                  />

                  {/* Thin Connecting Line */}
                  <div className={`about-node-connector conn-${node.labelPos}`} />

                  {/* Editorial Text Annotation */}
                  <div className={`about-node-label about-label-${node.labelPos}`}>
                    <span className="about-node-title">{node.title}</span>
                    <span className="about-node-subtitle">{node.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      <style>{`
        /* 1. Canvas Container & Environment */
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

        /* Left Side Darkness Vignette for High Typography Contrast */
        .about-left-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #05060b 0%, rgba(5, 6, 11, 0.95) 30%, rgba(5, 6, 11, 0.6) 55%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }

        .about-top-glow {
          position: absolute;
          top: 0;
          right: 15%;
          width: 600px;
          height: 350px;
          background: radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, rgba(232, 121, 249, 0.03) 60%, transparent 80%);
          filter: blur(90px);
          z-index: 2;
          pointer-events: none;
        }

        /* Main Canvas Layout Grid */
        .about-canvas-layout {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: minmax(380px, 45%) 1fr;
          gap: 3rem;
          align-items: center;
          width: 100%;
          max-width: 1540px;
          margin: 0 auto;
        }

        /* Left Column — Manifesto */
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
          margin-bottom: 2rem;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        }

        .manifesto-line {
          display: block;
        }

        .manifesto-line.gap-top {
          margin-top: 0.4rem;
        }

        /* 11. Builder Signature Gradient */
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

        /* 12. Handwritten Callout */
        .handwritten-callout-block {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .callout-script-line {
          font-family: var(--font-handwriting);
          font-size: 1.15rem;
          color: #e2e8f0;
          margin: 0;
          line-height: 1.25;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.95);
        }

        .callout-arrow-svg {
          margin-top: 0.4rem;
          margin-left: 1.5rem;
        }

        /* Right Column — Landscape Interactive Stage */
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

        /* 4 & 5. SVG Energy Stream Overlay */
        .about-stream-svg-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 15;
        }

        /* 5 & 6. Moving Luminous Energy Path Animation */
        .stream-moving-energy {
          stroke-dasharray: 40 1060;
          stroke-dashoffset: 0;
          animation: energyFlowUpward 9s linear infinite;
        }

        @keyframes energyFlowUpward {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -1100;
          }
        }

        /* 13. Monolith Light Breathing Glow */
        .monolith-glow-aura {
          position: absolute;
          top: 3.5%;
          left: 71.5%;
          width: 90px;
          height: 110px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, rgba(244, 114, 182, 0.2) 45%, transparent 75%);
          filter: blur(18px);
          pointer-events: none;
          z-index: 12;
          animation: monolithLightBreathe 5s ease-in-out infinite alternate;
        }

        @keyframes monolithLightBreathe {
          0% { opacity: 0.35; transform: scale(0.92); }
          100% { opacity: 0.85; transform: scale(1.12); }
        }

        /* 10. Central Message: "See the system. Shape the outcome." */
        .central-message-overlay {
          position: absolute;
          top: 17.5%;
          left: 60.5%;
          transform: rotate(-3deg);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 22;
          pointer-events: none;
          user-select: none;
        }

        .central-msg-line1 {
          font-family: var(--font-handwriting);
          font-size: clamp(1.5rem, 2vw, 2.2rem);
          color: #e9d5ff;
          line-height: 1.0;
          text-shadow: 0 0 16px rgba(167, 139, 250, 0.75), 0 2px 10px rgba(0, 0, 0, 0.95);
        }

        .central-msg-line2 {
          font-family: var(--font-handwriting);
          font-size: clamp(1.7rem, 2.3vw, 2.5rem);
          color: #f472b6;
          line-height: 1.05;
          margin-top: 0.1rem;
          text-shadow: 0 0 20px rgba(244, 114, 182, 0.8), 0 2px 10px rgba(0, 0, 0, 0.95);
        }

        .central-msg-underline {
          margin-top: -2px;
        }

        /* 8 & 9. Conceptual Nodes System Overlay */
        .conceptual-nodes-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 25;
        }

        .about-concept-node {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          pointer-events: auto;
          cursor: default;
        }

        .about-node-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          animation: nodePulseGlow 3.5s ease-in-out infinite alternate;
        }

        @keyframes nodePulseGlow {
          0% { transform: scale(0.9); opacity: 0.85; }
          100% { transform: scale(1.35); opacity: 1; }
        }

        .about-concept-node:hover .about-node-dot {
          transform: scale(1.7);
        }

        /* Thin Connector Lines */
        .about-node-connector {
          position: absolute;
          background: rgba(255, 255, 255, 0.25);
          pointer-events: none;
        }
        .conn-left { right: 10px; top: 50%; width: 18px; height: 1px; }
        .conn-right { left: 10px; top: 50%; width: 18px; height: 1px; }
        .conn-top-left { right: 10px; bottom: 10px; width: 16px; height: 1px; transform: rotate(-25deg); transform-origin: right center; }

        /* Node Text Labels */
        .about-node-label {
          position: absolute;
          display: flex;
          flex-direction: column;
          width: max-content;
          max-width: 185px;
        }

        .about-label-left { right: 32px; top: -14px; align-items: flex-end; text-align: right; }
        .about-label-right { left: 32px; top: -14px; align-items: flex-start; text-align: left; }
        .about-label-top-left { right: 28px; bottom: 14px; align-items: flex-end; text-align: right; }

        .about-node-title {
          font-family: var(--font-handwriting) !important;
          font-size: 1.35rem !important;
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

        /* 17. Responsive Behavior */
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
          .central-msg-line1 { font-size: 1.3rem; }
          .central-msg-line2 { font-size: 1.5rem; }
          .about-node-title { font-size: 1.1rem !important; }
          .about-node-subtitle { font-size: 0.65rem !important; }
        }

        /* 15. Prefers Reduced Motion Compliance */
        @media (prefers-reduced-motion: reduce) {
          .stream-moving-energy,
          .monolith-glow-aura,
          .about-node-dot {
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
