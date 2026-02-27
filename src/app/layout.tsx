import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import { LanguageProvider } from "./providers/LanguageProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { FilterProvider } from "./providers/FilterProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  title: "Matsuri Tracker",
  description: "Track Japanese festivals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerifJP.variable} antialiased bg-gray-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <FilterProvider>
              <Navbar />
              {children}
            </FilterProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
