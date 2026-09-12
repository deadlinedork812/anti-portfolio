import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBgAvif from '../assets/hero-background-production.avif';
import heroBgWebp from '../assets/hero-background.webp';

export default function HeroSection({ onExploreWork, onViewApproach }) {
  return (
    <div className="hero-section-wrapper" id="home">
      <section className="hero-root">
        {/* ─── FULL-VIEWPORT ATMOSPHERIC BACKGROUND LAYER (Z-INDEX: 0) ─── */}
        <motion.div
          className="hero-bg-canvas"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Full-bleed high-res artwork picture element with WebP fallback */}
          <picture className="hero-bg-picture">
            <source srcSet={heroBgAvif} type="image/avif" />
            <source srcSet={heroBgWebp} type="image/webp" />
            <img
              src={heroBgAvif}
              alt=""
              className="hero-full-bg-img"
              loading="eager"
              decoding="async"
            />
          </picture>

          {/* Ultra-soft horizontal gradient mask blending off-white into artwork */}
          <div className="hero-bg-gradient-mask" />
        </motion.div>

        {/* ─── HERO CONTENT LAYER (Z-INDEX: 10) ─── */}
        <div className="hero-content-layer">
          {/* Left Column Content (38% max layout) */}
          <div className="hero-left hero-content">
            {/* Top tag */}
            <div className="hero-section-tag">
              <span className="tag-num">// 01</span>
            </div>

            <motion.div
              className="hero-hello"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              HELLO, I'M SATVIK
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="hero-headline"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              I build<br />
              software that<br />
              <em className="survives-italic">survives</em>{' '}
              reality.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="hero-subtext"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              I work across engineering, quality, and systems —<br />
              turning complex ideas into reliable, human-centric<br />
              products that create real impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-cta-row"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <button className="cta-primary" onClick={onExploreWork}>
                Explore my work <ArrowRight size={14} />
              </button>
              <button className="cta-secondary" onClick={onViewApproach}>
                Learn more about me
              </button>
            </motion.div>

            {/* Currently Exploring */}
            <motion.div
              className="currently-exploring"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="ce-header">
                <span className="ce-dot" />
                <span className="ce-label">CURRENTLY EXPLORING</span>
              </div>
              <div className="ce-tags">
                <span className="ce-tag ce-tag-light">Testing at Scale</span>
                <span className="ce-tag ce-tag-coral">Automation</span>
                <span className="ce-tag ce-tag-blue">System Design</span>
                <span className="ce-tag ce-tag-plain">Developer Experience</span>
              </div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              className="hero-stats-bar"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
            >
              <div className="stat-item">
                <span className="stat-num">3+</span>
                <span className="stat-label">Years Experience</span>
                <div className="stat-underline" />
              </div>
              <div className="stat-item">
                <span className="stat-num">15+</span>
                <span className="stat-label">Projects &amp; Contributions</span>
                <div className="stat-underline" />
              </div>
              <div className="stat-item">
                <span className="stat-num">End-to-End</span>
                <span className="stat-label">Product Mindset</span>
                <div className="stat-underline" />
              </div>
              <div className="stat-item">
                <span className="stat-num stat-num-bold">Always</span>
                <span className="stat-label stat-label-bold">Learning</span>
                <div className="stat-underline" />
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          /* ===== HERO ROOT & SECTION WRAPPER ===== */
          .hero-section-wrapper {
            position: relative;
            z-index: 1;
            width: 100%;
            overflow-x: hidden;
          }

          .hero-root {
            min-height: 100vh;
            width: 100%;
            background: #f5f4ee;
            position: relative;
            overflow: hidden;
          }

          /* ===== DEDICATED FULL-VIEWPORT ATMOSPHERIC BACKGROUND LAYER ===== */
          .hero-bg-canvas {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
            overflow: hidden;
          }

          .hero-bg-picture {
            display: block;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }

          .hero-full-bg-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center right;
            pointer-events: none;
            user-select: none;
          }

          /* Extremely soft wide gradient mask blending off-white into cosmic artwork */
          .hero-bg-gradient-mask {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: linear-gradient(
              to right,
              #f5f4ee 0%,
              #f5f4ee 34%,
              rgba(245, 244, 238, 0.96) 44%,
              rgba(245, 244, 238, 0.55) 56%,
              rgba(245, 244, 238, 0.15) 68%,
              transparent 78%
            );
          }

          /* ===== HERO CONTENT LAYER (HTML Text & Interactive Overlay) ===== */
          .hero-content-layer {
            position: relative;
            z-index: 10;
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
          }

          /* ===== LEFT CONTENT COLUMN (38% Width Layout) ===== */
          .hero-left.hero-content {
            width: 40%;
            max-width: 580px;
            min-width: 360px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 4.5rem 2.2rem 2.2rem 2.8rem;
            position: relative;
            z-index: 20;
            min-height: 100vh;
            box-sizing: border-box;
            background: transparent;
          }

          .hero-section-tag {
            font-family: var(--font-mono);
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            color: #4338ca;
            margin-bottom: 0.4rem;
          }

          .hero-hello {
            font-family: var(--font-mono);
            font-size: 0.68rem;
            font-weight: 600;
            letter-spacing: 0.15em;
            color: #6b7280;
            margin-bottom: 0.4rem;
          }

          .hero-headline {
            font-family: var(--font-serif), 'Playfair Display', Georgia, serif;
            font-size: clamp(2.4rem, 3.6vw, 4.1rem);
            font-weight: 700;
            line-height: 1.06;
            letter-spacing: -0.025em;
            color: #0f0f0f;
            margin-bottom: 1.4rem;
          }

          .survives-italic {
            font-family: var(--font-serif), 'Playfair Display', Georgia, serif;
            font-style: italic;
            font-weight: 700;
            background: linear-gradient(90deg, #6366f1 0%, #a855f7 35%, #ec4899 70%, #f97316 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .hero-subtext {
            font-family: var(--font-sans);
            font-size: 0.92rem;
            color: #4b5563;
            line-height: 1.55;
            margin-bottom: 1.6rem;
            max-width: 420px;
          }

          .hero-cta-row {
            display: flex;
            align-items: center;
            gap: 0.85rem;
            margin-bottom: 1.8rem;
            flex-wrap: wrap;
          }

          .cta-primary {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #0f0f0f;
            color: #ffffff;
            font-family: var(--font-sans);
            font-size: 0.85rem;
            font-weight: 700;
            padding: 0.7rem 1.4rem;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .cta-primary:hover {
            background: #1f2937;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          }

          .cta-secondary {
            display: inline-flex;
            align-items: center;
            background: transparent;
            color: #111827;
            font-family: var(--font-sans);
            font-size: 0.85rem;
            font-weight: 600;
            padding: 0.7rem 1.3rem;
            border-radius: 8px;
            border: 1.5px solid rgba(0,0,0,0.2);
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .cta-secondary:hover {
            border-color: rgba(0,0,0,0.5);
            background: rgba(0,0,0,0.04);
          }

          .currently-exploring {
            margin-bottom: 1.8rem;
          }

          .ce-header {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            margin-bottom: 0.5rem;
          }

          .ce-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #f97316;
            flex-shrink: 0;
          }

          .ce-label {
            font-family: var(--font-mono);
            font-size: 0.6rem;
            font-weight: 700;
            letter-spacing: 0.18em;
            color: #6b7280;
          }

          .ce-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
          }

          .ce-tag {
            padding: 0.28rem 0.75rem;
            border-radius: 20px;
            font-family: var(--font-sans);
            font-size: 0.72rem;
            font-weight: 600;
            border: 1.5px solid;
            cursor: default;
          }

          .ce-tag-light  { border-color: rgba(0,0,0,0.15); color: #374151; background: transparent; }
          .ce-tag-coral  { border-color: #f97316; color: #ea580c; background: rgba(249,115,22,0.06); }
          .ce-tag-blue   { border-color: #a5b4fc; color: #4338ca; background: rgba(165,180,252,0.08); }
          .ce-tag-plain  { border-color: rgba(0,0,0,0.12); color: #6b7280; background: transparent; }

          .hero-stats-bar {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0;
            padding-top: 1.1rem;
            border-top: 1px solid rgba(0,0,0,0.1);
          }

          .stat-item {
            display: flex;
            flex-direction: column;
            gap: 0.1rem;
            padding-right: 0.5rem;
          }

          .stat-item:not(:last-child) {
            border-right: 1px solid rgba(0,0,0,0.1);
            margin-right: 0.5rem;
          }

          .stat-num {
            font-family: var(--font-serif), 'Playfair Display', Georgia, serif;
            font-size: 1.15rem;
            font-weight: 700;
            color: #111827;
            line-height: 1.1;
          }

          .stat-num-bold { font-weight: 800; }

          .stat-label {
            font-family: var(--font-sans);
            font-size: 0.65rem;
            color: #6b7280;
            line-height: 1.25;
          }

          .stat-label-bold { font-weight: 700; color: #374151; }

          .stat-underline {
            width: 18px;
            height: 2px;
            background: #0f0f0f;
            border-radius: 2px;
            margin-top: 0.35rem;
          }

          .rp-annotation-tr {
            position: absolute;
            top: 3.5%;
            right: 3.5%;
            display: flex;
            flex-direction: column;
            gap: 2px;
            text-align: right;
            z-index: 20;
            pointer-events: none;
          }

          .rp-comment-slash {
            font-family: var(--font-mono);
            font-size: 0.65rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            color: rgba(255,255,255,0.45);
          }

          /* ===== RESPONSIVE BREAKPOINTS ===== */
          @media (max-width: 1280px) {
            .hero-left.hero-content {
              width: 44%;
              padding: 4rem 1.8rem 1.8rem 2.2rem;
            }
            .hero-bg-gradient-mask {
              background: linear-gradient(
                to right,
                #f5f4ee 0%,
                #f5f4ee 26%,
                rgba(245, 244, 238, 0.9) 38%,
                rgba(245, 244, 238, 0.5) 50%,
                transparent 75%
              );
            }
          }

          @media (max-width: 1024px) {
            .hero-left.hero-content {
              width: 50%;
              padding: 3.5rem 1.5rem 1.5rem 1.5rem;
            }
            .hero-bg-gradient-mask {
              background: linear-gradient(
                to right,
                #f5f4ee 0%,
                #f5f4ee 30%,
                rgba(245, 244, 238, 0.92) 44%,
                rgba(245, 244, 238, 0.6) 58%,
                transparent 82%
              );
            }
          }

          @media (max-width: 768px) {
            .hero-content-layer {
              flex-direction: column;
              min-height: auto;
            }
            .hero-left.hero-content {
              width: 100%;
              max-width: 100%;
              min-height: auto;
              padding: 4rem 1.5rem 2.5rem 1.5rem;
            }
            .hero-headline {
              font-size: 2.4rem;
            }
            .rp-annotation-tr { display: none; }
            .hero-full-bg-img {
              object-position: 80% center;
              opacity: 0.65;
            }
            .hero-bg-gradient-mask {
              background: linear-gradient(
                to bottom,
                #f5f4ee 0%,
                #f5f4ee 45%,
                rgba(245, 244, 238, 0.8) 65%,
                transparent 100%
              );
            }
          }

          @media (max-width: 480px) {
            .hero-headline { font-size: 2rem; }
            .hero-cta-row { flex-direction: column; }
            .cta-primary, .cta-secondary { width: 100%; justify-content: center; }
            .hero-stats-bar { grid-template-columns: 1fr 1fr; }
          }
        `}</style>
      </section>
    </div>
  );
}
