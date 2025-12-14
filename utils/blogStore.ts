import { BlogPost, ContentBlock } from '../types';

const STORAGE_KEY = 'motion_blog_posts';

// Initial dummy data if storage is empty
const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "The Algorithmic Shift: Redefining SEO in 2024",
    excerpt: "Search is no longer just about keywords. It is about semantic authority and how AI interprets intent.",
    category: "Strategy",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    layout: 'magazine',
    status: 'published',
    content: [
      { type: 'text', value: "The digital landscape is shifting beneath our feet. What worked in 2023 is now obsolete. The introduction of Generative Search Experiences (SGE) has fundamentally changed how we must approach visibility." },
      { type: 'heading', value: "The Death of Keywords" },
      { type: 'text', value: "Keywords are merely proxies for intent. The future belongs to those who answer the user's underlying question with authority and depth. We are seeing a transition from string matching to concept matching." },
      { type: 'image', src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", caption: "Data visualization of semantic search patterns." },
      { type: 'quote', value: "Content is no longer King. Context is God." },
      { type: 'text', value: "To survive this shift, brands must become entities of knowledge, not just publishers of content." }
    ]
  },
  {
    id: '2',
    title: "Synapse AI™: Case Study",
    excerpt: "How we reduced lead response time by 99% for a luxury developer in Tulum.",
    category: "Case Study",
    date: "Nov 05, 2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    layout: 'minimal',
    status: 'published',
    content: [
      { type: 'text', value: "Speed to lead is the single most important metric in real estate sales. In a market like Tulum, where international interest is high but time zones vary, a human team cannot compete with AI." },
      { type: 'heading', value: "The Problem" },
      { type: 'text', value: "Our client was losing 40% of leads due to delayed responses during off-hours. The manual qualification process took an average of 4 hours." }
    ]
  }
];

export const getPosts = (): BlogPost[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_POSTS));
    return INITIAL_POSTS;
  }
  return JSON.parse(stored);
};

export const getPostById = (id: string): BlogPost | undefined => {
  const posts = getPosts();
  return posts.find(p => p.id === id);
};

export const savePost = (post: BlogPost): void => {
  const posts = getPosts();
  const existingIndex = posts.findIndex(p => p.id === post.id);
  
  if (existingIndex >= 0) {
    posts[existingIndex] = post;
  } else {
    posts.unshift(post);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

export const deletePost = (id: string): void => {
  const posts = getPosts();
  const filtered = posts.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};