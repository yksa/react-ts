import { useTheme } from "@/contexts/useTheme";
import {
  faBars,
  faLanguage,
  faMoon,
  faSignOutAlt,
  faSun,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Text } from "./Text";
import { useDispatch } from "react-redux";
import { toggleSideMenu } from "@/redux/features/uiSlice";
import { useLanguage } from "@/hooks/useLanguage";
import { AVAILABLE_LANGUAGES, Language } from "@/config/languageTypes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useAuth, useLogout } from "@/hooks/useAuth";
import { clearAuth } from "@/redux/features/authSlice";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useDispatch();
  const { t, changeLanguage, currentLanguage } = useLanguage();
  const { mutate } = useLogout();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleSideMenu = () => {
    dispatch(toggleSideMenu());
  };

  const handleLogout = () => {
    dispatch(clearAuth());
    // navigate to root use react-router-doom
    navigate("/", { replace: true });

    mutate();
  };

  return (
    <>
      <header
        className={`h-[49px] px-4 flex flex-col justify-center bg-header-light dark:bg-header-dark select-none`}
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
              <Link to="/" className="hover:underline">
                <Text>{t("welcome")}</Text>
              </Link>
            </li>
            <li className="hidden md:block">
              <Link to="/" className="hover:underline">
                <Text>Home</Text>
              </Link>
            </li>

            <li className="cursor-pointer" onClick={toggleTheme}>
              <FontAwesomeIcon
                icon={theme === "light" ? faMoon : faSun}
                size="lg" // Change size to 'lg', '2x', etc.
                className={`hover:underline transition-transform transform hover:scale-110 text-text-light dark:text-text-dark`}
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
                className={`hover:underline transition-transform transform hover:scale-110 text-text-light dark:text-text-dark
                   `}
              />
            </li>
            <li className="hidden md:block">
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
            {/* login */}
            {!isAuthenticated ? (
              <li>
                <Link to="/login" className="hover:underline">
                  <Text>Login</Text>
                </Link>
              </li>
            ) : (
              <>
                {/* <li
                  className="cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  <FontAwesomeIcon
                    icon={faUserAlt}
                    size="lg" // Change size to 'lg', '2x', etc.
                    className={`hover:underline transition-transform transform hover:scale-110 text-text-light dark:text-text-dark`}
                  />
                </li> */}
                <li className="cursor-pointer" onClick={handleLogout}>
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    size="lg" // Change size to 'lg', '2x', etc.
                    className={`hover:underline transition-transform transform hover:scale-110 text-text-light dark:text-text-dark`}
                  />
                </li>
              </>
            )}
            <li className="cursor-pointer" onClick={() => navigate("/profile")}>
              <FontAwesomeIcon
                icon={faUserAlt}
                size="lg" // Change size to 'lg', '2x', etc.
                className={`hover:underline transition-transform transform hover:scale-110 text-text-light dark:text-text-dark`}
              />
            </li>
          </ul>
        </nav>
      </header>
      <Separator className={"bg-border-light dark:bg-border-dark"} />
    </>
  );
};
