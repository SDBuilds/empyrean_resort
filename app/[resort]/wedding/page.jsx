import BalodWedding from './balod';
import BhilaiWedding from './bhilai';
import { notFound } from 'next/navigation';

export default function WeddingPage({ params }) {
  const { resort } = params;

  if (resort === 'balod') return <BalodWedding/>;
  if (resort === 'bhilai') return <BhilaiWedding />;

  return notFound();
}
