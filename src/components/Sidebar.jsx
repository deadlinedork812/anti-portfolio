import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home',       label: '01', name: 'HOME'       },
  { id: 'about',      label: '02', name: 'ABOUT'      },
  { id: 'projects',   label: '03', name: 'PROJECTS'   },
  { id: 'experience', label: '04', name: 'EXPERIENCE' },
  { id: 'playground', label: '05', name: 'PLAYGROUND' },
  { id: 'notes',      label: '06', name: 'NOTES'      },
  { id: 'contact',    label: '07', name: 'CONTACT'    },
];

export default function Sidebar({ activeSection, setActiveSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="sb-mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside className={`sidebar ${mobileOpen ? 'sb-open' : ''}`}>
        {/* Brand */}
        <div className="sb-brand" onClick={() => scrollToSection('home')}>
          <div className="sb-logo-row">
            <span className="sb-ss">SS</span>
            <span className="sb-dot" />
          </div>
          <p className="sb-name">SATVIK SOMVANSHI</p>
          <p className="sb-role">ENGINEER · TESTER<br />BUILDER</p>
        </div>

        {/* Nav */}
        <nav className="sb-nav">
          <ul>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    className={`sb-nav-link ${isActive ? 'sb-active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className="sb-num">{item.label}</span>
                    <span className="sb-name-text">{item.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="sb-active-dot"
                        className="sb-active-dot"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="sb-footer">
          <div className="sb-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:contact@example.com" aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            <a href="#" aria-label="Portfolio">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
              </svg>
            </a>
          </div>
          <div className="sb-meta">
            <span className="sb-version">v 1.0</span>
            <span className="sb-motto">BUILD<br />BREAK<br />IMPROVE<br />REPEAT</span>
          </div>
        </div>

        {/* Bottom handwritten note */}
        <div className="sb-hw-note">
          <span className="sb-hw-text">Same<br />curiosity.<br />Different<br />problems.</span>
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none" className="sb-hw-line">
            <path d="M2 14 Q 16 2 30 8" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </aside>

      <style>{`
        .sb-mobile-toggle {
          display: none;
          position: fixed;
          top: 12px;
          right: 12px;
          z-index: 1100;
          background: #111827;
          color: #f8fafc;
          border: none;
          border-radius: 8px;
          padding: 8px 10px;
          cursor: pointer;
        }

        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: var(--sidebar-width);
          height: 100vh;
          background: #f5f4ee;
          border-right: 1px solid rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          padding: 2rem 1.6rem 1.8rem 1.6rem;
          z-index: 1000;
          overflow-y: auto;
          scrollbar-width: none;
        }
        .sidebar::-webkit-scrollbar { display: none; }

        /* Brand */
        .sb-brand {
          cursor: pointer;
          margin-bottom: 2.5rem;
          user-select: none;
        }

        .sb-logo-row {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 0.2rem;
        }

        .sb-ss {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 900;
          letter-spacing: -0.05em;
          color: #0f0f0f;
        }

        .sb-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #6366f1;
          flex-shrink: 0;
        }

        .sb-brand .sb-name {
          font-family: var(--font-sans);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #374151;
          margin-bottom: 0.15rem;
        }

        .sb-role {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          color: #9ca3af;
          line-height: 1.5;
        }

        /* Nav */
        .sb-nav {
          flex: 1;
        }

        .sb-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .sb-nav-link {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: none;
          border: none;
          padding: 0.45rem 0.5rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .sb-num {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 600;
          color: #9ca3af;
          min-width: 20px;
        }

        .sb-name-text {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #6b7280;
          flex: 1;
          text-align: left;
          transition: color 0.15s ease;
        }

        .sb-nav-link:hover .sb-name-text {
          color: #111827;
        }

        .sb-nav-link.sb-active {
          background: rgba(99,102,241,0.06);
        }

        .sb-nav-link.sb-active .sb-name-text {
          color: #111827;
          font-weight: 800;
        }

        .sb-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6366f1;
          display: inline-block;
          box-shadow: 0 0 6px #6366f1;
        }

        /* Footer */
        .sb-footer {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .sb-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #9ca3af;
        }

        .sb-socials a {
          color: inherit;
          display: flex;
          align-items: center;
          transition: color 0.15s ease;
        }

        .sb-socials a:hover { color: #374151; }

        .sb-meta {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .sb-version {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          color: #9ca3af;
          background: rgba(0,0,0,0.05);
          padding: 2px 6px;
          border-radius: 4px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .sb-motto {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          color: #9ca3af;
          line-height: 1.8;
        }

        /* Handwritten bottom note */
        .sb-hw-note {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .sb-hw-text {
          font-family: var(--font-handwriting);
          font-size: 1.05rem;
          color: #374151;
          line-height: 1.2;
        }

        .sb-hw-line {
          margin-left: 4px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .sb-mobile-toggle {
            display: flex;
            align-items: center;
          }

          .sidebar {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            box-shadow: 10px 0 40px rgba(0,0,0,0.15);
          }

          .sidebar.sb-open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
