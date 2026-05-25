import { portfolioImages } from "@/app/(portfolio)/data/images";
import { techIconSources } from "@/app/(portfolio)/data/tech-icons";

type PortfolioDetail =
  | string
  | Array<{
      text: string;
      isBold?: boolean;
    }>;

export type PortfolioProfile = {
  name: string;
  role: string;
  tagline: string;
  about: string;
  workExperience: Array<{
    company: string;
    companyAddress: string;
    companyImage: string;
    duration: string;
    projects: Array<{
      name: string;
      role: string;
      duration: string;
      details: PortfolioDetail[];
      techStack: Array<{
        name: string;
        image: string;
      }>;
    }>;
  }>;
  education: Array<{
    school: string;
    degree: string;
    period: string;
    gpa4: string;
    gpa10: string;
  }>;
  certificates: Array<{
    name: string;
    issuer: string;
    issuerLogo: string;
    score?: string;
    issuedDate: string;
    link?: string;
    image?: {
      src: string;
      width: number;
      height: number;
    };
  }>;
};

export const portfolioProfile: PortfolioProfile = {
  name: "Huy Kirito",
  role: "Frontend Developer",
  tagline: "Welcome.",
  about:
    "I am an IT enthusiast, always seeking new challenges. I focus on backend development while maintaining strong full-stack skills. Outside of work, I explore new technologies, especially Linux, and deepen my understanding of system-level concepts.",
  workExperience: [
    {
      company: "FPT IS",
      companyAddress: "Ho Chi Minh City",
      companyImage: portfolioImages.company.fis,
      duration: "Sep 2024 - Mar 2026",
      projects: [
        {
          name: "eMS - Equipment Maintenance Scheduling System",
          role: "Backend Developer",
          duration: "Jan 2026 - Apr 2026",
          details: [
            [
              { text: "Optimized bulk import of " },
              {
                text: "1,500 records from 20 minutes down to 1 minute",
                isBold: true,
              },
              { text: " by grouping locations, " },
              { text: "caching Google Maps API", isBold: true },
              { text: " distance results in DB, and " },
              { text: "batch-processing 20 records per call", isBold: true },
              { text: "." },
            ],
            [
              {
                text: "Designed RESTful APIs for contract lifecycle management and maintenance scheduling with holiday/working-time configurations, ensuring ",
              },
              { text: "cross-system data consistency.", isBold: true },
            ],
          ],
          techStack: [
            {
              name: "NestJS",
              image: techIconSources.nestjs,
            },
            {
              name: "TypeScript",
              image: techIconSources.typescript,
            },
            {
              name: "PostgreSQL",
              image: techIconSources.postgresql,
            },
            {
              name: "Gitlab",
              image: techIconSources.gitlab,
            },
          ],
        },
        {
          name: "Back Office for Centralized Exchange",
          role: "Backend Developer",
          duration: "Oct 2025 - Jan 2026",
          details: [
            "Built RBAC authorization and fiat deposit/withdrawal modules for a CEX platform using TypeScript, NestJS, PostgreSQL, and Drizzle ORM.",
            [
              { text: "Resolved " },
              {
                text: "inconsistent state between ZITADEL and local DB",
                isBold: true,
              },
              { text: " by implementing " },
              { text: "compensating rollback", isBold: true },
              {
                text: " (deleting ZITADEL user on local DB failure), ensuring reliable user onboarding.",
              },
            ],
          ],
          techStack: [
            {
              name: "NestJS",
              image: techIconSources.nestjs,
            },
            {
              name: "NextJS",
              image: techIconSources.nextjs,
            },
            {
              name: "TypeScript",
              image: techIconSources.typescript,
            },
            {
              name: "ZITADEL",
              image: techIconSources.zitadel,
            },
            {
              name: "PostgreSQL",
              image: techIconSources.postgresql,
            },
          ],
        },
        {
          name: "Happy Digital Bank (HDBank C360)",
          role: "Backend Developer",
          duration: "Dec 2024 - Oct 2025",
          details: [
            [
              {
                text: "Improved cross-database accounting entry processing by ",
              },
              { text: "~30% for hundreds of records", isBold: true },
              {
                text: " between Treasury (BS) and General Ledger (GL) modules by ",
              },
              {
                text: "optimizing batch operations across separate databases",
                isBold: true,
              },
              { text: " without foreign key constraints." },
            ],
            "Built Treasury features for a digital banking system using Java, Spring Boot microservices, Jmix, and PostgreSQL, including contract CRUD, accounting integration, and automated reminder jobs.",
            [
              {
                text: "Implemented General Ledger features including account history lookup, ",
              },
              {
                text: "backdated entry adjustments with approval workflows",
                isBold: true,
              },
              { text: ", and " },
              {
                text: "automated payroll accounting entries",
                isBold: true,
              },
              { text: " for bank-wide salary processing." },
            ],
          ],
          techStack: [
            {
              name: "Java",
              image: techIconSources.java,
            },
            {
              name: "Spring Boot",
              image: techIconSources.spring,
            },
            {
              name: "Jmix",
              image: techIconSources.jmix,
            },
            {
              name: "PostgreSQL",
              image: techIconSources.postgresql,
            },
            {
              name: "Gitlab",
              image: techIconSources.gitlab,
            },
            {
              name: "Jira",
              image: techIconSources.jira,
            },
          ],
        },
        {
          name: "eNPS - Internal HR Survey",
          role: "Frontend Developer",
          duration: "Nov 2024 - Dec 2024",
          details: [
            "Developed internal HR survey features using TypeScript, ReactJS, Zustand, and React Query, including search, filter, draft, and edit workflows.",
          ],
          techStack: [
            {
              name: "ReactJS",
              image: techIconSources.react,
            },
            {
              name: "TypeScript",
              image: techIconSources.typescript,
            },
            {
              name: "Zustand",
              image: techIconSources.zustand,
            },
            {
              name: "Ant Design",
              image: techIconSources.antDesign,
            },
            {
              name: "Tailwind CSS",
              image: techIconSources.tailwindcss,
            },
          ],
        },
        {
          name: "CTD eConstruction (Coteccons ERP)",
          role: "Frontend Developer",
          duration: "Sep 2024 - Dec 2024",
          details: [
            "Enhanced QS module UI for warehouse confirmation and reporting using React Query, Zustand, and customized Ant Design components.",
          ],
          techStack: [
            {
              name: "ReactJS",
              image: techIconSources.react,
            },
            {
              name: "TypeScript",
              image: techIconSources.typescript,
            },
            {
              name: "Zustand",
              image: techIconSources.zustand,
            },
            {
              name: "Ant Design",
              image: techIconSources.antDesign,
            },
            {
              name: "Tailwind CSS",
              image: techIconSources.tailwindcss,
            },
          ],
        },
      ],
    },
  ],
  education: [
    {
      school: "University of Information Technology – VNU, HCM City",
      degree: "Bachelor of Information Systems",
      period: "2021 - 2025",
      gpa4: "3.3",
      gpa10: "8.24",
    },
  ],
  certificates: [
    {
      name: "TOEIC Listening and Reading",
      issuer: "ETS",
      issuerLogo: portfolioImages.certificate.ets,
      score: "715",
      issuedDate: "Issued Oct 2025",
      image: {
        src: "/img/toeicLR.jpg",
        width: 800,
        height: 560,
      },
    },
    {
      name: "TOEIC Speaking and Writing",
      issuer: "ETS",
      issuerLogo: portfolioImages.certificate.ets,
      score: "270",
      issuedDate: "Issued Aug 2025",
      image: {
        src: "/img/toeicSW.jpg",
        width: 1024,
        height: 558,
      },
    },
    {
      name: "SQL (Intermediate)",
      issuer: "HackerRank",
      issuerLogo: portfolioImages.certificate.hackerrank,
      issuedDate: "Issued Apr 2023",
      link: "https://www.hackerrank.com/certificates/c76b647eef86",
    },
  ],
};
