import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/player/:id"
          element={
            <ProtectedRoute>
              <Player />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
