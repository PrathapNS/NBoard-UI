import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Home from "./Components/Home";
import SideMenuBar from "./Components/SideMenuBar";
import User from "./Components/user";
import Team from "./Components/team";
import NewsFeed from "./Components/NewsFeed";
import AddNews from "./Components/AddNews";
import P1ForgotPassword from "./Components/P1-ForgotPassword";
import VerificationCode from "./Components/VerificationCode";
import P2ForgotPassword from "./Components/P2-ForgotPassword";

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
          <Route exact path="/AddNews" Component={AddNews} />
          <Route exact path="/P1ForgotPassword" Component={P1ForgotPassword} />
          <Route exact path="/VerificationCode" Component={VerificationCode} />
          <Route exact path="/P2ForgotPassword" Component={P2ForgotPassword} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
