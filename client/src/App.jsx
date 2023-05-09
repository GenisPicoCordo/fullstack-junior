import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { logo } from './assets';
import CollectionPage from './pages/CollectionPage';
import ProductPage from "./pages/ProductPage";


const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 object-contain" />
          <p className="font-extrabold text-[#222328] text-[32px]">Test Full Stack Junior Dev</p>
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg- [#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<CollectionPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
