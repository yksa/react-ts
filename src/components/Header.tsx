import { useTheme } from "@/contexts/useTheme";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Text } from "./Text";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header
        className={`h-[50px] px-4 flex flex-col justify-center ${
          theme === "light"
            ? "bg-header-light border-border-light"
            : "bg-header-dark border-border-dark"
        }`}
      >
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:underline">
                <Text>Welcome</Text>
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:underline">
                <Text>Home</Text>
              </Link>
            </li>

            <li className="cursor-pointer" onClick={toggleTheme}>
              <FontAwesomeIcon
                icon={theme === "light" ? faMoon : faSun}
                size="lg" // Change size to 'lg', '2x', etc.
                className={`hover:underline transition-transform transform hover:scale-110 ${
                  theme === "light" ? "text-text-light" : "text-text-dark"
                }`}
              />
            </li>
          </ul>
        </nav>
      </header>
      <Separator
        className={`${
          theme === "light" ? "bg-border-light" : "bg-border-dark"
        }`}
      />
    </>
  );
};
