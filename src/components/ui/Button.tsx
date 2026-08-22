import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'brand' | 'brand-blue' | 'white';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  to?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, to, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-black active:scale-[0.98]';
    
    const variants = {
      primary: 'bg-white text-black hover:bg-neutral-200',
      white: 'bg-white text-black hover:bg-neutral-200',
      secondary: 'bg-neutral-800 text-white hover:bg-neutral-700',
      outline: 'border border-neutral-700 bg-transparent text-white hover:bg-neutral-800 hover:border-neutral-600',
      ghost: 'bg-transparent text-white hover:bg-neutral-800',
      danger: 'bg-red-600 text-white hover:bg-red-700',
      brand: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20',
      'brand-blue': 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20',
    };
    
    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (to) {
      return (
        <Link to={to} className={classes}>
          {isLoading ? (
            <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : null}
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
