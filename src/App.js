import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import AppContainer from './components/appcontainer.js';
import Search from './components/searchbox.js';

function App() {
  return (
    <div>
    <div className="App-header"><Header/></div>
    
     
     <div className="App"><AppContainer/></div>
   
    </div>
  );
}

export default App;
