import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { AppProviders } from "./providers/app-providers";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMonoNerd = localFont({
  src: [
    {
      path: "../public/fonts/JetBrainsMonoNerdFont-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/JetBrainsMonoNerdFont-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/JetBrainsMonoNerdFont-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/JetBrainsMonoNerdFont-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-jetbrains-mono-nerd",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huy Minh Dao",
  description: "Portfolio website built with Next.js and HeroUI v3.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ebGaramond.variable} ${jetbrainsMonoNerd.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
