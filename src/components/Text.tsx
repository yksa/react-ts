import { useTheme } from "@/contexts/useTheme";
import { cn } from "@/lib/utils";

export interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Text = ({ children, className }: TextProps) => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        theme === "light" ? "text-text-light" : "text-text-dark",
        className
      )}
    >
      {children}
    </div>
  );
};
