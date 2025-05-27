import BalodDiningPage from './balod';
import BhilaiDiningPage from './bhilai';
import { notFound } from 'next/navigation';

export default function WeddingPage({ params }) {
  const { resort } = params;

  if (resort === 'balod') return <BalodDiningPage />;
  if (resort === 'bhilai') return <BhilaiDiningPage />;

  return notFound();
}
