import BhilaiPage from './bhilai';;
import BalodPage from './balod';
import { notFound } from 'next/navigation';

export default function MainPage({ params }) {
  const { resort } = params;

  if (resort === 'bhilai') return <BhilaiPage />;
  if (resort === 'balod') return <BalodPage />;

  return notFound();
}
