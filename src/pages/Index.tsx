// // // // import { useEffect } from "react";
// // // // import Navbar from "@/components/layout/Navbar";
// // // // import Hero from "@/components/layout/Hero";
// // // // import Features from "@/components/layout/Features";
// // // // import Footer from "@/components/layout/Footer";
// // // // import { ArrowRight, Check, ChevronRight, FileText, MessageSquare, PenTool, BarChart4, FileArchive, ExternalLink } from "lucide-react";
// // // // import { ScrollReveal } from "@/components/ui/ScrollReveal";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Link } from "react-router-dom";

// // // // const Index = () => {
// // // //   useEffect(() => {
// // // //     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// // // //       anchor.addEventListener('click', function(e) {
// // // //         e.preventDefault();
// // // //         const targetId = this.getAttribute('href');
// // // //         if (targetId && targetId !== '#') {
// // // //           const targetElement = document.querySelector(targetId);
// // // //           if (targetElement) {
// // // //             window.scrollTo({
// // // //               top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
// // // //               behavior: 'smooth'
// // // //             });
// // // //           }
// // // //         }
// // // //       });
// // // //     });
// // // //   }, []);

// // // //   const handleGetStarted = () => {
// // // //     window.location.href = "http://localhost:1222";
// // // //   };

// // // //   const scrollToFeatures = (e: React.MouseEvent) => {
// // // //     e.preventDefault();
// // // //     const featuresSection = document.getElementById("features");
// // // //     if (featuresSection) {
// // // //       window.scrollTo({
// // // //         top: featuresSection.getBoundingClientRect().top + window.scrollY - 80,
// // // //         behavior: 'smooth'
// // // //       });
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex flex-col">
// // // //       <Navbar />
// // // //       <main>
// // // //         <Hero />
// // // //         <Features />
        
// // // //         {/* How It Works Section */}
// // // //         <section id="how-it-works" className="py-16 lg:py-24 bg-secondary relative overflow-hidden">
// // // //           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-[0.03] -z-10" />
          
// // // //           <div className="container max-w-6xl mx-auto px-4 md:px-6">
// // // //             <ScrollReveal>
// // // //               <div className="text-center mb-16">
// // // //                 <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
// // // //                   Workflow
// // // //                 </div>
// // // //                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
// // // //                   How SamDocAI works
// // // //                 </h2>
// // // //                 <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
// // // //                   Experience a seamless workflow that transforms how you interact with documents
// // // //                 </p>
// // // //               </div>
// // // //             </ScrollReveal>
            
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
// // // //               <ScrollReveal delay={100}>
// // // //                 <div className="space-y-8">
// // // //                   <Step 
// // // //                     number={1} 
// // // //                     title="Upload your document"
// // // //                     description="Simply drag and drop your file or browse to upload. We support PDF, Word, Excel, PowerPoint, and many more formats."
// // // //                   />
// // // //                   <Step 
// // // //                     number={2} 
// // // //                     title="Choose your tool"
// // // //                     description="Select from our suite of powerful AI tools based on what you need to accomplish with your document."
// // // //                   />
// // // //                   <Step 
// // // //                     number={3} 
// // // //                     title="Get results instantly"
// // // //                     description="Our advanced AI processes your request in seconds, delivering high-quality results you can download or share."
// // // //                   />
// // // //                 </div>
// // // //               </ScrollReveal>
              
// // // //               <ScrollReveal delay={200}>
// // // //                 <div className="relative">
// // // //                   <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur opacity-60"></div>
// // // //                   <div className="glass-card relative rounded-2xl p-1 overflow-hidden">
// // // //                     <img 
// // // //                       src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
// // // //                       alt="SamDocAI Workflow" 
// // // //                       className="w-full h-auto rounded-xl object-cover shadow-lg"
// // // //                     />
// // // //                   </div>
// // // //                 </div>
// // // //               </ScrollReveal>
// // // //             </div>
// // // //           </div>
// // // //         </section>
        
// // // //         {/* Feature Showcase Section */}
// // // //         <section className="py-16 lg:py-24">
// // // //           <div className="container max-w-6xl mx-auto px-4 md:px-6">
// // // //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// // // //               <ScrollReveal>
// // // //                 <div className="relative group">
// // // //                   <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
// // // //                   <div className="glass-card relative rounded-2xl p-1 overflow-hidden">
// // // //                     <div className="bg-white rounded-xl p-6">
// // // //                       <div className="bg-blue-50 text-blue-500 w-12 h-12 flex items-center justify-center rounded-xl mb-4">
// // // //                         <FileText className="w-6 h-6" />
// // // //                       </div>
// // // //                       <h3 className="text-2xl font-bold mb-3">Document Converter</h3>
// // // //                       <p className="text-foreground/70 mb-6">Convert between document formats while preserving layout, formatting, and content integrity.</p>
// // // //                       <div className="space-y-3 mb-6">
// // // //                         <Feature text="PDF to Word, Excel, PowerPoint" />
// // // //                         <Feature text="Image to text (OCR)" />
// // // //                         <Feature text="Batch conversion" />
// // // //                         <Feature text="Format preservation" />
// // // //                       </div>
// // // //                       <Button asChild variant="outline" className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
// // // //                         <a href="#document-converter">
// // // //                           Learn more <ArrowRight className="ml-2 h-4 w-4" />
// // // //                         </a>
// // // //                       </Button>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </ScrollReveal>
              
// // // //               <ScrollReveal delay={100}>
// // // //                 <div className="space-y-6">
// // // //                   <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-sm font-medium">
// // // //                     Featured Tool
// // // //                   </div>
// // // //                   <h2 className="text-3xl md:text-4xl font-display font-bold">
// // // //                     Transform documents with unmatched precision
// // // //                   </h2>
// // // //                   <p className="text-xl text-foreground/70">
// // // //                     Our document converter preserves formatting, tables, and images with exceptional accuracy. Convert between formats without losing the original document's integrity.
// // // //                   </p>
// // // //                   <ul className="space-y-4">
// // // //                     <BenefitItem text="Save time with batch processing capabilities" />
// // // //                     <BenefitItem text="Extract text from images with advanced OCR" />
// // // //                     <BenefitItem text="Maintain document structure and formatting" />
// // // //                     <BenefitItem text="Convert PDF forms while preserving interactivity" />
// // // //                   </ul>
// // // //                   <div className="pt-2">
// // // //                     <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 transition-all duration-300">
// // // //                       <a href="#get-started">
// // // //                         Try Document Converter <ExternalLink className="ml-2 h-4 w-4" />
// // // //                       </a>
// // // //                     </Button>
// // // //                   </div>
// // // //                 </div>
// // // //               </ScrollReveal>
// // // //             </div>
// // // //           </div>
// // // //         </section>
        
