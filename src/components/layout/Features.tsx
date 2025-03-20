
// // // import { FileText, MessageSquare, PenTool, BarChart4, FileArchive } from "lucide-react";
// // // import { FeatureCard } from "@/components/ui/FeatureCard";
// // // import { ScrollReveal } from "@/components/ui/ScrollReveal";
// // // import styles from "../../styles/Features.module.css";

// // // export const Features = () => {
// // //   const features = [
// // //     {
// // //       title: "Document Converter",
// // //       description: "Convert documents between various formats including PDF, Word, Excel, and more with high fidelity and precision.",
// // //       icon: FileText,
// // //       iconClassName: "bg-blue-50 text-blue-500",
// // //       delay: 0.1,
// // //       id: "document-converter"
// // //     },
// // //     {
// // //       title: "Chat with PDF",
// // //       description: "Ask questions about your documents and get intelligent answers. Our AI understands context and provides accurate responses.",
// // //       icon: MessageSquare,
// // //       iconClassName: "bg-purple-50 text-purple-500",
// // //       delay: 0.2,
// // //       id: "chat-with-pdf"
// // //     },
// // //     {
// // //       title: "Draw and Find",
// // //       description: "Sketch what you're looking for and let AI locate similar elements in your documents with advanced visual recognition.",
// // //       icon: PenTool,
// // //       iconClassName: "bg-green-50 text-green-500",
// // //       delay: 0.3,
// // //       id: "draw-and-find"
// // //     },
// // //     {
// // //       title: "Diagram Interpreter",
// // //       description: "Extract meaning from charts, diagrams, and visual content with AI that understands and explains complex visuals.",
// // //       icon: BarChart4,
// // //       iconClassName: "bg-amber-50 text-amber-500",
// // //       delay: 0.4,
// // //       id: "diagram-interpreter"
// // //     },
// // //     {
// // //       title: "Compressor",
// // //       description: "Reduce file sizes without sacrificing quality, perfect for sharing or storing large collections of documents.",
// // //       icon: FileArchive,
// // //       iconClassName: "bg-red-50 text-red-500",
// // //       delay: 0.5,
// // //       id: "compressor"
// // //     }
// // //   ];

// // //   return (
// // //     <section id="features" className={styles.section}>
// // //       <div className={styles.container}>
// // //         <ScrollReveal>
// // //           <div className={styles.header}>
// // //             <div className={styles.badge}>
// // //               Features
// // //             </div>
// // //             <h2 className={styles.title}>
// // //               Powerful tools for every document need
// // //             </h2>
// // //             <p className={styles.description}>
// // //               Our suite of AI-powered tools gives you unmatched capabilities for working with documents of all kinds.
// // //             </p>
// // //           </div>
// // //         </ScrollReveal>

// // //         <div className={styles.grid}>
// // //           {features.map((feature, index) => (
// // //             <ScrollReveal key={index} delay={100 * (index + 1)}>
// // //               <div id={feature.id}>
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
// // import { FileText, MessageSquare, PenTool, BarChart4, FileArchive } from "lucide-react";
// // import { FeatureCard } from "@/components/ui/FeatureCard";
// // import { ScrollReveal } from "@/components/ui/ScrollReveal";

// // export const Features = () => {
// //   const basePort = 2000; // Starting port number

// //   const features = [
// //     {
// //       title: "Document Converter",
// //       description: "Convert documents between various formats including PDF, Word, Excel, and more with high fidelity and precision.",
// //       icon: FileText,
// //       iconClassName: "bg-blue-50 text-blue-500",
// //       delay: 0.1,
// //       id: "document-converter",
// //     },
// //     {
// //       title: "Chat with PDF",
// //       description: "Ask questions about your documents and get intelligent answers. Our AI understands context and provides accurate responses.",
// //       icon: MessageSquare,
// //       iconClassName: "bg-purple-50 text-purple-500",
// //       delay: 0.2,
// //       id: "chat-with-pdf",
// //     },
// //     {
// //       title: "Draw and Find",
// //       description: "Sketch what you're looking for and let AI locate similar elements in your documents with advanced visual recognition.",
// //       icon: PenTool,
// //       iconClassName: "bg-green-50 text-green-500",
// //       delay: 0.3,
// //       id: "draw-and-find",
// //     },
// //     {
// //       title: "Diagram Interpreter",
// //       description: "Extract meaning from charts, diagrams, and visual content with AI that understands and explains complex visuals.",
// //       icon: BarChart4,
// //       iconClassName: "bg-amber-50 text-amber-500",
// //       delay: 0.4,
// //       id: "diagram-interpreter",
// //     },
// //     {
// //       title: "Compressor",
// //       description: "Reduce file sizes without sacrificing quality, perfect for sharing or storing large collections of documents.",
// //       icon: FileArchive,
// //       iconClassName: "bg-red-50 text-red-500",
// //       delay: 0.5,
// //       id: "compressor",
// //     },
// //   ];

