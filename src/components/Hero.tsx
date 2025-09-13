import { Button } from "@/components/ui/button";
import { Code, BookOpen, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Master Programming with AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Learn, practice, and debug code with intelligent assistance. 
            Get instant feedback, personalized exercises, and step-by-step guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Learning
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Smart Analysis</h3>
              <p className="text-sm text-muted-foreground">AI-powered code explanation and review</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Auto Debug</h3>
              <p className="text-sm text-muted-foreground">Instant error detection and fixes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Dynamic Exercises</h3>
              <p className="text-sm text-muted-foreground">Personalized challenges and practice</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-glow/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-glow" />
              </div>
              <h3 className="font-semibold mb-2">Interactive Tutorials</h3>
              <p className="text-sm text-muted-foreground">Step-by-step guided learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;