// // // //         {/* Testimonials Section */}
// // // //         <section id="testimonials" className="py-16 lg:py-24 bg-secondary">
// // // //           <div className="container max-w-6xl mx-auto px-4 md:px-6">
// // // //             <ScrollReveal>
// // // //               <div className="text-center mb-16">
// // // //                 <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
// // // //                   Testimonials
// // // //                 </div>
// // // //                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
// // // //                   What users are saying
// // // //                 </h2>
// // // //                 <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
// // // //                   Join thousands of satisfied users who have transformed their document workflows
// // // //                 </p>
// // // //               </div>
// // // //             </ScrollReveal>
            
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //               <ScrollReveal delay={100}>
// // // //                 <Testimonial
// // // //                   content="The document converter is a game-changer for our team. We can batch convert hundreds of PDFs to editable formats in minutes, not hours."
// // // //                   author="Sarah Johnson"
// // // //                   role="Operations Manager"
// // // //                 />
// // // //               </ScrollReveal>
              
// // // //               <ScrollReveal delay={200}>
// // // //                 <Testimonial
// // // //                   content="Being able to chat with my PDFs and ask specific questions has revolutionized how I research. It's like having an assistant who's read all my documents."
// // // //                   author="Michael Chen"
// // // //                   role="Research Analyst"
// // // //                 />
// // // //               </ScrollReveal>
              
// // // //               <ScrollReveal delay={300}>
// // // //                 <Testimonial
// // // //                   content="The diagram interpreter tool accurately extracts data from complex charts in our financial reports. It's saved me countless hours of manual data entry."
// // // //                   author="David Rodriguez"
// // // //                   role="Financial Advisor"
// // // //                 />
// // // //               </ScrollReveal>
// // // //             </div>
// // // //           </div>
// // // //         </section>
        
// // // //         {/* Call to Action */}
// // // //         <section id="get-started" className="py-16 lg:py-24 relative overflow-hidden">
// // // //           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-hero-glow opacity-60 blur-3xl -z-10" />
          
// // // //           <div className="container max-w-6xl mx-auto px-4 md:px-6">
// // // //             <ScrollReveal>
// // // //               <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
// // // //                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
// // // //                   Ready to transform your document workflow?
// // // //                 </h2>
// // // //                 <p className="text-xl text-foreground/70 mb-8 max-w-xl mx-auto">
// // // //                   Start using SamDocAI today and experience the power of AI-driven document tools that save time and improve productivity.
// // // //                 </p>
// // // //                 <div className="flex flex-col sm:flex-row justify-center gap-4">
// // // //                   <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg transition-all duration-300 shimmer-button" onClick={handleGetStarted}>
// // // //                     Get Started Now
// // // //                   </Button>
// // // //                   <Button variant="outline" size="lg" className="border-2 border-foreground/10 hover:bg-foreground/5 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300" onClick={handleGetStarted}>
// // // //                     Contact Sales
// // // //                   </Button>
// // // //                 </div>
// // // //               </div>
// // // //             </ScrollReveal>
// // // //           </div>
// // // //         </section>
// // // //       </main>
// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // const Step = ({ number, title, description }: { number: number; title: string; description: string }) => (
// // // //   <div className="flex gap-4">
// // // //     <div className="flex-shrink-0">
// // // //       <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg">
// // // //         {number}
// // // //       </div>
// // // //     </div>
// // // //     <div>
// // // //       <h3 className="text-xl font-bold mb-2">{title}</h3>
// // // //       <p className="text-foreground/70">{description}</p>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // const Feature = ({ text }: { text: string }) => (
// // // //   <div className="flex items-center gap-2">
// // // //     <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
// // // //       <Check className="w-3 h-3 text-blue-500" />
// // // //     </div>
// // // //     <span className="text-foreground/80">{text}</span>
// // // //   </div>
// // // // );

// // // // const BenefitItem = ({ text }: { text: string }) => (
// // // //   <li className="flex items-start gap-3">
// // // //     <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
// // // //       <Check className="w-4 h-4 text-primary" />
// // // //     </div>
// // // //     <span className="text-lg text-foreground/80">{text}</span>
// // // //   </li>
// // // // );

// // // // const Testimonial = ({ content, author, role }: { content: string; author: string; role: string }) => (
// // // //   <div className="glass-card rounded-xl p-6 h-full flex flex-col">
// // // //     <blockquote className="text-lg text-foreground/80 mb-6 flex-grow">
// // // //       "{content}"
// // // //     </blockquote>
// // // //     <div className="flex items-center gap-3">
// // // //       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary flex items-center justify-center text-white font-medium text-sm">
// // // //         {author.split(' ').map(name => name[0]).join('')}
// // // //       </div>
// // // //       <div>
// // // //         <div className="font-semibold">{author}</div>
// // // //         <div className="text-sm text-foreground/60">{role}</div>
// // // //       </div>
// // // //     </div>
// // // //   </div>
// // // // );

// // // // export default Index;
// // // import { FileText, MessageSquare, PenTool, BarChart4, FileArchive } from "lucide-react";
// // // import { FeatureCard } from "@/components/ui/FeatureCard";
// // // import { ScrollReveal } from "@/components/ui/ScrollReveal";

