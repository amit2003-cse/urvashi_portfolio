"use client";

import { projects } from "@/data/projects";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Code2, Database, Layout, TrendingUp } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0b] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-gray-300 font-outfit pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </button>
          <div className="text-sm font-bold text-white uppercase tracking-widest">
            Case Study <span className="text-primary">.</span>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-32">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
            {project.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {project.impact.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-primary/30 transition-colors group"
            >
              <TrendingUp className="text-primary mb-4 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-white font-medium">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Tabs/Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            {/* Context */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Layout className="text-primary" size={24} />
                Business Problem
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {project.problem}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="text-primary" size={24} />
                The Solution
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {project.solution}
              </p>
            </section>

            {/* Technical Proof */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Code2 className="text-primary" size={24} />
                Technical Implementation
              </h2>
              
              {project.technicalDetails.sql && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">SQL Analytics (Logic)</h3>
                  <div className="relative group">
                    <pre className="p-6 rounded-xl bg-[#0d0d0e] border border-gray-800 overflow-x-auto text-sm text-blue-400 font-mono leading-relaxed">
                      {project.technicalDetails.sql.trim()}
                    </pre>
                  </div>
                </div>
              )}

              {project.technicalDetails.python && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">Python (Data Engineering)</h3>
                  <div className="relative group">
                    <pre className="p-6 rounded-xl bg-[#0d0d0e] border border-gray-800 overflow-x-auto text-sm text-emerald-400 font-mono leading-relaxed">
                      {project.technicalDetails.python.trim()}
                    </pre>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar / Tools */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Database className="text-primary" size={20} />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technicalDetails.tools.map((tool, index) => (
                  <span key={index} className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 text-xs font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10">
              <h3 className="text-white font-bold mb-4 italic">"Data is the new oil, but only if you refine it."</h3>
              <p className="text-sm text-gray-400 mb-6">This project demonstrates end-to-end data lifecycle management, from raw ingestion to strategic business intelligence.</p>
              <Link 
                href={project.githubUrl} 
                target="_blank"
                className="w-full py-3 px-4 rounded-xl bg-gray-900 border border-gray-800 text-white font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
