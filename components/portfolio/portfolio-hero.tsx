import { portfolioImages } from "@/app/(portfolio)/data/images";
import { portfolioProfile } from "@/app/(portfolio)/data/profile";
import { Avatar } from "@heroui/react";
import { CertificatesSection } from "@/components/portfolio/certificates-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HandWrittenUnderline } from "@/components/portfolio/hand-written-underline";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { TypewriterText } from "@/components/portfolio/typewriter-text";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const ABOUT_UNDERLINE_KEYWORDS = ["backend", "full-stack", "Linux", "system-level"];
const aboutUnderlineRegex = new RegExp(
  `(${ABOUT_UNDERLINE_KEYWORDS.map((keyword) => keyword.replace("-", "\\-")).join("|")})`,
  "g",
);

function renderAboutWithUnderline(text: string) {
  const parts = text.split(aboutUnderlineRegex);

  return parts.map((part, index) => {
    if (!ABOUT_UNDERLINE_KEYWORDS.includes(part)) {
      return <span key={`about-text-${index}`}>{part}</span>;
    }

    return (
      <span key={`about-keyword-${part}-${index}`} className="relative inline-block px-0.5">
        <span>{part}</span>
        <HandWrittenUnderline
          aria-hidden
          className="pointer-events-none absolute -bottom-1 left-0 h-[6px] w-full text-primary"
          preserveAspectRatio="none"
        />
      </span>
    );
  });
}

/**
 * Renders portfolio content in a vertical, scrollable layout.
 *
 * @returns Intro, experience, education, certificates, and skills sections.
 */
export function PortfolioHero() {
  return (
    <section className="flex w-full max-w-4xl flex-col gap-8">
      <article className="flex items-center gap-5 bg-background py-2">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-5xl font-semibold italic tracking-tight">
            <TypewriterText
              pauseMs={900}
              restartDelayMs={220}
              text="Hi, I'm Huy 👋"
              typingSpeedMs={65}
            />
          </h1>
          <p className="text-lg text-muted">
            {renderAboutWithUnderline(portfolioProfile.about)}
          </p>
        </div>

        <Avatar className="size-48" color="default">
          <Avatar.Image
            alt={portfolioProfile.name}
            src={portfolioImages.profile.avatar}
          />
        </Avatar>
      </article>

      <ExperienceSection experience={portfolioProfile.workExperience[0]} />
      <EducationSection education={portfolioProfile.education} />
      <CertificatesSection certificates={portfolioProfile.certificates} />
      <SkillsSection skills={portfolioProfile.skills} />

      <div className="flex w-full items-center justify-between gap-3">
        <ThemeToggle />
      </div>
    </section>
  );
}
