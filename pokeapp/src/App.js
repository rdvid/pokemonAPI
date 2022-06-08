import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from './pages/Pokemon';
import Api from "../src/services/Api";
import Card from "../src/components/Card"

function App() {
  return (
    <Router>
      <Navbar />
      <Pokemon>
      </Pokemon>
      
    </Router>
  );
}

export default App;
