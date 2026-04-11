'use client';

import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger when the element enters the viewport (ms). */
  delayMs?: number;
};

export function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        `${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ` +
        'motion-reduce:translate-y-0 motion-reduce:opacity-100 ' +
        'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ' +
        className
      }
      style={visible && delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
