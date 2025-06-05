import MainNavbar from '@/components/navbars/MainNavbar';
import MainFooter from '@/components/footers/MainFooter';

export const metadata = {
  title: 'Our Resorts - Empyrean Resorts',
  description: 'Discover our collection of luxury resorts offering world-class amenities and unforgettable experiences.',
};

export default function ResortsLayout({ children }) {
  return (
    <>
      <MainNavbar />
      <main className="min-h-screen pt-20">
        {children}
      </main>
      <MainFooter />
    </>
  );
} 