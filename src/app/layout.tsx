import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fefefd" },
    { media: "(prefers-color-scheme: dark)", color: "#333" },
  ],
};
export const metadata: Metadata = {
  title: "The Essence League | TEL",
  description: "The essence league",
  authors: [{ name: "Bryan Benson Danquah", url: "https://www.danquodes.com" }],
  openGraph: {
    type: "website",
    url: "https://www.tel.org",
    description: "Non profit organization that helps the needy",
    siteName: "The Essence League",
    images: [
      {
        url: "https:www.tel.org/open_graph_image.png",
      },
    ],
  },
  robots: "index,follow",
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
