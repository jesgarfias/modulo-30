import { useEffect, useState, useRef } from 'react';

const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const target1 = 65;
  const target2 = 200;
  const target3 = 50000;
  
  const divRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;

          // Start counting for each number
          const interval1 = setInterval(() => {
            setCount1((prev) => {
              if (prev < target1) return prev + 1;
              clearInterval(interval1);
              return prev;
            });
          }, 10);

          const interval2 = setInterval(() => {
            setCount2((prev) => {
              if (prev < target2) return prev + 1;
              clearInterval(interval2);
              return prev;
            });
          }, 5);

          const interval3 = setInterval(() => {
            setCount3((prev) => {
              if (prev < target3) return prev + 1;
              clearInterval(interval3);
              return prev;
            });
          }, 1);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the div is visible
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) observer.unobserve(divRef.current);
    };
  }, []);

  return (
    <div ref={divRef} style={{ height: '200px', background: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      <h2>{count1}</h2>
      <h2>{count2}</h2>
      <h2>{count3}</h2>
    </div>
  );
};

export default Counter;
