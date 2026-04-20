import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowtics — Smart ERP for seamless business flow",
  description: "Flowtics is a modern SaaS ERP platform for accounting, inventory, sales and operations.",
  metadataBase: new URL("https://example.com/"),
  openGraph: {
    title: "Flowtics — Smart ERP for seamless business flow",
    description: "Flowtics helps businesses unify accounting, inventory, CRM, and operations in one elegant ERP platform.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
