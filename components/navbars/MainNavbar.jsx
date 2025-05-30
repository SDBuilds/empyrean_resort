"use client";
import BaseNavbar from "./BaseNavbar";

export default function MainNavbar() {
  const menuItems = [
    { text: "HOME", href: "/" },
    { text: "EVENTS", href: "/events" },
    { text: "GALLERY", href: "/gallery" },
    { text: "CONTACT US", href: "/contact" },
    { text: "CAREERS", href: "https://in.indeed.com/cmp/Chouhan-Automobiles-LLP" },
  ];

  const dropdownItems = [
    {
      title: "Empyrean Resort, Bhilai",
      description: "Luxury in the heart of the city",
      href: "/bhilai",
    },
    {
      title: "Empyrean Lake Resort, Balod",
      description: "Serene lakeside retreat",
      href: "/balod",
    },
  ];

  return (
    <BaseNavbar
      logo="/media/Bhilai/ChouhanG.png"
      logoAlt="Empyrean Hotels"
      menuItems={menuItems}
      bookNowUrl="https://www.makemytrip.com/hotels/empyrean_lake_resort-details-balod.html"
      hasDropdown={true}
      dropdownItems={dropdownItems}
    />
  );
}
