import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1000,
}) => {
  const [displayValue, setDisplayValue] = useState<number | string>(value);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimating(true);
    const startTime = Date.now();

    let animationFrameId: number;

    const animate = (): void => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 1) {
        // During animation, show random numbers
        const randomValue = Math.floor(Math.random() * 1000000);
        setDisplayValue(randomValue.toLocaleString());
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Animation complete, show actual value
        setDisplayValue(value.toLocaleString());
        setIsAnimating(false);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  return (
    <span className={`font-mono ${isAnimating ? "text-gray-400" : ""}`}>
      {displayValue}
    </span>
  );
};
