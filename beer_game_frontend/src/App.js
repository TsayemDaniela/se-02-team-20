import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Registration from "./components/Registration/Registration.js";
import Player from "./components/Player/Player_welcome.js";
import Instructor from "./components/Instructor/Instructor.js";
import Main from "./components/Main_page/Main.js";

function App() {
  return (
    <div className="d-flex align-items-center flex-column">
      <BrowserRouter>
        <Switch>
          <Route path="/instructor">
            <Instructor />
          </Route>
          <Route path="/player">
            <Player />
          </Route>
          <Route path="/registration/*">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
