import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jayasriraam — Frontend Developer",
  description:
    "Frontend developer, currently at Chennai. Focused on interfaces and experiences, working remotely from India.",
  generator: "Next.js",
  applicationName: "Jayasriraam",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "next.js",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Jayasriraam — Frontend Engineer",
    description:
      "Frontend developer, currently at Chennai. Focused on interfaces and experiences, working remotely from India.",
    url: "https://github.com/jay-raam/",
    siteName: "www.Jayasriraam.me",
    images: [
      {
        url: "#",
        width: 1200,
        height: 630,
        alt: "Jayasriraam — Frontend Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayasriraam — Frontend Developer",
    description:
      "Frontend developer, currently at Chennai. Focused on interfaces and experiences, working remotely from India.",
    creator: "Jayasriraam",
    creatorId: "1243720976552144897",
    images: ["#"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
