import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, savePost } from '../utils/blogStore';
import { BlogPost, ContentBlock } from '../types';
import { ArrowLeft, Plus, Image as ImageIcon, Type, Quote, Save, AlignLeft, Grid } from 'lucide-react';
import { motion } from 'framer-motion';

const PostEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [post, setPost] = useState<BlogPost>({
    id: Date.now().toString(),
    title: '',
    excerpt: '',
    category: '',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    image: '',
    layout: 'minimal',
    status: 'published',
    content: []
  });

  useEffect(() => {
    if (id) {
      const existing = getPostById(id);
      if (existing) setPost(existing);
    }
  }, [id]);

  const handleChange = (field: keyof BlogPost, value: any) => {
    setPost(prev => ({ ...prev, [field]: value }));
  };

  const addBlock = (type: ContentBlock['type']) => {
    const newBlock: ContentBlock = 
        type === 'image' ? { type: 'image', src: '', caption: '' } :
        type === 'quote' ? { type: 'quote', value: '' } :
        type === 'heading' ? { type: 'heading', value: '' } :
        { type: 'text', value: '' };
    
    setPost(prev => ({ ...prev, content: [...prev.content, newBlock] }));
  };

  const updateBlock = (index: number, value: any, key: string = 'value') => {
    const newContent = [...post.content];
    // @ts-ignore
    newContent[index][key] = value;
    setPost(prev => ({ ...prev, content: newContent }));
  };

  const removeBlock = (index: number) => {
    setPost(prev => ({ ...prev, content: prev.content.filter((_, i) => i !== index) }));
  };

  const handleSave = () => {
    if (!post.title) return alert('Title is required');
    savePost(post);
    navigate('/admin');
  };

  return (
    <div className="w-full min-h-screen bg-neutral-950 pt-32 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Toolbar */}
        <div className="fixed top-0 left-0 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 z-50 py-4 px-6 flex justify-between items-center">
            <button onClick={() => navigate('/admin')} className="text-neutral-500 hover:text-white flex items-center gap-2 text-xs uppercase font-bold tracking-widest">
                <ArrowLeft size={14} /> Back
            </button>
            <div className="flex items-center gap-4">
                <div className="flex bg-neutral-900 rounded-sm p-1 border border-neutral-800">
                    <button 
                        onClick={() => handleChange('layout', 'minimal')}
                        className={`p-2 rounded-sm ${post.layout === 'minimal' ? 'bg-neutral-800 text-white' : 'text-neutral-500'}`}
                        title="Minimal Layout"
                    >
                        <AlignLeft size={16} />
                    </button>
                    <button 
                        onClick={() => handleChange('layout', 'magazine')}
                        className={`p-2 rounded-sm ${post.layout === 'magazine' ? 'bg-neutral-800 text-white' : 'text-neutral-500'}`}
                        title="Magazine Layout"
                    >
                        <Grid size={16} />
                    </button>
                </div>
                <button onClick={handleSave} className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 flex items-center gap-2">
                    <Save size={14} /> Save
                </button>
            </div>
        </div>

        {/* Metadata Form */}
        <div className="space-y-8 mb-16 border-b border-neutral-900 pb-12">
            <input 
                type="text" 
                placeholder="Article Title" 
                value={post.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full bg-transparent text-5xl md:text-6xl font-serif text-white placeholder:text-neutral-800 focus:outline-none"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Category</label>
                    <input 
                        type="text" 
                        value={post.category}
                        onChange={(e) => handleChange('category', e.target.value)}
                        className="w-full bg-transparent border-b border-neutral-800 py-2 text-white focus:border-white focus:outline-none"
                    />
                </div>
                <div className="space-y-4">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Cover Image URL</label>
                    <input 
                        type="text" 
                        value={post.image}
                        onChange={(e) => handleChange('image', e.target.value)}
                        className="w-full bg-transparent border-b border-neutral-800 py-2 text-white focus:border-white focus:outline-none"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Excerpt</label>
                <textarea 
                    value={post.excerpt}
                    onChange={(e) => handleChange('excerpt', e.target.value)}
                    className="w-full bg-transparent border-b border-neutral-800 py-2 text-white focus:border-white focus:outline-none resize-none"
                    rows={2}
                />
            </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-8">
            {post.content.map((block, idx) => (
                <motion.div key={idx} layout className="relative group pl-12">
                    <div className="absolute left-0 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => removeBlock(idx)} className="text-neutral-600 hover:text-red-500 p-2"><Plus className="rotate-45" size={16} /></button>
                    </div>

                    {block.type === 'text' && (
                        <textarea 
                            value={block.value} 
                            onChange={(e) => updateBlock(idx, e.target.value)}
                            placeholder="Type paragraph..."
                            className="w-full bg-transparent text-neutral-300 text-lg leading-relaxed focus:outline-none resize-none overflow-hidden"
                            onInput={(e) => { e.currentTarget.style.height = "auto"; e.currentTarget.style.height = e.currentTarget.scrollHeight + "px" }}
                        />
                    )}

                    {block.type === 'heading' && (
                        <input 
                            type="text"
                            value={block.value} 
                            onChange={(e) => updateBlock(idx, e.target.value)}
                            placeholder="Heading"
                            className="w-full bg-transparent text-3xl font-serif text-white focus:outline-none mt-8 mb-4"
                        />
                    )}

                    {block.type === 'quote' && (
                        <div className="border-l-2 border-white pl-6 py-2">
                             <textarea 
                                value={block.value} 
                                onChange={(e) => updateBlock(idx, e.target.value)}
                                placeholder="Quote..."
                                className="w-full bg-transparent text-2xl font-serif italic text-white focus:outline-none resize-none"
                            />
                        </div>
                    )}

                    {block.type === 'image' && (
                        <div className="bg-neutral-900 p-4 rounded-sm border border-neutral-800">
                             <input 
                                type="text"
                                value={block.src} 
                                onChange={(e) => updateBlock(idx, e.target.value, 'src')}
                                placeholder="Image URL..."
                                className="w-full bg-transparent text-sm text-blue-400 focus:outline-none mb-2"
                            />
                            {block.src && <img src={block.src} alt="" className="w-full max-h-[400px] object-cover rounded-sm" />}
                            <input 
                                type="text"
                                value={block.caption || ''} 
                                onChange={(e) => updateBlock(idx, e.target.value, 'caption')}
                                placeholder="Caption (optional)"
                                className="w-full bg-transparent text-xs text-neutral-500 focus:outline-none mt-2 text-center"
                            />
                        </div>
                    )}
                </motion.div>
            ))}
        </div>

        {/* Add Block Controls */}
        <div className="mt-16 flex justify-center gap-4 py-8 border-t border-dashed border-neutral-800">
            <button onClick={() => addBlock('text')} className="flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center"><Type size={16} /></div>
                <span className="text-[10px] uppercase font-bold tracking-widest">Text</span>
            </button>
            <button onClick={() => addBlock('heading')} className="flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center"><Type size={24} /></div>
                <span className="text-[10px] uppercase font-bold tracking-widest">Heading</span>
            </button>
            <button onClick={() => addBlock('image')} className="flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center"><ImageIcon size={16} /></div>
                <span className="text-[10px] uppercase font-bold tracking-widest">Image</span>
            </button>
            <button onClick={() => addBlock('quote')} className="flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center"><Quote size={16} /></div>
                <span className="text-[10px] uppercase font-bold tracking-widest">Quote</span>
            </button>
        </div>

      </div>
    </div>
  );
};

export default PostEditor;