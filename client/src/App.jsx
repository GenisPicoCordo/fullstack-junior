import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { logo } from "./assets";
import CollectionPage from "./pages/CollectionPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/" className="flex items-center flex-1 text-center justify-center">
          <img src={logo} alt="logo" className="w-32 object-contain " />
          <p className="font-extrabold text-[#222328] text-[32px] flex-1">
            Test Full Stack Junior Dev
          </p>
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg- [#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<CollectionPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
