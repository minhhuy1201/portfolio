"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";

function subscribeToClientSnapshot() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

/**
 * Renders a button to switch between light and dark modes.
 *
 * @returns A button that toggles the current theme.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useSyncExternalStore(
    subscribeToClientSnapshot,
    getClientSnapshot,
    getServerSnapshot,
  );
  const isDarkMode = resolvedTheme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  if (!isMounted) {
    return (
      <Button isDisabled size="sm" variant="secondary">
        Switch theme
      </Button>
    );
  }

  return (
    <Button onPress={handleToggleTheme} size="sm" variant="secondary">
      Switch to {isDarkMode ? "Light" : "Dark"}
    </Button>
  );
}
