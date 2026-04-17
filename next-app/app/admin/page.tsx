'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getPosts, deletePost } from '@/utils/blogStore';
import { BlogPost } from '@/types';
import { Plus, Edit2, Trash2, LogOut, Layout } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

export default function AdminDashboardPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deletePost(id);
      setPosts(getPosts());
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="w-full min-h-screen bg-neutral-950 pt-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-neutral-900 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-2">Content Manager</h1>
            <p className="text-neutral-500">Manage your articles and insights.</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 border border-neutral-800 text-neutral-400 hover:text-white hover:border-white transition-all text-xs font-bold uppercase tracking-wider"
            >
              <LogOut size={14} /> Exit
            </button>
            <Link
              href="/admin/new"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-neutral-200 transition-colors text-xs font-bold uppercase tracking-wider"
            >
              <Plus size={14} /> New Article
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-neutral-900/50 border border-neutral-800 p-6 flex items-center justify-between hover:border-neutral-700 transition-colors group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-neutral-800 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-white mb-1">{post.title}</h3>
                  <div className="flex gap-4 text-xs text-neutral-500 uppercase tracking-wide font-mono">
                    <span>{post.date}</span>
                    <span className="text-neutral-700">|</span>
                    <span>{post.category}</span>
                    <span className="text-neutral-700">|</span>
                    <span className="flex items-center gap-1"><Layout size={10} /> {post.layout}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href={`/admin/edit/${post.id}`} className="p-3 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all">
                  <Edit2 size={18} />
                </Link>
                <button onClick={() => handleDelete(post.id)} className="p-3 text-neutral-400 hover:text-red-500 hover:bg-neutral-800 rounded-full transition-all">
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-20 border border-dashed border-neutral-800 text-neutral-600">
              No articles found. Create your first one.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
