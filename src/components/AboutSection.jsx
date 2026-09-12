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

        {/* Right Column Spacer for Unobstructed Artwork View */}
        <div className="about-artwork-stage-col" />

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
          background: linear-gradient(90deg, #05060b 0%, rgba(5, 6, 11, 0.95) 32%, rgba(5, 6, 11, 0.5) 55%, transparent 100%);
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
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.85);
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

        .about-artwork-stage-col {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 500px;
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
          .manifesto-subcopy {
            max-width: 100%;
          }
          .about-artwork-stage-col {
            min-height: 400px;
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
        }
      `}</style>
    </section>
  );
}
