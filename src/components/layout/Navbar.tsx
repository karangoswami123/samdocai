
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-3",
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-xl md:text-2xl font-display font-bold text-foreground"
            >
              SamDocAI
            </a>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 transition-all duration-300"
            >
              <a href="#get-started">
                Get Started <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </nav>

          <button
            title="Toggle mobile menu"
            className="md:hidden flex flex-col space-y-1.5 p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={cn(
              "w-6 h-0.5 bg-foreground transition-all duration-300",
              mobileMenuOpen && "translate-y-2 rotate-45"
            )} />
            <span className={cn(
              "w-6 h-0.5 bg-foreground transition-all duration-300",
              mobileMenuOpen && "opacity-0"
            )} />
            <span className={cn(
              "w-6 h-0.5 bg-foreground transition-all duration-300",
              mobileMenuOpen && "-translate-y-2 -rotate-45"
            )} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-x-0 bg-white/90 backdrop-blur-lg shadow-sm transition-all duration-300 overflow-hidden md:hidden",
        mobileMenuOpen ? "top-[57px] max-h-[300px] opacity-100" : "top-[57px] max-h-0 opacity-0"
      )}>
        <div className="container max-w-6xl mx-auto py-4 px-4 flex flex-col space-y-4">
          <MobileNavLink href="#features" onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
          <MobileNavLink href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</MobileNavLink>
          <MobileNavLink href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</MobileNavLink>
          <Button 
            asChild 
            className="w-full bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300"
          >
            <a href="#get-started" onClick={() => setMobileMenuOpen(false)}>
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    className="text-foreground/80 hover:text-foreground font-medium text-lg py-2 transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
