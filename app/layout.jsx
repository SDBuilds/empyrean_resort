import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import MainFooter from "@/components/footers/MainFooter";
import ConditionalNavbar from "@/components/navbars/ConditionalNavbar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Empyrean Hotels & Resorts | Luxury Resorts & Destination Getaways",
  icons: {
    icon: "/media/Bhilai/ChouhanG.png",
    shortcut: "/media/Bhilai/ChouhanG.png",
    apple: "/media/Bhilai/ChouhanG.png",
  },
  description:
    "Book your stay at Empyrean Hotels & Resorts – premium luxury resorts offering unforgettable experiences, destination weddings, spa retreats & 5-star hospitality.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LenisProvider>
          <ConditionalNavbar /> 
          {children}
          <MainFooter />
        </LenisProvider>
      </body>
    </html>
  );
}
