import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return(
    <Router>
      <div className="min-h-screen flex flex-col p-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
