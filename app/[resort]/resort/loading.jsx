"use client";

export default function Loading({ message }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600 mb-8"></div>
      <p className="text-xl text-gray-600 font-medium">{message}</p>
    </div>
  );
} 