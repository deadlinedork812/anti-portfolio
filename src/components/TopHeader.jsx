import React from 'react';

export default function TopHeader() {
  return (
    <header className="top-header">
      <div className="header-tabs">
        <span>IDEAS</span>
        <span className="dot">•</span>
        <span>ENGINEERING</span>
        <span className="dot">•</span>
        <span>DESIGN</span>
        <span className="dot">•</span>
        <span>QUALITY</span>
        <span className="dot">•</span>
        <span>REAL IMPACT</span>
      </div>

      <div className="header-slogan">
        // TURNING COMPLEXITY INTO CLARITY.
      </div>

      <style>{`
        .header-slogan {
          display: none;
        }
        .top-header {
          position: fixed;
          top: 0;
          left: var(--sidebar-width);
          right: 0;
          height: var(--header-height);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2.5rem;
          z-index: 999;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #6b7280;
          pointer-events: none;
        }

        .header-tabs {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          pointer-events: auto;
        }

        .dot {
          color: #6366f1;
          font-size: 0.45rem;
        }

        .header-slogan {
          color: rgba(255,255,255,0.55);
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          pointer-events: auto;
        }

        @media (max-width: 1024px) {
          .top-header {
            left: 0;
            padding: 0 1rem;
          }
          .header-slogan { display: none; }
          .header-tabs span:not(.dot):nth-child(n+5) { display: none; }
        }
      `}</style>
    </header>
  );
}