// // // export const Features = () => {
// // //   const features = [
// // //     {
// // //       title: "Document Converter",
// // //       description: "Convert documents between various formats including PDF, Word, Excel, and more with high fidelity and precision.",
// // //       icon: FileText,
// // //       iconClassName: "bg-blue-50 text-blue-500",
// // //       delay: 0.1,
// // //       id: "document-converter",
// // //       port: 2000,
// // //     },
// // //     {
// // //       title: "Chat with PDF",
// // //       description: "Ask questions about your documents and get intelligent answers. Our AI understands context and provides accurate responses.",
// // //       icon: MessageSquare,
// // //       iconClassName: "bg-purple-50 text-purple-500",
// // //       delay: 0.2,
// // //       id: "chat-with-pdf",
// // //       port: 2001,
// // //     },
// // //     {
// // //       title: "Draw and Find",
// // //       description: "Sketch what you're looking for and let AI locate similar elements in your documents with advanced visual recognition.",
// // //       icon: PenTool,
// // //       iconClassName: "bg-green-50 text-green-500",
// // //       delay: 0.3,
// // //       id: "draw-and-find",
// // //       port: 2002,
// // //     },
// // //     {
// // //       title: "Diagram Interpreter",
// // //       description: "Extract meaning from charts, diagrams, and visual content with AI that understands and explains complex visuals.",
// // //       icon: BarChart4,
// // //       iconClassName: "bg-amber-50 text-amber-500",
// // //       delay: 0.4,
// // //       id: "diagram-interpreter",
// // //       port: 2003,
// // //     },
// // //     {
// // //       title: "Compressor",
// // //       description: "Reduce file sizes without sacrificing quality, perfect for sharing or storing large collections of documents.",
// // //       icon: FileArchive,
// // //       iconClassName: "bg-red-50 text-red-500",
// // //       delay: 0.5,
// // //       id: "compressor",
// // //       port: 2004,
// // //     },
// // //   ];

// // //   const handleFeatureClick = (port: number) => {
// // //     window.open(`http://localhost:${port}`, "_blank"); // Opens in new tab
// // //   };

// // //   return (
// // //     <section id="features" className="py-16 lg:py-24 bg-gray-50">
// // //       <div className="container max-w-6xl mx-auto px-4 md:px-6">
// // //         <ScrollReveal>
// // //           <div className="text-center mb-16">
// // //             <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
// // //               Features
// // //             </div>
// // //             <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
// // //               Powerful tools for every document need
// // //             </h2>
// // //             <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
// // //               Our suite of AI-powered tools gives you unmatched capabilities for working with documents of all kinds.
// // //             </p>
// // //           </div>
// // //         </ScrollReveal>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {features.map((feature) => (
// // //             <ScrollReveal key={feature.id} delay={100 * (feature.delay! * 10)}>
// // //               <div
// // //                 id={feature.id}
// // //                 className="cursor-pointer transition-transform hover:scale-105"
// // //                 onClick={() => handleFeatureClick(feature.port)}
// // //               >
// // //                 <FeatureCard
// // //                   title={feature.title}
// // //                   description={feature.description}
// // //                   icon={feature.icon}
// // //                   iconClassName={feature.iconClassName}
// // //                   delay={feature.delay}
// // //                 />
// // //               </div>
// // //             </ScrollReveal>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Features;
// // import { useEffect } from "react";
// // import Navbar from "@/components/layout/Navbar";
// // import Hero from "@/components/layout/Hero";
// // import Features from "@/components/layout/Features"; // Ensure this uses the updated Features component
// // import Footer from "@/components/layout/Footer";
// // import { ArrowRight, Check, ChevronRight, ExternalLink } from "lucide-react";
// // import { ScrollReveal } from "@/components/ui/ScrollReveal";
// // import { Button } from "@/components/ui/button";
// // import { Link } from "react-router-dom";

// // const Index = () => {
// //   useEffect(() => {
// //     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
// //       anchor.addEventListener('click', function (e) {
// //         e.preventDefault();
// //         const targetId = this.getAttribute('href');
// //         if (targetId && targetId !== '#') {
// //           const targetElement = document.querySelector(targetId);
// //           if (targetElement) {
// //             window.scrollTo({
// //               top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
// //               behavior: 'smooth',
// //             });
// //           }
// //         }
// //       });
// //     });
// //   }, []);

// //   const handleGetStarted = () => {
// //     window.location.href = "http://localhost:1222"; // Default for CTA buttons
// //   };

// //   const scrollToFeatures = (e: React.MouseEvent) => {
// //     e.preventDefault();
// //     const featuresSection = document.getElementById("features");
// //     if (featuresSection) {
// //       window.scrollTo({
// //         top: featuresSection.getBoundingClientRect().top + window.scrollY - 80,
// //         behavior: 'smooth',
// //       });
// //     }
// //   };

// //   // Handler for feature-specific URLs
// //   const handleFeatureClick = (port: number) => {
// //     window.open(`http://localhost:${port}`, "_blank"); // Opens in new tab
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       <Navbar />
// //       <main>
// //         <Hero />
// //         <Features /> {/* This uses the updated Features component below */}

