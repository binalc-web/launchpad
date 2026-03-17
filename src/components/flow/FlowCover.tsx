import { Badge } from "@/components/ui";

/**
 * Flow Cover - Hero section for flow pages.
 * Pixel-perfect implementation from Figma spec.
 * Container: 1440×900, padding 80px, gap 24px
 * Body: 1280×740, gap 64px
 */
export function FlowCover() {
  return (
    <div
      className="flex w-[1440px] max-w-full shrink-0 grow-0 flex-col items-start justify-start gap-6 rounded-[32px] bg-background p-20"
      data-name="Flow Cover"
      role="banner"
      aria-label="Flow cover"
    >
      {/* Body: 1280×740, gap 64px */}
      <div
        className="flex w-[1280px] max-w-full shrink-0 grow-0 flex-col items-start justify-start gap-16"
        data-name="Body"
      >
        {/* Status + Team: 1280×64, gap 8px */}
        <div
          className="flex h-16 w-[1280px] max-w-full shrink-0 grow-0 flex-row items-center justify-start gap-2"
          data-name="Status + Team"
        >
          <Badge
            variant="success"
            className="h-16 w-[334px] shrink-0 grow-0 text-[28px]"
          >
            👍 Design Completed
          </Badge>
        </div>

        {/* Info: 1280×612, gap 40px */}
        <div
          className="flex h-[612px] w-[1280px] max-w-full shrink-0 grow-0 flex-col items-start justify-start gap-10"
          data-name="Info"
        >
          <h1
            className="h-[144px] w-[1280px] max-w-full shrink-0 grow-0 text-left text-[96px] font-normal leading-[144px] text-foreground"
            data-name="Name"
          >
            User Directory Flow
          </h1>
        </div>
      </div>
    </div>
  );
}
