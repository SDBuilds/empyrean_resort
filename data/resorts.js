import MainNavbar from '@/components/navbars/MainNavbar';
import MainFooter from '@/components/footers/MainFooter';
import './globals.css';

export const metadata = {
  title: 'Resort Chain',
  description: 'Experience luxury across our beautiful resorts.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNavbar />
        <main>{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
