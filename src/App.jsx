import { Routes, Route } from "react-router-dom";
import Layout from "./components/pages/layout/Layout";
import NotFound from "./components/notFound/NotFound";
import Login from "./components/login/Login";
import PrivateRoute from "./components/privteroute/PriviteRoutee";
import Register from "./components/pages/home/register";

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
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
