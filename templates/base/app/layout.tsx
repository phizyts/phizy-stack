import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phizy Stack App",
  description: "Generated by Phizy Stack CLI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
