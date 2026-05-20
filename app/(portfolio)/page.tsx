import { PortfolioHero } from "@/components/portfolio/portfolio-hero";

/**
 * Renders the portfolio homepage at the root route "/".
 *
 * @returns The portfolio page layout with the main hero content.
 */
export default function PortfolioPage() {
  return (
    <main className="flex min-h-full flex-1 justify-center px-6 py-10 sm:px-8 sm:py-14">
      <PortfolioHero />
    </main>
  );
}
