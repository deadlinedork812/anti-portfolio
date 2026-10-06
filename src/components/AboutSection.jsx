import React from 'react';
import { motion } from 'framer-motion';
import aboutBgFinalAvif from '../assets/about-background-final.avif';
import aboutBgFinalWebp from '../assets/about-background-final.webp';
import aboutBgFinalPng from '../assets/about-background-final.png';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="portfolio-section section-dark about-canvas-container"
    >
      {/* 1. Complete Finished Artwork with AVIF -> WebP -> PNG Fallback */}
      <picture className="about-bg-picture">
        <source srcSet={aboutBgFinalAvif} type="image/avif" />
        <source srcSet={aboutBgFinalWebp} type="image/webp" />
        <img 
          src={aboutBgFinalPng} 
          alt="Cinematic Conceptual Landscape Artwork" 
          className="about-bg-img"
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* Dark Vignette Overlay for High Manifesto Contrast on Left Side */}
      <div className="about-left-vignette" />

      {/* Main Layout Grid */}
      <div className="about-canvas-layout">
        
        {/* Left Column — Manifesto HTML Interface */}
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

          {/* About Philosophy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="about-philosophy-grid"
          >
            <div className="philosophy-item">
              <div className="philosophy-label-row">
                <span className="philosophy-bullet" style={{ background: '#a78bfa' }} />
                <h3 className="philosophy-title">Build</h3>
              </div>
              <p className="philosophy-text">
                I enjoy turning ideas into working software and thinking through how systems should behave in the real world.
              </p>
            </div>

            <div className="philosophy-item">
              <div className="philosophy-label-row">
                <span className="philosophy-bullet" style={{ background: '#38bdf8' }} />
                <h3 className="philosophy-title">Test</h3>
              </div>
              <p className="philosophy-text">
                I approach quality as more than finding bugs. I think about workflows, edge cases, usability, reliability, and how people actually use a product.
              </p>
            </div>

            <div className="philosophy-item">
              <div className="philosophy-label-row">
                <span className="philosophy-bullet" style={{ background: '#f472b6' }} />
                <h3 className="philosophy-title">Design</h3>
              </div>
              <p className="philosophy-text">
                I care about how products communicate, how interfaces feel, and how technical decisions translate into user experiences.
              </p>
            </div>

            <div className="philosophy-item">
              <div className="philosophy-label-row">
                <span className="philosophy-bullet" style={{ background: '#fb923c' }} />
                <h3 className="philosophy-title">Connect</h3>
              </div>
              <p className="philosophy-text">
                My strongest interest sits between disciplines — understanding the product, building it, testing it, and continuously improving it.
              </p>
            </div>
          </motion.div>

          {/* Handwritten Annotation Callout */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="handwritten-callout-block"
          >
            <span className="callout-script-line">Same curiosity.</span>
            <span className="callout-script-line">Different lenses.</span>
            <span className="callout-script-line">More connected solutions.</span>
            
            <svg className="callout-arrow-svg" width="70" height="36" viewBox="0 0 70 36" fill="none">
              <path d="M 8 8 C 26 28, 48 30, 60 22" stroke="#cbd5e1" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 3" opacity="0.8" />
              <path d="M 53 17 L 60 22 L 58 29" stroke="#cbd5e1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            </svg>
          </motion.div>
        </div>

        {/* Right Column Spacer for Unobstructed Artwork View */}
        <div className="about-artwork-stage-col" />

      </div>

      <style>{`
        /* Container & Canvas Environment */
        .about-canvas-container {
          position: relative;
          min-height: 100svh;
          height: 100dvh;
          max-height: 100dvh;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          background-color: #05060b;
          color: #f8fafc;
          display: flex;
          align-items: center;
          padding: clamp(1.2rem, 3.2vh, 2.8rem) clamp(1.8rem, 3.5vw, 4rem);
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
          background: linear-gradient(90deg, #05060b 0%, rgba(5, 6, 11, 0.95) 32%, rgba(5, 6, 11, 0.5) 55%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* Canvas Layout Grid */
        .about-canvas-layout {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: minmax(360px, 48%) 1fr;
          gap: clamp(1.5rem, 3vw, 3rem);
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
          font-size: clamp(1.6rem, 2.2vh + 1.4vw, 3.2rem);
          font-weight: 900;
          line-height: 0.96;
          letter-spacing: -0.04em;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          margin-bottom: clamp(0.5rem, 1.4vh, 1.1rem);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.85);
        }

        .manifesto-line {
          display: block;
        }

        .manifesto-line.gap-top {
          margin-top: clamp(0.12rem, 0.3vh, 0.28rem);
        }

        .builder-highlight {
          background: linear-gradient(90deg, #a78bfa 0%, #c084fc 35%, #f472b6 70%, #fb923c 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .manifesto-subcopy {
          font-family: var(--font-sans);
          font-size: clamp(0.78rem, 1.1vh, 0.94rem);
          color: #cbd5e1;
          line-height: 1.45;
          max-width: 500px;
          font-weight: 400;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
        }

        /* About Philosophy Grid */
        .about-philosophy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(0.4rem, 0.85vh, 0.75rem);
          margin-top: clamp(0.6rem, 1.4vh, 1.2rem);
          max-width: 540px;
        }

        .philosophy-item {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: clamp(0.45rem, 0.85vh, 0.75rem) clamp(0.6rem, 1vw, 0.9rem);
          border-radius: 10px;
          backdrop-filter: blur(8px);
        }

        .philosophy-label-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 0.2rem;
        }

        .philosophy-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .philosophy-title {
          font-family: var(--font-display);
          font-size: clamp(0.8rem, 1.1vh, 0.92rem);
          font-weight: 800;
          color: #f8fafc;
          letter-spacing: -0.01em;
        }

        .philosophy-text {
          font-family: var(--font-sans);
          font-size: clamp(0.66rem, 0.9vh, 0.74rem);
          color: #94a3b8;
          line-height: 1.35;
        }

        .handwritten-callout-block {
          margin-top: clamp(0.5rem, 1.2vh, 1.1rem);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .callout-script-line {
          font-family: var(--font-handwriting);
          font-size: clamp(0.88rem, 1.2vh, 1.05rem);
          color: #e2e8f0;
          margin: 0;
          line-height: 1.2;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.95);
        }

        .callout-arrow-svg {
          margin-top: 0.2rem;
          margin-left: 1.2rem;
          width: 50px;
          height: 26px;
        }

        .about-artwork-stage-col {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 300px;
        }

        /* Responsive Layout Behavior */
        @media (max-width: 1024px) {
          .about-canvas-layout {
            grid-template-columns: minmax(320px, 52%) 1fr;
            gap: 1.5rem;
          }
          .about-canvas-container {
            padding: clamp(1rem, 2.5vh, 2rem) 1.5rem;
          }
          .about-artwork-stage-col {
            min-height: 200px;
          }
        }

        @media (max-width: 640px) {
          .about-canvas-container {
            padding: 1.5rem 1.25rem;
            align-items: flex-start;
            overflow-y: auto;
          }
          .about-canvas-layout {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .about-artwork-stage-col {
            display: none;
          }
          .manifesto-headline {
            font-size: clamp(1.8rem, 6.5vw, 2.6rem);
          }
          .manifesto-subcopy {
            font-size: 0.85rem;
          }
          .about-philosophy-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