// //   // Function to handle click and open new tab
// //   const handleFeatureClick = (index: number) => {
// //     const port = basePort + index;
// //     window.open(`http://localhost:${port}`, "_blank");
// //   };

// //   return (
// //     <section id="features" className="py-16 bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <ScrollReveal>
// //           <div className="text-center mb-12">
// //             <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
// //               Features
// //             </span>
// //             <h2 className="mt-4 text-3xl font-bold text-gray-900">
// //               Powerful tools for every document need
// //             </h2>
// //             <p className="mt-2 text-lg text-gray-600">
// //               Our suite of AI-powered tools gives you unmatched capabilities for working with documents of all kinds.
// //             </p>
// //           </div>
// //         </ScrollReveal>

// //         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
// //           {features.map((feature, index) => (
// //             <ScrollReveal key={index} delay={100 * (index + 1)}>
// //               <div id={feature.id} onClick={() => handleFeatureClick(index)} className="cursor-pointer">
// //                 <FeatureCard
// //                   title={feature.title}
// //                   description={feature.description}
// //                   icon={feature.icon}
// //                   iconClassName={feature.iconClassName}
// //                   delay={feature.delay}
// //                 />
// //               </div>
// //             </ScrollReveal>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Features;
// // import { FileText, MessageSquare, PenTool, BarChart4, FileArchive } from "lucide-react";
// // import { FeatureCard } from "@/components/ui/FeatureCard";
// // import { ScrollReveal } from "@/components/ui/ScrollReveal";

// // interface FeaturesProps {
// //   onFeatureClick: (port: number) => void;
// // }

// // export const Features = ({ onFeatureClick }: FeaturesProps) => {
// //   const features = [
// //     {
// //       title: "Document Converter",
// //       description: "Convert documents between various formats including PDF, Word, Excel, and more with high fidelity and precision.",
// //       icon: FileText,
// //       iconClassName: "bg-blue-50 text-blue-500",
// //       delay: 0.1,
// //       id: "document-converter",
// //       port: 2000,
// //     },
// //     {
// //       title: "Chat with PDF",
// //       description: "Ask questions about your documents and get intelligent answers. Our AI understands context and provides accurate responses.",
// //       icon: MessageSquare,
// //       iconClassName: "bg-purple-50 text-purple-500",
// //       delay: 0.2,
// //       id: "chat-with-pdf",
// //       port: 2001,
// //     },
// //     {
// //       title: "Draw and Find",
// //       description: "Sketch what you're looking for and let AI locate similar elements in your documents with advanced visual recognition.",
// //       icon: PenTool,
// //       iconClassName: "bg-green-50 text-green-500",
// //       delay: 0.3,
// //       id: "draw-and-find",
// //       port: 2002,
// //     },
// //     {
// //       title: "Diagram Interpreter",
// //       description: "Extract meaning from charts, diagrams, and visual content with AI that understands and explains complex visuals.",
// //       icon: BarChart4,
// //       iconClassName: "bg-amber-50 text-amber-500",
// //       delay: 0.4,
// //       id: "diagram-interpreter",
// //       port: 2003,
// //     },
// //     {
// //       title: "Compressor",
// //       description: "Reduce file sizes without sacrificing quality, perfect for sharing or storing large collections of documents.",
// //       icon: FileArchive,
// //       iconClassName: "bg-red-50 text-red-500",
// //       delay: 0.5,
// //       id: "compressor",
// //       port: 2004,
// //     },
// //   ];

// //   return (
// //     <section id="features" className="py-16 lg:py-24 bg-gray-50">
// //       <div className="container max-w-6xl mx-auto px-4 md:px-6">
// //         <ScrollReveal>
// //           <div className="text-center mb-12">
// //             <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
// //               Features
// //             </span>
// //             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// //               Powerful tools for every document need
// //             </h2>
// //             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
// //               Our suite of AI-powered tools gives you unmatched capabilities for working with documents of all kinds.
// //             </p>
// //           </div>
// //         </ScrollReveal>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {features.map((feature, index) => (
// //             <ScrollReveal key={index} delay={100 * (index + 1)}>
// //               <div
// //                 id={feature.id}
// //                 onClick={() => onFeatureClick(feature.port)}
// //                 className="cursor-pointer transition-transform hover:scale-105"
// //               >
// //                 <FeatureCard
// //                   title={feature.title}
// //                   description={feature.description}
// //                   icon={feature.icon}
// //                   iconClassName={feature.iconClassName}
// //                   delay={feature.delay} id={""}                />
// //               </div>
// //             </ScrollReveal>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Features;
// // src/components/layout/Features.tsx
// import React from "react";
// import { FileText, MessageSquare, PenTool, BarChart4, FileArchive } from "lucide-react";
// import { FeatureCard } from "@/components/ui/FeatureCard";
// import { ScrollReveal } from "@/components/ui/ScrollReveal";

