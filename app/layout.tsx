import type { Metadata } from "next";
import { Inter, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { Preloader } from "@/components/layout/preloader";
import { CommandTerminal } from "@/components/ui/command-terminal";
import { VitalsHUD } from "@/components/ui/vitals-hud";
import { AudioToggle } from "@/components/ui/audio-toggle";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohit - Front-End & Android Developer",
  description: "Astonishing portfolio of a Full Stack & Android Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} ${greatVibes.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <CommandTerminal />
          <VitalsHUD />
          <AudioToggle />
          <SmoothScroll>
            <Navbar />
            <main className="min-h-screen pt-16">
              {children}
            </main>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
