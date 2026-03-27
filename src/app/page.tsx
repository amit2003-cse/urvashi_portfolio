"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink, Mail, Terminal, BarChart3, Binary, Cpu, Menu, X } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const resumeLink = "https://drive.google.com/file/d/1dYMSb5ws3INRbwpH2gm6ZnoU5WjgCz0O/view?usp=drivesdk";

  return (
    <main className="flex-1 w-full flex flex-col items-center bg-[#0a0a0b]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full glass z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="#home" className="text-xl font-bold font-outfit text-white">
            Urvashi Pal<span className="text-primary">.</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
            <Link 
              href={resumeLink} 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all text-sm"
            >
              <Download size={14} /> Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0d0d0f] border-b border-gray-800 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="text-gray-300 hover:text-white text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  href={resumeLink} 
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-white font-bold transition-all shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Download size={18} /> Download Resume
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="w-full min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 md:pt-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs md:text-sm font-medium mb-6">
              Data Analyst & Scientist
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold font-outfit mb-6 tracking-tight text-white leading-[1.1]">
              Turning Data into <br className="hidden md:block"/>
              <span className="text-gradient">Strategic Assets</span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
              Specializing in End-to-End Data Engineering, SQL Analytics, and Power BI Storytelling to drive multi-million dollar business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#projects" className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] text-center">
                Explore Projects
              </Link>
              <Link href="#contact" className="w-full sm:w-auto px-8 py-3 rounded-xl border border-gray-700 bg-gray-800/50 text-white font-semibold hover:bg-gray-800 transition-all text-center">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Toolbox (New Section) */}
      <section id="skills" className="w-full py-16 md:py-24 px-6 border-y border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-gradient">Toolbox</span></h2>
            <p className="text-gray-400">Advanced stack for data-driven transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 glass-card rounded-2xl group hover:border-primary/30 transition-all border border-white/5">
              <Terminal className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">Data Engineering</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• ETL Pipeline Design</li>
                <li>• Python (Pandas, NumPy, Scikit-learn)</li>
                <li>• Data Cleaning & Transformation</li>
                <li>• API Integration</li>
              </ul>
            </div>
            <div className="p-8 glass-card rounded-2xl group hover:border-primary/30 transition-all border border-white/5">
              <Binary className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">Database & SQL</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Advanced CTEs & Window Functions</li>
                <li>• Database Schema Design (Star/Snowflake)</li>
                <li>• PostgreSQL & SQL Server</li>
                <li>• Query Optimization</li>
              </ul>
            </div>
            <div className="p-8 glass-card rounded-2xl group hover:border-primary/30 transition-all border border-white/5">
              <BarChart3 className="text-primary mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">Business Intelligence</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Power BI (DAX, Power Query)</li>
                <li>• Tableau Public / Service</li>
                <li>• Statistical Hypothesis Testing</li>
                <li>• Executive Dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-24 md:py-32 px-6 bg-[#0f0f11]">
        <div className="max-w-6xl mx-auto">          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-2 text-center text-white">Featured Impact</h2>
          <p className="text-gray-500 text-center mb-16 md:mb-20">Quantifiable results through technical excellence</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all group"
              >
                <div className="relative h-48 w-full overflow-hidden border-b border-gray-800">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-primary/20">
                      {project.category}
                    </div>
                    <Link href={`/projects/${project.id}`} className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-primary transition-all">
                      <ExternalLink size={18} />
                    </Link>
                    <Link href={project.githubUrl} target="_blank" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-primary transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </Link>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-8 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-gray-900 text-gray-400 text-xs border border-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="inline-flex items-center gap-2 text-white font-bold group/btn hover:gap-4 transition-all"
                  >
                    View Case Study <span className="text-primary group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <section id="contact" className="w-full py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-8 text-white">Let's Build Something <span className="text-primary italic">Insightful</span></h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Currently open to Data Analyst, Business Intelligence, and Data Engineering roles.
          </p>
          <div className="flex justify-center gap-8 mb-20">
            <Link href="mailto:palurvashi.2004@gmail.com" className="flex flex-col items-center gap-3 text-gray-400 hover:text-primary transition-colors">
              <div className="p-5 rounded-2xl bg-gray-900 border border-gray-800 hover:border-primary/50 transition-all">
                <Mail size={28} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">Email</span>
            </Link>
            <Link 
              href="https://www.linkedin.com/in/urvashi-ds/" 
              target="_blank" 
              className="flex flex-col items-center gap-3 text-gray-400 hover:text-[#0077b5] transition-colors"
            >
              <div className="p-5 rounded-2xl bg-gray-900 border border-gray-800 hover:border-primary/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
            </Link>
            <Link 
              href="https://github.com/palurvashi2004-rgb" 
              target="_blank" 
              className="flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <div className="p-5 rounded-2xl bg-gray-900 border border-gray-800 hover:border-primary/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">GitHub</span>
            </Link>
          </div>
          <div className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
            &copy; {new Date().getFullYear()} Urvashi Pal • Data Scientist
          </div>
        </div>
      </section>
    </main>
  );
}
