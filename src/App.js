import React, { Component } from "react";

import "./App.css";
import Home from "./Containers/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import { auth } from "./firebase/firebase";


class App extends Component {
  state = {
    isLoggedIn: null
  }


   componentWillMount() {
    this.unregisterAuthObserver = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true, loading: false }); // User signed in
      } else {
        this.setState({ isLoggedIn: false, loading: false }); // User NOT signed in.
      }
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    console.log(this.state.isLoggedIn)
  return (
 
    <Router>
      <div className="App">
        <Switch>
          <Route path="/adminlogin">
            <AdminLogin isLoggedIn={this.state.isLoggedIn} />
          </Route>
          <Route path="/*">
            <Home isLoggedIn={this.state.isLoggedIn}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
