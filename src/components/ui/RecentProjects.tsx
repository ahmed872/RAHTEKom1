'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getRecentProjects } from '../../data/projects';

export default function RecentProjects() {
  const recentProjects = getRecentProjects(3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Recent Projects</span>
          </h2>
          <p className="text-xl text-gray-400">Check out my latest work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-lg overflow-hidden group"
            >
              <div className="relative h-48 flex items-center justify-center" style={{
                background: 'linear-gradient(135deg, rgba(201, 162, 39, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
              }}>
                <div className="text-5xl">
                  {project.category === 'Web Development' && '🌐'}
                  {project.category === 'Web Application' && '💻'}
                  {project.category === '3D Experience' && '🎨'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-royal-gold group-hover:to-royal-purple group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block neon-text hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-block px-8 py-4 neon-border font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-white hover:bg-gradient-to-r hover:from-royal-gold hover:to-royal-purple"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

