"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight, Filter } from "lucide-react";

export default function BlogSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('All');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const filters = ['All', 'React', 'JavaScript', 'Web Dev', 'Tutorial'];

  const blogs = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      description: "Learn the fundamentals of React Hooks and how they can simplify your component logic.",
      category: "React",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Modern JavaScript ES6+ Features",
      description: "Explore the latest JavaScript features that will improve your development workflow.",
      category: "JavaScript", 
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Building Responsive Layouts with CSS Grid",
      description: "Master CSS Grid to create flexible and responsive web layouts with ease.",
      category: "Web Dev",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "State Management in React Applications",
      description: "Compare different state management solutions and when to use each approach.",
      category: "React",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="mt-4 mb-auto">
      <div className="mb-5">
        <div className="group flex ml-2 items-center space-x-2">
          <button
            type="button"
            onClick={toggleMenu}
            className="flex mr-5 text-button-primary-foreground bg-button-primary rounded-lg px-3 py-2 text-sm hover:bg-button-primary-hover transition-colors focus:outline-none"
          >
            <Filter size={14} className="mr-2" />
            Filters
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="ml-1.5"
            >
              <ChevronRight size={14} />
            </motion.div>
          </button>
          
          {isOpen && (
            <div className="flex gap-2">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    transition: { 
                      type: "spring", 
                      duration: 0.3,
                      delay: index * 0.1 
                    } 
                  }}
                  exit={{ opacity: 0, x: 10 }}
                  onClick={() => setSelected(filter)}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    filter === selected 
                      ? 'bg-button-primary text-button-primary-foreground' 
                      : 'bg-button-secondary text-button-secondary-foreground hover:bg-button-secondary-hover'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              delay: index * 0.1 
            }}
            whileHover={{ 
              y: -4,
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}
            className="bg-card border border-card-border rounded-lg shadow-project hover:shadow-project-hover cursor-pointer transition-all duration-300"
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs px-2 py-1 bg-button-secondary text-button-secondary-foreground rounded-full">
                  {blog.category}
                </span>
                <span className="text-xs text-text-muted">
                  {blog.readTime}
                </span>
              </div>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-text-primary">
                {blog.title}
              </h5>
              <p className="mb-3 font-normal text-sm text-text-secondary">
                {blog.description}
              </p>
              <button className="inline-flex items-center px-3 py-2 text-sm text-center text-button-primary-foreground bg-button-primary rounded-lg hover:bg-button-primary-hover transition-colors group">
                Read more
                <ChevronRight 
                  size={14} 
                  className="ml-1 group-hover:translate-x-1 transition-transform" 
                />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}