import { Routes, Route } from 'react-router-dom';
import TemplateSelection from './pages/TemplateSelection';
import PortfolioForm from './pages/PortfolioForm';
import ProfessionalsList from './pages/ProfessionalsList';
import PortfolioPage from './pages/PortfolioPage';
import './App.css'; // Assuming you have a global CSS file for styles
import Welcomepage from './pages/Welcomepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcomepage />} />
      <Route path='/select' element={<TemplateSelection />} />
      <Route path='/form' element={<PortfolioForm />} />
      <Route path='/professionals' element={<ProfessionalsList />} />
      <Route path='/portfolio/:id' element={<PortfolioPage />} />
    </Routes>
  );
}

export default App;