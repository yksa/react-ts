import { cn } from "@/lib/utils";

export interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Text = ({ children, className }: TextProps) => {
  return (
    <div className={cn("text-text-light dark:text-text-dark", className)}>
      {children}
    </div>
  );
};
