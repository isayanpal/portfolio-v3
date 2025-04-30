import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://isayanpal.vercel.app"),
  title: {
    default: "Sayan Snigdha Pal",
    template: "%s | Sayan Snigdha Pal",
  },
  description: "Developer, Programmer, Engineer",
  openGraph: {
    title: "Sayan Snigdha Pal",
    description: "Developer, Programmer, Engineer",
    url: "https://isayanpal.vercel.app",
    siteName: "Sayan Snigdha Pal",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Sayan Snigdha Pal",
    creator: "@sayanstwt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono bg-[#0c0304] text-white dark max-w-3xl min-h-screen mx-auto relative`}
      >
        <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] fixed",
        )}
      />
        <TooltipProvider delayDuration={0}>
          {children}
          <Navbar />
        </TooltipProvider>
      </body>
    </html>
  );
}
