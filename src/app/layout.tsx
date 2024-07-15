import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KUWAIT CHEMICAL HOUSE COMPANY",
  description: "KUWAIT CHEMICAL HOUSE COMPANY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
