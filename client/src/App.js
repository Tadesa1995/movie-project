import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Login from "./views/Login";
import Movies from "./views/Movies";
import MovieDetails from "./views/MovieDetails";
import UserAvatar from "./components/UserAvatar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
function App() {
  const [userName, setUserName] = useState("");

  const logOut = () => {
    console.log("log out");
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    setUserName(null);
  };

  useEffect(() => {
    axios.interceptors.request.use(function (config) {
      const token = localStorage.getItem("token");
      if (token) config.headers.roni = token;
      return config;
    });

    setUserName(localStorage.getItem("userName"));
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <div className="app-bar">
            <div className="items"></div>
            {userName ? (
              <a className="logout-link" onClick={logOut}>
                logout
              </a>
            ) : (
              <Link className="login-link" to="/login">
                login
              </Link>
            )}
            <UserAvatar userName={userName} />
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route path="/movie-details/:id">
              <MovieDetails />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
