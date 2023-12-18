import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import SideMenuBar from "./Components/SideMenuBar";
import User from "./Components/user";
import Team from "./Components/team";
import NewsFeed from "./Components/NewsFeed";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={LoginPage} />
          <Route exact path="/SideMenuBar" Component={SideMenuBar} />
          <Route exact path="/Home" Component={Home} />
          <Route exact path="/User" Component={User} />
          <Route exact path="/Team" Component={Team} />
          <Route exact path="/NewsFeed" Component={NewsFeed} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
