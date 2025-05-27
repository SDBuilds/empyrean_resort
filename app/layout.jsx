import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import MainFooter from "@/components/footers/MainFooter";
import ConditionalNavbar from "@/components/navbars/ConditionalNavbar"; // NEW

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Empyrean Hotels & Resorts",
  icons: {
    icon: "/media/Bhilai/ChouhanG.png",
    shortcut: "/media/Bhilai/ChouhanG.png",
    apple: "/media/Bhilai/ChouhanG.png",
  },
  description: "Website for Empyrean Hotels & Resorts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LenisProvider>
          <ConditionalNavbar /> {/* moved conditional logic here */}
          {children}
          <MainFooter />
        </LenisProvider>
      </body>
    </html>
  );
}
