export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  date: string;
  author: string;
  readTime: number; // in minutes
  featured?: boolean;
  image?: string;
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js",
    slug: "building-scalable-react-applications",
    description: "Learn how to structure and scale React applications using Next.js for production-ready web applications.",
    tags: ["Next.js", "React", "Web Development", "Performance"],
    date: "2026-01-27",
    author: "Mutti Ullah",
    readTime: 8,
    featured: true,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
  {
    id: 2,
    title: "Real-time Chat Application with WebSocket",
    slug: "real-time-chat-websocket",
    description: "A deep dive into building real-time chat applications using WebSocket technology and modern frameworks.",
    tags: ["WebSocket", "Node.js", "Real-time", "Socket.io"],
    date: "2026-01-27",
    author: "Mutti Ullah",
    readTime: 10,
    featured: true,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    id: 3,
    title: "Real-time Chat Application with WebSocket",
    slug: "real-time-chat-websocket-copy",
    description: "A deep dive into building real-time chat applications using WebSocket technology and modern frameworks.",
    tags: ["WebSocket", "Node.js", "Real-time", "Socket.io"],
    date: "2026-01-27",
    author: "Mutti Ullah",
    readTime: 10,
    featured: true,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
];
