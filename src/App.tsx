import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CartPage from "./pages/my/CartPage";
import ListPage from "./pages/item/ListPage";
import DetailPage from "./pages/item/DetailPage";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
