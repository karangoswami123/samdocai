
import { Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="text-xl font-display font-bold text-foreground inline-block mb-4">
              SamDocAI
            </a>
            <p className="text-foreground/70 mb-4 max-w-xs">
              Transform your documents with intelligent AI tools for conversion, analysis, and interaction.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-3">
              <FooterLink href="#document-converter">Document Converter</FooterLink>
              <FooterLink href="#chat-with-pdf">Chat with PDF</FooterLink>
              <FooterLink href="#draw-and-find">Draw and Find</FooterLink>
              <FooterLink href="#diagram-interpreter">Diagram Interpreter</FooterLink>
              <FooterLink href="#compressor">Compressor</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <FooterLink href="#terms">Terms</FooterLink>
              <FooterLink href="#privacy">Privacy</FooterLink>
              <FooterLink href="#cookies">Cookies</FooterLink>
              <FooterLink href="#licensing">Licensing</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} SamDocAI. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60 mt-2 md:mt-0">
            Designed with precision and crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-foreground/5 hover:bg-foreground/10 transition-colors duration-200 p-2 rounded-full"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href}
      className="text-foreground/70 hover:text-foreground transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

export default Footer;
