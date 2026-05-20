type SkillsSectionProps = {
  skills: string[];
};

/**
 * Renders the Skills section from the provided skills list.
 *
 * @param props Skills that should be displayed.
 * @returns A compact tag-style Skills block.
 */
export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <article className="py-2">
      <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="rounded-full bg-default-100 px-3 py-1 text-base text-muted">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
