"use client";

import { Avatar, Button, Modal, Separator } from "@heroui/react";
import Image from "next/image";
import { portfolioImages } from "@/app/(portfolio)/data/images";
import type { PortfolioProfile } from "@/app/(portfolio)/data/profile";

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
 * @param props List of certificates, issuers, scores, and validity periods.
 * @returns A timeline-based Certificates block.
 */
export function CertificatesSection({ certificates }: CertificatesSectionProps) {
  return (
    <article className="py-2">
      <h2 className="mb-4 text-2xl font-semibold">Certificates</h2>
      <ul className="space-y-4">
        {certificates.map((item) => (
          <li key={`${item.name}-${item.score}`}>
            <Modal>
              <Button
                className="h-auto! w-full min-w-0 items-stretch justify-start gap-4 rounded-none px-0! py-0! text-left text-foreground hover:text-foreground"
                variant="ghost"
              >
                <Separator
                  aria-hidden="true"
                  className="self-stretch"
                  orientation="vertical"
                  variant="tertiary"
                />

                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex min-w-0 items-start gap-3">
                    <Avatar size="sm">
                      <Avatar.Image
                        alt={`${item.issuer} logo`}
                        src={portfolioImages.certificate.ets}
                      />
                      <Avatar.Fallback>
                        {item.issuer.slice(0, 2)}
                      </Avatar.Fallback>
                    </Avatar>
                    <div className="min-w-0 space-y-1">
                      <p className="truncate text-lg font-medium">
                        {item.name} - {item.score}
                      </p>
                      <p className="text-base text-muted">
                        {item.validityPeriod}
                      </p>
                      <p className="text-base italic text-muted">
                        Click to see image
                      </p>
                    </div>
                  </div>
                </div>
              </Button>
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
        ))}
      </ul>
    </article>
  );
}