// //         {/* How It Works Section */}
// //         <section id="how-it-works" className="py-16 lg:py-24 bg-secondary relative overflow-hidden">
// //           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-[0.03] -z-10" />
// //           <div className="container max-w-6xl mx-auto px-4 md:px-6">
// //             <ScrollReveal>
// //               <div className="text-center mb-16">
// //                 <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
// //                   Workflow
// //                 </div>
// //                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
// //                   How SamDocAI works
// //                 </h2>
// //                 <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
// //                   Experience a seamless workflow that transforms how you interact with documents
// //                 </p>
// //               </div>
// //             </ScrollReveal>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
// //               <ScrollReveal delay={100}>
// //                 <div className="space-y-8">
// //                   <Step number={1} title="Upload your document" description="Simply drag and drop your file or browse to upload. We support PDF, Word, Excel, PowerPoint, and many more formats." />
// //                   <Step number={2} title="Choose your tool" description="Select from our suite of powerful AI tools based on what you need to accomplish with your document." />
// //                   <Step number={3} title="Get results instantly" description="Our advanced AI processes your request in seconds, delivering high-quality results you can download or share." />
// //                 </div>
// //               </ScrollReveal>
// //               <ScrollReveal delay={200}>
// //                 <div className="relative">
// //                   <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur opacity-60"></div>
// //                   <div className="glass-card relative rounded-2xl p-1 overflow-hidden">
// //                     <img
// //                       src="https://images.unsplash.com/photo-1518770660439-4636190af475"
// //                       alt="SamDocAI Workflow"
// //                       className="w-full h-auto rounded-xl object-cover shadow-lg"
// //                     />
// //                   </div>
// //                 </div>
// //               </ScrollReveal>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Feature Showcase Section */}
// //         <section className="py-16 lg:py-24">
// //           <div className="container max-w-6xl mx-auto px-4 md:px-6">
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //               <ScrollReveal>
// //                 <div className="relative group">
// //                   <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
// //                   <div className="glass-card relative rounded-2xl p-1 overflow-hidden">
// //                     <div className="bg-white rounded-xl p-6">
// //                       <div className="bg-blue-50 text-blue-500 w-12 h-12 flex items-center justify-center rounded-xl mb-4">
// //                         <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Document Converter" className="w-6 h-6" />
// //                       </div>
// //                       <h3 className="text-2xl font-bold mb-3">Document Converter</h3>
// //                       <p className="text-foreground/70 mb-6">Convert between document formats while preserving layout, formatting, and content integrity.</p>
// //                       <div className="space-y-3 mb-6">
// //                         <Feature text="PDF to Word, Excel, PowerPoint" />
// //                         <Feature text="Image to text (OCR)" />
// //                         <Feature text="Batch conversion" />
// //                         <Feature text="Format preservation" />
// //                       </div>
// //                       <Button
// //                         variant="outline"
// //                         className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
// //                         onClick={() => handleFeatureClick(2000)} // Opens localhost:2000
// //                       >
// //                         Try Now <ArrowRight className="ml-2 h-4 w-4" />
// //                       </Button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </ScrollReveal>
// //               <ScrollReveal delay={100}>
// //                 <div className="space-y-6">
// //                   <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-sm font-medium">
// //                     Featured Tool
// //                   </div>
// //                   <h2 className="text-3xl md:text-4xl font-display font-bold">
// //                     Transform documents with unmatched precision
// //                   </h2>
// //                   <p className="text-xl text-foreground/70">
// //                     Our document converter preserves formatting, tables, and images with exceptional accuracy. Convert between formats without losing the original document's integrity.
// //                   </p>
// //                   <ul className="space-y-4">
// //                     <BenefitItem text="Save time with batch processing capabilities" />
// //                     <BenefitItem text="Extract text from images with advanced OCR" />
// //                     <BenefitItem text="Maintain document structure and formatting" />
// //                     <BenefitItem text="Convert PDF forms while preserving interactivity" />
// //                   </ul>
// //                   <div className="pt-2">
// //                     <Button
// //                       size="lg"
// //                       className="bg-primary hover:bg-primary/90 text-white font-medium px-8 transition-all duration-300"
// //                       onClick={() => handleFeatureClick(2000)} // Opens localhost:2000
// //                     >
// //                       Try Document Converter <ExternalLink className="ml-2 h-4 w-4" />
// //                     </Button>
// //                   </div>
// //                 </div>
// //               </ScrollReveal>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Testimonials Section */}
// //         <section id="testimonials" className="py-16 lg:py-24 bg-secondary">
// //           <div className="container max-w-6xl mx-auto px-4 md:px-6">
// //             <ScrollReveal>
// //               <div className="text-center mb-16">
// //                 <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
// //                   Testimonials
// //                 </div>
// //                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
// //                   What users are saying
// //                 </h2>
// //                 <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
// //                   Join thousands of satisfied users who have transformed their document workflows
// //                 </p>
// //               </div>
// //             </ScrollReveal>
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               <ScrollReveal delay={100}>
// //                 <Testimonial content="The document converter is a game-changer for our team. We can batch convert hundreds of PDFs to editable formats in minutes, not hours." author="Sarah Johnson" role="Operations Manager" />
// //               </ScrollReveal>
// //               <ScrollReveal delay={200}>
// //                 <Testimonial content="Being able to chat with my PDFs and ask specific questions has revolutionized how I research. It's like having an assistant who's read all my documents." author="Michael Chen" role="Research Analyst" />
// //               </ScrollReveal>
// //               <ScrollReveal delay={300}>
// //                 <Testimonial content="The diagram interpreter tool accurately extracts data from complex charts in our financial reports. It's saved me countless hours of manual data entry." author="David Rodriguez" role="Financial Advisor" />
// //               </ScrollReveal>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Call to Action */}
// //         <section id="get-started" className="py-16 lg:py-24 relative overflow-hidden">
// //           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-hero-glow opacity-60 blur-3xl -z-10" />
// //           <div className="container max-w-6xl mx-auto px-4 md:px-6">
// //             <ScrollReveal>
// //               <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
// //                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
// //                   Ready to transform your document workflow?
// //                 </h2>
// //                 <p className="text-xl text-foreground/70 mb-8 max-w-xl mx-auto">
// //                   Start using SamDocAI today and experience the power of AI-driven document tools that save time and improve productivity.
// //                 </p>
// //                 <div className="flex flex-col sm:flex-row justify-center gap-4">
// //                   <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg transition-all duration-300 shimmer-button" onClick={handleGetStarted}>
// //                     Get Started Now
// //                   </Button>
// //                   <Button variant="outline" size="lg" className="border-2 border-foreground/10 hover:bg-foreground/5 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300" onClick={handleGetStarted}>
// //                     Contact Sales
// //                   </Button>
// //                 </div>
// //               </div>
// //             </ScrollReveal>
// //           </div>
// //         </section>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // // Reusable Components (unchanged)
// // const Step = ({ number, title, description }: { number: number; title: string; description: string }) => (
// //   <div className="flex gap-4">
// //     <div className="flex-shrink-0">
// //       <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg">
// //         {number}
// //       </div>
// //     </div>
// //     <div>
// //       <h3 className="text-xl font-bold mb-2">{title}</h3>
// //       <p className="text-foreground/70">{description}</p>
// //     </div>
// //   </div>
// // );

// // const Feature = ({ text }: { text: string }) => (
// //   <div className="flex items-center gap-2">
// //     <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
// //       <Check className="w-3 h-3 text-blue-500" />
// //     </div>
// //     <span className="text-foreground/80">{text}</span>
// //   </div>
// // );

// // const BenefitItem = ({ text }: { text: string }) => (
// //   <li className="flex items-start gap-3">
// //     <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
// //       <Check className="w-4 h-4 text-primary" />
// //     </div>
// //     <span className="text-lg text-foreground/80">{text}</span>
// //   </li>
// // );

// // const Testimonial = ({ content, author, role }: { content: string; author: string; role: string }) => (
// //   <div className="glass-card rounded-xl p-6 h-full flex flex-col">
// //     <blockquote className="text-lg text-foreground/80 mb-6 flex-grow">"{content}"</blockquote>
// //     <div className="flex items-center gap-3">
// //       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary flex items-center justify-center text-white font-medium text-sm">
// //         {author.split(' ').map(name => name[0]).join('')}
// //       </div>
// //       <div>
// //         <div className="font-semibold">{author}</div>
// //         <div className="text-sm text-foreground/60">{role}</div>
// //       </div>
// //     </div>
// //   </div>
// // );

