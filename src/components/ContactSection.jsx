import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Send, Download, ExternalLink, X } from 'lucide-react';
import confetti from 'canvas-confetti';

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@satviksomvanshi.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendForm = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSentSuccess(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
      setSentSuccess(false);
      setShowMessageModal(false);
      setFormData({ name: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <>
      <section id="contact" className="portfolio-section contact-section grid-background">
        <div className="contact-top-bar">
          <div className="section-header-tag">
            <span>09. CONTACT (FOOTER)</span>
          </div>
          <span className="contact-slogan">LET'S CONNECT • BUILD IMPROVE REPEAT</span>
        </div>

        <div className="contact-grid">
          {/* Left Side: Headline, Buttons & Links Box */}
          <div className="contact-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="contact-title"
            >
              Have a problem<br />
              to solve?
            </motion.h2>

            <p className="contact-subtitle">
              Open to opportunities, collaborations and interesting conversations.
            </p>

            {/* Action Buttons */}
            <div className="contact-actions">
              <button className="btn-primary" onClick={() => setShowMessageModal(true)}>
                <span>Send a message</span>
                <Send size={14} />
              </button>

              <button className="btn-secondary" onClick={() => setShowResumeModal(true)}>
                <span>View my resume</span>
              </button>
            </div>

            {/* Quick Contact Links Box */}
            <div className="contact-links-box glass-panel">
              <div className="link-row" onClick={copyEmail}>
                <div className="link-left">
                  <Mail size={16} className="link-icon" />
                  <span>hello@satviksomvanshi.com</span>
                </div>
                <button className="copy-btn">
                  {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                </button>
              </div>

              <a 
                href="https://linkedin.com/in/satviksomvanshi" 
                target="_blank" 
                rel="noreferrer"
                className="link-row"
              >
                <div className="link-left">
                  <LinkedinIcon size={16} className="link-icon" />
                  <span>linkedin.com/in/satviksomvanshi</span>
                </div>
                <ExternalLink size={14} className="ext-icon" />
              </a>

              <a 
                href="https://github.com/satvik-somvanshi" 
                target="_blank" 
                rel="noreferrer"
                className="link-row"
              >
                <div className="link-left">
                  <GithubIcon size={16} className="link-icon" />
                  <span>github.com/satvik-somvanshi</span>
                </div>
                <ExternalLink size={14} className="ext-icon" />
              </a>
            </div>
          </div>

          {/* Right Side: Grain Gradient Artwork */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="contact-right"
          >
            <div className="grain-art-container">
              <div className="grain-streak-gradient" />

              <div className="handwriting-badge streak-tag">
                <span className="handwriting">Different problems.<br />Same curiosity.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Copyright Strip */}
        <div className="contact-copyright-footer">
          <span>© 2024 Satvik Somvanshi. Built with curiosity.</span>
        </div>
      </section>

      {/* Send Message Form Modal */}
      <AnimatePresence>
        {showMessageModal && (
          <div className="case-study-overlay" onClick={() => setShowMessageModal(false)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="message-modal glass-panel"
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>Send a Message</h3>
                <button className="modal-close-btn" onClick={() => setShowMessageModal(false)}><X size={20} /></button>
              </div>

              {sentSuccess ? (
                <div className="form-success-message">
                  <Check size={48} color="#10b981" />
                  <h4>Message Sent Successfully!</h4>
                  <p>Thanks for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSendForm} className="contact-form">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Alex Vance" 
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="alex@company.com" 
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea 
                      required 
                      rows={4} 
                      placeholder="Tell me about your project or problem..." 
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Send Message</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="case-study-overlay" onClick={() => setShowResumeModal(false)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="resume-modal glass-panel"
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>Resume Preview — Satvik Somvanshi</h3>
                <button className="modal-close-btn" onClick={() => setShowResumeModal(false)}><X size={20} /></button>
              </div>

              <div className="resume-preview-doc">
                <div className="resume-head">
                  <h2>Satvik Somvanshi</h2>
                  <p>Quality Engineer & Product Builder | hello@satviksomvanshi.com</p>
                </div>

                <div className="resume-section-block">
                  <h4>Core Competencies</h4>
                  <p>Quality Engineering, Test Automation Architecture, Frontend Development, System Design, CI/CD Pipelines, Product Engineering.</p>
                </div>

                <div className="resume-section-block">
                  <h4>Experience Summary</h4>
                  <p>5+ years building and verifying high-availability digital products, leading automation suites, and driving dev-to-QA velocity.</p>
                </div>
              </div>

              <div className="modal-footer" style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                <button className="btn-primary" onClick={() => alert('Downloading Satvik_Somvanshi_Resume.pdf...')}>
                  <span>Download PDF</span>
                  <Download size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .contact-section {
          background-color: #f7f6f2;
          padding-bottom: 2rem;
        }

        .contact-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .contact-slogan {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #94a3b8;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 3.5rem;
          align-items: center;
          margin-bottom: 3.5rem;
        }

        .contact-title {
          font-family: var(--font-display);
          font-size: 3.6rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .contact-subtitle {
          font-size: 1.05rem;
          color: #64748b;
          max-width: 500px;
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .contact-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .contact-links-box {
          border-radius: 20px;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          max-width: 480px;
        }

        .link-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 1.2rem;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s ease;
          text-decoration: none;
          color: inherit;
        }

        .link-row:hover {
          background: rgba(0, 0, 0, 0.04);
        }

        .link-left {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 600;
          color: #0f172a;
        }

        .link-icon {
          color: #6366f1;
        }

        .copy-btn, .ext-icon {
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
        }

        /* Right Streak Art */
        .grain-art-container {
          position: relative;
          width: 100%;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .grain-streak-gradient {
          width: 220px;
          height: 320px;
          background: linear-gradient(135deg, #f97316 0%, #ec4899 50%, #6366f1 100%);
          border-radius: 24px;
          clip-path: polygon(0 10%, 100% 0, 85% 90%, 15% 100%);
          box-shadow: 0 20px 40px rgba(249, 115, 22, 0.3);
        }

        .streak-tag {
          position: absolute;
          bottom: 40px;
          right: 20px;
          transform: rotate(4deg);
        }

        .contact-copyright-footer {
          border-top: 1px solid var(--border-light);
          padding-top: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #94a3b8;
        }

        /* Form Modal */
        .message-modal, .resume-modal {
          width: 90%;
          max-width: 520px;
          border-radius: 24px;
          padding: 2rem;
          background: #ffffff;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-top: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: #475569;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.15);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: #6366f1;
        }

        .form-success-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem 0;
          text-align: center;
        }

        .resume-preview-doc {
          padding: 1.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .resume-head h2 {
          font-family: var(--font-display);
          font-size: 1.6rem;
        }

        .resume-head p {
          font-size: 0.85rem;
          color: #64748b;
        }

        .resume-section-block h4 {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          text-transform: uppercase;
          color: #6366f1;
          margin-bottom: 0.3rem;
        }

        .resume-section-block p {
          font-size: 0.9rem;
          color: #475569;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
