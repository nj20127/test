import React from 'react';
import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-dark)] py-20 border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-15 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-1 font-[family-name:var(--font-display)] mb-6">
              <span className="text-[32px] font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                QT
              </span>
              <span className="text-xl font-light text-[var(--color-text)]">Labs</span>
            </div>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Pioneering quantum technology research and innovation for a better tomorrow.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-light)] transition-colors font-medium text-sm"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-light)] transition-colors font-medium text-sm"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-light)] transition-colors font-medium text-sm"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Research Links */}
          <div>
            <h4 className="text-base font-semibold mb-5">Research</h4>
            <ul className="space-y-3 list-none">
              {['Quantum Computing', 'Cryptography', 'Quantum Sensing', 'Materials'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#research"
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-light)] transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base font-semibold mb-5">Company</h4>
            <ul className="space-y-3 list-none">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Team', href: '#team' },
                { label: 'Careers', href: '#' },
                { label: 'News', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-light)] transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-[var(--color-text-tertiary)] text-sm">
            © {currentYear} QT Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
