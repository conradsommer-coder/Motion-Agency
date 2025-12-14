import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getPosts } from '../utils/blogStore';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const { t } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <div className="w-full pt-40 pb-32 bg-neutral-950">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24 border-b border-neutral-900 pb-12">
            <h1 className="text-6xl font-serif text-white mb-6">{t.blog.title}</h1>
            <p className="text-xl text-neutral-500 font-light max-w-xl">{t.blog.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {posts.map((post, idx) => (
                <motion.article 
                    key={post.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer flex flex-col h-full"
                >
                    <Link to={`/blog/${post.id}`} className="block flex-grow">
                        <div className="w-full aspect-[4/3] bg-neutral-900 mb-8 overflow-hidden relative">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000 ease-out-expo opacity-80 group-hover:opacity-100"
                            />
                            {post.layout === 'magazine' && <div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1">Editorial</div>}
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-[10px] font-bold text-white uppercase tracking-widest border border-neutral-800 px-2 py-1">{post.category}</span>
                            <span className="text-xs text-neutral-500 font-mono">{post.date}</span>
                        </div>
                        <h2 className="text-2xl font-serif font-medium leading-tight mb-4 text-neutral-200 group-hover:text-white group-hover:underline decoration-1 underline-offset-4">{post.title}</h2>
                        <p className="text-sm text-neutral-500 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    </Link>
                    <Link to={`/blog/${post.id}`} className="flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:text-neutral-400 transition-colors mt-auto">
                        Read Article <ArrowUpRight size={14} className="ml-2" />
                    </Link>
                </motion.article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;