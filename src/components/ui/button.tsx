
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import styles from "../../styles/Button.module.css"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

// This function will generate the appropriate className string based on the variant and size
export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
} = {}) {
  const variantClass = variant ? styles[variant] : styles.default;
  const sizeClass = size === "sm" 
    ? styles.sm 
    : size === "lg" 
      ? styles.lg 
      : size === "icon" 
        ? styles.icon 
        : "";
  
  return cn(styles.button, variantClass, sizeClass, className);
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "default", 
    asChild = false, 
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
