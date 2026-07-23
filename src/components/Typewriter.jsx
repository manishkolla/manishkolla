import React, { useState, useEffect } from 'react';

/**
 * A smooth, flicker-free Typewriter component built with pure React state.
 * Prevents glitching on re-renders, scrolling, or theme changes.
 */
const Typewriter = ({
  text = 'Manish Kolla',
  typeSpeed = 100,
  deleteSpeed = 60,
  pauseTime = 5000,
  emptyPauseTime = 800,
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (isDeleting) {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length - 1));
        }, deleteSpeed);
      } else {
        // Pauses when fully erased before typing again
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, emptyPauseTime);
      }
    } else {
      if (displayedText.length < text.length) {
        timer = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        }, typeSpeed);
      } else {
        // Pauses when fully typed out before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, typeSpeed, deleteSpeed, pauseTime, emptyPauseTime]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>
      <span className="inline-block w-[3px] h-[0.85em] bg-blue-600 ml-1 animate-pulse rounded-full" />
    </span>
  );
};

export default Typewriter;
