"use client";
import BaseNavbar from "./BaseNavbar";

export default function BhilaiNavbar() {
  const menuItems = [
    { text: "HOME", href: "/bhilai" },
    { text: "RESORT", href: "/bhilai/resort" },
    { text: "STAY", href: "/bhilai/stay" },
    { text: "DINING", href: "/bhilai/dining" },
    { text: "OFFERS", href: "/bhilai/offers" },
    { text: "WEDDINGS", href: "/bhilai/wedding" },
    { text: "MEETINGS", href: "/bhilai/meetings" },
    { text: "THINGS TO DO", href: "/bhilai/thingstodo" },
    { text: "CONTACT", href: "/contact" },
  ];

  return (
    <BaseNavbar
      logo="/media/Bhilai/Empyrean Logo.png"
      logoAlt="Empyrean Resort Bhilai"
      menuItems={menuItems}
      bookNowUrl={null}
      shouldRender={(pathname) => pathname.startsWith('/bhilai')}
    />
  );
}