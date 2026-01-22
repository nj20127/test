'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 8L10.89 13.26C11.55 13.67 12.45 13.67 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Email',
      detail: 'contact@qtlabs.at',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: 'Office Hours',
      detail: 'Mon-Fri: 9:00 AM - 6:00 PM CET',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: 'Location',
      detail: 'Vienna, Austria',
    },
  ];

  return (
    <section id="contact" className="py-[var(--spacing-section)] bg-[var(--color-dark-light)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge>Get in Touch</Badge>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold leading-tight mt-5 mb-5">
              Let's Shape the Quantum Future Together
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10">
              Interested in collaboration, research partnerships, or learning more about our work? We'd
              love to hear from you.
            </p>

            <div className="flex flex-col gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-primary)]/10 rounded-xl text-[var(--color-primary-light)] flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">{info.title}</h4>
                    <p className="text-[var(--color-text-secondary)] text-[15px]">{info.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 rounded-3xl p-10"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-[var(--color-text)] text-[15px] transition-all focus:outline-none focus:border-[var(--color-primary)] focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-[var(--color-text)] text-[15px] transition-all focus:outline-none focus:border-[var(--color-primary)] focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-semibold text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-[var(--color-text)] text-[15px] transition-all focus:outline-none focus:border-[var(--color-primary)] focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-[var(--color-text)] text-[15px] transition-all resize-y min-h-[120px] focus:outline-none focus:border-[var(--color-primary)] focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full justify-center">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
