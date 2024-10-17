import { Text } from "@/components/Text";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/useTheme";
import { useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState(0);
  const { toggleTheme, theme } = useTheme();
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error("Intentional Error");
  }

  return (
    <div className="p-4">
      <Text className={"text-xl font-semibold mb-2"}>Vite + React</Text>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)} className="mr-2">
          count is {count}
        </Button>
        <Button onClick={toggleTheme} className="mr-2">
          Toggle theme {theme}
        </Button>
        <Button onClick={() => setThrowError(true)}>Throw Error</Button>
      </div>
    </div>
  );
};

export default HomePage;
