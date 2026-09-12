import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: '01  HOME' },
  { id: 'about', label: '02  ABOUT' },
  { id: 'projects', label: '03  PROJECTS' },
  { id: 'approach', label: '04  APPROACH' },
  { id: 'experience', label: '05  EXPERIENCE' },
  { id: 'playground', label: '06  PLAYGROUND' },
  { id: 'notes', label: '07  NOTES' },
  { id: 'contact', label: '08  CONTACT' },
];

export default function Sidebar({ activeSection, setActiveSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-toggle-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Main Sidebar */}
      <aside className={`sidebar-container ${mobileOpen ? 'mobile-open' : ''}`}>
        {/* Brand / Logo */}
        <div className="sidebar-brand" onClick={() => scrollToSection('home')}>
          <div className="brand-icon">
            <span className="brand-ss">SS</span>
            <div className="brand-dot" />
          </div>
          <div className="brand-name">
            <span>SATVIK SOMVANSHI</span>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeDot"
                        className="active-dot"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer info */}
        <div className="sidebar-footer">
          <span className="version-badge">v 1.0</span>
        </div>
      </aside>

      <style>{`
        .mobile-toggle-btn {
          display: none;
          position: fixed;
          top: 12px;
          right: 12px;
          z-index: 1001;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
        }

        .sidebar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: var(--sidebar-width);
          height: 100vh;
          background: #fbfaf8; /* matches hero bg */
          border-right: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2.2rem 1.8rem;
          z-index: 1000;
        }

        .sidebar-brand {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          cursor: pointer;
          user-select: none;
        }

        .brand-icon {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .brand-ss {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.04em;
          color: #111827;
        }

        .brand-dot {
          width: 8px;
          height: 8px;
          background-color: #f97316;
          border-radius: 50%;
        }

        .brand-name {
          font-family: var(--font-sans);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #6b7280;
        }

        .sidebar-nav {
          margin-top: auto;
          margin-bottom: auto;
        }

        .sidebar-nav ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .nav-link {
          background: none;
          border: none;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #6b7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          text-align: left;
          padding: 4px 0;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #111827;
        }

        .nav-link.active {
          color: #111827;
          font-weight: 800;
        }

        .active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #111827;
          display: inline-block;
        }

        .sidebar-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #9ca3af;
        }

        .version-badge {
          background: #f3f4f6;
          padding: 2px 6px;
          border-radius: 4px;
        }

        @media (max-width: 1024px) {
          .mobile-toggle-btn {
            display: flex;
          }

          .sidebar-container {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            box-shadow: 10px 0 30px rgba(0,0,0,0.15);
          }

          .sidebar-container.mobile-open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
