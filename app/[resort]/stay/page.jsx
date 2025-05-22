import BalodStay from './balod';
import BhilaiStay from './bhilai';
import { notFound } from 'next/navigation';

export default function WeddingPage({ params }) {
  const { resort } = params;

  if (resort === 'balod') return <BalodStay />;   
  if (resort === 'bhilai') return <BhilaiStay />;

  return notFound();
}
