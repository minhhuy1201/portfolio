import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

/**
 * Renders a consistent portfolio section heading with a decorative accent line.
 *
 * @param props Heading content.
 * @returns A section heading used across portfolio blocks.
 */
export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <h2 className="text-2xl font-semibold">{children}</h2>
      <div aria-hidden="true" className="h-1 w-12 bg-blue-500" />
    </div>
  );
}
