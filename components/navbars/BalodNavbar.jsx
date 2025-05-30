"use client";
import BaseNavbar from "./BaseNavbar";

export default function BalodNavbar() {
  const menuItems = [
    { text: "HOME", href: "/balod" },
    { text: "RESORT", href: "/balod/resort" },
    { text: "STAY", href: "/balod/stay" },
    { text: "DINING", href: "/balod/dining" },
    { text: "WEDDINGS", href: "/balod/wedding" },
    { text: "OFFERS", href: "/balod/offers" },
    { text: "MEETINGS", href: "/balod/meetings" },
    { text: "THINGS TO DO", href: "/balod/thingstodo" },
    { text: "CONTACT", href: "/contact" },
  ];

  return (
    <BaseNavbar
      logo="/media/Balod/EmpyreanLogo.png"
      logoAlt="Empyrean Lake Resort"
      logoWidth={150}
      logoHeight={50}
      menuItems={menuItems}
      bookNowUrl="https://www.makemytrip.com"
      shouldRender={(pathname) => pathname.startsWith('/balod')}
    />
  );
}