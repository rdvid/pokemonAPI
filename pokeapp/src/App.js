import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom";
import Pokemon from './pages/Pokemon';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Pokemon />
      </BrowserRouter>
      );
}

export default App;
