import React, { Component } from "react";
import { auth } from "../firebase/firebase";
import Home from "../Containers/Home";

class AdminLogin extends Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: false,
    errors: "",
  };

  handleForm = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        if (res.user) this.setState({ isLoggedIn: true, errors: "" });
        console.log("logged in");
      })
      .catch((e) => {
        this.setState({ errors: e.message });
        console.log("not logged in");
      });
  };

  handleCredentials = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signOutUser = () => {
    auth
      .signOut()
      .then(() => {
        console.log("logged out");
      })
      .catch(function (error) {});
  };

  render() {
    return (
      <div>
        {this.props.isLoggedIn || this.state.isLoggedIn ? (
          <div>
            <button onClick={this.signOutUser}> Sign Out </button>

            <Home isLoggedIn={true} />
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <form onSubmit={this.handleForm}>
              <input
                value={this.state.email}
                onChange={this.handleCredentials}
                name="email"
                type="email"
                placeholder="email"
              />
              <input
                onChange={this.handleCredentials}
                name="password"
                value={this.state.password}
                type="password"
                placeholder="password"
              />
              <hr />
              <button type="submit">Login</button>
              <span>{this.state.errors}</span>
            </form>
          </div>
        )}
      </div>
    );
  }
}
export default AdminLogin;
