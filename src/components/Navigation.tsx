import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, BookOpen, Zap, Users } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Code className="w-6 h-6 text-background" />
            </div>
            <span className="text-xl font-bold">CodeAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('editor')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Code Analysis
            </button>
            <button 
              onClick={() => scrollToSection('exercises')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Exercises
            </button>
            <button 
              onClick={() => scrollToSection('tutorials')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Tutorials
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors p-2"
              >
                <Users className="w-5 h-5" />
                <span>Home</span>
              </button>
              <button 
                onClick={() => scrollToSection('editor')}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors p-2"
              >
                <Code className="w-5 h-5" />
                <span>Code Analysis</span>
              </button>
              <button 
                onClick={() => scrollToSection('exercises')}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors p-2"
              >
                <Zap className="w-5 h-5" />
                <span>Exercises</span>
              </button>
              <button 
                onClick={() => scrollToSection('tutorials')}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors p-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Tutorials</span>
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start">Sign In</Button>
                <Button variant="hero">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;