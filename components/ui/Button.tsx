import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-9 py-4 rounded-xl font-semibold text-base transition-all duration-300 inline-flex items-center gap-2.5';

  const variants = {
    primary: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.5)] hover:-translate-y-1',
    secondary: 'bg-white/5 text-[var(--color-text)] border border-white/10 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
