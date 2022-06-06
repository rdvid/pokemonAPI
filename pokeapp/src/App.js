// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import banner from "./images/banner.png"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <img src={banner} className="App-logo" alt="logo" />
          <article className='Home-title'>
            <h1>Olá Invocador</h1>
            <button id="Home-button">Explorar</button>
          </article>
        </header>
      </div>
    </Router>
  );
}

export default App;
