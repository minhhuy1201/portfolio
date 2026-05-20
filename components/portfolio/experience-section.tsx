import { Avatar, Chip, Disclosure, Separator } from "@heroui/react";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import type { PortfolioProfile } from "@/app/(portfolio)/data/profile";

type WorkExperienceItem = PortfolioProfile["workExperience"][number];
type ProjectDetail = WorkExperienceItem["projects"][number]["details"][number];

type ExperienceSectionProps = {
  experience?: WorkExperienceItem;
};

function getProjectDetailText(detail: ProjectDetail) {
  if (typeof detail === "string") {
    return detail;
  }

  return detail.map((segment) => segment.text).join("");
}

function renderProjectDetail(detail: ProjectDetail) {
  if (typeof detail === "string") {
    return detail;
  }

  return detail.map((segment, index) => {
    if (!segment.isBold) {
      return segment.text;
    }

    return (
      <strong key={`${segment.text}-${index}`} className="font-semibold">
        {segment.text}
      </strong>
    );
  });
}

/**
 * Renders the work experience section inside a disclosure block.
 *
 * @param props The work experience item to display.
 * @returns The Experience block with company, duration, and project details.
 */
export function ExperienceSection({ experience }: ExperienceSectionProps) {
  if (!experience) {
    return null;
  }

  return (
    <article className="py-2">
      <h2 className="mb-4 text-2xl font-semibold">Experience</h2>
      <Disclosure
        id="work-experience"
        aria-label={`Work experience at ${experience.company}`}
      >
        <Disclosure.Heading>
          <Disclosure.Trigger className="group flex w-full flex-col items-start gap-2 px-1 py-2">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <Avatar.Image
                    alt={`${experience.company} logo`}
                    src={experience.companyImage}
                  />
                  <Avatar.Fallback>
                    {experience.company.slice(0, 2)}
                  </Avatar.Fallback>
                </Avatar>
                <span className="text-md font-semibold">
                  {experience.company} -{" "}
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-4 text-muted" />
                    {experience.companyAddress}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-base text-muted">
                  {experience.duration}
                </span>
                <Disclosure.Indicator className="text-muted transition-transform duration-200 ease-out group-hover:translate-y-0.5" />
              </div>
            </div>

            <p className="text-base text-muted italic group-aria-expanded:hidden">
              Click to see details
            </p>
          </Disclosure.Trigger>
        </Disclosure.Heading>
        <Disclosure.Content className="[transition:height_400ms_cubic-bezier(0.22,1,0.36,1),opacity_340ms_ease-out]">
          <Disclosure.Body className="space-y-4 pt-2">
            {experience.projects.map((project) => (
              <section key={project.name} className="flex gap-4">
                <Separator
                  aria-hidden="true"
                  className="self-stretch"
                  orientation="vertical"
                  variant="tertiary"
                />

                <div className="min-w-0 flex-1 space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-lg font-medium">{project.name}</p>
                      <p className="text-base text-muted">{project.duration}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <BriefcaseBusiness className="size-4 text-muted" />
                      <p className="text-base text-foreground">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  <ul className="list-disc space-y-1 pl-6 text-base text-foreground">
                    {project.details.map((detail) => (
                      <li key={getProjectDetailText(detail)}>
                        {renderProjectDetail(detail)}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Chip
                        key={`${project.name}-${tech.name}`}
                        className="bg-black text-white dark:bg-zinc-800 rounded-md"
                        variant="soft"
                      >
                        <Avatar className="size-5 bg-transparent rounded-sm">
                          <Avatar.Image
                            alt={`${tech.name} logo`}
                            src={tech.image}
                          />
                          <Avatar.Fallback className="bg-default-200 text-foreground">
                            {tech.name.slice(0, 1)}
                          </Avatar.Fallback>
                        </Avatar>
                        <Chip.Label>{tech.name}</Chip.Label>
                      </Chip>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </Disclosure.Body>
        </Disclosure.Content>
      </Disclosure>
    </article>
  );
}
