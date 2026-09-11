import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Cpu, Code2, ShieldCheck, ArrowRight } from 'lucide-react';

const approachSteps = [
  {
    id: 'product',
    title: 'Product',
    question: 'What should we build?',
    desc: 'Understanding user pain points, business objectives, and market positioning before writing code.',
    color: '#8b5cf6',
    icon: Lightbulb
  },
  {
    id: 'design',
    title: 'Design',
    question: 'How should it feel?',
    desc: 'Crafting responsive, intuitive user interfaces, cohesive design systems, and micro-interactions.',
    color: '#ec4899',
    icon: Palette
  },
  {
    id: 'architecture',
    title: 'Architecture',
    question: "What's underneath?",
    desc: 'Designing scalable micro-services, clean data pipelines, and robust system boundaries.',
    color: '#06b6d4',
    icon: Cpu
  },
  {
    id: 'development',
    title: 'Development',
    question: 'How do we build it?',
    desc: 'Writing clean, maintainable modular code with modern frameworks, APIs, and high performance.',
    color: '#3b82f6',
    icon: Code2
  },
  {
    id: 'quality',
    title: 'Quality',
    question: 'What can go wrong?',
    desc: 'Automating regression suites, stress testing edge cases, and verifying accessibility.',
    color: '#f97316',
    icon: ShieldCheck
  }
];

export default function ApproachSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="approach" className="portfolio-section approach-section grid-background">
      <div className="section-header-tag">
        <span>05. APPROACH</span>
      </div>

      <div className="approach-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="approach-title"
        >
          Different lenses.<br />
          One product.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="approach-subtitle"
        >
          I look at products from multiple angles — combining product thinking, design, architecture, development and quality engineering to create better digital experiences.
        </motion.p>
      </div>

      {/* Interactive Connected Pipeline */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="pipeline-container"
      >
        <div className="pipeline-track">
          {approachSteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <React.Fragment key={step.id}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className={`pipeline-node ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="node-icon-wrap" style={{ backgroundColor: step.color }}>
                    <Icon size={20} color="#ffffff" />
                  </div>
                  <span className="node-title">{step.title}</span>
                  <span className="node-question">{step.question}</span>
                </motion.div>

                {idx < approachSteps.length - 1 && (
                  <div className="pipeline-arrow">
                    <ArrowRight size={16} color="#cbd5e1" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Handwritten Annotation */}
        <div className="handwriting-pipeline-tag">
          <span className="handwriting">From idea to impact.</span>
        </div>
      </motion.div>

      {/* Step Detail Card */}
      <motion.div 
        key={activeStep}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="active-step-card glass-panel"
      >
        <div className="step-card-header">
          <span className="step-num-tag" style={{ color: approachSteps[activeStep].color }}>
            PHASE 0{activeStep + 1}
          </span>
          <h3 className="step-card-title">{approachSteps[activeStep].title}</h3>
        </div>
        <p className="step-card-question">"{approachSteps[activeStep].question}"</p>
        <p className="step-card-desc">{approachSteps[activeStep].desc}</p>
      </motion.div>

      <style>{`
        .approach-section {
          background-color: #f6f5f0;
          position: relative;
        }

        .approach-header {
          margin-bottom: 3.5rem;
        }

        .approach-title {
          font-family: var(--font-display);
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .approach-subtitle {
          font-size: 1.05rem;
          color: #64748b;
          max-width: 580px;
          line-height: 1.6;
        }

        .pipeline-container {
          position: relative;
          margin-bottom: 2.5rem;
        }

        .pipeline-track {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          padding: 2rem 1.5rem;
          border-radius: 24px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.04);
        }

        .pipeline-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .pipeline-node.active {
          background: rgba(0, 0, 0, 0.03);
        }

        .node-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.8rem;
          box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.2);
        }

        .node-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.95rem;
          color: #0f172a;
          margin-bottom: 0.2rem;
        }

        .node-question {
          font-size: 0.72rem;
          color: #64748b;
        }

        .pipeline-arrow {
          display: flex;
          align-items: center;
        }

        .handwriting-pipeline-tag {
          position: absolute;
          bottom: -35px;
          right: 20px;
          transform: rotate(-2deg);
        }

        .active-step-card {
          padding: 1.8rem;
          border-radius: 20px;
          max-width: 600px;
        }

        .step-card-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.4rem;
        }

        .step-num-tag {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 0.75rem;
        }

        .step-card-title {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
        }

        .step-card-question {
          font-style: italic;
          color: #475569;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .step-card-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .pipeline-track {
            flex-direction: column;
            gap: 1.5rem;
          }
          .pipeline-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </section>
  );
}
