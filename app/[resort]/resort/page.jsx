"use client";
import { Suspense, use } from 'react';
import BalodResort from './balod';
import BhilaiResort from './bhilai';
import Loading from './loading';

export default function ResortPage({ params }) {
  const resolvedParams = use(params);
  const { resort } = resolvedParams;

  return (
    <Suspense
      fallback={
        <Loading
          message={
            resort === 'balod'
              ? 'Loading The Empyrean Lake Resort...'
              : 'Loading The Empyrean Hotel and Resort...'
          }
        />
      }
    >
      {resort === 'balod' ? <BalodResort /> : <BhilaiResort />}
    </Suspense>
  );
}
