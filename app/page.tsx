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
          <h1 className="title text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-transparent bg-clip-text">
            smooth.
          </h1>

          <p className="description text-xl text-gray-400 mb-8 max-w-md">
            Experience the future of motion design with our cutting-edge animation framework.
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <Link
              href="/message"
              className="nav-button px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/message"
              className="nav-button px-6 py-3 rounded-lg border border-violet-600 hover:bg-violet-600/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-element-1 absolute -z-10 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl top-1/4 -right-48 animate-float" />
        <div className="bg-element-2 absolute -z-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -bottom-24 -left-48 animate-float-delayed" />

        <div 
          className="scroll-text absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500"
          style={{ opacity: scrollOpacity }}
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="px-4 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-violet-500 text-transparent bg-clip-text leading-relaxed pb-1">
          Latest Insights
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`}
              key={index}
              className="blog-post cursor-pointer"
            >
              <article className="relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 h-full transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className={`category text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} inline-block`}>
                  {post.category}
                </div>
                
                <h3 className="text-xl font-bold mt-4 mb-2 hover:text-violet-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
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