// export const Features: React.FC = () => {
//   const features = [
//     {
//       title: "Document Converter",
//       description: "Convert documents between various formats including PDF, Word, Excel, and more with high fidelity and precision.",
//       icon: FileText,
//       iconClassName: "bg-blue-50 text-blue-500",
//       delay: 0.1,
//       id: "document-converter",
//       port: 2000,
//     },
//     {
//       title: "Chat with PDF",
//       description: "Ask questions about your documents and get intelligent answers. Our AI understands context and provides accurate responses.",
//       icon: MessageSquare,
//       iconClassName: "bg-purple-50 text-purple-500",
//       delay: 0.2,
//       id: "chat-with-pdf",
//       port: 2001,
//     },
//     {
//       title: "Draw and Find",
//       description: "Sketch what you're looking for and let AI locate similar elements in your documents with advanced visual recognition.",
//       icon: PenTool,
//       iconClassName: "bg-green-50 text-green-500",
//       delay: 0.3,
//       id: "draw-and-find",
//       port: 2002,
//     },
//     {
//       title: "Diagram Interpreter",
//       description: "Extract meaning from charts, diagrams, and visual content with AI that understands and explains complex visuals.",
//       icon: BarChart4,
//       iconClassName: "bg-amber-50 text-amber-500",
//       delay: 0.4,
//       id: "diagram-interpreter",
//       port: 2003,
//     },
//     {
//       title: "Compressor",
//       description: "Reduce file sizes without sacrificing quality, perfect for sharing or storing large collections of documents.",
//       icon: FileArchive,
//       iconClassName: "bg-red-50 text-red-500",
//       delay: 0.5,
//       id: "compressor",
//       port: 2004,
//     },
//   ];

//   const handleFeatureClick = (port: number) => {
//     window.open(`http://localhost:${port}`, "_blank");
//   };

//   return (
//     <section id="features" className="py-16 lg:py-24 bg-gray-50">
//       <div className="container max-w-6xl mx-auto px-4 md:px-6">
//         <ScrollReveal>
//           <div className="text-center mb-12">
//             <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
//               Features
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Powerful tools for every document need
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Our suite of AI-powered tools gives you unmatched capabilities for working with documents of all kinds.
//             </p>
//           </div>
//         </ScrollReveal>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <ScrollReveal key={index} delay={100 * (index + 1)}>
//               <div
//                 id={feature.id}
//                 onClick={() => handleFeatureClick(feature.port)}
//                 className="cursor-pointer transition-transform hover:scale-105"
//               >
//                 <FeatureCard
//                   title={feature.title}
//                   description={feature.description}
//                   icon={feature.icon}
//                   iconClassName={feature.iconClassName}
//                   delay={feature.delay} id={""}                />
//               </div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;
import { FileText, MessageSquare, PenTool, BarChart4, FileArchive } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FeaturesProps {
  onFeatureClick?: (port: number) => void;
}

export const Features = ({ onFeatureClick }: FeaturesProps) => {
  const features = [
    {
      title: "Document Converter",
      description: "Convert documents between various formats including PDF, Word, Excel, and more with high fidelity and precision.",
      icon: FileText,
      iconClassName: "bg-blue-50 text-blue-500",
      delay: 0.1,
      id: "document-converter",
      url: "https://conver-1-wvfr.onrender.com/",
    },
    {
      title: "Chat with PDF",
      description: "Ask questions about your documents and get intelligent answers. Our AI understands context and provides accurate responses.",
      icon: MessageSquare,
      iconClassName: "bg-purple-50 text-purple-500",
      delay: 0.2,
      id: "chat-with-pdf",
      url: "https://chat-with-documents-9tyi.onrender.com/",
    },
    {
      title: "AI Calculator",
      description: "Perform complex calculations and get instant results with our AI-powered calculator that understands natural language.",
      // description: "Sketch what you're looking for and let AI locate similar elements in your documents with advanced visual recognition.",
      icon: PenTool,
      iconClassName: "bg-green-50 text-green-500",
      delay: 0.3,
      id: "draw-and-find",
      url: "https://apple-inspired-ai-calculator.onrender.com/",
    },
    {
      title: "Diagram Interpreter",
      description: "Extract meaning from charts, diagrams, and visual content with AI that understands and explains complex visuals.",
      icon: BarChart4,
      iconClassName: "bg-amber-50 text-amber-500",
      delay: 0.4,
      id: "diagram-interpreter",
      url: "https://diagram-interpret.onrender.com/",
    },
    {
      title: "Compressor",
      description: "Reduce file sizes without sacrificing quality, perfect for sharing or storing large collections of documents.",
      icon: FileArchive,
      iconClassName: "bg-red-50 text-red-500",
      delay: 0.5,
      id: "compressor",
      url: "https://compressor-c3ph.onrender.com/",
    },
  ];

  // Function to handle click event
  const handleFeatureClick = (url: string) => {
    window.open(url, "_blank"); // Opens the URL in a new tab
  };

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful tools for every document need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our suite of AI-powered tools gives you unmatched capabilities for working with documents of all kinds.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={100 * (index + 1)}>
              <div
                id={feature.id}
                onClick={() => handleFeatureClick(feature.url)}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  iconClassName={feature.iconClassName}
                  delay={feature.delay}
                  id={feature.id}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
