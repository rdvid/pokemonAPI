import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from './pages/Pokemon';
import Api from "../src/services/Api";
import Routes from "./services/Routes"

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Pokemon />
      </BrowserRouter>
      );
}

export default App;
