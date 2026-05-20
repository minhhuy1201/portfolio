"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  typingSpeedMs?: number;
  pauseMs?: number;
  restartDelayMs?: number;
};

/**
 * Types a string character-by-character, then restarts in a loop.
 *
 * Respects reduced-motion preferences by rendering static text.
 */
export function TypewriterText({
  text,
  className,
  typingSpeedMs = 85,
  pauseMs = 1400,
  restartDelayMs = 350,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const characters = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setShouldReduceMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let index = 0;

    const typeNextCharacter = () => {
      if (index < characters.length) {
        index += 1;
        setDisplayedText(characters.slice(0, index).join(""));
        timeoutId = setTimeout(typeNextCharacter, typingSpeedMs);
        return;
      }

      timeoutId = setTimeout(() => {
        index = 0;
        setDisplayedText("");
        timeoutId = setTimeout(typeNextCharacter, restartDelayMs);
      }, pauseMs);
    };

    timeoutId = setTimeout(() => {
      setDisplayedText("");
      typeNextCharacter();
    }, typingSpeedMs);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [characters, pauseMs, restartDelayMs, shouldReduceMotion, text, typingSpeedMs]);

  const visibleText = shouldReduceMotion ? text : displayedText;

  return (
    <span aria-label={text} className={`typewriter-loop ${className ?? ""}`}>
      <span aria-hidden className="typewriter-measure">
        {text}
      </span>
      <span aria-hidden className="typewriter-live">
        {visibleText}
        {!shouldReduceMotion ? <span className="typewriter-caret">|</span> : null}
      </span>
    </span>
  );
}
