// src/data/stories.js
// Simple spreadsheet-like data source for Daily Mail component
// Your existing manual pages stay exactly the same!

export const allStories = [
   {
  title: "Earthworms Separating by either Trommel or Shaking Deck",
  excerpt: "Modern Earthworm separators are explained in this video by our friendly famer from Tuscany Tony Busatta.",
  author: "Dr. Maria Rossi",
  category: "Technology",
  date: "2025-08-02", // <- Newer date than Tony's
  youtubeId: "o9BGEzvU8RA", // Placeholder for now
  link:"/earthworms/tony-busatta/trommel-sifting",// Future page
  badge: "BREAKING NEWS"
},
       {
    title: "Tony's Revolutionary CFT System: From Vineyard to Manufacturing Excellence",
    excerpt: "Watch as Tony Busatta demonstrates the complete journey from traditional Italian vineyard wisdom to cutting-edge soil technology. This exclusive behind-the-scenes look reveals the precision manufacturing process that's revolutionizing sustainable agriculture.",
    author: "Tony Busatta",
    category: "Earthworms",
    date: "2025-01-30",
    youtubeId: "u4T6M28-CFY", // Real video ID from your template
    link: "/earthworms/tony-busatta/tony-cft", // Points to your existing manual page
    badge: "TODAY'S FEATURE"
  },
  {
    title: "Peter's Wood Chip Selection Secrets: Advanced Carbon Ratio Mastery",
    excerpt: "Master the art of wood chip selection with Peter's advanced techniques for optimal carbon ratios. Learn how different wood types affect soil biology and discover the perfect combinations for explosive plant growth.",
    author: "Peter King",
    category: "Wood Chips", 
    date: "2025-01-29",
    youtubeId: "dQw4w9WgXcQ", // Placeholder until you have Peter's real video
    link: "/wood-chips/peter-king/selection-secrets", // Will be your manual page when created
    badge: "EXCLUSIVE"
  },
  {
    title: "Master Hun's Fermentation Fundamentals: Korean Natural Farming Revealed",
    excerpt: "Unlock the ancient secrets of Korean Natural Farming as Master Hun demonstrates the precise fermentation techniques that create living soil amendments. These time-tested methods are transforming modern agriculture.",
    author: "Master Hun",
    category: "KNF Methods",
    date: "2025-01-29", 
    youtubeId: "dQw4w9WgXcQ", // Placeholder
    link: "/knf/master-hun/fermentation-fundamentals", // Future manual page
    badge: "BREAKTHROUGH"
  },
  {
    title: "The Busatta Vineyard Transformation: Three Generations of Italian Wisdom",
    excerpt: "Follow the incredible transformation of the Busatta family vineyard from depleted soil to thriving ecosystem. This emotional journey reveals how traditional Italian farming wisdom saved a 150-year legacy.",
    author: "Tony Busatta",
    category: "Earthworms",
    date: "2025-01-28",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
    link: "/earthworms/tony-busatta/vineyard-transformation", // Future manual page
    badge: "INSPIRING"
  },
  {
    title: "Soil Biology Breakthrough: Microscopic Life That Transforms Gardens",
    excerpt: "Revolutionary new research reveals how microscopic soil organisms work together to create the perfect growing environment. See the invisible world that makes the difference between struggling and thriving plants.",
    author: "Dr. Sarah Chen",
    category: "Soil Health",
    date: "2025-01-28",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
    link: "/soil-health/microscopic-life", // Future manual page
    badge: "RESEARCH"
  },
  {
    title: "Wood Chip Composting Revolution: Fast-Track Soil Building",
    excerpt: "Discover the revolutionary wood chip composting method that creates rich, living soil in half the time. This game-changing technique is transforming how farmers think about organic matter decomposition.",
    author: "Peter King", 
    category: "Wood Chips",
    date: "2025-01-27",
    youtubeId: "dQw4w9WgXcQ", // Placeholder
    link: "/wood-chips/peter-king/fast-track-composting", // Future manual page
    badge: "GAME CHANGER"
  }
];

// WORKFLOW:
// 1. Create your video
// 2. Create manual page (like you already do)
// 3. Add entry here with real youtubeId and link to your manual page
// 4. Set date to today's date to make it featured
// 5. Daily Mail auto-flow does the rest!