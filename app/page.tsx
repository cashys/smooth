'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    title: "The Evolution of Animation in Web Design",
    excerpt: "From basic transitions to complex motion design, explore how web animations have transformed the digital landscape.",
    date: "Nov 17, 2023",
    readTime: "5 min read",
    category: "Design",
    gradient: "from-pink-500 to-violet-500",
    slug: "evolution-of-animation"
  },
  {
    title: "Building Performant Animations",
    excerpt: "Learn how to create smooth, efficient animations that don't compromise your website's performance.",
    date: "Nov 15, 2023",
    readTime: "7 min read",
    category: "Performance",
    gradient: "from-blue-500 to-cyan-500",
    slug: "building-performant-animations"
  },
  {
    title: "The Psychology of Motion Design",
    excerpt: "Understanding how motion affects user perception and engagement in digital interfaces.",
    date: "Nov 12, 2023",
    readTime: "6 min read",
    category: "UX Design",
    gradient: "from-green-500 to-teal-500",
    slug: "psychology-of-motion-design"
  }
];

export default function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Scroll handler for fade out effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 200;
      const opacity = Math.max(0, 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center p-4 relative">
        <div className="gritty-texture" />
        
        <div className="text-center z-10">
          <h1 className="title text-8xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-transparent bg-clip-text">
            smooth.
          </h1>

          <p className="description text-2xl text-gray-400 mb-12 max-w-2xl">
            Experience the future of motion design with our cutting-edge animation framework.
          </p>

          <div className="flex gap-6 justify-center mt-12">
            <Link
              href="/message"
              className="nav-button px-8 py-4 rounded-xl text-xl bg-violet-600 hover:bg-violet-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/message"
              className="nav-button px-8 py-4 rounded-xl text-xl border border-violet-600 hover:bg-violet-600/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-element-1 absolute -z-10 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-3xl top-1/4 -right-48 animate-float" />
        <div className="bg-element-2 absolute -z-10 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl -bottom-24 -left-48 animate-float-delayed" />

        <div 
          className="arrow-container absolute bottom-12 left-1/2 -translate-x-1/2"
          style={{ opacity: scrollOpacity }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-gray-500 animate-bounce"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="px-4 py-24 max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold mb-16 text-center bg-gradient-to-r from-purple-500 to-violet-500 text-transparent bg-clip-text leading-relaxed pb-1">
          Latest Insights
        </h2>
        
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`}
              key={index}
              className="blog-post cursor-pointer"
            >
              <article className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 h-full transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className={`category text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r ${post.gradient} inline-block`}>
                  {post.category}
                </div>
                
                <h3 className="text-2xl font-bold mt-6 mb-4 hover:text-violet-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-lg text-gray-400 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-base text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 to-violet-600/0 hover:from-violet-600/5 hover:to-violet-600/5 transition-all duration-300" />
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
