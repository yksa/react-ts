import { useTheme } from "@/contexts/useTheme";

const Body = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen w-full flex flex-col ${
        theme === "light" ? "bg-body-light" : "bg-body-dark"
      }`}
    >
      {children}
    </div>
  );
};

export default Body;
