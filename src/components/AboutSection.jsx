import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import aboutBgAvif from '../assets/about-background.avif';
import aboutBgWebp from '../assets/about-background.webp';
import aboutBgPng from '../assets/about-background.png';

// 6 Glass-Panel Conceptual Nodes mapped to proportional 1736 x 906 SVG ViewBox coordinates
const conceptualNodes = [
  {
    id: 'context',
    title: 'Context',
    subtitle: 'Different angles. Deeper understanding.',
    color: '#c084fc',
    glow: 'rgba(192, 132, 252, 0.85)',
    dotX: 1260,
    dotY: 175,
    foX: 1140,
    foY: 45,
    foWidth: 240,
    foHeight: 80,
    align: 'center',
    leaderD: 'M 1260 115 L 1260 170'
  },
  {
    id: 'meaningful-impact',
    title: 'Meaningful Impact',
    subtitle: 'Better products. Happier users. A little progress forward.',
    color: '#fb923c',
    glow: 'rgba(251, 146, 60, 0.95)',
    dotX: 1275,
    dotY: 70,
    foX: 1410,
    foY: 45,
    foWidth: 250,
    foHeight: 85,
    align: 'left',
    leaderD: 'M 1410 75 L 1285 70'
  },
  {
    id: 'real-problems',
    title: 'Real Problems',
    subtitle: 'Messy, ambiguous, human problems.',
    color: '#818cf8',
    glow: 'rgba(129, 140, 248, 0.85)',
    dotX: 1205,
    dotY: 338,
    foX: 760,
    foY: 260,
    foWidth: 240,
    foHeight: 85,
    align: 'right',
    leaderD: 'M 1000 295 L 1195 335'
  },
  {
    id: 'connections',
    title: 'Connections',
    subtitle: 'Ideas, people, systems, patterns.',
    color: '#e879f9',
    glow: 'rgba(232, 121, 249, 0.85)',
    dotX: 1370,
    dotY: 446,
    foX: 1470,
    foY: 415,
    foWidth: 240,
    foHeight: 85,
    align: 'left',
    leaderD: 'M 1470 445 L 1380 446'
  },
  {
    id: 'experiments',
    title: 'Experiments',
    subtitle: 'Build. Break. Learn. Iterate.',
    color: '#fb7185',
    glow: 'rgba(251, 113, 133, 0.85)',
    dotX: 1245,
    dotY: 585,
    foX: 780,
    foY: 650,
    foWidth: 240,
    foHeight: 85,
    align: 'right',
    leaderD: 'M 1020 675 L 1235 590'
  },
  {
    id: 'curiosity',
    title: 'Curiosity',
    subtitle: 'A small question starts somewhere.',
    color: '#a78bfa',
    glow: 'rgba(167, 139, 250, 0.85)',
    dotX: 1510,
    dotY: 840,
    foX: 1460,
    foY: 720,
    foWidth: 240,
    foHeight: 85,
    align: 'left',
    leaderD: 'M 1510 775 L 1510 830'
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
        // Restrained 2px parallax for foreground annotations layer
        setParallaxOffset({
          x: Math.max(-1, Math.min(1, offsetX)) * 2,
          y: Math.max(-1, Math.min(1, offsetY)) * 2
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

      {/* Dark Vignette Overlay for High Manifesto Contrast */}
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

        {/* Right Column — Landscape Stage Overlay System */}
        <div className="about-landscape-stage-col">
          <div 
            className="about-interactive-stage"
            style={{
              transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`
            }}
          >
            {/* SVG Master ViewBox (1736 x 906) — Responsive Coordinate System */}
            <svg 
              className="about-master-svg-stage" 
              viewBox="0 0 1736 906" 
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="riverAtmosphere" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="22"/>
                </filter>
                <filter id="riverGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="7" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="particleGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="3"/>
                </filter>

                <linearGradient id="riverGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#a78bfa"/>
                  <stop offset="30%" stopColor="#c084fc"/>
                  <stop offset="60%" stopColor="#e879f9"/>
                  <stop offset="85%" stopColor="#fb7185"/>
                  <stop offset="100%" stopColor="#fb923c"/>
                </linearGradient>

                <linearGradient id="riverHighlightGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ffffff"/>
                  <stop offset="50%" stopColor="#e879f9"/>
                  <stop offset="100%" stopColor="#fb923c"/>
                </linearGradient>
              </defs>

              {/* ============================================================ */}
              {/* LIVING RIVER OF LIGHT — MULTI-LAYER UPWARD LIQUID FLOW      */}
              {/* ============================================================ */}

              {/* River Layer 1: Base Translucent Bed (Entire river length visible) */}
              <path 
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="url(#riverGrad)" 
                strokeWidth="12" 
                strokeLinecap="round"
                opacity="0.32"
              />

              {/* River Layer 2: Atmospheric Soft Bloom */}
              <path 
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="url(#riverGrad)" 
                strokeWidth="36" 
                strokeLinecap="round"
                opacity="0.18" 
                filter="url(#riverAtmosphere)"
              />

              {/* River Layer 3: Main Luminous Inner Current */}
              <path 
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="url(#riverGrad)" 
                strokeWidth="16" 
                strokeLinecap="round"
                opacity="0.45" 
                filter="url(#riverGlow)"
              />

              {/* River Layer 4: Primary Upward Flowing Waves (9s duration) */}
              <path 
                className="river-current-primary"
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="url(#riverGrad)" 
                strokeWidth="7" 
                strokeLinecap="round"
                filter="url(#riverGlow)"
              />

              {/* River Layer 5: Secondary Faster Liquid Highlights (6.5s duration) */}
              <path 
                className="river-current-secondary"
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="url(#riverHighlightGrad)" 
                strokeWidth="4" 
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* River Layer 6: Fast Inner Shimmer Ripples (4.5s duration) */}
              <path 
                className="river-current-fast"
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="#ffffff" 
                strokeWidth="2" 
                strokeLinecap="round"
                opacity="0.9"
                filter="url(#riverGlow)"
              />

              {/* River Layer 7: Upward Floating Energy Sparks (11s duration) */}
              <path 
                className="river-sparks"
                d="M 1510 865 C 1475 820, 1390 785, 1320 745 C 1235 697, 1200 638, 1245 585 C 1295 526, 1380 500, 1370 446 C 1358 391, 1250 368, 1210 338 C 1170 308, 1195 275, 1245 249 C 1290 226, 1280 192, 1265 151 C 1252 117, 1260 84, 1270 50"
                stroke="#ffedd5" 
                strokeWidth="3.5" 
                strokeLinecap="round"
                opacity="0.95"
                filter="url(#particleGlow)"
              />

              {/* ============================================================ */}
              {/* LEADER LINES CONNECTING GLASS PANELS TO EDITORIAL LABELS      */}
              {/* ============================================================ */}
              {conceptualNodes.map((node) => (
                <path
                  key={`leader-${node.id}`}
                  d={node.leaderD}
                  stroke="rgba(255, 255, 255, 0.28)"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                  strokeLinecap="round"
                />
              ))}

              {/* ============================================================ */}
              {/* GLASS PANEL DOTS & ANCHOR HALOS                               */}
              {/* ============================================================ */}
              {conceptualNodes.map((node) => (
                <g key={`anchor-${node.id}`} transform={`translate(${node.dotX}, ${node.dotY})`}>
                  <circle r="14" fill={node.glow} opacity="0.25" filter="url(#riverGlow)" />
                  <circle className="node-dot-pulse" r="5" fill={node.color} />
                  <circle r="2" fill="#ffffff" />
                </g>
              ))}

              {/* ============================================================ */}
              {/* CENTRAL MESSAGE — SCALED IN SVG VIEWBOX SAFE ZONE             */}
              {/* ============================================================ */}
              <foreignObject x="750" y="460" width="330" height="110">
                <div className="central-message-safezone">
                  <span className="central-msg-line1">See the system.</span>
                  <span className="central-msg-line2">Shape the outcome.</span>
                  <svg className="central-msg-underline" width="140" height="10" viewBox="0 0 140 10" fill="none">
                    <path d="M 4 5 Q 70 9 136 3" stroke="url(#riverGrad)" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
                  </svg>
                </div>
              </foreignObject>

              {/* ============================================================ */}
              {/* GLASS PANEL ANNOTATION LABELS — SCALED IN SVG VIEWBOX        */}
              {/* ============================================================ */}
              {conceptualNodes.map((node) => (
                <foreignObject 
                  key={`fo-${node.id}`}
                  x={node.foX} 
                  y={node.foY} 
                  width={node.foWidth} 
                  height={node.foHeight}
                >
                  <div className={`about-node-card align-${node.align}`}>
                    <span className="about-node-title">{node.title}</span>
                    <span className="about-node-subtitle">{node.subtitle}</span>
                  </div>
                </foreignObject>
              ))}

            </svg>

            {/* Monolith Light Breathing Aura */}
            <div className="monolith-glow-aura" />

          </div>
        </div>

      </div>

      <style>{`
        /* Container & Canvas Environment */
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

        /* Canvas Layout Grid */
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
          max-height: 850px;
          transition: transform 0.25s ease-out;
          will-change: transform;
        }

        /* SVG Master Stage */
        .about-master-svg-stage {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 15;
          pointer-events: none;
        }

        /* ============================================================ */
        /* RIVER ANIMATIONS — LIQUID LIGHT FLOWING UPWARD               */
        /* ============================================================ */
        .river-current-primary {
          stroke-dasharray: 320 80;
          stroke-dashoffset: 0;
          animation: riverFlow1 9s linear infinite;
        }

        .river-current-secondary {
          stroke-dasharray: 180 120;
          stroke-dashoffset: 0;
          animation: riverFlow2 6.5s linear infinite;
        }

        .river-current-fast {
          stroke-dasharray: 80 220;
          stroke-dashoffset: 0;
          animation: riverFlow3 4.5s linear infinite;
        }

        .river-sparks {
          stroke-dasharray: 10 350;
          stroke-dashoffset: 0;
          animation: riverFlow4 11s linear infinite;
        }

        @keyframes riverFlow1 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1200; }
        }

        @keyframes riverFlow2 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1200; }
        }

        @keyframes riverFlow3 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1200; }
        }

        @keyframes riverFlow4 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1200; }
        }

        /* Monolith Light Breathing Glow */
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

        /* Node Dot Pulsing */
        .node-dot-pulse {
          animation: dotPulse 3.5s ease-in-out infinite alternate;
        }

        @keyframes dotPulse {
          0% { transform: scale(0.85); opacity: 0.8; }
          100% { transform: scale(1.35); opacity: 1; }
        }

        /* Central Message Styling inside ForeignObject */
        .central-message-safezone {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          transform: rotate(-3deg);
          user-select: none;
          pointer-events: auto;
        }

        .central-msg-line1 {
          font-family: var(--font-handwriting);
          font-size: 1.6rem;
          color: #e9d5ff;
          line-height: 1.0;
          text-shadow: 0 0 16px rgba(167, 139, 250, 0.75), 0 2px 10px rgba(0, 0, 0, 0.95);
        }

        .central-msg-line2 {
          font-family: var(--font-handwriting);
          font-size: 1.85rem;
          color: #f472b6;
          line-height: 1.05;
          margin-top: 0.1rem;
          text-shadow: 0 0 20px rgba(244, 114, 182, 0.8), 0 2px 10px rgba(0, 0, 0, 0.95);
        }

        .central-msg-underline {
          margin-top: -2px;
        }

        /* Glass Panel Annotation Cards inside ForeignObject */
        .about-node-card {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          justify-content: center;
          pointer-events: auto;
        }

        .align-left {
          align-items: flex-start;
          text-align: left;
        }

        .align-right {
          align-items: flex-end;
          text-align: right;
        }

        .align-center {
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
          .central-msg-line1 { font-size: 1.25rem; }
          .central-msg-line2 { font-size: 1.45rem; }
          .about-node-title { font-size: 1.05rem !important; }
          .about-node-subtitle { font-size: 0.65rem !important; }
        }

        /* Prefers Reduced Motion Compliance */
        @media (prefers-reduced-motion: reduce) {
          .river-current-primary,
          .river-current-secondary,
          .river-current-fast,
          .river-sparks,
          .monolith-glow-aura,
          .node-dot-pulse {
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
