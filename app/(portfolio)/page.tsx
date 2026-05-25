import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { PortfolioToolbar } from "@/components/portfolio/portfolio-toolbar";

/**
 * Renders the portfolio homepage at the root route "/".
 *
 * @returns The portfolio page layout with the main hero content.
 */
export default function PortfolioPage() {
  return (
    <main className="flex min-h-full flex-1 justify-center px-6 pt-10 pb-36 sm:px-8 sm:pt-14 sm:pb-40">
      <PortfolioHero />
      <PortfolioToolbar />
    </main>
  );
}
