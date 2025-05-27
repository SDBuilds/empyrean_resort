"use client";

import { usePathname } from "next/navigation";
import MainNavbar from "./MainNavbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const hideNavbar = pathname.startsWith("/bhilai") || pathname.startsWith("/balod");

  if (hideNavbar) return null;

  return <MainNavbar />;
}