// // export default Index;
// // src/pages/Index.tsx
// import React, { useEffect } from "react";
// import Navbar from "@/components/layout/Navbar";
// import Hero from "@/components/layout/Hero";
// import Features from "@/components/layout/Features";
// import Footer from "@/components/layout/Footer";
// import { ArrowRight, Check, ChevronRight, ExternalLink } from "lucide-react";
// import { ScrollReveal } from "@/components/ui/ScrollReveal";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// const Index: React.FC = () => {
//   useEffect(() => {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         if (targetId && targetId !== '#') {
//           const targetElement = document.querySelector(targetId);
//           if (targetElement) {
//             window.scrollTo({
//               top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
//               behavior: 'smooth',
//             });
//           }
//         }
//       });
//     });
//   }, []);

//   const scrollToFeatures = (e: React.MouseEvent) => {
//     e.preventDefault();
//     const featuresSection = document.getElementById("features");
//     if (featuresSection) {
//       window.scrollTo({
//         top: featuresSection.getBoundingClientRect().top + window.scrollY - 80,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const handleFeatureClick = (port: number) => {
//     window.open(`http://localhost:${port}`, "_blank");
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main>
//         <Hero />
//         <Features />

//         {/* How It Works Section */}
//         <section id="how-it-works" className="py-16 lg:py-24 bg-secondary relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-[0.03] -z-10" />
//           <div className="container max-w-6xl mx-auto px-4 md:px-6">
//             <ScrollReveal>
//               <div className="text-center mb-16">
//                 <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
//                   Workflow
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
//                   How SamDocAI works
//                 </h2>
//                 <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
//                   Experience a seamless workflow that transforms how you interact with documents
//                 </p>
//               </div>
//             </ScrollReveal>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//               <ScrollReveal delay={100}>
//                 <div className="space-y-8">
//                   <Step number={1} title="Upload your document" description="Simply drag and drop your file or browse to upload. We support PDF, Word, Excel, PowerPoint, and many more formats." />
//                   <Step number={2} title="Choose your tool" description="Select from our suite of powerful AI tools based on what you need to accomplish with your document." />
//                   <Step number={3} title="Get results instantly" description="Our advanced AI processes your request in seconds, delivering high-quality results you can download or share." />
//                 </div>
//               </ScrollReveal>
//               <ScrollReveal delay={200}>
//                 <div className="relative">
//                   <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur opacity-60"></div>
//                   <div className="glass-card relative rounded-2xl p-1 overflow-hidden">
//                     <img
//                       src="https://images.unsplash.com/photo-1518770660439-4636190af475"
//                       alt="SamDocAI Workflow"
//                       className="w-full h-auto rounded-xl object-cover shadow-lg"
//                     />
//                   </div>
//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {/* Feature Showcase Section */}
//         <section className="py-16 lg:py-24">
//           <div className="container max-w-6xl mx-auto px-4 md:px-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <ScrollReveal>
//                 <div className="relative group">
//                   <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="glass-card relative rounded-2xl p-1 overflow-hidden">
//                     <div className="bg-white rounded-xl p-6">
//                       <div className="bg-blue-50 text-blue-500 w-12 h-12 flex items-center justify-center rounded-xl mb-4">
//                         <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Document Converter" className="w-6 h-6" />
//                       </div>
//                       <h3 className="text-2xl font-bold mb-3">Document Converter</h3>
//                       <p className="text-foreground/70 mb-6">Convert between document formats while preserving layout, formatting, and content integrity.</p>
//                       <div className="space-y-3 mb-6">
//                         <Feature text="PDF to Word, Excel, PowerPoint" />
//                         <Feature text="Image to text (OCR)" />
//                         <Feature text="Batch conversion" />
//                         <Feature text="Format preservation" />
//                       </div>
//                       <Button
//                         variant="outline"
//                         className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
//                         onClick={() => handleFeatureClick(2000)}
//                       >
//                         Try Now <ArrowRight className="ml-2 h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </ScrollReveal>
//               <ScrollReveal delay={100}>
//                 <div className="space-y-6">
//                   <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-sm font-medium">
//                     Featured Tool
//                   </div>
//                   <h2 className="text-3xl md:text-4xl font-display font-bold">
//                     Transform documents with unmatched precision
//                   </h2>
//                   <p className="text-xl text-foreground/70">
//                     Our document converter preserves formatting, tables, and images with exceptional accuracy. Convert between formats without losing the original document's integrity.
//                   </p>
//                   <ul className="space-y-4">
//                     <BenefitItem text="Save time with batch processing capabilities" />
//                     <BenefitItem text="Extract text from images with advanced OCR" />
//                     <BenefitItem text="Maintain document structure and formatting" />
//                     <BenefitItem text="Convert PDF forms while preserving interactivity" />
//                   </ul>
//                   <div className="pt-2">
//                     <Button
//                       size="lg"
//                       className="bg-primary hover:bg-primary/90 text-white font-medium px-8 transition-all duration-300"
//                       onClick={() => handleFeatureClick(2000)}
//                     >
//                       Try Document Converter <ExternalLink className="ml-2 h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section id="testimonials" className="py-16 lg:py-24 bg-secondary">
//           <div className="container max-w-6xl mx-auto px-4 md:px-6">
//             <ScrollReveal>
//               <div className="text-center mb-16">
//                 <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
//                   Testimonials
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
//                   What users are saying
//                 </h2>
//                 <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
//                   Join thousands of satisfied users who have transformed their document workflows
//                 </p>
//               </div>
//             </ScrollReveal>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <ScrollReveal delay={100}>
//                 <Testimonial content="The document converter is a game-changer for our team. We can batch convert hundreds of PDFs to editable formats in minutes, not hours." author="Sarah Johnson" role="Operations Manager" />
//               </ScrollReveal>
//               <ScrollReveal delay={200}>
//                 <Testimonial content="Being able to chat with my PDFs and ask specific questions has revolutionized how I research. It's like having an assistant who's read all my documents." author="Michael Chen" role="Research Analyst" />
//               </ScrollReveal>
//               <ScrollReveal delay={300}>
//                 <Testimonial content="The diagram interpreter tool accurately extracts data from complex charts in our financial reports. It's saved me countless hours of manual data entry." author="David Rodriguez" role="Financial Advisor" />
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action */}
//         <section id="get-started" className="py-16 lg:py-24 relative overflow-hidden">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-hero-glow opacity-60 blur-3xl -z-10" />
//           <div className="container max-w-6xl mx-auto px-4 md:px-6">
//             <ScrollReveal>
//               <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
//                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
//                   Ready to transform your document workflow?
//                 </h2>
//                 <p className="text-xl text-foreground/70 mb-8 max-w-xl mx-auto">
//                   Start using SamDocAI today and experience the power of AI-driven document tools that save time and improve productivity.
//                 </p>
//                 <div className="flex flex-col sm:flex-row justify-center gap-4">
//                   <Button
//                     size="lg"
//                     className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg transition-all duration-300 shimmer-button"
//                     onClick={scrollToFeatures}
//                   >
//                     Get Started Now
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="border-2 border-foreground/10 hover:bg-foreground/5 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300"
//                     onClick={scrollToFeatures}
//                   >
//                     Contact Sales
//                   </Button>
//                 </div>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// // Reusable Components
// const Step = ({ number, title, description }: { number: number; title: string; description: string }) => (
//   <div className="flex gap-4">
//     <div className="flex-shrink-0">
//       <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg">
//         {number}
//       </div>
//     </div>
//     <div>
//       <h3 className="text-xl font-bold mb-2">{title}</h3>
//       <p className="text-foreground/70">{description}</p>
//     </div>
//   </div>
// );

