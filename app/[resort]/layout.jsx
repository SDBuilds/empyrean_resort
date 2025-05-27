import BhilaiNavbar from "@/components/navbars/BhilaiNavbar";
import BalodNavbar from "@/components/navbars/BalodNavbar";
import BhilaiFooter from "@/components/footers/BhilaiFooter";
import BalodFooter from "@/components/footers/BalodFooter";

export default function ResortLayout({ children, params }) {
  const { resort } = params;

  return (
    <>
      {resort === 'bhilai' ? <BhilaiNavbar /> : <BalodNavbar />}
      {children}
      {resort === 'bhilai' ? <BhilaiFooter /> : <BalodFooter />}
    </>
  );
} 