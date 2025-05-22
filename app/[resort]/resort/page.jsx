import BalodResort from './balod';
import BhilaiResort from './bhilai';
import { notFound } from 'next/navigation';

export default function WeddingPage({ params }) {
  const { resort } = params;

  if (resort === 'balod') return <BalodResort />;
  if (resort === 'bhilai') return <BhilaiResort />;

  return notFound();
}
