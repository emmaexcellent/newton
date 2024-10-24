import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900" ],
  subsets: ['latin'],
  display: "swap"
})

export const metadata: Metadata = {
  title: "Newton Academy",
  description: "Best Tech Education Platfomr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
