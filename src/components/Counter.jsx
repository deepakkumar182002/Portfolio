import { useEffect, useRef, useState } from 'react';

export default function Counter({ target, suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const started = useRef(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (!('IntersectionObserver' in window)) {
      setValue(target);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const step = Math.ceil(target / (duration / 16));
            let current = 0;
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                setValue(target);
                clearInterval(timer);
              } else {
                setValue(current);
              }
            }, 16);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
