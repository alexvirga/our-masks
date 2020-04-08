import React, { Component } from "react";
import { storage } from "../firebase/firebase";
import firebase, { firestore } from "firebase";

class MaskCard extends Component {
  render() {
    return (
      <div className="MaskCard">
  

        <img
          src={this.props.mask.image}
          style={{ maxWidth: "200px", height: "auto" }}
        />
        <h3> {this.props.mask.location} </h3>
        <p> {this.props.mask.comment} </p>
      </div>
    );
  }
}

export default MaskCard;
