import BalodMeeting from './balod';
import BhilaiMeeting from './bhilai';
import { notFound } from 'next/navigation';

export default function MeetingPage({ params }) {
  const { resort } = params;

  if (resort === 'balod') return <BalodMeeting/>;
  if (resort === 'bhilai') return <BhilaiMeeting />;

  return notFound();
}