// const Feature = ({ text }: { text: string }) => (
//   <div className="flex items-center gap-2">
//     <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
//       <Check className="w-3 h-3 text-blue-500" />
//     </div>
//     <span className="text-foreground/80">{text}</span>
//   </div>
// );

// const BenefitItem = ({ text }: { text: string }) => (
//   <li className="flex items-start gap-3">
//     <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
//       <Check className="w-4 h-4 text-primary" />
//     </div>
//     <span className="text-lg text-foreground/80">{text}</span>
//   </li>
// );

// const Testimonial = ({ content, author, role }: { content: string; author: string; role: string }) => (
//   <div className="glass-card rounded-xl p-6 h-full flex flex-col">
//     <blockquote className="text-lg text-foreground/80 mb-6 flex-grow">"{content}"</blockquote>
//     <div className="flex items-center gap-3">
//       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary flex items-center justify-center text-white font-medium text-sm">
//         {author.split(' ').map(name => name[0]).join('')}
//       </div>
//       <div>
//         <div className="font-semibold">{author}</div>
//         <div className="text-sm text-foreground/60">{role}</div>
//       </div>
//     </div>
//   </div>
// );

// export default Index;
// src/pages/Index.tsx
// import React, { useEffect, useState } from "react";
// import Navbar from "@/components/layout/Navbar";
// import Hero from "@/components/layout/Hero";
// import Features from "@/components/layout/Features";
// import Footer from "@/components/layout/Footer";
// import { ArrowRight, Check, ChevronRight, ExternalLink } from "lucide-react";
// import { ScrollReveal } from "@/components/ui/ScrollReveal";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// const Index: React.FC = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     complaint: "",
//   });

//   useEffect(() => {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         if (targetId && targetId !== '#') {
//           const targetElement = document.querySelector(targetId);
//           if (targetElement) {
//             window.scrollTo({
//               top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
//               behavior: 'smooth',
//             });
//           }
//         }
//       });
//     });
//   }, []);

//   const scrollToFeatures = (e: React.MouseEvent) => {
//     e.preventDefault();
//     const featuresSection = document.getElementById("features");
//     if (featuresSection) {
//       window.scrollTo({
//         top: featuresSection.getBoundingClientRect().top + window.scrollY - 80,
//         behavior: 'smooth',
//       });
//     }
//   };

//   const handleFeatureClick = (port: number) => {
//     window.open(`http://localhost:${port}`, "_blank");
//   };

//   const handleContactSalesClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     setIsFormOpen(true); // Show the form
//   };

//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulate email sending (replace with actual backend call)
//     const emailData = {
//       to: "your-email@example.com", // Replace with your email
//       subject: `New Complaint from ${formData.name}`,
//       body: `
//         Name: ${formData.name}
//         Email: ${formData.email}
//         Complaint: ${formData.complaint}
//       `,
//     };
//     console.log("Email data to send:", emailData); // For testing

//     // For actual email sending, you'd call a backend API here, e.g.:
//     // fetch('/api/send-email', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(emailData),
//     // }).then(() => alert('Complaint submitted!'));

//     alert("Complaint submitted!"); // Temporary feedback
//     setFormData({ name: "", email: "", complaint: "" }); // Reset form
//     setIsFormOpen(false); // Close form
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main>
//         <Hero />
//         <Features />

