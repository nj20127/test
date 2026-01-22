'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';

export const About: React.FC = () => {
  const cards = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M24 4L6 14V24C6 34.5 13.5 43.5 24 46C34.5 43.5 42 34.5 42 24V14L24 4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'World-Class Research',
      description:
        'Conducting cutting-edge research in quantum computing, cryptography, and quantum sensing technologies.',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="24" r="4" fill="currentColor" />
        </svg>
      ),
      title: 'Innovation Focus',
      description:
        'Developing practical quantum solutions that address real-world challenges across multiple industries.',
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M12 28L20 20L28 28L36 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="28" r="3" fill="currentColor" />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
          <circle cx="28" cy="28" r="3" fill="currentColor" />
          <circle cx="36" cy="20" r="3" fill="currentColor" />
        </svg>
      ),
      title: 'Collaborative Excellence',
      description:
        'Partnering with leading institutions and industry pioneers to accelerate quantum technology adoption.',
    },
  ];

  return (
    <section id="about" className="py-[var(--spacing-section)] bg-gradient-to-b from-[var(--color-dark)] to-[var(--color-dark-light)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-[800px] mx-auto mb-20"
        >
          <Badge>About QT Labs</Badge>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold leading-tight mt-5 mb-5">
            Transforming Quantum Science into Reality
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            We are a world-class research institution dedicated to pushing the boundaries of quantum
            technology and making it accessible for practical applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl transition-all hover:bg-white/[0.05] hover:border-[var(--color-primary)]/30 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-2xl mb-6 text-[var(--color-primary-light)]">
                {card.icon}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">
                {card.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
