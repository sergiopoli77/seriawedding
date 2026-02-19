import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Premium from './components/pages/premium';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Premium />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
