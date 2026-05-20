import type { PortfolioProfile } from "@/app/(portfolio)/data/profile";

type CertificatesSectionProps = {
  certificates: PortfolioProfile["certificates"];
};

/**
 * Renders the Certificates section from the certificate list.
 *
 * @param props List of certificates, issuers, and years.
 * @returns A list-based Certificates block.
 */
export function CertificatesSection({ certificates }: CertificatesSectionProps) {
  return (
    <article className="py-2">
      <h2 className="mb-4 text-2xl font-semibold">Certificates</h2>
      <ul className="space-y-3">
        {certificates.map((item) => (
          <li key={`${item.name}-${item.year}`} className="space-y-1">
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-base text-muted">
              {item.issuer} - {item.year}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
