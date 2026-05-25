"use client";

import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore, type ComponentProps } from "react";

type ThemeToggleProps = Pick<
  ComponentProps<typeof Button>,
  "onPointerLeave" | "onPointerMove"
> & {
  "aria-label"?: string;
  className?: string;
  iconClassName?: string;
  isIconOnly?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost" | "danger";
};

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
export function ThemeToggle({
  "aria-label": ariaLabel = "Toggle theme",
  className,
  iconClassName: customIconClassName,
  isIconOnly = false,
  onPointerLeave,
  onPointerMove,
  size = "sm",
  variant = "secondary",
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useSyncExternalStore(
    subscribeToClientSnapshot,
    getClientSnapshot,
    getServerSnapshot,
  );
  const isDarkMode = resolvedTheme === "dark";
  const iconClassName =
    customIconClassName ??
    (size === "lg" ? "size-6" : size === "md" ? "size-5" : "size-4");

  const handleToggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  if (!isMounted) {
    return (
      <Button
        aria-label={isIconOnly ? ariaLabel : undefined}
        className={className}
        isIconOnly={isIconOnly}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        size={size}
        variant={variant}
      >
        {isIconOnly ? (
          <Moon aria-hidden="true" className={iconClassName} />
        ) : (
          "Switch theme"
        )}
      </Button>
    );
  }

  return (
    <Button
      aria-label={isIconOnly ? ariaLabel : undefined}
      className={className}
      isIconOnly={isIconOnly}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      onPress={handleToggleTheme}
      size={size}
      variant={variant}
    >
      {isIconOnly ? (
        isDarkMode ? (
          <Sun aria-hidden="true" className={iconClassName} />
        ) : (
          <Moon aria-hidden="true" className={iconClassName} />
        )
      ) : (
        `Switch to ${isDarkMode ? "Light" : "Dark"}`
      )}
    </Button>
  );
}
