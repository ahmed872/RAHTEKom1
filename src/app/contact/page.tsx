'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Message*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Message:*\n${formData.message}`;
    
    // WhatsApp number (Egypt)
    const phoneNumber = '201093033884';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank');
    
    // Clear form after opening WhatsApp
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 500);
  };

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/17DWX9YDpw/',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rahatekom2025',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@rahatekom2025',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'rahatekom12@gmail.com',
      link: 'mailto:rahatekom12@gmail.com',
    },
  ];

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="neon-text">Get In Touch</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-effect p-6 sm:p-8 rounded-lg"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 neon-text">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 rounded-lg text-white focus:outline-none transition-colors"
                    style={{
                      borderColor: 'rgba(201, 162, 39, 0.3)',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderImage = 'linear-gradient(135deg, #C9A227, #8B5CF6) 1'}
                    onBlur={(e) => e.currentTarget.style.borderImage = 'none'}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 rounded-lg text-white focus:outline-none transition-colors"
                    style={{
                      borderColor: 'rgba(201, 162, 39, 0.3)',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderImage = 'linear-gradient(135deg, #C9A227, #8B5CF6) 1'}
                    onBlur={(e) => e.currentTarget.style.borderImage = 'none'}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 rounded-lg text-white focus:outline-none transition-colors"
                    style={{
                      borderColor: 'rgba(201, 162, 39, 0.3)',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderImage = 'linear-gradient(135deg, #C9A227, #8B5CF6) 1'}
                    onBlur={(e) => e.currentTarget.style.borderImage = 'none'}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border-2 rounded-lg text-white focus:outline-none transition-colors resize-none"
                    style={{
                      borderColor: 'rgba(201, 162, 39, 0.3)',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderImage = 'linear-gradient(135deg, #C9A227, #8B5CF6) 1'}
                    onBlur={(e) => e.currentTarget.style.borderImage = 'none'}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-white flex items-center justify-center gap-3 group"
                  style={{
                    background: 'linear-gradient(135deg, #C9A227 0%, #8B5CF6 100%)',
                    boxShadow: '0 4px 20px rgba(201, 162, 39, 0.4)',
                  }}
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Send via WhatsApp
                </button>

                {false && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-neon-green text-center"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}

                {false && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-center"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="glass-effect p-6 sm:p-8 rounded-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 neon-text">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-start space-x-4 p-4 rounded-lg transition-colors"
                      style={{
                        background: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(201, 162, 39, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <div className="neon-text mt-1">{info.icon}</div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-effect p-6 sm:p-8 rounded-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 neon-text">Follow Me</h2>
                <div className="flex gap-6">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 neon-border rounded-lg text-royal-gold hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass-effect p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6 text-neon-lime">Availability</h2>
                <p className="text-gray-300 mb-4">
                  I'm currently available for freelance projects and collaborations. Let's create something amazing together!
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-neon-green font-semibold">Available for new projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

