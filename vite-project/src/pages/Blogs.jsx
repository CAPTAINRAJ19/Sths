import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PenTool, Notebook, Bookmark, Feather } from 'lucide-react';

function Blogs() {
  const writingIcons = [BookOpen, PenTool, Notebook, Bookmark, Feather];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hover: {
      y: -5,
      rotate: [0, -5, 5, 0],
      transition: {
        y: { repeat: Infinity, repeatType: 'reverse', duration: 1.5 },
        rotate: { repeat: Infinity, duration: 2.5 }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-800 dark:to-gray-900">
      <motion.div
        className="text-center p-8 max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4 mb-8"
        >
          {writingIcons.map((Icon, index) => (
            <motion.div
              key={index}
              variants={iconVariants}
              whileHover="hover"
              className="p-4 rounded-full bg-white dark:bg-gray-700 shadow-lg"
            >
              <Icon className="h-8 w-8 text-amber-600 dark:text-amber-400" />
            </motion.div>
          ))}
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white"
        >
          Blog Coming Soon
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl mb-8 text-gray-600 dark:text-gray-300"
        >
          Our insightful blog articles are in the works. We're crafting valuable content about healthcare infrastructure!
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="inline-block"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              transition: { repeat: Infinity, duration: 2 }
            }}
            className="px-6 py-3 bg-amber-600 text-white rounded-lg shadow-lg font-medium"
          >
            Stay Tuned
          </motion.div>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="mt-8 text-sm text-gray-500 dark:text-gray-400"
        >
          Check back soon for our first articles!
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Blogs;