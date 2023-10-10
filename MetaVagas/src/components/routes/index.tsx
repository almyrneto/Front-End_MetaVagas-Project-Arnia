import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MetaVagas from '../../pages/metavagas'; 
import Login from '../../pages/login'; 

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MetaVagas />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}