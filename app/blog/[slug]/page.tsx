'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const blogPosts = {
  "evolution-of-animation": {
    title: "The Evolution of Animation in Web Design",
    date: "Nov 17, 2024",
    readTime: "5 min read",
    category: "Design",
    gradient: "from-pink-500 to-violet-500",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
    ]
  },
  "building-performant-animations": {
    title: "Building Performant Animations",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    category: "Performance",
    gradient: "from-blue-500 to-cyan-500",
    content: [
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus."
    ]
  },
  "psychology-of-motion-design": {
    title: "The Psychology of Motion Design",
    date: "Nov 12, 2024",
    readTime: "6 min read",
    category: "UX Design",
    gradient: "from-green-500 to-teal-500",
    content: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
    ]
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug as keyof typeof blogPosts];

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add animation delays to paragraphs
    const paragraphs = document.querySelectorAll('.blog-paragraph');
    paragraphs.forEach((paragraph, index) => {
      (paragraph as HTMLElement).style.animationDelay = `${index * 0.1}s`;
    });

    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (!post) return null;

  return (
    <main className={`min-h-screen relative overflow-hidden bg-black ${post ? 'screen-blur-overlay' : ''}`}>
      <div className="gritty-texture" />
      
      {/* Floating background elements */}
      <div className="bg-element-1 fixed -z-10 w-[40rem] h-[40rem] bg-violet-600/20 rounded-full blur-3xl top-[-10rem] -right-[15rem] transition-transform duration-200" />
      <div className="bg-element-2 fixed -z-10 w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full blur-3xl bottom-[-10rem] -left-[15rem] transition-transform duration-200" />

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

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <header className="blog-header opacity-0 mb-16 sm:mb-20 text-center">
          <div className={`inline-block text-sm sm:text-lg font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r ${post.gradient} mb-6 sm:mb-8`}>
            {post.category}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 text-transparent bg-clip-text leading-relaxed pb-1 px-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 sm:gap-6 text-gray-400 text-base sm:text-xl">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose prose-invert prose-violet prose-lg max-w-none px-4">
          {post.content.map((paragraph, index) => (
            <p 
              key={index}
              className="blog-paragraph opacity-0 text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 animate-fade-in"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
