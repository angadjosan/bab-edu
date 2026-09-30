import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Basic App",
  description: "A bare-bones Next.js demo",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <nav className="flex gap-6 border-b border-black/10 px-6 py-4 text-sm font-medium dark:border-white/15">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/fortune" className="hover:underline">
            Fortune
          </Link>
        </nav>
        <main className="flex flex-1 flex-col items-center justify-center gap-6 p-6 text-center">
          {children}
        </main>
      </body>
    </html>
  );
}
