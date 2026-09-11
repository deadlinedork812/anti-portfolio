import React from 'react';

export default function TopHeader() {
  return (
    <header className="top-header">
      <div className="header-tabs">
        <span>IDEAS</span>
        <span className="dot">•</span>
        <span>DESIGN</span>
        <span className="dot">•</span>
        <span>BUILD</span>
        <span className="dot">•</span>
        <span>TEST</span>
        <span className="dot">•</span>
        <span>SHIP</span>
      </div>

      <div className="header-slogan" style={{ color: '#f8fafc' }}>
        SAME CURIOSITY. DIFFERENT PROBLEMS.
      </div>

      <style>{`
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
          padding: 0 3rem;
          z-index: 999;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #6b7280;
        }

        .header-tabs {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .header-tabs span:not(.dot):hover {
          color: #111827;
          cursor: pointer;
        }

        .dot {
          color: #cbd5e1;
          font-size: 0.5rem;
        }

        .header-slogan {
          color: #9ca3af;
          font-size: 0.6rem;
        }

        @media (max-width: 1024px) {
          .top-header {
            left: 0;
            padding: 0 1rem;
          }
          .header-slogan {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
