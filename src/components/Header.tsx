import { useTheme } from "@/contexts/useTheme";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Text } from "./Text";
import { useDispatch } from "react-redux";
import { toggleSideMenu } from "@/redux/features/uiSlice";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useDispatch();

  const handleSideMenu = () => {
    dispatch(toggleSideMenu());
  };

  return (
    <>
      <header
        className={`h-[49px] px-4 flex flex-col justify-center bg-header-light dark:bg-header-dark`}
      >
        <nav>
          <ul className="flex space-x-4">
            <li className="cursor-pointer" onClick={handleSideMenu}>
              <FontAwesomeIcon
                icon={faBars}
                size="lg" // Change size to 'lg', '2x', etc.
                className={`hover:underline transition-transform transform hover:scale-110 text-text-light dark:text-text-dark`}
              />
            </li>
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
      <Separator className={"bg-border-light dark:bg-border-dark"} />
    </>
  );
};
