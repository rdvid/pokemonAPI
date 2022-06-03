import {useState} from 'react';
import logo from './logo.svg';
import image2 from './images/logo.png'
import './App.css';



function App() {

  const [cont, setContador] = useState(0);

  function buttonClicked(){
    let button = document.getElementById("buttonTest");
    alert('Alerta');
    setContador(cont+1);
    if(button.className !== "colorBlue"){
      return button.className = "colorBlue";
    }else{
      return button.className = "";
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={image2} className="App-logo" alt="logo" />
        <div id='loadingBlock'>
          <p>
            O botão foi clicado {cont} vezes
          </p>
          <input type="button" id="buttonTest"value="Click Me" onClick={buttonClicked}></input>
        </div>
      </header>
    </div>
  );
}

export default App;
