import BalodOffersPage from './balod';
import BhilaiOffersPage from './bhilai';
import { notFound } from 'next/navigation';

export default function OffersPage({ params }) {
  const { resort } = params;

  if (resort === 'balod') return <BalodOffersPage />;
  if (resort === 'bhilai') return <BhilaiOffersPage />;

  return notFound();
}
