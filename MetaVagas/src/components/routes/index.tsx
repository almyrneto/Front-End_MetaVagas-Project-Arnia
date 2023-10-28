import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../../pages/login";
import { Register } from "../../pages/register";
import { Timeline } from "../../pages/timeline";
import { PrivateRoute } from "./privateRoute";
import { MetaVagasLoggedIn } from "../../pages/metavagasLoggedin";
import { MetaVagas } from "../../pages/metavagas";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MetaVagas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/timeline" element={<PrivateRoute element={<Timeline />} />} />
        <Route path="/metavagasloggedin" element={<PrivateRoute element={<MetaVagasLoggedIn />} />} />
      </Routes>
    </Router>
  );
};
