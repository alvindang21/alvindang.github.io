import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav, MobileNav } from "@/components/nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { InfoPanel } from "@/components/info-panel";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Alvin Dang",
  description: "Lifecycle marketing leader. I build playbooks for scaling things that matter.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Alvin Dang",
    description: "Lifecycle marketing leader. I build playbooks for scaling things that matter.",
    url: "https://alvindang.com",
    siteName: "Alvin Dang",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvin Dang",
    description: "Lifecycle marketing leader. I build playbooks for scaling things that matter.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${ibmPlexMono.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <div className="fixed top-8 right-8 z-50 flex gap-8 items-center">
            <ThemeToggle />
            <InfoPanel />
          </div>
          <main className="min-h-screen px-8 py-32 md:pl-32 max-w-[1400px] mx-auto">
            <MobileNav />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
