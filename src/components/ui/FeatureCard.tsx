
import React from "react";
import { LucideIcon } from "lucide-react";
import styles from "../../styles/FeatureCard.module.css";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  delay?: number;
  id: string;
}

export const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  className, 
  iconClassName,
  delay = 0,
  id
}: FeatureCardProps) => {
  const handleClick = () => {
    // Redirect based on feature ID
    switch(id) {
      case "document-converter":
        window.location.href = "https://conver-1-wvfr.onrender.com/";
        break;
      case "chat-with-pdf":
        window.location.href = "https://chat-with-documents-9tyi.onrender.com/";
        break;
      case "draw-and-find":
        window.location.href = "https://apple-inspired-ai-calculator.onrender.com/";
        break;
      case "diagram-interpreter":
        window.location.href = "https://diagram-interpret.onrender.com/";
        break;
      case "compressor":
        window.location.href = "https://fileforge-magic-converter.onrender.com/";
        break;
      case "Grammar-and-Plagiarism-Checker":
        window.location.href = "https://grammar-and-plagiarism.onrender.com/";
        break;
      // default:
      //   window.location.href = "http://localhost:1222";
    }
  };
  
  return (
    <div 
      className={`${styles.card} ${className || ''}`}
      style={{ animationDelay: `${delay}s` }}
      onClick={handleClick}
    >
      <div className={`${styles.icon} ${iconClassName || ''}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeatureCard;
