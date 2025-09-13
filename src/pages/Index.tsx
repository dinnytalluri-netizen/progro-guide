import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CodeEditor from "@/components/CodeEditor";
import ExerciseGrid from "@/components/ExerciseGrid";
import TutorialSection from "@/components/TutorialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="editor">
          <CodeEditor />
        </section>
        
        <section id="exercises">
          <ExerciseGrid />
        </section>
        
        <section id="tutorials">
          <TutorialSection />
        </section>
      </main>
      
      <footer className="py-12 px-6 border-t border-border bg-muted/5">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 CodeAI. Empowering the next generation of programmers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
