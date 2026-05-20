"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { LoadingScreen } from "@/components/loading/loading-screen";

const MINIMUM_LOADING_TIME_MS = 900;
const FADE_OUT_TIME_MS = 280;

type InitialPageLoaderProps = {
  children: ReactNode;
};

/**
 * Guarantees a smooth first-paint loader on first visit and hard refresh.
 */
export function InitialPageLoader({ children }: InitialPageLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const startTimeRef = useRef(0);

  useEffect(() => {
    startTimeRef.current = performance.now();
    const elapsed = performance.now() - startTimeRef.current;
    const remaining = Math.max(0, MINIMUM_LOADING_TIME_MS - elapsed);

    const fadeTimeoutId = window.setTimeout(() => {
      setIsVisible(false);
    }, remaining);

    const unmountTimeoutId = window.setTimeout(() => {
      setIsMounted(false);
    }, remaining + FADE_OUT_TIME_MS);

    return () => {
      window.clearTimeout(fadeTimeoutId);
      window.clearTimeout(unmountTimeoutId);
    };
  }, []);

  return (
    <>
      {children}

      {isMounted ? (
        <div
          className={[
            "transition-opacity duration-300 ease-out",
            isVisible ? "opacity-100" : "pointer-events-none opacity-0",
          ].join(" ")}
        >
          <LoadingScreen fullScreen />
        </div>
      ) : null}
    </>
  );
}
