import { toggleSideMenu } from "@/redux/features/uiSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Text } from "../Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

type ItemProps = {
  title: string;
  link?: string;
  isExpendable?: boolean;
  data?: { title: string; link: string }[];
};

const Item = ({
  title,
  link = "/",
  isExpendable = false,
  data = [],
}: ItemProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleRoute = (linkUrl: string) => {
    if (linkUrl) {
      navigate(linkUrl);
      //   if it is in mobile view, close side menu
      if (window.innerWidth < 768) {
        dispatch(toggleSideMenu());
      }
    }
  };

  //   if pathname link => bg-gray-200 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-50
  // else => hover:bg-gray-200 hover:bg-opacity-50 dark:hover:bg-gray-700 dark:hover:bg-opacity-50

  return (
    <div className="px-2 mb-1 select-none">
      <div
        // className={`px-2 py-3 cursor-pointer flex items-center rounded-lg mb-1 ${
        //   theme === "light"
        //     ? pathname === link
        //       ? "bg-gray-200 bg-opacity-50"
        //       : "hover:bg-gray-200 hover:bg-opacity-50"
        //     : pathname === link
        //     ? "bg-gray-700 bg-opacity-50"
        //     : "hover:bg-gray-700 hover:bg-opacity-50"
        // }`}
        className={`px-2 py-3 cursor-pointer flex items-center rounded-lg mb-1 ${
          pathname === link
            ? "bg-gray-200 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-50"
            : "hover:bg-gray-200 hover:bg-opacity-50 dark:hover:bg-gray-700 dark:hover:bg-opacity-50"
        }`}
        onClick={isExpendable ? toggleExpand : () => handleRoute(link)}
      >
        <Text className={""}>{title}</Text>

        {isExpendable && (
          <div className="flex-1 flex justify-end">
            <FontAwesomeIcon
              icon={isExpanded ? faAngleUp : faAngleDown}
              size="xs" // Change size to 'lg', '2x', etc.
              className={`hover:underline transition-transform transform hover:scale-110 text-text-light dark:text-text-dark`}
            />
          </div>
        )}
      </div>

      {isExpendable && isExpanded && (
        <>
          {data.map((item) => (
            <div
              key={item.title}
              className={`pl-4 py-3 cursor-pointer hover:bg-gray-200 flex items-center gap-2 rounded-lg mb-1 ${
                pathname === link
                  ? "bg-gray-200 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-50"
                  : "hover:bg-gray-200 hover:bg-opacity-50 dark:hover:bg-gray-700 dark:hover:bg-opacity-50"
              }`}
              onClick={() => handleRoute(item.link)}
            >
              {/* dot */}
              <div
                className={`w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-300`}
              />

              <Text>{item.title}</Text>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Item;
