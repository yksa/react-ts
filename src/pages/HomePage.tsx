import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/useTheme";
import { useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState(0);
  const { toggleTheme, theme } = useTheme();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button onClick={toggleTheme}>Toggle theme {theme}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default HomePage;
