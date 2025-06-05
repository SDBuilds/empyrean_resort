"use client";

import { useLenis } from '@/hooks/useLenis';

export function LenisProvider({ children }) {
  useLenis();
  return children;
} 