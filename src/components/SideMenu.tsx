import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { Text } from "./Text";
import { toggleSideMenu } from "@/redux/features/uiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Item from "./SideMenu/Item";
import Footer from "./SideMenu/Footer";

const SideMenu = () => {
  const isSideMenuOpen = useAppSelector((state) => state.ui.isSideMenuOpen);
  const dispatch = useAppDispatch();

  return (
    <aside
      className={`fixed top-0 left-0 w-64 h-full box-border transform border-r-1 z-10 flex flex-col ${
        isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 bg-header-light border-border-light dark:bg-header-dark dark:border-border-dark`}
    >
      <nav className="flex-grow">
        <div
          className={`h-[50px] border-b-1 flex justify-center items-center px-4 mb-2 border-border-light dark:border-border-dark`}
        >
          <Text>Welcome</Text>
          {isSideMenuOpen && (
            <div
              className="flex-1 flex justify-end cursor-pointer md:hidden"
              onClick={() => dispatch(toggleSideMenu())}
            >
              <FontAwesomeIcon
                icon={faXmark}
                size="lg"
                className={`hover:underline transition-transform transform hover:scale-110 text-gray-500 bg:text-gray-300`}
              />
            </div>
          )}
        </div>

        <Item title="Home" link="/" />
        <Item title="About" link="/about" />
        <Item title="Contact" link="/contact" />
        <Item
          title="Hooks"
          link=""
          isExpendable
          // data={["useState", "useEffect", "useMemo"]}
          data={[
            { title: "useMemo", link: "/use-memo" },
            { title: "useCallback", link: "/use-callback" },
            { title: "useEffect", link: "/use-effect" },
          ]}
        />
      </nav>

      <Footer />
    </aside>
  );
};

export default SideMenu;
