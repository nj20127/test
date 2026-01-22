'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const Hero: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Research Projects' },
    { number: '100+', label: 'Publications' },
    { number: '25+', label: 'Patents Filed' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-[var(--color-primary)] opacity-30 blur-[100px]"
          animate={{
            x: ['-200px', '50px', '-200px'],
            y: ['-200px', '-50px', '-200px'],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '-200px', left: '-200px' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-[var(--color-secondary)] opacity-30 blur-[100px]"
          animate={{
            x: ['-150px', '50px', '-150px'],
            y: ['-150px', '50px', '-150px'],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 7,
          }}
          style={{ bottom: '-150px', right: '-150px' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-[var(--color-accent)] opacity-30 blur-[100px]"
          animate={{
            x: ['0px', '50px', '-50px', '0px'],
            y: ['0px', '-50px', '50px', '0px'],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 14,
          }}
          style={{ top: '50%', right: '10%' }}
        />

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="text-center max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Badge showDot>Pioneering Quantum Innovation</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold leading-tight mb-8"
          >
            Advancing the Future of{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary-light)] via-[var(--color-secondary)] to-[var(--color-accent)] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              Quantum Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[var(--color-text-secondary)] max-w-[700px] mx-auto leading-relaxed mb-12"
          >
            Leading-edge research and development in quantum computing, cryptography, and sensing.
            We're building the foundation for tomorrow's technological breakthroughs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-20"
          >
            <Button variant="primary">Explore Our Research</Button>
            <Button variant="secondary">
              <span>Watch Video</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6.25 5L13.75 10L6.25 15V5Z" fill="currentColor" />
              </svg>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-[family-name:var(--font-display)] text-5xl font-bold bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-secondary)] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--color-text-secondary)] text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[var(--color-text-tertiary)] text-xs font-medium uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-[var(--color-primary)] to-transparent"
          animate={{
            opacity: [0, 1, 0],
            y: [0, 20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
};
