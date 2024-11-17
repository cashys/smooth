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
        className="fixed top-8 left-8 z-50 transition-all duration-300 group"
      >
        <svg 
          className="w-8 h-8 text-gray-400 group-hover:text-violet-400 transition-all duration-300
                   group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]" 
          fill="none" 
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          style={{
            filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.3))'
          }}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>

      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
        <div className="message opacity-0 text-center max-w-sm sm:max-w-xl lg:max-w-3xl px-4">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12">
            I didn&apos;t know what to do with that button, but the landing page looked kind of weird without it.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400">- Cash</p>
        </div>
        
        <div className="counter opacity-0 fixed bottom-8 sm:bottom-12 text-gray-500 text-base sm:text-xl">
          Redirecting you back to the landing page in {countdown} seconds...
        </div>
      </div>
    </main>
  );
}
