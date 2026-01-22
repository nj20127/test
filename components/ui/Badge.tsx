import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  showDot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ children, showDot = false }) => {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rounded-full text-sm font-semibold text-[var(--color-primary-light)] uppercase tracking-wider">
      {showDot && (
        <span className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse" />
      )}
      {children}
    </div>
  );
};
