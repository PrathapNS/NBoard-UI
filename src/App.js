import logo from './logo.svg';
import './App.css';
import '../src/Components/dashboard'

import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideMenu from './Components/sidemenu';
import LandingPage from '../src/Components/dashboard';
function App() {
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;
