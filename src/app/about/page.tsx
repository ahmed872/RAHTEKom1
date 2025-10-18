'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current && typeof window !== 'undefined') {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      
      items.forEach((item, index) => {
        gsap.fromTo(item, 
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
          },
          {
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none none',
              once: true,
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const techStack = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    },
    {
      category: '3D & Animation',
      technologies: ['Three.js', 'React Three Fiber', 'WebGL', 'GSAP'],
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'Vercel', 'Figma', 'VS Code', 'REST APIs'],
    },
  ];

  const timeline = [
    {
      date: 'July 1, 2025',
      title: 'Official Launch',
      description: 'Started my journey as a professional web developer and designer, focusing on creating immersive digital experiences.',
    },
    {
      date: '2025',
      title: 'Building Portfolio',
      description: 'Developed multiple projects showcasing expertise in modern web technologies and 3D animations.',
    },
    {
      date: 'Present',
      title: 'Growing & Learning',
      description: 'Continuously expanding skills in cutting-edge technologies and taking on exciting new projects.',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="neon-text">About Me</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
              Passionate about creating stunning web experiences that push the boundaries of what&apos;s possible
            </p>
          </motion.div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 neon-text">My Story</h2>
              <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  I&apos;m Rahat Ekom, a creative web developer and designer dedicated to crafting exceptional digital experiences. 
                  My journey in web development combines technical expertise with artistic vision to create websites and 
                  applications that are not just functional, but truly memorable.
                </p>
                <p>
                  With a focus on modern technologies like React, Next.js, and Three.js, I specialize in building 
                  immersive 3D web experiences that captivate users and bring ideas to life in ways that were previously 
                  unimaginable on the web.
                </p>
                <p>
                  Every project I undertake is an opportunity to push boundaries, learn new techniques, and deliver 
                  solutions that exceed expectations. I believe in the power of clean code, beautiful design, and 
                  seamless user experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6 neon-text">Vision & Values</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: 'Innovation',
                    description: 'Constantly exploring new technologies and creative approaches',
                  },
                  {
                    title: 'Quality',
                    description: 'Delivering pixel-perfect, performant, and accessible solutions',
                  },
                  {
                    title: 'Collaboration',
                    description: 'Working closely with clients to bring their vision to life',
                  },
                  {
                    title: 'Growth',
                    description: 'Continuously learning and improving my craft',
                  },
                ].map((value, index) => (
                  <motion.li
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="neon-text text-2xl mr-3">✦</span>
                    <div>
                      <h4 className="font-bold text-white">{value.title}</h4>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
              <span className="neon-text">My Journey</span>
            </h2>
            <div ref={timelineRef} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 opacity-30" style={{ background: 'linear-gradient(180deg, #C9A227 0%, #8B5CF6 100%)' }}></div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item relative mb-8 sm:mb-12 ${
                    index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:ml-auto'
                  }`}
                >
                  <div className="glass-effect p-6 rounded-lg relative">
                    {/* Timeline Dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-black hidden lg:block" style={{ background: 'linear-gradient(135deg, #C9A227 0%, #8B5CF6 100%)' }}></div>
                    
                    <div className="lg:w-5/12 lg:ml-auto">
                      <span className="neon-text font-bold">{item.date}</span>
                      <h3 className="text-2xl font-bold text-white mt-2 mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
              <span className="neon-text">Technical Stack</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {techStack.map((stack, index) => (
                <motion.div
                  key={stack.category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-4 sm:p-6 rounded-lg"
                >
                  <h3 className="text-lg sm:text-xl font-bold neon-text mb-3 sm:mb-4">{stack.category}</h3>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech) => (
                      <li key={tech} className="text-sm sm:text-base text-gray-300 flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2" style={{ background: 'linear-gradient(135deg, #C9A227 0%, #8B5CF6 100%)' }}></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

