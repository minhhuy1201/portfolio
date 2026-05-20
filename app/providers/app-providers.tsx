"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { InitialPageLoader } from "@/components/loading/initial-page-loader";

type AppProvidersProps = {
  children: ReactNode;
};

/**
 * Provides app-level contexts, currently for light/dark theme.
 *
 * @param children Application content that should be wrapped by providers.
 * @returns A React tree enhanced with shared contexts.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      themes={["light", "dark"]}
    >
      <InitialPageLoader>{children}</InitialPageLoader>
    </ThemeProvider>
  );
}
