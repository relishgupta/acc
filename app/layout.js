
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import GoToTop from "@/components/GoToTop";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anmol Cultural Club - A Non-Profit Organization.",
  description: "Anmol Cultural Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
</Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <GoToTop/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
