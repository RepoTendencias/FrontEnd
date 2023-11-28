import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="general">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/API" element={<CardsContainer />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
