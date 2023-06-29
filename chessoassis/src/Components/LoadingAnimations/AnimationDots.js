import { useState, useEffect } from 'react';
import './AnimationDots.css';

export default function AnimationDots({ text = '' }) {
  const [dots, setDots] = useState(`${text}.`);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots(prevText => {
        switch (prevText) {
          case `${text}.`:
            return `${text}..`;
          case `${text}..`:
            return `${text}...`;
          case `${text}....`:
            return `${text}.`;
          default:
            return `${text}.`;
        }
      });
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return <span> {dots}</span>;
}
