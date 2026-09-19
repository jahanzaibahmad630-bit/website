import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ALCHE / WORKS",
  description: "Modern interactive 3D portfolio agency site."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
