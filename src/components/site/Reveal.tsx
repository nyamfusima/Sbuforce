import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

/** Wraps a block so it fades and lifts into place the first time it scrolls into view. */
export function Reveal({ children, as: Tag = "div", className = "" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag ref={ref} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

/** Wraps a list/grid so its direct .reveal-item children stagger in together. Give each item style={{ "--reveal-i": i }}. */
export function RevealGroup({ children, as: Tag = "div", className = "" }: RevealGroupProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal-group ${visible ? "reveal-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
