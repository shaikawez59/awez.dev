import { Button } from '@/components/ui/button';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {/* Brand & Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-poppins font-bold">
                  Portfolio
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Self-taught developer passionate about building innovative solutions 
                  and exploring the intersection of technology and human curiosity.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/60 hover:text-accent transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/60 hover:text-accent transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:hello@example.com"
                    className="text-primary-foreground/60 hover:text-accent transition-all duration-300 hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-poppins font-semibold">
                  Quick Links
                </h4>
                <nav className="space-y-2">
                  {[
                    { label: 'About', href: '#about' },
                    { label: 'Projects', href: '#projects' },
                    { label: 'Experience', href: '#experience' },
                    { label: 'Blog', href: '#blog' },
                    { label: 'Contact', href: '#contact' }
                  ].map((link) => (
                    <button
                      key={link.label}
                      onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                      className="block text-primary-foreground/80 hover:text-accent transition-all duration-300 hover:translate-x-1"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Latest Posts */}
              <div className="space-y-4">
                <h4 className="text-lg font-poppins font-semibold">
                  Latest Posts
                </h4>
                <div className="space-y-3">
                  {[
                    'Building Scalable React Applications',
                    'The Self-Taught Developer\'s Guide',
                    'Why I Switched to GraphQL'
                  ].map((post, index) => (
                    <div key={index} className="group cursor-pointer">
                      <p className="text-primary-foreground/80 group-hover:text-accent transition-smooth text-sm line-clamp-2">
                        {post}
                      </p>
                      <p className="text-primary-foreground/60 text-xs mt-1">
                        Dec {15 - index * 7}, 2024
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-primary-foreground/20 pt-12">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                  <span>by a curious developer</span>
                </div>
                
                <div className="text-primary-foreground/80 text-sm">
                  © 2024 Portfolio. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;