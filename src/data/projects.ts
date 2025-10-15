export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  image: string;
  liveUrl: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    id: 'led-lime',
    title: 'LED Lime - Electronic Billboards',
    description: 'Advanced electronic billboard solutions website with modern design and interactive features.',
    longDescription: 'A comprehensive website for an electronic billboard company specializing in LED displays for gas stations, road projects, and commercial advertising. Features include service showcases, portfolio gallery, and contact integration.',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Responsive Design'],
    image: '/projects/led-lime.png',
    liveUrl: 'https://led-lime.vercel.app/',
    featured: true,
    date: '2025-01-15',
  },
  {
    id: 'anfask-thm1',
    title: 'Anfask Thm - Smoking Cessation Platform',
    description: 'Interactive platform supporting individuals in their journey to quit smoking with community features.',
    longDescription: 'A comprehensive smoking cessation platform developed by respiratory therapy students. Features include daily progress tracking, mood monitoring, group chat rooms, achievement badges, and inspirational content from successful quitters.',
    category: 'Web Application',
    tags: ['Next.js', 'React', 'Community Features', 'Health Tech'],
    image: '/projects/anfask-thm1.png',
    liveUrl: 'https://anfask-thm1.vercel.app',
    featured: true,
    date: '2025-02-10',
  },
];

export const categories = ['All', 'Web Development', 'Web Application', '3D Experience', 'UI/UX Design'];

// Helper function to get projects by category
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

// Helper function to get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

// Helper function to get recent projects (last 3)
export function getRecentProjects(limit: number = 3): Project[] {
  return [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

