'use client';
import { useEffect, useState } from 'react';

type Props = {
  variant?: 'purple' | 'rose' | 'teal';
};

export default function SectionAccents({ variant = 'purple' }: Props) {
  const [pos, setPos] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / 60;
      const dy = (e.clientY - cy) / 60;
      setPos({ x1: -dx, y1: -dy, x2: dx, y2: dy });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const colors = {
    purple: { a: 'from-purple-500/25', b: 'from-pink-400/20' },
    rose: { a: 'from-rose-500/25', b: 'from-amber-300/20' },
    teal: { a: 'from-teal-400/25', b: 'from-cyan-300/20' },
  }[variant];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className={`absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr ${colors.a} to-transparent blur-3xl will-change-transform`}
        style={{ transform: `translate3d(${pos.x1}px, ${pos.y1}px, 0)` }}
      />
      <div
        className={`absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr ${colors.b} to-transparent blur-3xl will-change-transform`}
        style={{ transform: `translate3d(${pos.x2}px, ${pos.y2}px, 0)` }}
      />
    </div>
  );
}


