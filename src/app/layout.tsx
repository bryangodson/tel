import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Essence League | TEL",
  description: "The essence league",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
