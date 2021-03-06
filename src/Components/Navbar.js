import React, { Component } from "react";

import { Header } from "semantic-ui-react";

class Navbar extends Component {
  render() {
    return (
      <div className="Header-message">
        <Header size="huge">ourmask.org</Header>
        <p style={{fontSize: "large"}}>
          The covid-19 pandemic has created an overwhelming demand for face
          masks, as millions of masks are needed to protect the doctors, nurses
          and other essential workers who are leading us through this crisis.
        </p>
        <br />
        <p style={{fontSize: "large"}}>
          As a result, those without medical masks began crafting masks of their
          own. From old shirts, cloth totes, or whatever you may find in your
          home, each mask is unique.{" "}
        </p>
        <p> To view code & contribute, visit the <a href="https://github.com/alexvirga/our-masks">Github</a> repo, or contact me at <a href="https://alexvirga.me">alexvirga.me</a> </p>
      </div>
    );
  }
}
export default Navbar;
