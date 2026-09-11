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
                <span className="handwriting">Ideas</span>
                <span className="handwriting" style={{ marginLeft: 8 }}>Code</span>
                <span className="handwriting" style={{ marginLeft: 16 }}>Test</span>
                <span className="handwriting" style={{ marginLeft: 24 }}>Improve</span>
                <span className="handwriting" style={{ marginLeft: 32 }}>Repeat.</span>

                <svg className="curved-arrow-custom" width="55" height="45" viewBox="0 0 55 45" fill="none">
                  <path d="M5 5 Q 35 5, 45 35" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                  <path d="M40 30 L 45 35 L 48 28" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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
              <div className="dash-mockup-wrapper finance-track-dark-dash">
                {/* Left Sidebar */}
                <div className="ft-sidebar">
                  <div className="ft-brand">
                    <div className="ft-logo-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.81.2-2.55L4.5 16.5z"/>
                        <path d="M12 15l-3-3 7.5-7.5.5.5-5 7 3 3z"/>
                        <path d="M15 12l3 3"/>
                      </svg>
                    </div>
                    <span className="ft-brand-name">FinanceTrack</span>
                  </div>

                  <ul className="ft-nav-list">
                    <li className="ft-nav-item active">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7" rx="1.5"/>
                        <rect x="14" y="3" width="7" height="7" rx="1.5"/>
                        <rect x="14" y="14" width="7" height="7" rx="1.5"/>
                        <rect x="3" y="14" width="7" height="7" rx="1.5"/>
                      </svg>
                      <span>Dashboard</span>
                    </li>
                    <li className="ft-nav-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><rect x="9" y="11" width="12" height="8" rx="2"/><path d="M13 15h.01"/></svg>
                      <span>Transactions</span>
                    </li>
                    <li className="ft-nav-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>
                      <span>Budgets</span>
                    </li>
                    <li className="ft-nav-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                      <span>Analytics</span>
                    </li>
                    <li className="ft-nav-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                      <span>Categories</span>
                    </li>
                    <li className="ft-nav-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                      <span>Reports</span>
                    </li>
                    <li className="ft-nav-item">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                      <span>Settings</span>
                    </li>
                  </ul>

                  <div className="ft-sidebar-bottom">
                    <button className="ft-collapse-btn">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="19 20 9 12 19 4 19 20"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Main Dashboard Content */}
                <div className="ft-main">
                  {/* Top Bar */}
                  <div className="ft-topbar">
                    <div className="ft-search-box">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      </svg>
                      <input type="text" placeholder="Search transactions..." readOnly />
                    </div>

                    <div className="ft-top-actions">
                      <div className="ft-filter-select">
                        <span>Last 6 Months</span>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                      </div>

                      <div className="ft-icon-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                        <span className="dot" />
                      </div>

                      <div className="ft-avatar">
                        <span>S</span>
                      </div>
                    </div>
                  </div>

                  {/* Greeting Header */}
                  <div className="ft-greeting">
                    <h2>Good morning, Satvik</h2>
                    <p>Here's your financial overview</p>
                  </div>

                  {/* 3 Metric Cards */}
                  <div className="ft-metrics-grid">
                    {/* Card 1: Total Balance */}
                    <div className="ft-metric-card">
                      <div className="ft-metric-icon icon-teal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
                      </div>
                      <div className="ft-metric-info">
                        <span className="ft-m-title">Total Balance</span>
                        <span className="ft-m-val">₹1,24,580</span>
                        <span className="ft-m-trend trend-up">+12% from last month</span>
                      </div>
                    </div>

                    {/* Card 2: Monthly Expenses */}
                    <div className="ft-metric-card">
                      <div className="ft-metric-icon icon-pink">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
                      </div>
                      <div className="ft-metric-info">
                        <span className="ft-m-title">Monthly Expenses</span>
                        <span className="ft-m-val">₹31,240</span>
                        <span className="ft-m-trend trend-down">-8% from last month</span>
                      </div>
                    </div>

                    {/* Card 3: Savings */}
                    <div className="ft-metric-card">
                      <div className="ft-metric-icon icon-blue">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </div>
                      <div className="ft-metric-info">
                        <span className="ft-m-title">Savings</span>
                        <span className="ft-m-val">₹42,000</span>
                        <span className="ft-m-trend trend-up">+20% from last month</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row Charts */}
                  <div className="ft-charts-grid">
                    {/* Dual Bar Chart: Expense Overview */}
                    <div className="ft-chart-card ft-bar-card">
                      <div className="ft-chart-head">
                        <span className="ft-chart-title">Expense Overview</span>
                        <div className="ft-legend-group">
                          <span className="leg-item"><span className="leg-dot bg-blue"/> Income</span>
                          <span className="leg-item"><span className="leg-dot bg-pink"/> Expenses</span>
                        </div>
                      </div>

                      <div className="ft-bar-chart-wrap">
                        {/* Tooltip Badge on Apr */}
                        <div className="ft-tooltip-badge">
                          <span className="tt-val">₹12,480</span>
                          <span className="tt-sub">Apr 2024</span>
                        </div>

                        <svg viewBox="0 0 280 120" className="ft-bar-svg" preserveAspectRatio="none">
                          {/* Gridlines */}
                          <line x1="0" y1="30" x2="280" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" />
                          <line x1="0" y1="65" x2="280" y2="65" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" />
                          <line x1="0" y1="100" x2="280" y2="100" stroke="rgba(255,255,255,0.08)" />

                          {/* Jan */}
                          <rect x="20" y="70" width="7" height="30" rx="2" fill="#3b82f6" />
                          <rect x="30" y="82" width="7" height="18" rx="2" fill="#ec4899" />
                          <text x="28" y="113" fontSize="8" fill="#64748b" textAnchor="middle">Jan</text>

                          {/* Feb */}
                          <rect x="62" y="48" width="7" height="52" rx="2" fill="#3b82f6" />
                          <rect x="72" y="68" width="7" height="32" rx="2" fill="#ec4899" />
                          <text x="70" y="113" fontSize="8" fill="#64748b" textAnchor="middle">Feb</text>

                          {/* Mar */}
                          <rect x="104" y="38" width="7" height="62" rx="2" fill="#3b82f6" />
                          <rect x="114" y="75" width="7" height="25" rx="2" fill="#ec4899" />
                          <text x="112" y="113" fontSize="8" fill="#64748b" textAnchor="middle">Mar</text>

                          {/* Apr (Active Tooltip Month) */}
                          <rect x="146" y="28" width="7" height="72" rx="2" fill="#3b82f6" />
                          <rect x="156" y="58" width="7" height="42" rx="2" fill="#c084fc" />
                          <text x="154" y="113" fontSize="8" fill="#f8fafc" fontWeight="bold" textAnchor="middle">Apr</text>

                          {/* May */}
                          <rect x="188" y="50" width="7" height="50" rx="2" fill="#3b82f6" />
                          <rect x="198" y="78" width="7" height="22" rx="2" fill="#ec4899" />
                          <text x="196" y="113" fontSize="8" fill="#64748b" textAnchor="middle">May</text>

                          {/* Jun */}
                          <rect x="230" y="42" width="7" height="58" rx="2" fill="#3b82f6" />
                          <rect x="240" y="65" width="7" height="35" rx="2" fill="#a855f7" />
                          <text x="238" y="113" fontSize="8" fill="#64748b" textAnchor="middle">Jun</text>
                        </svg>
                      </div>
                    </div>

                    {/* Donut Chart: Spending by Category */}
                    <div className="ft-chart-card ft-donut-card">
                      <div className="ft-chart-head">
                        <span className="ft-chart-title">Spending by Category</span>
                      </div>

                      <div className="ft-donut-body">
                        {/* Donut graphic */}
                        <div className="ft-donut-graphic">
                          <svg viewBox="0 0 100 100" className="ft-donut-svg">
                            {/* Food 28% (#3b82f6) */}
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#3b82f6" strokeWidth="13" strokeDasharray="67 172" strokeDashoffset="0" />
                            {/* Travel 10% (#a855f7) */}
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#a855f7" strokeWidth="13" strokeDasharray="24 215" strokeDashoffset="-69" />
                            {/* Shopping 16% (#38bdf8) */}
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#38bdf8" strokeWidth="13" strokeDasharray="38 201" strokeDashoffset="-95" />
                            {/* Bills 14% (#f97316) */}
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#f97316" strokeWidth="13" strokeDasharray="33 206" strokeDashoffset="-135" />
                            {/* Entertainment 12% (#ec4899) */}
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#ec4899" strokeWidth="13" strokeDasharray="29 210" strokeDashoffset="-170" />
                            {/* Others 12% (#10b981) */}
                            <circle cx="50" cy="50" r="38" fill="none" stroke="#10b981" strokeWidth="13" strokeDasharray="29 210" strokeDashoffset="-201" />
                          </svg>

                          <div className="donut-center-info">
                            <span className="d-val">₹31,240</span>
                            <span className="d-sub">This Month</span>
                          </div>
                        </div>

                        {/* Category List */}
                        <ul className="ft-category-list">
                          <li><span className="c-dot" style={{background:'#3b82f6'}}/> <span className="c-name">Food</span> <span className="c-pct">28%</span></li>
                          <li><span className="c-dot" style={{background:'#a855f7'}}/> <span className="c-name">Travel</span> <span className="c-pct">10%</span></li>
                          <li><span className="c-dot" style={{background:'#38bdf8'}}/> <span className="c-name">Shopping</span> <span className="c-pct">16%</span></li>
                          <li><span className="c-dot" style={{background:'#f97316'}}/> <span className="c-name">Bills</span> <span className="c-pct">14%</span></li>
                          <li><span className="c-dot" style={{background:'#ec4899'}}/> <span className="c-name">Entertainment</span> <span className="c-pct">12%</span></li>
                          <li><span className="c-dot" style={{background:'#10b981'}}/> <span className="c-name">Others</span> <span className="c-pct">12%</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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

              {/* Non-overlapping Sticky Note at bottom right (peach/coral color) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="sticky-note-peach"
              >
                <div className="tape"></div>
                <div className="peach-note-content">
                  <p className="handwriting-peach">Real problems.</p>
                  <p className="handwriting-peach">Real solutions.</p>
                  <p className="handwriting-peach">That's the goal.</p>
                  <div className="peach-arrow-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="5" x2="5" y2="19"/>
                      <polyline points="12 19 5 19 5 12"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Top-Right vertical block text */}
            <div className="right-block-tag">
              <span>RELIABLE</span>
              <span>SCALABLE</span>
              <span>TESTABLE</span>
              <span>USER-CENTRIC</span>
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
            max-width: 640px;
            transform:
              perspective(1400px)
              rotateX(4deg)
              rotateY(7deg)
              rotateZ(-3.5deg);
          }

          .sticky-note-peach {
            position: absolute;
            bottom: -35px;
            right: -30px;
            width: 190px;
            background: #fecdd3;
            padding: 0.9rem;
            box-shadow: 10px 20px 35px rgba(0,0,0,0.35);
            transform: rotate(3deg);
            border-radius: 4px;
            z-index: 25;
          }

          .floating-code-card {
            display: none;
          }
        }

        /* FinanceTrack Dark Dashboard Component CSS */
        .finance-track-dark-dash {
          display: flex;
          width: 100%;
          background: #0f172a;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow:
            0 25px 50px -10px rgba(0,0,0,0.6),
            0 10px 25px rgba(99, 102, 241, 0.15),
            inset 0 1px 0 rgba(255,255,255,0.15);
          overflow: hidden;
          font-family: var(--font-sans);
          color: #f8fafc;
          text-align: left;
        }

        /* Sidebar */
        .ft-sidebar {
          width: 160px;
          background: #0b0f19;
          border-right: 1px solid rgba(255, 255, 255, 0.07);
          padding: 1rem 0.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-shrink: 0;
        }

        .ft-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          padding: 0 0.25rem;
        }

        .ft-logo-icon {
          width: 26px;
          height: 26px;
          background: #6366f1;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .ft-brand-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .ft-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .ft-nav-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.45rem 0.6rem;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 500;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .ft-nav-item.active {
          background: #6366f1;
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
        }

        .ft-sidebar-bottom {
          padding-top: 1rem;
        }

        .ft-collapse-btn {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.2);
          border: none;
          color: #818cf8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        /* Main Panel */
        .ft-main {
          flex: 1;
          background: #0f172a;
          padding: 1rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          overflow: hidden;
        }

        /* Top Bar */
        .ft-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }

        .ft-search-box {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #1e293b;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 0.3rem 0.75rem;
          width: 55%;
        }

        .ft-search-box input {
          background: transparent;
          border: none;
          outline: none;
          color: #f8fafc;
          font-size: 0.68rem;
          width: 100%;
        }

        .ft-top-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ft-filter-select {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: #1e293b;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 6px;
          padding: 0.25rem 0.5rem;
          font-size: 0.65rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        .ft-icon-badge {
          position: relative;
          color: #94a3b8;
          cursor: pointer;
        }

        .ft-icon-badge .dot {
          position: absolute;
          top: -1px;
          right: -1px;
          width: 5px;
          height: 5px;
          background: #ef4444;
          border-radius: 50%;
        }

        .ft-avatar {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #818cf8;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.68rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Greeting */
        .ft-greeting h2 {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0;
          color: #f8fafc;
          letter-spacing: -0.01em;
        }

        .ft-greeting p {
          font-size: 0.68rem;
          color: #94a3b8;
          margin: 0.1rem 0 0 0;
        }

        /* 3 Metric Cards Grid */
        .ft-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
        }

        .ft-metric-card {
          background: #1e293b;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          padding: 0.6rem 0.75rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .ft-metric-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .icon-teal { background: rgba(20, 184, 166, 0.18); color: #14b8a6; }
        .icon-pink { background: rgba(244, 63, 94, 0.18); color: #f43f5e; }
        .icon-blue { background: rgba(59, 130, 246, 0.18); color: #3b82f6; }

        .ft-metric-info {
          display: flex;
          flex-direction: column;
        }

        .ft-m-title {
          font-size: 0.62rem;
          color: #94a3b8;
          font-weight: 500;
        }

        .ft-m-val {
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0.1rem 0;
        }

        .ft-m-trend {
          font-size: 0.58rem;
          font-weight: 600;
        }
        .trend-up { color: #10b981; }
        .trend-down { color: #f43f5e; }

        /* Charts Grid */
        .ft-charts-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 0.6rem;
        }

        .ft-chart-card {
          background: #1e293b;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          padding: 0.65rem 0.75rem;
          display: flex;
          flex-direction: column;
        }

        .ft-chart-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }

        .ft-chart-title {
          font-size: 0.68rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .ft-legend-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.58rem;
          color: #94a3b8;
        }

        .leg-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .leg-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }
        .bg-blue { background: #3b82f6; }
        .bg-pink { background: #ec4899; }

        .ft-bar-chart-wrap {
          position: relative;
          width: 100%;
          margin-top: 0.2rem;
        }

        .ft-tooltip-badge {
          position: absolute;
          top: -12px;
          left: 48%;
          transform: translateX(-50%);
          background: #020617;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 4px;
          padding: 0.15rem 0.35rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          z-index: 5;
        }

        .tt-val {
          font-size: 0.58rem;
          font-weight: 700;
          color: #ffffff;
        }

        .tt-sub {
          font-size: 0.48rem;
          color: #94a3b8;
        }

        .ft-bar-svg {
          width: 100%;
          height: auto;
        }

        /* Donut Chart */
        .ft-donut-body {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          margin-top: 0.2rem;
        }

        .ft-donut-graphic {
          position: relative;
          width: 75px;
          height: 75px;
          flex-shrink: 0;
        }

        .ft-donut-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .donut-center-info {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          display: flex;
          flex-direction: column;
        }

        .d-val {
          font-size: 0.58rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
        }

        .d-sub {
          font-size: 0.45rem;
          color: #94a3b8;
          margin-top: 2px;
        }

        .ft-category-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          flex: 1;
        }

        .ft-category-list li {
          display: flex;
          align-items: center;
          font-size: 0.55rem;
          color: #cbd5e1;
        }

        .c-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          margin-right: 0.35rem;
          flex-shrink: 0;
        }

        .c-name {
          flex: 1;
        }

        .c-pct {
          font-weight: 600;
          color: #f8fafc;
        }

        /* Peach Sticky Note Styles */
        .sticky-note-peach {
          background: #fecdd3;
          padding: 0.85rem;
          box-shadow: 10px 20px 35px rgba(0,0,0,0.35);
          transform: rotate(3deg);
          border-radius: 4px;
          z-index: 25;
        }

        .handwriting-peach {
          font-family: var(--font-handwriting);
          font-size: clamp(0.9rem, 1.1vw, 1.1rem);
          color: #881337;
          margin: 0;
          line-height: 1.25;
          font-weight: 700;
        }

        .peach-arrow-wrap {
          display: flex;
          justify-content: flex-end;
          margin-top: 0.2rem;
        }

        /* Right block tag */
        .right-block-tag {
          position: absolute;
          top: -10px;
          right: -10px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
          font-family: var(--font-mono);
          font-size: clamp(0.65rem, 0.78vw, 0.78rem);
          font-weight: 700;
          color: rgba(255, 255, 255, 0.75);
          letter-spacing: 0.18em;
          z-index: 15;
          text-align: right;
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
            max-width: 520px;
            transform:
              perspective(1000px)
              rotateX(3deg)
              rotateY(5deg)
              rotateZ(-2.5deg);
          }

          .sticky-note-peach {
            position: absolute;
            bottom: -30px;
            right: -20px;
            width: 170px;
            background: #fecdd3;
            padding: 0.75rem;
            box-shadow: 8px 16px 30px rgba(0,0,0,0.3);
            transform: rotate(2deg);
            z-index: 25;
          }

          .right-block-tag {
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

          .sticky-note-peach {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: 1.5rem;
            width: 100%;
            max-width: 320px;
            transform: rotate(-1deg);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          }

          .right-block-tag {
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
