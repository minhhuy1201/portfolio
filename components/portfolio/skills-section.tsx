"use client";

import { techIconSources } from "@/app/(portfolio)/data/tech-icons";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Tooltip } from "@heroui/react";
import Image from "next/image";

type SkillIcon = {
  src: string;
  label: string;
};

type SkillItem = {
  name: string;
  icons: SkillIcon[];
};

type SkillCategory = {
  name: string;
  items: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Programming/Markup Languages",
    items: [
      {
        name: "Java",
        icons: [{ label: "Java", src: techIconSources.java }],
      },
      {
        name: "JavaScript & TypeScript",
        icons: [
          {
            label: "JavaScript",
            src: techIconSources.javascript,
          },
          {
            label: "TypeScript",
            src: techIconSources.typescript,
          },
        ],
      },
      {
        name: "C++",
        icons: [
          {
            label: "C++",
            src: techIconSources.cpp,
          },
        ],
      },
      {
        name: "Python",
        icons: [
          {
            label: "Python",
            src: techIconSources.python,
          },
        ],
      },
      {
        name: "HTML",
        icons: [
          {
            label: "HTML",
            src: techIconSources.html,
          },
        ],
      },
    ],
  },
  {
    name: "Frameworks/Libraries",
    items: [
      {
        name: "ReactJS",
        icons: [{ label: "ReactJS", src: techIconSources.react }],
      },
      {
        name: "Bootstrap",
        icons: [
          {
            label: "Bootstrap",
            src: techIconSources.bootstrap,
          },
        ],
      },
      {
        name: "Zustand",
        icons: [{ label: "Zustand", src: techIconSources.zustand }],
      },
      {
        name: "Antd",
        icons: [{ label: "Antd", src: techIconSources.antDesign }],
      },
      {
        name: "TailwindCSS",
        icons: [
          {
            label: "TailwindCSS",
            src: techIconSources.tailwindcss,
          },
        ],
      },
      {
        name: "NestJS",
        icons: [{ label: "NestJS", src: techIconSources.nestjs }],
      },
      {
        name: "Jmix",
        icons: [{ label: "Jmix", src: techIconSources.jmix }],
      },
      {
        name: "Spring Boot",
        icons: [
          {
            label: "Spring Boot",
            src: techIconSources.spring,
          },
        ],
      },
      {
        name: "NextJS",
        icons: [{ label: "NextJS", src: techIconSources.nextjs }],
      },
    ],
  },
  {
    name: "Database Management Systems",
    items: [
      {
        name: "MySQL",
        icons: [{ label: "MySQL", src: techIconSources.mysql }],
      },
      {
        name: "PostgreSQL",
        icons: [
          {
            label: "PostgreSQL",
            src: techIconSources.postgresql,
          },
        ],
      },
    ],
  },
  {
    name: "Tools",
    items: [
      {
        name: "VSCode",
        icons: [{ label: "VSCode", src: techIconSources.vscode }],
      },
      {
        name: "IntelliJ IDEA",
        icons: [
          {
            label: "IntelliJ IDEA",
            src: techIconSources.intellij,
          },
        ],
      },
      {
        name: "DataGrip",
        icons: [
          {
            label: "DataGrip",
            src: techIconSources.datagrip,
          },
        ],
      },
      {
        name: "Git (GitLab, GitHub)",
        icons: [
          { label: "Git", src: techIconSources.git },
          { label: "GitLab", src: techIconSources.gitlab },
          { label: "GitHub", src: techIconSources.github },
        ],
      },
      {
        name: "SVN",
        icons: [
          {
            label: "SVN",
            src: techIconSources.subversion,
          },
        ],
      },
    ],
  },
];

/**
 * Renders the Skills section as technology icons with hover/focus tooltips.
 *
 * @returns A compact icon-based Skills block.
 */
export function SkillsSection() {
  return (
    <article className="py-2">
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-4">
        {skillCategories.map((category) => (
          <section key={category.name} aria-label={category.name} className="space-y-2">
            <h3 className="text-base font-medium text-muted">{category.name}</h3>
            <ul className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <li key={skill.name}>
                  <Tooltip delay={0}>
                    <Tooltip.Trigger>
                      <button
                        aria-label={skill.name}
                        className="flex h-14 min-w-14 items-center justify-center bg-default-100 p-2 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-default-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        type="button"
                      >
                        <span className="flex items-center justify-center gap-1">
                          {skill.icons.map((icon) => (
                            <Image
                              key={icon.label}
                              alt=""
                              aria-hidden="true"
                              className={
                                skill.icons.length > 1
                                  ? "size-6 object-contain"
                                  : "size-8 object-contain"
                              }
                              height={28}
                              unoptimized
                              width={28}
                              src={icon.src}
                            />
                          ))}
                        </span>
                      </button>
                    </Tooltip.Trigger>
                    <Tooltip.Content showArrow>
                      <Tooltip.Arrow />
                      <p>{skill.name}</p>
                    </Tooltip.Content>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
