import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 focus:outline-none focus-visible:ring-4 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-slate-900 shadow-md shadow-primary/30 hover:bg-primary/85 hover:shadow-lg focus-visible:ring-primary/40',
  accent:
    'bg-accent text-slate-900 shadow-md shadow-accent/30 hover:bg-accent/85 hover:shadow-lg focus-visible:ring-accent/40',
  outline:
    'border-2 border-muted text-slate-700 hover:border-primary hover:bg-primary/10 focus-visible:ring-primary/40',
  ghost:
    'text-slate-700 hover:bg-muted/20 focus-visible:ring-muted/40',
};

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg',
};

export function buttonStyles(variant: Variant = 'primary', size: Size = 'md') {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function Button({ variant, size, className = '', children, ...rest }: Props) {
  return (
    <button className={`${buttonStyles(variant, size)} ${className}`} {...rest}>
      {children}
    </button>
  );
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function LinkButton({ href, variant, size, className = '', children }: LinkButtonProps) {
  return (
    <Link href={href} className={`${buttonStyles(variant, size)} ${className}`}>
      {children}
    </Link>
  );
}