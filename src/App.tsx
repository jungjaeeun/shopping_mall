import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CartPage from "./pages/my/CartPage";
import ListPage from "./pages/item/ListPage";
import DetailPage from "./pages/item/DetailPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App: React.FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
