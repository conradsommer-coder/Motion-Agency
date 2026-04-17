'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      router.push('/admin');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="w-full min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif text-white mb-2">Internal System</h1>
          <p className="text-neutral-500 text-sm uppercase tracking-widest">Authorized Personnel Only</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Access Key"
              className="w-full bg-neutral-900 border border-neutral-800 text-center text-white p-4 rounded-sm focus:outline-none focus:border-neutral-600 transition-colors"
            />
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 w-4 h-4" />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-bold uppercase tracking-widest text-xs py-4 hover:bg-neutral-200 transition-colors"
          >
            Authenticate
          </button>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-xs text-center uppercase tracking-wider"
            >
              Access Denied
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
