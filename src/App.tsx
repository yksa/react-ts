import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

import { Header } from "./components/Header";
import Body from "./components/Body";
import SideMenu from "./components/SideMenu";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { toggleSideMenu } from "./redux/features/uiSlice";
import ErrorBoundary from "./components/ErrorBoundary";
import { Text } from "./components/Text";

function App() {
  const isSideMenuOpen = useAppSelector((state) => state.ui.isSideMenuOpen);
  const dispatch = useAppDispatch();

  return (
    <>
      <BrowserRouter>
        <Body>
          <div
            className={`flex h-screen flex-col transition-all duration-300 ${
              isSideMenuOpen ? "ml-0 md:ml-64" : "ml-0"
            }`}
          >
            {/* if side menu open and in mobile view */}
            {isSideMenuOpen && (
              <div
                className={`fixed top-0 left-0 w-full h-full bg-black opacity-40 z-10 md:hidden`}
                onClick={
                  window.innerWidth < 768
                    ? () => dispatch(toggleSideMenu())
                    : undefined
                }
              />
            )}
            <Header />
            <SideMenu />
            <main className="flex-1 flex flex-col">
              <Routes>
                <Route
                  path="/"
                  element={
                    <ErrorBoundary fallback={<Text>Something went wrong</Text>}>
                      <HomePage />
                    </ErrorBoundary>
                  }
                />

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </div>
        </Body>
      </BrowserRouter>
    </>
  );
}

export default App;
