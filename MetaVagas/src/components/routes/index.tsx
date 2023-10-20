import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MetaVagas from '../../pages/metavagas'; 
import Login from '../../pages/login'; 
import { Register } from '../../pages/register';
import { VacanciesDisplay } from '../vacanciesDisplay';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MetaVagas />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/vacancies" element={<VacanciesDisplay/>}/>
      </Routes>
    </Router>
  );
}