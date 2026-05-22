"use client";

import type { PortfolioProfile } from "@/app/(portfolio)/data/profile";
import { Avatar, Button, Modal, Separator } from "@heroui/react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

type CertificatesSectionProps = {
  certificates: PortfolioProfile["certificates"];
};

const certificateModalClassNames = {
  backdrop: [
    "data-[entering]:duration-400",
    "data-[entering]:ease-[cubic-bezier(0.16,1,0.3,1)]",
    "data-[exiting]:duration-200",
    "data-[exiting]:ease-[cubic-bezier(0.7,0,0.84,0)]",
  ].join(" "),
  container: [
    "data-[entering]:animate-in",
    "data-[entering]:fade-in-0",
    "data-[entering]:zoom-in-95",
    "data-[entering]:duration-400",
    "data-[entering]:ease-[cubic-bezier(0.16,1,0.3,1)]",
    "data-[exiting]:animate-out",
    "data-[exiting]:fade-out-0",
    "data-[exiting]:zoom-out-95",
    "data-[exiting]:duration-200",
    "data-[exiting]:ease-[cubic-bezier(0.7,0,0.84,0)]",
  ].join(" "),
};

/**
 * Renders the Certificates section from the certificate list.
 *
 * @param props List of certificates, issuers, scores, and issued dates.
 * @returns A timeline-based Certificates block.
 */
export function CertificatesSection({
  certificates,
}: CertificatesSectionProps) {
  return (
    <article className="py-2">
      <h2 className="mb-4 text-2xl font-semibold">Certificates</h2>
      <ul className="space-y-4">
        {certificates.map((item) => {
          const certificateTitle = item.score
            ? `${item.name} - ${item.score}`
            : item.name;
          const certificateContent = (
            <div className="pointer-events-none relative z-10 flex gap-4">
              <Separator
                aria-hidden="true"
                className="self-stretch"
                orientation="vertical"
                variant="tertiary"
              />

              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex min-w-0 items-center gap-3">
                  <Avatar size="sm">
                    <Avatar.Image
                      alt={`${item.issuer} logo`}
                      src={item.issuerLogo}
                    />
                    <Avatar.Fallback>
                      {item.issuer.slice(0, 2)}
                    </Avatar.Fallback>
                  </Avatar>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="flex min-w-0 items-baseline gap-1.5 text-lg font-medium">
                        <span className="truncate">{certificateTitle}</span>
                        <ExternalLink
                          aria-hidden="true"
                          className="lucide lucide-external-link size-4 items-baseline align-bottom translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover/card:translate-x-1 group-hover/card:opacity-100"
                        />
                      </p>
                      <p className="shrink-0 text-base text-muted">
                        {item.issuedDate}
                      </p>
                    </div>
                    <p className="text-base text-muted">{item.issuer}</p>
                  </div>
                </div>
              </div>
            </div>
          );

          if (item.link) {
            return (
              <li
                key={`${item.name}-${item.issuer}`}
                className="group/card relative"
              >
                <a
                  aria-label={`Open ${item.name} certificate`}
                  className="absolute inset-0 z-0 rounded-none"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                />
                {certificateContent}
              </li>
            );
          }

          if (!item.image) {
            return null;
          }

          return (
            <li
              key={`${item.name}-${item.score}`}
              className="group/card relative"
            >
              <Modal>
                <Button
                  className="absolute inset-0 z-0 h-auto! w-full rounded-none bg-transparent! px-0! py-0! hover:bg-transparent! data-[hover=true]:bg-transparent!"
                  variant="ghost"
                >
                  <span className="sr-only">
                    View {item.name} certificate image
                  </span>
                </Button>
                {certificateContent}
                <Modal.Backdrop
                  className={certificateModalClassNames.backdrop}
                  variant="blur"
                >
                  <Modal.Container
                    className={certificateModalClassNames.container}
                    placement="center"
                    size="lg"
                  >
                    <Modal.Dialog className="overflow-hidden sm:max-w-4xl">
                      <Modal.CloseTrigger />
                      <Modal.Header>
                        <Modal.Heading>{item.name}</Modal.Heading>
                      </Modal.Header>
                      <Modal.Body>
                        <Image
                          alt={`${item.name} certificate`}
                          className="h-auto max-h-[65vh] w-full rounded-lg object-contain"
                          height={item.image.height}
                          src={item.image.src}
                          width={item.image.width}
                        />
                      </Modal.Body>
                    </Modal.Dialog>
                  </Modal.Container>
                </Modal.Backdrop>
              </Modal>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
