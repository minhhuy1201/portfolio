"use client";

import { LinkedinIcon } from "@/components/portfolio/linkedin-icon";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button, ButtonGroup, Separator, Toolbar, Tooltip } from "@heroui/react";
import { Mail, Phone, FileUser } from "lucide-react";
import { useTheme } from "next-themes";
import { type PointerEvent } from "react";

const BUTTON_MAGNET_STRENGTH_PX = 8;

const contactActions = [
  {
    name: "Resume",
    label: "Open resume",
    icon: FileUser,
    onPress: () => {
      window.open("/pdf/cv.pdf", "_blank", "noopener,noreferrer");
    },
  },
  {
    name: "LinkedIn",
    label: "Open LinkedIn",
    icon: LinkedinIcon,
    onPress: () => {
      window.open(
        "https://www.linkedin.com/in/dminhhuy/",
        "_blank",
        "noopener,noreferrer",
      );
    },
  },
  {
    name: "Mail",
    label: "Send email",
    icon: Mail,
    onPress: () => {
      window.location.href = "mailto:huykirito1201@gmail.com";
    },
  },
  {
    name: "Phone",
    label: "Call phone number",
    icon: Phone,
    onPress: () => {
      window.location.href = "tel:+84708286347";
    },
  },
];

/**
 * Renders persistent contact and theme actions over the portfolio page.
 *
 * @returns A fixed bottom toolbar with contact buttons and the theme toggle.
 */
export function PortfolioToolbar() {
  const { resolvedTheme } = useTheme();
  const themeTooltipLabel = resolvedTheme === "dark" ? "Light Theme" : "Dark Theme";

  const handleButtonPointerMove = (event: PointerEvent<HTMLElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    button.style.setProperty("--button-shift-x", `${x * BUTTON_MAGNET_STRENGTH_PX}px`);
    button.style.setProperty("--button-shift-y", `${y * BUTTON_MAGNET_STRENGTH_PX}px`);
  };

  const handleButtonPointerLeave = (event: PointerEvent<HTMLElement>) => {
    const button = event.currentTarget;

    button.style.setProperty("--button-shift-x", "0px");
    button.style.setProperty("--button-shift-y", "0px");
  };

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <Toolbar
        aria-label="Portfolio contact actions"
        className="group border border-default bg-background/85 px-4 py-3 shadow-lg backdrop-blur transition-[gap,padding,box-shadow,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:px-8 hover:shadow-xl motion-reduce:transition-none"
        isAttached
      >
        <ButtonGroup
          className="gap-0 transition-[gap] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:gap-2 motion-reduce:transition-none"
          size="lg"
          variant="ghost"
        >
          {contactActions.map(({ icon: Icon, label, name, onPress }, index) => (
            <Button
              key={label}
              aria-label={label}
              className="size-14 min-w-14 translate-x-(--button-shift-x) translate-y-(--button-shift-y) transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] [--button-shift-x:0px] [--button-shift-y:0px] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:transition-none"
              isIconOnly
              onPointerLeave={handleButtonPointerLeave}
              onPointerMove={handleButtonPointerMove}
              onPress={onPress}
            >
              {index > 0 ? <ButtonGroup.Separator /> : null}
              <Tooltip delay={0}>
                <Tooltip.Trigger className="flex size-full items-center justify-center">
                  <Icon aria-hidden="true" className="size-7" />
                </Tooltip.Trigger>
                <Tooltip.Content showArrow placement="top">
                  <Tooltip.Arrow />
                  <p>{name}</p>
                </Tooltip.Content>
              </Tooltip>
            </Button>
          ))}
        </ButtonGroup>
        <Separator orientation="vertical" />
        <Tooltip delay={0}>
          <ThemeToggle
            aria-label="Toggle theme"
            className="size-14 min-w-14 translate-x-(--button-shift-x) translate-y-(--button-shift-y) transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] [--button-shift-x:0px] [--button-shift-y:0px] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:transition-none"
            iconClassName="size-7"
            isIconOnly
            onPointerLeave={handleButtonPointerLeave}
            onPointerMove={handleButtonPointerMove}
            size="lg"
            variant="ghost"
          />
          <Tooltip.Content showArrow placement="top">
            <Tooltip.Arrow />
            <p>{themeTooltipLabel}</p>
          </Tooltip.Content>
        </Tooltip>
      </Toolbar>
    </div>
  );
}
