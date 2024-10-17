import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

import { Header } from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <>
      <BrowserRouter>
        <Body>
          <Header />
          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </Body>
      </BrowserRouter>
    </>
  );
}

export default App;
