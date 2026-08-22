import { useReveal } from "@/hooks/use-reveal";
import { useCountUp } from "@/hooks/use-count-up";

type CounterProps = {
  target: number;
  suffix?: string;
  className?: string;
};

/** Counts up from 0 to `target` the first time it scrolls into view. */
export function Counter({ target, suffix = "", className = "" }: CounterProps) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const value = useCountUp(target, visible);
  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
