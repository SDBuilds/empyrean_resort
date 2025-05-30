import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

// Dynamically import resort pages with loading fallback
const BalodResort = dynamic(() => import('./balod'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  ),
});

const BhilaiResort = dynamic(() => import('./bhilai'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  ),
});

// Valid resort paths
const VALID_RESORTS = ['balod', 'bhilai'];

export default function ResortPage({ params }) {
  const { resort } = params;

  // Validate resort path
  if (!VALID_RESORTS.includes(resort)) {
    return notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      }
    >
      {resort === 'balod' ? <BalodResort /> : <BhilaiResort />}
    </Suspense>
  );
}
