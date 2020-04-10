import React, { Component } from "react";
import "./App.css";
import Home from "./Containers/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin";
import { auth } from "./firebase/firebase";

class App extends Component {
  state = {
    isLoggedInAdmin: null,
    isLoggedInAnon: null
  };

  componentDidMount() {
    this.unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      console.log(user)
      if (user === null) {
        auth.signInAnonymously()
        this.setState({isLoggedInAnon: true})
      }
      else if  (!user.isAnonymous) {
        this.setState({isLoggedIn: true})}

      else if (user.isAnonymous) {
        this.setState({ isLoggedInAnon: true}); // User signed in
      }
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/admin-dashboard">
              <AdminLogin isLoggedIn={this.state.isLoggedIn} />
            </Route>
            <Route path="/*">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
