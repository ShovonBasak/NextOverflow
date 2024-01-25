import "./globals.css";
import type { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "NextFlow",
  description:
    "A community driven platform for asking and answering programming questions. Get help share knowledge, and collaborate with developers around the world. Explore topics in web development, mobile app development, algorithms, data structure, and more.",
  icons: {
    icon: "@/public/images/site-logo.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <ThemeProvider>
          <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
        </ThemeProvider>
      </ClerkProvider>
    </html>
  );
}
