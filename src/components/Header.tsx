import { useTheme } from "@/contexts/useTheme";
import {
  faBars,
  faLanguage,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Text } from "./Text";
import { useDispatch } from "react-redux";
import { toggleSideMenu } from "@/redux/features/uiSlice";
import { useLanguage } from "@/hooks/useLanguage";
import { AVAILABLE_LANGUAGES, Language } from "@/config/languages";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useDispatch();
  const { t, changeLanguage, currentLanguage } = useLanguage();

  const handleSideMenu = () => {
    dispatch(toggleSideMenu());
  };

  return (
    <>
      <header
        className={`h-[49px] px-4 flex flex-col justify-center bg-header-light dark:bg-header-dark`}
      >
        <nav>
          <ul className="flex space-x-4 items-center">
            <li className="cursor-pointer" onClick={handleSideMenu}>
              <FontAwesomeIcon
                icon={faBars}
                size="lg" // Change size to 'lg', '2x', etc.
                className={`hover:underline transition-transform transform hover:scale-110 text-text-light dark:text-text-dark`}
              />
            </li>
            <li>
              <Link to="/" className="text-white hover:underline">
                <Text>{t("welcome")}</Text>
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
            <li
              className="cursor-pointer"
              onClick={() =>
                changeLanguage(
                  currentLanguage === Language.EN ? Language.MY : Language.EN
                )
              }
            >
              <FontAwesomeIcon
                icon={faLanguage}
                size="lg" // Change size to 'lg', '2x', etc.
                className={`hover:underline transition-transform transform hover:scale-110
                    text-text-light dark:text-text-dark
                   `}
              />
            </li>
            <li>
              <Select
                onValueChange={(lang: Language) => changeLanguage(lang)}
                value={currentLanguage}
              >
                <SelectTrigger className="w-[180px] text-text-light dark:text-text-dark">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  {AVAILABLE_LANGUAGES.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                      {lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </li>
          </ul>
        </nav>
      </header>
      <Separator className={"bg-border-light dark:bg-border-dark"} />
    </>
  );
};