//         {/* How It Works Section */}
//         <section id="how-it-works" className="py-16 lg:py-24 bg-secondary relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-[0.03] -z-10" />
//           <div className="container max-w-6xl mx-auto px-4 md:px-6">
//             <ScrollReveal>
//               <div className="text-center mb-16">
//                 <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
//                   Workflow
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
//                   How SamDocAI works
//                 </h2>
//                 <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
//                   Experience a seamless workflow that transforms how you interact with documents
//                 </p>
//               </div>
//             </ScrollReveal>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//               <ScrollReveal delay={100}>
//                 <div className="space-y-8">
//                   <Step number={1} title="Upload your document" description="Simply drag and drop your file or browse to upload. We support PDF, Word, Excel, PowerPoint, and many more formats." />
//                   <Step number={2} title="Choose your tool" description="Select from our suite of powerful AI tools based on what you need to accomplish with your document." />
//                   <Step number={3} title="Get results instantly" description="Our advanced AI processes your request in seconds, delivering high-quality results you can download or share." />
//                 </div>
//               </ScrollReveal>
//               <ScrollReveal delay={200}>
//                 <div className="relative">
//                   <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur opacity-60"></div>
//                   <div className="glass-card relative rounded-2xl p-1 overflow-hidden">
//                     <img
//                       src="https://images.unsplash.com/photo-1518770660439-4636190af475"
//                       alt="SamDocAI Workflow"
//                       className="w-full h-auto rounded-xl object-cover shadow-lg"
//                     />
//                   </div>
//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {/* Feature Showcase Section */}
//         <section className="py-16 lg:py-24">
//           <div className="container max-w-6xl mx-auto px-4 md:px-6">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <ScrollReveal>
//                 <div className="relative group">
//                   <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <div className="glass-card relative rounded-2xl p-1 overflow-hidden">
//                     <div className="bg-white rounded-xl p-6">
//                       <div className="bg-blue-50 text-blue-500 w-12 h-12 flex items-center justify-center rounded-xl mb-4">
//                         <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Document Converter" className="w-6 h-6" />
//                       </div>
//                       <h3 className="text-2xl font-bold mb-3">Document Converter</h3>
//                       <p className="text-foreground/70 mb-6">Convert between document formats while preserving layout, formatting, and content integrity.</p>
//                       <div className="space-y-3 mb-6">
//                         <Feature text="PDF to Word, Excel, PowerPoint" />
//                         <Feature text="Image to text (OCR)" />
//                         <Feature text="Batch conversion" />
//                         <Feature text="Format preservation" />
//                       </div>
//                       <Button
//                         variant="outline"
//                         className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
//                         onClick={() => handleFeatureClick(2000)}
//                       >
//                         Try Now <ArrowRight className="ml-2 h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </ScrollReveal>
//               <ScrollReveal delay={100}>
//                 <div className="space-y-6">
//                   <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-sm font-medium">
//                     Featured Tool
//                   </div>
//                   <h2 className="text-3xl md:text-4xl font-display font-bold">
//                     Transform documents with unmatched precision
//                   </h2>
//                   <p className="text-xl text-foreground/70">
//                     Our document converter preserves formatting, tables, and images with exceptional accuracy. Convert between formats without losing the original document's integrity.
//                   </p>
//                   <ul className="space-y-4">
//                     <BenefitItem text="Save time with batch processing capabilities" />
//                     <BenefitItem text="Extract text from images with advanced OCR" />
//                     <BenefitItem text="Maintain document structure and formatting" />
//                     <BenefitItem text="Convert PDF forms while preserving interactivity" />
//                   </ul>
//                   <div className="pt-2">
//                     <Button
//                       size="lg"
//                       className="bg-primary hover:bg-primary/90 text-white font-medium px-8 transition-all duration-300"
//                       onClick={() => handleFeatureClick(2000)}
//                     >
//                       Try Document Converter <ExternalLink className="ml-2 h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section id="testimonials" className="py-16 lg:py-24 bg-secondary">
//           <div className="container max-w-6xl mx-auto px-4 md:px-6">
//             <ScrollReveal>
//               <div className="text-center mb-16">
//                 <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
//                   Testimonials
//                 </div>
//                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
//                   What users are saying
//                 </h2>
//                 <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
//                   Join thousands of satisfied users who have transformed their document workflows
//                 </p>
//               </div>
//             </ScrollReveal>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <ScrollReveal delay={100}>
//                 <Testimonial content="The document converter is a game-changer for our team. We can batch convert hundreds of PDFs to editable formats in minutes, not hours." author="Sarah Johnson" role="Operations Manager" />
//               </ScrollReveal>
//               <ScrollReveal delay={200}>
//                 <Testimonial content="Being able to chat with my PDFs and ask specific questions has revolutionized how I research. It's like having an assistant who's read all my documents." author="Michael Chen" role="Research Analyst" />
//               </ScrollReveal>
//               <ScrollReveal delay={300}>
//                 <Testimonial content="The diagram interpreter tool accurately extracts data from complex charts in our financial reports. It's saved me countless hours of manual data entry." author="David Rodriguez" role="Financial Advisor" />
//               </ScrollReveal>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action */}
//         <section id="get-started" className="py-16 lg:py-24 relative overflow-hidden">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-hero-glow opacity-60 blur-3xl -z-10" />
//           <div className="container max-w-6xl mx-auto px-4 md:px-6">
//             <ScrollReveal>
//               <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
//                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
//                   Ready to transform your document workflow?
//                 </h2>
//                 <p className="text-xl text-foreground/70 mb-8 max-w-xl mx-auto">
//                   Start using SamDocAI today and experience the power of AI-driven document tools that save time and improve productivity.
//                 </p>
//                 <div className="flex flex-col sm:flex-row justify-center gap-4">
//                   <Button
//                     size="lg"
//                     className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg transition-all duration-300 shimmer-button"
//                     onClick={scrollToFeatures}
//                   >
//                     Get Started Now
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="border-2 border-foreground/10 hover:bg-foreground/5 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300"
//                     onClick={handleContactSalesClick}
//                   >
//                     Contact Sales
//                   </Button>
//                 </div>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* Complaint Form Modal */}
//         {isFormOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg p-6 w-full max-w-md">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit a Complaint</h3>
//               <form onSubmit={handleFormSubmit} className="space-y-4">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleFormChange}
//                     required
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="complaint" className="block text-sm font-medium text-gray-700">
//                     Complaint
//                   </label>
//                   <textarea
//                     id="complaint"
//                     name="complaint"
//                     value={formData.complaint}
//                     onChange={handleFormChange}
//                     required
//                     rows={4}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
//                   />
//                 </div>
//                 <div className="flex justify-end gap-4">
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() => setIsFormOpen(false)}
//                     className="border-2 border-gray-300 hover:bg-gray-100"
//                   >
//                     Cancel
//                   </Button>
//                   <Button
//                     type="submit"
//                     className="bg-primary hover:bg-primary/90 text-white"
//                   >
//                     Submit
//                   </Button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// // Reusable Components
// const Step = ({ number, title, description }: { number: number; title: string; description: string }) => (
//   <div className="flex gap-4">
//     <div className="flex-shrink-0">
//       <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg">
//         {number}
//       </div>
//     </div>
//     <div>
//       <h3 className="text-xl font-bold mb-2">{title}</h3>
//       <p className="text-foreground/70">{description}</p>
//     </div>
//   </div>
// );

// const Feature = ({ text }: { text: string }) => (
//   <div className="flex items-center gap-2">
//     <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
//       <Check className="w-3 h-3 text-blue-500" />
//     </div>
//     <span className="text-foreground/80">{text}</span>
//   </div>
// );

// const BenefitItem = ({ text }: { text: string }) => (
//   <li className="flex items-start gap-3">
//     <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
//       <Check className="w-4 h-4 text-primary" />
//     </div>
//     <span className="text-lg text-foreground/80">{text}</span>
//   </li>
// );

