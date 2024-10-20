import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Movie Vault",
  description: "An application for your favorite movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" 
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <Script  data-cfasync="false" src="//affordspoonsgray.com/5124eefbaa72ac6102cfa1f1d50092bc/invoke.js"  />
        <Script type='text/javascript' src='//affordspoonsgray.com/2a/86/2b/2a862b1af2220cccdea340b42f065a42.js' />
      </body>
    </html>
  );
}
