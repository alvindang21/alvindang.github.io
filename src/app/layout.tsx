import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Alvin Dang",
  description: "Alvin Dang. Lifecycle marketing, Toronto.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Alvin Dang",
    description: "Alvin Dang. Lifecycle marketing, Toronto.",
    url: "https://alvindang.com",
    siteName: "Alvin Dang",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvin Dang",
    description: "Alvin Dang. Lifecycle marketing, Toronto.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fraunces.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ThemeToggle />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
