import { Skeleton, Spinner } from "@heroui/react";

type LoadingScreenProps = {
  fullScreen?: boolean;
};

/**
 * Shared loading UI for route fallback and first-page overlay.
 */
export function LoadingScreen({ fullScreen = false }: LoadingScreenProps) {
  return (
    <div
      className={[
        "w-full bg-background/95 backdrop-blur-sm",
        fullScreen ? "fixed inset-0 z-50" : "min-h-full",
      ].join(" ")}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="mx-auto flex h-full min-h-screen w-full max-w-4xl flex-col justify-center gap-8 px-6 py-10 sm:px-8 sm:py-14">
        <div className="flex items-center gap-3 text-muted">
          <Spinner size="md" color="accent" />
          <span className="text-sm">chotto matte...</span>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-5">
            <div className="flex flex-1 flex-col gap-3">
              <Skeleton className="h-12 w-2/3 rounded-lg" animationType="shimmer" />
              <Skeleton className="h-4 w-full rounded-lg" animationType="shimmer" />
              <Skeleton className="h-4 w-5/6 rounded-lg" animationType="shimmer" />
            </div>
            <Skeleton className="size-32 shrink-0 rounded-full sm:size-48" animationType="shimmer" />
          </div>

          <div className="space-y-4">
            <Skeleton className="h-5 w-1/3 rounded-lg" animationType="shimmer" />
            <Skeleton className="h-16 w-full rounded-xl" animationType="shimmer" />
            <Skeleton className="h-16 w-full rounded-xl" animationType="shimmer" />
            <Skeleton className="h-16 w-full rounded-xl" animationType="shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
