// // import logo from './logo.svg';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import PokeContainer from './PokeContainer/PokeContainer';
import UserComponent from './UserComponent/LoginComponent/login';

import HomeComponent from './UserComponent/HomeComponent/home';
import SecretComponent from './UserComponent/SecretComponent/secret';
import LoginComponent from './UserComponent/LoginComponent/login'
import RegisterComponent from './UserComponent/RegisterComponent/registerComponent';


function App() {
  return (
    <div className="App">
      <h1>PokeDèx</h1>
      <div>
        <ul>
          {/* <li><a href="http://localhost:3001/users/home">Home</a></li>
          <li><a href="http://localhost:3001/users/secret">Secret</a></li> */}
          <PokeContainer></PokeContainer>
          {/* <LoginComponent></LoginComponent> */}
          {/* <RegisterComponent></RegisterComponent> */}
        </ul>
      </div>
    </div>
  );
}

export default App