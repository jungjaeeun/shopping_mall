import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ListPage from "./pages/ListPage";
import ItemPage from "./pages/ItemPage";

const queryClient = new QueryClient();

const App: React.FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
