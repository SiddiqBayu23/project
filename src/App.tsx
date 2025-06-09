import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BoilerTypesPage from './pages/BoilerTypesPage';
import OperationsPage from './pages/OperationsPage';
import MaintenancePage from './pages/MaintenancePage';
import FaqPage from './pages/FaqPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/types" element={<BoilerTypesPage />} />
            <Route path="/operations" element={<OperationsPage />} />
            <Route path="/maintenance" element={<MaintenancePage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;