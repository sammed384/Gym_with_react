import './App.css';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ClassesPage from "./Pages/ClassesPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import Header from './components/Header.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';
import SchedulesPage from './Pages/SchedulesPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Classes" element={<ClassesPage />} />
        <Route path="/Schedules" element={<SchedulesPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage/>} />
        
   

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
