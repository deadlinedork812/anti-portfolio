import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onExploreWork, onViewApproach }) {
  return (
    <div className="hero-section-wrapper">
      <section id="home" className="hero-section">
        {/* Background abstract graphic */}
        <div className="hero-bg-layer">
          <img src="/hero-abstract-bg.jpg" alt="Background visual" className="bg-abstract-img" />
        </div>

        <div className="hero-grid">
          {/* Left Content Column */}
          <div className="hero-left">
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-top-label"
            >
              <span className="label-eng">ENGINEERING</span>
              <span className="label-exp">BETTER DIGITAL EXPERIENCES</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="headline-wrapper"
            >
              {/* Handwriting annotation */}
              <div className="handwriting-stack">
                <span className="handwriting">Better</span>
                <span className="handwriting" style={{ marginLeft: 15 }}>Products</span>
                <span className="handwriting" style={{ marginLeft: 30 }}>Happier</span>
                <span className="handwriting" style={{ marginLeft: 45 }}>Users</span>

                <svg className="curved-arrow-custom" width="50" height="40" viewBox="0 0 50 40" fill="none">
                  <path d="M5 5 C 20 5, 30 15, 35 25" stroke="#4a5568" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                  <path d="M30 25 L 35 25 L 33 20" stroke="#4a5568" strokeWidth="1.5" fill="none" />
                </svg>
              </div>

              <h1 className="hero-title serif-title">
                <span className="title-line">I build</span><br />
                <span className="title-line">
                  digital <span className="gradient-text gradient-products">products</span>
                </span><br />
                <span className="title-line relative-line">
                  that work.
                  {/* Red/Orange brush underline behind text */}
                  <svg className="red-brush-underline" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M2,7 Q100,11 198,4" stroke="#f97316" strokeWidth="4" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="hero-subtext"
            >
              Bridging design, development, architecture<br />
              and quality to turn ideas into reliable,<br />
              user-friendly, and impactful products.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hero-cta-group"
            >
              <button className="btn-solid-dark" onClick={onExploreWork}>
                <ArrowRight size={14} className="arrow-icon-btn" />
                <span>Explore my work</span>
              </button>
              <button className="btn-outline-light" onClick={onViewApproach}>
                <span>View my approach</span>
              </button>
            </motion.div>

            {/* Currently Exploring Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="currently-exploring"
            >
              <div className="exploring-header">
                <span className="orange-dot" />
                <span className="exploring-text">CURRENTLY EXPLORING</span>
              </div>
              <div className="exploring-pills">
                <span className="pill green-pill">AI in QA</span>
                <span className="pill purple-pill">Product Systems</span>
                <span className="pill orange-pill">Automation Tools</span>
                <span className="pill blue-pill">Design Systems</span>
                <button className="pill-add">+</button>
              </div>
            </motion.div>
          </div>

          {/* Right Dashboard Area */}
          <div className="hero-right">

            {/* Ambient Glow behind Dashboard */}
            <div className="dash-ambient-glow" />

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="angled-dashboard-container hero-dashboard"
            >
              <div className="dash-mockup-wrapper">
                <img
                  src="/dashboard-mockup.png"
                  alt="NOVA Analytics Dashboard"
                  className="dash-mockup-img"
                />
              </div>

              {/* Non-overlapping Floating Code Card at bottom right */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="floating-code-card"
              >
                <pre>
                  <span className="code-kw">const</span> <span className="code-var">betterProducts</span> = {'{'}
                  <br />  ideas: <span className="code-bool">true</span>,
                  <br />  design: <span className="code-bool">true</span>,
                  <br />  architecture: <span className="code-bool">true</span>,
                  <br />  development: <span className="code-bool">true</span>,
                  <br />  testing: <span className="code-bool">true</span>,
                  <br />  users: <span className="code-str">"happier"</span>
                  <br />{'}'}
                </pre>
              </motion.div>

              {/* Non-overlapping Sticky Note at bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="sticky-note-real"
              >
                <div className="tape"></div>
                <ul className="checklist">
                  <li><span className="checkbox"></span> Solve real problems</li>
                  <li><span className="checkbox"></span> Build with intent</li>
                  <li><span className="checkbox"></span> Test beyond the happy path</li>
                  <li><span className="checkbox"></span> Keep learning</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Right handwritten tag */}
            <div className="right-handwritten-tag">
              <span className="handwriting-light">From<br />idea<br />to<br />impact.</span>
              <svg className="down-arrow-hw" width="30" height="40" viewBox="0 0 30 40">
                <path d="M10,0 Q15,20 0,35" stroke="#f8fafc" strokeWidth="1.5" fill="none" />
                <path d="M0,35 L 5,30 M 0,35 L 8,38" stroke="#f8fafc" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        <style>{`
        /* Sticky section logic for large viewports (> 1180px) */
        @media (min-width: 1181px) {
          .hero-section-wrapper {
            position: sticky;
            top: 0;
            height: 100vh;
            width: 100%;
            z-index: 1;
          }

          .hero-grid {
            grid-template-columns: 1fr 1.05fr;
            gap: 2rem;
          }

          .hero-dashboard {
            max-width: 580px;
            transform:
              perspective(1400px)
              rotateX(2deg)
              rotateY(-6deg)
              rotateZ(-3.5deg);
          }

          .sticky-note-real {
            position: absolute;
            top: -35px;
            left: -25px;
            width: 175px;
            background: #fef08a;
            padding: 0.85rem;
            box-shadow: 10px 20px 35px rgba(0,0,0,0.35);
            transform: rotate(-5deg);
            border-radius: 2px;
            z-index: 25;
          }

          .floating-code-card {
            position: absolute;
            bottom: -35px;
            right: -25px;
            width: 210px;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(16px);
            padding: 0.85rem 1.1rem;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.15);
            box-shadow: -10px 20px 40px rgba(0,0,0,0.6);
            transform: rotate(2deg);
            z-index: 25;
          }
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 2.5rem 3.5rem;
          background: #fbfaf8;
          overflow: visible;
        }

        /* Background Layer */
        .hero-bg-layer {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .bg-abstract-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center right;
        }

        .hero-grid {
          position: relative;
          z-index: 10;
          display: grid;
          width: 100%;
          max-width: 1700px;
          margin: 0 auto;
          align-items: center;
        }

        /* Left Column Text */
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 1rem;
          z-index: 2;
        }

        .hero-top-label {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .label-eng {
          font-family: var(--font-mono);
          font-size: clamp(0.65rem, 0.8vw, 0.85rem);
          letter-spacing: 0.15em;
          color: #64748b;
        }

        .label-exp {
          font-family: var(--font-sans);
          font-size: clamp(0.75rem, 0.9vw, 1rem);
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #475569;
        }

        .headline-wrapper {
          position: relative;
          margin-bottom: 2rem;
          width: max-content;
        }

        .handwriting-stack {
          position: absolute;
          top: -40px;
          right: -20px;
          display: flex;
          flex-direction: column;
          gap: 0px;
          transform: rotate(-12deg);
        }

        .handwriting-stack span {
          color: #475569;
          font-size: clamp(1.6rem, 2.2vw, 2.5rem);
          line-height: 0.85;
        }

        .curved-arrow-custom {
          position: absolute;
          bottom: -15px;
          right: -40px;
          transform: scale(1.2);
        }

        .serif-title {
          font-family: var(--font-serif);
          font-size: clamp(4rem, 5.8vw, 7rem);
          line-height: 0.95;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #0f172a;
        }

        .gradient-products {
          background: linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #f97316 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .relative-line {
          position: relative;
          display: inline-block;
          z-index: 1;
        }

        .red-brush-underline {
          position: absolute;
          bottom: clamp(4px, 0.8vw, 8px);
          left: 0;
          width: 105%;
          height: clamp(12px, 1.8vw, 18px);
          z-index: -1;
          pointer-events: none;
        }

        .hero-subtext {
          font-family: var(--font-mono);
          font-size: clamp(0.85rem, 1.05vw, 1.05rem);
          color: #475569;
          line-height: 1.75;
          margin-bottom: 2.8rem;
          max-width: 560px;
        }

        /* Buttons */
        .hero-cta-group {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 3rem;
        }

        .btn-solid-dark {
          background: #0f172a;
          color: #ffffff;
          border: none;
          padding: clamp(0.85rem, 1.1vw, 1rem) clamp(1.6rem, 2vw, 2rem);
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: clamp(0.85rem, 0.95vw, 0.95rem);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .btn-solid-dark:hover { transform: translateY(-3px); }

        .btn-outline-light {
          background: transparent;
          color: #0f172a;
          border: 1px solid rgba(0,0,0,0.2);
          padding: clamp(0.85rem, 1.1vw, 1rem) clamp(1.6rem, 2vw, 2rem);
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: clamp(0.85rem, 0.95vw, 0.95rem);
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        
        .btn-outline-light:hover { background: rgba(0,0,0,0.03); }

        .arrow-icon-btn { opacity: 0.7; }

        /* Exploring Tags */
        .currently-exploring {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .exploring-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .orange-dot {
          width: clamp(8px, 1vw, 10px);
          height: clamp(8px, 1vw, 10px);
          background: #f97316;
          border-radius: 50%;
        }

        .exploring-text {
          font-family: var(--font-mono);
          font-size: clamp(0.65rem, 0.8vw, 0.8rem);
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #475569;
        }

        .exploring-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .pill {
          padding: clamp(0.4rem, 0.55vw, 0.55rem) clamp(0.9rem, 1.1vw, 1.1rem);
          border-radius: 6px;
          font-family: var(--font-sans);
          font-size: clamp(0.7rem, 0.8vw, 0.82rem);
          font-weight: 600;
          border: none;
        }

        .green-pill { background: #dcfce7; color: #166534; }
        .purple-pill { background: #f3e8ff; color: #6b21a8; }
        .orange-pill { background: #ffedd5; color: #c2410c; }
        .blue-pill { background: #e0f2fe; color: #0369a1; }
        .pill-add {
          background: transparent; border: 1px solid #cbd5e1; color: #64748b;
          border-radius: 6px; padding: 0 clamp(0.8rem, 1vw, 1rem); cursor: pointer;
        }

        /* Dashboard Right Area & 3D Composition */
        .hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1400px;
          padding: 3rem 2.5rem 3.5rem 2.5rem;
        }

        /* Soft Ambient Glow behind dashboard */
        .dash-ambient-glow {
          position: absolute;
          top: 5%;
          right: 5%;
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.22) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 80%);
          filter: blur(50px);
          pointer-events: none;
          z-index: 1;
        }

        .hero-dashboard {
          position: relative;
          width: 100%;
          transform-origin: center center;
          filter:
            drop-shadow(0 25px 45px rgba(0, 0, 0, 0.3))
            drop-shadow(0 10px 20px rgba(60, 40, 120, 0.15));
          z-index: 10;
        }

        .dash-mockup-wrapper {
          border-radius: 16px;
          overflow: hidden;
          background: #090a10;
          display: flex;
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 
            0 25px 50px -10px rgba(0,0,0,0.5),
            0 10px 25px rgba(79, 70, 229, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.2);
        }

        .dash-mockup-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: 16px;
        }

        .floating-code-card pre {
          font-family: var(--font-mono);
          font-size: clamp(0.65rem, 0.78vw, 0.76rem);
          color: #cbd5e1;
          margin: 0;
          line-height: 1.5;
          font-weight: 600;
        }
        .code-kw { color: #c678dd; }
        .code-var { color: #e5c07b; }
        .code-bool { color: #d19a66; }
        .code-str { color: #98c379; }

        .tape {
          position: absolute;
          top: -12px; left: 50%; transform: translateX(-50%) rotate(-2deg);
          width: 45px; height: 16px;
          background: rgba(255,255,255,0.55);
          box-shadow: 0 1px 3px rgba(0,0,0,0.15);
          backdrop-filter: blur(2px);
        }

        .checklist {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 0.45rem;
        }

        .checklist li {
          font-family: var(--font-handwriting);
          font-size: clamp(0.85rem, 1.1vw, 1.05rem);
          color: #1e293b;
          display: flex; align-items: center; gap: 0.45rem;
          font-weight: 700;
        }

        .checkbox {
          display: inline-block; width: 12px; height: 12px;
          border: 1.5px solid #1e293b;
          border-radius: 2px;
        }

        /* Right handwritten tag */
        .right-handwritten-tag {
          position: absolute;
          top: -15px;
          right: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
          z-index: 15;
        }

        .right-handwritten-tag span {
          color: #f8fafc;
          font-size: clamp(1rem, 1.3vw, 1.3rem);
          line-height: 0.9;
        }

        /* Medium screens & Laptops (769px to 1180px) */
        @media (max-width: 1180px) and (min-width: 769px) {
          .hero-section-wrapper {
            position: relative;
            height: auto;
            min-height: auto;
          }

          .hero-section {
            padding: 3.5rem 2rem 3rem 2rem;
            min-height: auto;
          }

          .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }

          .hero-left {
            padding-top: 0;
          }

          .hero-right {
            padding: 2rem 1.5rem;
            perspective: 1000px;
          }

          .hero-dashboard {
            width: 100%;
            max-width: 480px;
            transform:
              perspective(1000px)
              rotateX(1deg)
              rotateY(-4deg)
              rotateZ(-2deg);
          }

          .sticky-note-real {
            position: absolute;
            top: -30px;
            left: -20px;
            width: 155px;
            background: #fef08a;
            padding: 0.75rem;
            box-shadow: 8px 16px 30px rgba(0,0,0,0.3);
            transform: rotate(-4deg);
            z-index: 25;
          }

          .floating-code-card {
            position: absolute;
            bottom: -30px;
            right: -20px;
            width: 185px;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(16px);
            padding: 0.75rem 0.9rem;
            border-radius: 12px;
            box-shadow: -8px 16px 30px rgba(0,0,0,0.5);
            transform: rotate(2deg);
            z-index: 25;
          }

          .right-handwritten-tag {
            display: none;
          }
        }

        /* Mobile Viewports (<= 768px) */
        @media (max-width: 768px) {
          .hero-section-wrapper {
            position: relative;
            height: auto;
            min-height: auto;
          }

          .hero-section {
            padding: 4rem 1.25rem 3rem 1.25rem;
            min-height: auto;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .hero-left {
            padding-top: 0;
          }

          .serif-title {
            font-size: clamp(2.8rem, 8vw, 4rem);
          }

          .hero-subtext {
            margin-bottom: 2rem;
          }

          .hero-cta-group {
            margin-bottom: 2.5rem;
            flex-direction: column;
            width: 100%;
          }

          .btn-solid-dark, .btn-outline-light {
            justify-content: center;
            width: 100%;
          }

          .hero-right {
            padding: 0;
            perspective: none;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-dashboard {
            width: 100%;
            max-width: 100%;
            transform: none;
            filter: drop-shadow(0 15px 30px rgba(0,0,0,0.25));
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .sticky-note-real {
            position: relative;
            bottom: auto;
            left: auto;
            margin-top: 1.5rem;
            width: 100%;
            max-width: 320px;
            transform: rotate(-1deg);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          }

          .floating-code-card {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: 1rem;
            width: 100%;
            max-width: 340px;
            transform: none;
            box-shadow: 0 10px 25px rgba(0,0,0,0.35);
          }

          .right-handwritten-tag {
            display: none;
          }

          .handwriting-stack {
            display: none;
          }
        }
      `}</style>
      </section>
    </div>
  );
}
