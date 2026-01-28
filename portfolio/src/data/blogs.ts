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
