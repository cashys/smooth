'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { animate } from 'motion';

export default function Message() {
  const [countdown, setCountdown] = useState(10);
  const router = useRouter();

  useEffect(() => {
    // Animate the message and counter
    animate(
      ".message",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.5 }
    );

    animate(
      ".counter",
      { opacity: [0, 1] },
      { duration: 0.5, delay: 0.3 }
    );

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      <div className="gritty-texture" />
      
      {/* Floating background elements */}
      <div className="bg-element-1 fixed -z-10 w-[40rem] h-[40rem] bg-violet-600/20 rounded-full blur-3xl top-[-10rem] -right-[15rem]" />
      <div className="bg-element-2 fixed -z-10 w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full blur-3xl bottom-[-10rem] -left-[15rem]" />

      {/* Home button */}
      <Link
        href="/"
        className="fixed top-8 left-8 text-gray-400 hover:text-white transition-colors z-10"
        aria-label="Back to home"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </Link>

      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="message opacity-0 text-center max-w-3xl">
          <p className="text-3xl text-gray-300 mb-12">
            I didn&apos;t know what to do with that button, but the landing page looked kind of weird without it.
          </p>
          <p className="text-2xl text-gray-400">- Cash</p>
        </div>
        
        <div className="counter opacity-0 fixed bottom-12 text-gray-500 text-xl">
          Redirecting you back to the landing page in {countdown} seconds...
        </div>
      </div>
    </main>
  );
}
