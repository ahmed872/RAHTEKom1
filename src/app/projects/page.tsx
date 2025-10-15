'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import Link from 'next/link';
import { projects, categories } from '../../data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="neon-text">My Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my latest work in web development, 3D experiences, and creative design
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'glass-effect text-white hover:neon-border'
                }`}
                style={selectedCategory === category ? {
                  background: 'linear-gradient(135deg, #C9A227 0%, #8B5CF6 100%)',
                  boxShadow: '0 4px 15px rgba(201, 162, 39, 0.3)',
                } : {}}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="glass-effect rounded-lg overflow-hidden group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-neon-lime/20 to-neon-green/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: hoveredProject === project.id ? 1.1 : 1,
                        rotate: hoveredProject === project.id ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-6xl"
                    >
                      {project.category === 'Web Development' && '🌐'}
                      {project.category === 'Web Application' && '💻'}
                      {project.category === '3D Experience' && '🎨'}
                      {project.category === 'UI/UX Design' && '✨'}
                    </motion.div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/70 flex items-center justify-center"
                  >
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 font-bold rounded-lg transition-all duration-300 text-white"
                      style={{
                        background: 'linear-gradient(135deg, #C9A227 0%, #8B5CF6 100%)',
                        boxShadow: '0 4px 15px rgba(201, 162, 39, 0.3)',
                      }}
                    >
                      View Live
                    </Link>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold neon-text">{project.category}</span>
                    {project.featured && (
                      <span className="text-xs text-white px-2 py-1 rounded-full font-bold" style={{
                        background: 'linear-gradient(135deg, #C9A227 0%, #8B5CF6 100%)',
                      }}>
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-royal-gold group-hover:to-royal-purple group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full text-gray-300"
                        style={{
                          border: '1px solid rgba(201, 162, 39, 0.3)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-400">No projects found in this category.</p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center glass-effect p-12 rounded-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="neon-text">Have a Project in Mind?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let’s collaborate and create something amazing together. I’m always excited to work on new and challenging projects.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-white"
              style={{
                background: 'linear-gradient(135deg, #C9A227 0%, #8B5CF6 100%)',
                boxShadow: '0 4px 15px rgba(201, 162, 39, 0.3)',
              }}
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