// const Testimonial = ({ content, author, role }: { content: string; author: string; role: string }) => (
//   <div className="glass-card rounded-xl p-6 h-full flex flex-col">
//     <blockquote className="text-lg text-foreground/80 mb-6 flex-grow">"{content}"</blockquote>
//     <div className="flex items-center gap-3">
//       <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary flex items-center justify-center text-white font-medium text-sm">
//         {author.split(' ').map(name => name[0]).join('')}
//       </div>
//       <div>
//         <div className="font-semibold">{author}</div>
//         <div className="text-sm text-foreground/60">{role}</div>
//       </div>
//     </div>
//   </div>
// );

// export default Index;
// src/pages/Index.tsx
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Check, ChevronRight, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const Index: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    complaint: "",
  });

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth',
            });
          }
        }
      });
    });
  }, []);

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      window.scrollTo({
        top: featuresSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleFeatureClick = (port: number) => {
    window.open(`https://conver-1-wvfr.onrender.com/`, "_blank");
  };

  const handleContactSalesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailParams = {
      name: formData.name,
      email: formData.email,
      complaint: formData.complaint,
    };

    // Replace these with your EmailJS credentials
    const SERVICE_ID = "service_9rrtdbp"; // From EmailJS dashboard
    const TEMPLATE_ID = "template_0v5xg8g"; // From EmailJS dashboard
    const USER_ID = "P56Fnd2tKj4mQZF4v"; // From EmailJS dashboard

    emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert("Complaint submitted successfully!");
        setFormData({ name: "", email: "", complaint: "" });
        setIsFormOpen(false);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert("Failed to submit complaint. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 lg:py-24 bg-secondary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-[0.03] -z-10" />
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Workflow
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  How SamDocAI works
                </h2>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Experience a seamless workflow that transforms how you interact with documents
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <ScrollReveal delay={100}>
                <div className="space-y-8">
                  <Step number={1} title="Upload your document" description="Simply drag and drop your file or browse to upload. We support PDF, Word, Excel, PowerPoint, and many more formats." />
                  <Step number={2} title="Choose your tool" description="Select from our suite of powerful AI tools based on what you need to accomplish with your document." />
                  <Step number={3} title="Get results instantly" description="Our advanced AI processes your request in seconds, delivering high-quality results you can download or share." />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="relative">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur opacity-60"></div>
                  <div className="glass-card relative rounded-2xl p-1 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                      alt="SamDocAI Workflow"
                      className="w-full h-auto rounded-xl object-cover shadow-lg"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Feature Showcase Section */}
        <section className="py-16 lg:py-24">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="glass-card relative rounded-2xl p-1 overflow-hidden">
                    <div className="bg-white rounded-xl p-6">
                      <div className="bg-blue-50 text-blue-500 w-12 h-12 flex items-center justify-center rounded-xl mb-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Document Converter" className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Document Converter</h3>
                      <p className="text-foreground/70 mb-6">Convert between document formats while preserving layout, formatting, and content integrity.</p>
                      <div className="space-y-3 mb-6">
                        <Feature text="PDF to Word, Excel, PowerPoint" />
                        <Feature text="Image to text (OCR)" />
                        <Feature text="Batch conversion" />
                        <Feature text="Format preservation" />
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                        onClick={() => handleFeatureClick(2000)}
                      >
                        Try Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-sm font-medium">
                    Featured Tool
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold">
                    Transform documents with unmatched precision
                  </h2>
                  <p className="text-xl text-foreground/70">
                    Our document converter preserves formatting, tables, and images with exceptional accuracy. Convert between formats without losing the original document's integrity.
                  </p>
                  <ul className="space-y-4">
                    <BenefitItem text="Save time with batch processing capabilities" />
                    <BenefitItem text="Extract text from images with advanced OCR" />
                    <BenefitItem text="Maintain document structure and formatting" />
                    <BenefitItem text="Convert PDF forms while preserving interactivity" />
                  </ul>
                  <div className="pt-2">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white font-medium px-8 transition-all duration-300"
                      onClick={() => handleFeatureClick(2000)}
                    >
                      Try Document Converter <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 lg:py-24 bg-secondary">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Testimonials
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  What users are saying
                </h2>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                  Join thousands of satisfied users who have transformed their document workflows
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollReveal delay={100}>
                <Testimonial content="The document converter is a game-changer for our team. We can batch convert hundreds of PDFs to editable formats in minutes, not hours." author="Sarah Johnson" role="Operations Manager" />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <Testimonial content="Being able to chat with my PDFs and ask specific questions has revolutionized how I research. It's like having an assistant who's read all my documents." author="Michael Chen" role="Research Analyst" />
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Testimonial content="The diagram interpreter tool accurately extracts data from complex charts in our financial reports. It's saved me countless hours of manual data entry." author="David Rodriguez" role="Financial Advisor" />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="get-started" className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-hero-glow opacity-60 blur-3xl -z-10" />
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <ScrollReveal>
              <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Ready to transform your document workflow?
                </h2>
                <p className="text-xl text-foreground/70 mb-8 max-w-xl mx-auto">
                  Start using SamDocAI today and experience the power of AI-driven document tools that save time and improve productivity.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 text-lg transition-all duration-300 shimmer-button"
                    onClick={scrollToFeatures}
                  >
                    Get Started Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-foreground/10 hover:bg-foreground/5 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300"
                    onClick={handleContactSalesClick}
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Complaint Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Submit a Complaint</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="complaint" className="block text-sm font-medium text-gray-700">
                    Complaint
                  </label>
                  <textarea
                    id="complaint"
                    name="complaint"
                    value={formData.complaint}
                    onChange={handleFormChange}
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsFormOpen(false)}
                    className="border-2 border-gray-300 hover:bg-gray-100"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

// Reusable Components
const Step = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  </div>
);

const Feature = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
      <Check className="w-3 h-3 text-blue-500" />
    </div>
    <span className="text-foreground/80">{text}</span>
  </div>
);

const BenefitItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-4 h-4 text-primary" />
    </div>
    <span className="text-lg text-foreground/80">{text}</span>
  </li>
);

const Testimonial = ({ content, author, role }: { content: string; author: string; role: string }) => (
  <div className="glass-card rounded-xl p-6 h-full flex flex-col">
    <blockquote className="text-lg text-foreground/80 mb-6 flex-grow">"{content}"</blockquote>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary flex items-center justify-center text-white font-medium text-sm">
        {author.split(' ').map(name => name[0]).join('')}
      </div>
      <div>
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-foreground/60">{role}</div>
      </div>
    </div>
  </div>
);

export default Index;