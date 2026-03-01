import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yassmeen.dev"),
  title: {
    default: "Yassmeen | Flutter Developer",
    template: "%s | Yassmeen",
  },
  description:
    "Flutter developer specializing in Riverpod, Cubit, and scalable mobile architecture. Explore my projects and case studies.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Yassmeen Portfolio",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
