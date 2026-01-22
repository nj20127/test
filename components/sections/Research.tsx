'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';

export const Research: React.FC = () => {
  const researchAreas = [
    {
      number: '01',
      title: 'Quantum Computing',
      description:
        'Developing scalable quantum processors and algorithms that outperform classical systems.',
    },
    {
      number: '02',
      title: 'Quantum Cryptography',
      description:
        'Creating unbreakable encryption systems using quantum key distribution and secure communications.',
    },
    {
      number: '03',
      title: 'Quantum Sensing',
      description:
        'Building ultra-precise sensors for medical imaging, navigation, and environmental monitoring.',
    },
    {
      number: '04',
      title: 'Quantum Materials',
      description:
        'Discovering and synthesizing novel materials with quantum properties for next-gen applications.',
    },
  ];

  return (
    <section id="research" className="py-[var(--spacing-section)] bg-[var(--color-dark-light)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-[800px] mx-auto mb-20"
        >
          <Badge>Research Areas</Badge>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold leading-tight mt-5">
            Exploring the Quantum Frontier
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative p-10 bg-white/[0.02] border border-white/5 rounded-3xl transition-all overflow-hidden group hover:bg-white/[0.05] hover:border-[var(--color-primary)]/30"
            >
              {/* Top Border Animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

              <div className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--color-primary-light)] mb-5">
                {area.number}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold mb-4">
                {area.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
                {area.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[var(--color-primary-light)] font-semibold transition-all group-hover:gap-2"
              >
                Learn More
                <span className="ml-2 transition-all group-hover:ml-0">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
