import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terminal Technologies | Precision Engineering for Global Mobility",
  description: "Terminal Technologies is one of India’s leading manufacturers of terminals, connectors, fuse boxes, relay bases and interconnection solutions serving automotive, electronics, electrical and appliance industries globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
    >
      <body className="min-h-full flex flex-col bg-background-custom text-text-custom font-inter">
        {children}
      </body>
    </html>
  );
}
