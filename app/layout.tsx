import type { Metadata } from "next";
import localFont from "next/font/local";
import {Sora} from 'next/font/google'
import "./globals.css";
import Responsivenav from "@/components/Helper/Home/Navbar/Responsivenav";
import SkipToContent from "@/components/Helper/SkipToContent";
import AnimatedBackground from "@/components/Helper/AnimatedBackground";
import CustomCursor from "@/components/Helper/CustomCursor";
import ChatAssistant from "@/components/Helper/ChatAssistant";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const font = Sora({
  weight:["100","200","300","400","500","600","700","800"],
  subsets:["latin"]
})

export const metadata: Metadata = {
  metadataBase: new URL('https://komalshah-portfolio.vercel.app'),
  title: "Komal Shah - Full Stack & AI Developer | Portfolio",
  description: "Innovative Full-Stack & AI Developer specializing in Next.js, React, TypeScript, Python, and modern web technologies. Building scalable, efficient, and user-focused solutions.",
  keywords: ["Full Stack Developer", "AI Developer", "Next.js", "React", "TypeScript", "Python", "Web Development", "Komal Shah", "Portfolio"],
  authors: [{ name: "Komal Shah" }],
  creator: "Komal Shah",
  publisher: "Komal Shah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://komalshah-portfolio.vercel.app",
    title: "Komal Shah - Full Stack & AI Developer",
    description: "Innovative Full-Stack & AI Developer building scalable solutions with Next.js, React, and AI technologies.",
    siteName: "Komal Shah Portfolio",
    images: [
      {
        url: "/hero-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Komal Shah - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Komal Shah - Full Stack & AI Developer",
    description: "Building scalable web solutions with Next.js, React, and AI technologies.",
    images: ["/hero-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        className={`${geistSans.variable} ${geistMono.variable} ${font.className} antialiased`}
      >
       <CustomCursor />
       <ChatAssistant />
       <AnimatedBackground />
       <SkipToContent />
       <Responsivenav />
       {children}
      </body>
    </html>
  );
}
