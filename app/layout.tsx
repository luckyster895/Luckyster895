import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhinav Saxena | Martech Developer",
  description:
    "Abhinav Saxena is a 7X Salesforce Certified Martech Developer working with Marketing Cloud, Data Cloud and Agentforce. Explore his work and career journey.",
  openGraph: {
    title: "Abhinav Saxena | Martech Developer",
    description: "7X Salesforce Certified. Marketing Cloud, Data Cloud and Agentforce.",
    type: "website",
  },
};

// Light by default; only an explicit "dark" choice switches it on.
const themeScript = `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
