import { Routes, Route } from "react-router-dom";
import Layout from "./components/pages/layout/Layout";
import NotFound from "./components/notFound/NotFound";
import Home from "./components/pages/home/Home";
import Login from "./components/login/Login";
import PrivateRoute from "./components/privteroute/PriviteRoutee";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
