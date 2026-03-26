import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Urvashi Pal | Data Analyst Portfolio",
  description: "Portfolio of Urvashi Pal, specializing in Data Science, SQL, Python, and Power BI. Showcasing end-to-end data analytics and supply chain optimization projects.",
  keywords: ["Data Analyst", "Data Science", "SQL", "Python", "Power BI", "Portfolio", "Urvashi Pal"],
  authors: [{ name: "Urvashi Pal" }],
  openGraph: {
    title: "Urvashi Pal | Data Analyst Portfolio",
    description: "Turning Complex Data into Actionable Business Intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-foreground antialiased selection:bg-primary/30 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
