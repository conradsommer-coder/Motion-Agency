import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostById } from '../utils/blogStore';
import { BlogPost as BlogPostType } from '../types';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    if (id) {
      const found = getPostById(id);
      if (found) setPost(found);
    }
  }, [id]);

  if (!post) return <div className="h-screen flex items-center justify-center text-white">Loading...</div>;

  // LAYOUT RENDERER
  const renderContent = () => {
    return (
        <div className="space-y-12">
            {post.content.map((block, idx) => {
                if (block.type === 'heading') return <h2 key={idx} className="text-3xl font-serif text-white mt-12 mb-6">{block.value}</h2>;
                if (block.type === 'quote') return <blockquote key={idx} className="border-l-2 border-white pl-8 py-2 my-12 text-2xl md:text-3xl font-serif italic text-neutral-200 leading-tight">"{block.value}"</blockquote>;
                if (block.type === 'image') return (
                    <figure key={idx} className="my-12">
                        <img src={block.src} alt={block.caption || ''} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                        {block.caption && <figcaption className="text-center text-xs text-neutral-500 mt-3 font-mono uppercase tracking-wide">{block.caption}</figcaption>}
                    </figure>
                );
                return <p key={idx} className="text-lg md:text-xl text-neutral-400 leading-relaxed font-light">{block.value}</p>;
            })}
        </div>
    );
  };

  // MAGAZINE LAYOUT (Editorial style)
  if (post.layout === 'magazine') {
    return (
        <div className="bg-neutral-950 min-h-screen pb-32">
             {/* Header */}
             <div className="h-[70vh] relative w-full overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                    <div className="max-w-[1400px] mx-auto">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 text-xs font-bold uppercase tracking-widest"><ArrowLeft size={14} /> Back to Insights</Link>
                        <span className="block text-white bg-white/10 backdrop-blur-md px-4 py-2 w-fit text-xs font-bold uppercase tracking-widest mb-6">{post.category}</span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-none max-w-5xl"
                        >
                            {post.title}
                        </motion.h1>
                    </div>
                </div>
             </div>

             <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-3">
                    <div className="sticky top-32 border-t border-neutral-800 pt-6">
                        <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">Published</p>
                        <p className="text-white font-mono text-sm mb-8">{post.date}</p>
                        
                        <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">Share</p>
                        <div className="flex gap-4 text-white text-sm font-medium">
                            <button className="hover:underline">LinkedIn</button>
                            <button className="hover:underline">X (Twitter)</button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-8 lg:col-start-5">
                    <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-12 indent-12 first-letter:text-7xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
                        {post.excerpt}
                    </p>
                    <div className="magazine-content">
                        {renderContent()}
                    </div>
                </div>
             </div>
        </div>
    );
  }

  // MINIMAL LAYOUT (Standard)
  return (
    <div className="bg-neutral-950 min-h-screen pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
             <Link to="/blog" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white mb-12 text-xs font-bold uppercase tracking-widest"><ArrowLeft size={14} /> Back</Link>
             
             <div className="text-center mb-16">
                 <span className="text-xs font-bold text-white uppercase tracking-widest border border-neutral-800 px-3 py-1 mb-6 inline-block">{post.category}</span>
                 <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">{post.title}</h1>
                 <p className="text-neutral-500 font-mono text-sm">{post.date}</p>
             </div>

             <div className="w-full aspect-video bg-neutral-900 mb-16 overflow-hidden">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale" />
             </div>

             <div className="prose prose-invert prose-lg mx-auto">
                <p className="text-xl text-white font-medium mb-12 border-l-4 border-white pl-6">{post.excerpt}</p>
                {renderContent()}
             </div>
        </div>
    </div>
  );
};

export default BlogPost;