'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';

export const Team: React.FC = () => {
  const team = [
    {
      name: 'Dr. Alexandra Smith',
      role: 'Chief Scientist',
      bio: 'Leading quantum computing research with 15+ years in theoretical physics.',
      initials: 'Dr. A. Smith',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Director of Engineering',
      bio: 'Pioneering quantum hardware development and system architecture.',
      initials: 'Dr. M. Chen',
    },
    {
      name: 'Dr. Sophia Patel',
      role: 'Head of Cryptography',
      bio: 'Expert in quantum encryption and secure communication protocols.',
      initials: 'Dr. S. Patel',
    },
    {
      name: 'Dr. James Kumar',
      role: 'Research Director',
      bio: 'Advancing quantum sensing and metrology applications.',
      initials: 'Dr. J. Kumar',
    },
  ];

  return (
    <section id="team" className="py-[var(--spacing-section)] bg-gradient-to-b from-[var(--color-dark)] to-[var(--color-dark-light)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-[800px] mx-auto mb-20"
        >
          <Badge>Our Team</Badge>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold leading-tight mt-5 mb-5">
            Leading Experts in Quantum Science
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            Our team comprises world-renowned physicists, engineers, and researchers dedicated to
            advancing quantum technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl text-center transition-all hover:bg-white/[0.05] hover:border-[var(--color-primary)]/30 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center">
                <div className="w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full bg-[var(--color-dark)] flex items-center justify-center">
                  <span className="text-base font-semibold text-[var(--color-text)]">
                    {member.initials}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-[var(--color-primary-light)] font-semibold text-sm mb-3">
                {member.role}
              </p>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
