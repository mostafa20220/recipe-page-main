import type { Metadata } from "next";
import { Outfit, Young_Serif } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600","700"], variable: "--font-outfit" });
const youngSerif = Young_Serif({ subsets: ["latin"], weight: ["400"], variable: "--font-young-serif" });

export const metadata: Metadata = {
  title: "Recipe-Page",
  description: "Front-End Mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = `${outfit.variable} ${youngSerif.variable}`;
  return (
    <html lang="en">
      <body className={fonts}>{children}</body>
    </html>
  );
}
