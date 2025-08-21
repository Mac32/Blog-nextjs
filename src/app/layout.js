import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Head from 'next/head'
import Footer from "@/components/Footer";
import "./globals.css";
import Hero from "@/components/Hero";
import AppBar from "@/components/AppBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Blog - El blog de Malbo',
  description: '...',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          <title>Blog - El blog de Malbo</title>
          <link rel='icon' href='/logo.ico' />
        </Head>
        <AppBar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
