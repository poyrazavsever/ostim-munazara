'use client'
import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  as?: 'button' | 'link';
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const baseClasses =
  'rounded-md px-4 py-2 text-base flex items-center justify-center transition-colors duration-200 cursor-pointer';

const variantClasses = {
  primary:
    'bg-primary text-white border-none hover:bg-primary/80 focus:ring-2 focus:ring-primary',
  outline:
    'bg-transparent backdrop-blur-sm text-white border border-neutral-700 hover:border-primary hover:bg-primary/20 focus:ring-2 focus:ring-primary',
};

export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (as === 'link' && href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
