import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const InterF = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-Inter",
});

export const metadata: Metadata = {
  title: "Santa Clicker",
  description: "Click On Santa!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterF.variable}`}>
        {children}
      </body>
    </html>
  );
}
