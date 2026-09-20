"use client";

import { useReveal } from "@/hooks/useReveal";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function RevealSection({
  children,
  className = "",
  id,
  delay = 0,
}: RevealSectionProps) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-smooth ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  );
}
