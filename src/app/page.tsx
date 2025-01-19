'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRedirect = () => {
    setIsLoading(true); // Show the loading screen
    setTimeout(() => {
      window.location.href = "http://localhost:8080"; // Redirect after delay
    }, 2000); // Adjust delay as needed
  };

  return (
    <div className="min-h-screen bg-black text-white font-share-tech overflow-hidden flex flex-col">
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-center">
            <motion.div
              className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            />
            <p className="mt-4 text-lg text-gray-300">Get Ready to Build...</p>
          </div>
        </div>
      )}

      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80" />

      <div className="fixed inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [null, Math.random()],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Header Section */}
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-red-500" />
              <span className="text-xl font-bold">OpenBCI</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">About</Link>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center flex-grow flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.span
              className="text-red-500 text-sm font-medium inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Learn, Build, Innovate
            </motion.span>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Scratch for BCIs
              <br />
              Block-Based Code for BCIs
            </h1>

            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              Your all-in-one platform to learn, design, and implement real-time BCI applications. No prior coding experience? No problem! Dive into an interactive, block-based coding experience.
            </p>

            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white"
                onClick={handleRedirect}
              >
                Start Building
              </Button>
              <Button size="lg" variant="outline" className="text-black border-gray-700 hover:bg-gray-800">
                Documentation
              </Button>
            </div>
          </motion.div>
          <div className="py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Image
                src="/images/output-onlinepngtools.png"
                width={500}
                height={300}
                alt="BCI Visualization"
                className="shadow-2xl"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
