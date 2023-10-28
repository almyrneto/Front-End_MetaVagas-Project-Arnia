import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MetaVagas from "../../pages/metavagas";
import Login from "../../pages/login";
import { Register } from "../../pages/register";
import { Timeline } from "../../pages/timeline";
import { PrivateRoute } from "./privateRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MetaVagas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/timeline" element={<PrivateRoute element={<Timeline />} />} />
      </Routes>
    </Router>
  );
};
