
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      window.scrollTo({
        top: featuresSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-hero-glow opacity-60 blur-3xl -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6')] bg-cover bg-center opacity-[0.02] -z-20" />
      
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Introducing SamDocAI
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 max-w-3xl animate-fade-in animation-delay-400">
            <span className="relative">
              Transform
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/20 rounded"></span>
            </span> your documents with intelligent AI tools
          </h1>
          
          <p className="text-xl text-foreground/70 max-w-2xl mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            A suite of powerful AI-driven tools to convert, analyze, and interact with your documents. Simplify your workflow and unlock new possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-medium px-8 py-6 text-lg transition-all duration-300 shimmer-button" onClick={scrollToFeatures}>
              Try SamDocAI
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-foreground/10 hover:bg-foreground/5 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300" onClick={scrollToFeatures}>
              Explore Features
            </Button>
          </div>
        </div>
        
        <div className="relative mt-16 lg:mt-24 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur opacity-60"></div>
          <div className="glass-card relative rounded-2xl p-1 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
              alt="SamDocAI Platform" 
              className="w-full h-auto rounded-xl object-cover shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <a 
            href="#features" 
            className="flex flex-col items-center text-foreground/60 hover:text-foreground transition-colors duration-300"
            onClick={scrollToFeatures}
          >
            <span className="text-sm font-medium mb-2">Discover More</span>
            <ArrowDown className="w-5 h-5 animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
