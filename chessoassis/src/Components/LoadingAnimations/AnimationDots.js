import { useState, useEffect } from 'react';
import './AnimationDots.css';

export default function AnimationDots({}) {
  const [text, setText] = useState('.');
  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(prevText => {
        switch (prevText) {
          case '.':
            return '..';
          case '..':
            return '...';
          case '...':
            return '.';
          default:
            return '.';
        }
      });
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return <span> {text}</span>;
}
