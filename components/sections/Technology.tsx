'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const Technology: React.FC = () => {
  const features = [
    {
      title: 'Quantum Supremacy',
      description: 'Solving problems beyond classical computing capabilities',
    },
    {
      title: 'Error Correction',
      description: 'Advanced error mitigation for stable quantum operations',
    },
    {
      title: 'Scalable Architecture',
      description: 'Modular design for expanding quantum systems',
    },
  ];

  return (
    <section id="technology" className="py-[var(--spacing-section)] bg-[var(--color-dark)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] flex items-center justify-center order-2 lg:order-1"
          >
            {/* Rotating Circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[400px] h-[400px] rounded-full border-2 border-[var(--color-primary)]/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[300px] h-[300px] rounded-full border-2 border-[var(--color-secondary)]/30"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[200px] h-[200px] rounded-full border-2 border-[var(--color-accent)]/30"
            />

            {/* Center Pulse */}
            <div className="relative w-24 h-24 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full shadow-[var(--shadow-glow)]">
              <motion.div
                animate={{
                  scale: [1, 2],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <Badge>Our Technology</Badge>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold leading-tight mt-5 mb-5">
              Built on Quantum Principles
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10">
              Our proprietary quantum systems leverage the fundamental principles of quantum mechanics to
              achieve unprecedented computational power and security.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full text-white text-sm font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-[var(--color-text-secondary)] text-[15px]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="primary">Explore Technology</Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
