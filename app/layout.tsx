import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bitcoin Association Switzerland",
  description: "The Bitcoin Association Switzerland forms an active community of enthusiasts with regular events, try to resolve open legal questions, and educate the public by providing a contact point for media inquiries.",
  keywords: "Bitcoin, Switzerland, Association, Cryptocurrency, Blockchain",
  openGraph: {
    title: "Bitcoin Association Switzerland",
    description: "A bright new dawn for digital transfers, sound money and personal freedom.",
    url: "https://www.bitcoinassociation.ch",
    siteName: "Bitcoin Association Switzerland",
    images: [
      {
        url: "https://images.squarespace-cdn.com/content/v1/5895d62d2994ca86b0cd9807/fe5fab46-02c5-44d0-8de7-74185cd0904c/Bitcoin+Association+Switzerland.png",
        width: 227,
        height: 237,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
