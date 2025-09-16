"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-3xl mb-auto"
    >
      <div className="flex items-center justify-center w-full flex-col mb-auto mt-5">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-medium text-text-primary mt-2 text-xl mb-8"
        >
          Get in Touch
        </motion.h1>
        
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-input-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-input-focus focus:border-transparent bg-card transition-all"
            placeholder="Enter your name"
            required
          />
          
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-input-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-input-focus focus:border-transparent bg-card transition-all"
            placeholder="Enter your email"
            required
          />
          
          <motion.textarea
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-input-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-input-focus focus:border-transparent bg-card transition-all resize-none"
            placeholder="How can I help you?"
            required
          />
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full text-button-primary-foreground bg-button-primary text-sm px-4 py-3 rounded-lg hover:bg-button-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-input-focus"
          >
            Send Message
          </motion.button>
        </form>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-text-secondary text-sm">
            Or reach out to me directly at{' '}
            <a 
              href="mailto:hello@alexjohnson.dev" 
              className="text-button-primary hover:underline"
            >
              contact@awez.dev
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}