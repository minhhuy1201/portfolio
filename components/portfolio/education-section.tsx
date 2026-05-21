import { Avatar } from "@heroui/react";
import { portfolioImages } from "@/app/(portfolio)/data/images";
import type { PortfolioProfile } from "@/app/(portfolio)/data/profile";
import { ExternalLink } from "lucide-react";

type EducationSectionProps = {
  education: PortfolioProfile["education"];
};

/**
 * Renders the Education section from the education list.
 *
 * @param props List of schools, degrees, periods, and GPA values.
 * @returns A formatted Education block.
 */
export function EducationSection({ education }: EducationSectionProps) {
  return (
    <article className="py-2">
      <h2 className="mb-4 text-2xl font-semibold">Education</h2>
      <div className="space-y-4">
        {education.map((item) => (
          <div
            key={`${item.school}-${item.degree}`}
            className="group/card space-y-1"
          >
            <div className="flex items-baseline justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <Avatar.Image
                    alt={`${item.school} logo`}
                    src={portfolioImages.school.uit}
                  />
                  <Avatar.Fallback>
                    {item.school.slice(0, 2)}
                  </Avatar.Fallback>
                </Avatar>
                <a
                  className="flex min-w-0 items-baseline gap-1.5 text-lg font-semibold"
                  href="https://www.uit.edu.vn/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="truncate">{item.school}</span>
                  <ExternalLink
                    aria-hidden="true"
                    className="lucide lucide-external-link size-4 items-baseline align-bottom translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover/card:translate-x-1 group-hover/card:opacity-100"
                  />
                </a>
              </div>
              <p className="shrink-0 text-base text-muted">{item.period}</p>
            </div>
            <p className="text-lg text-foreground">{item.degree}</p>
            <p className="text-base text-foreground italic">GPA: {item.gpa4} ({item.gpa10} / 10)</p>
          </div>
        ))}
      </div>
    </article>
  );
}
