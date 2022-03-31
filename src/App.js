// // import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import PokeContainer from './PokeContainer/PokeContainer';
import UserComponent from './UserComponent/LoginComponent/login';

import HomeComponent from './UserComponent/HomeComponent/home';
import SecretComponent from './UserComponent/SecretComponent/secret';
import LoginComponent from './UserComponent/LoginComponent/login'

function App() {
  return (
    <div className="App">
      <h1>PokeDèx</h1>
      <div>
        <ul>
          <li><HomeComponent> </HomeComponent></li>
          {/* <li><Link to="http://localhost:3001/users/home">Home</Link></li> */}
          {/* <li><Link to="http://localhost:3001/users/secret">Secret</Link></li> */}
        </ul>
        {/* <Routes>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/users/secret" component={SecretComponent} />
        </Routes> */}
      </div>

      <LoginComponent></LoginComponent>
    </div>
  );
}

export default App