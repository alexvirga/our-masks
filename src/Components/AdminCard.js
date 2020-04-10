import React, { Component } from "react";

import { Button } from "semantic-ui-react";
import { firestore } from "../firebase/firebase";

class AdminCard extends Component {
  state = {
    display: "block",
    displayApproved: "inline-block",
  };

  approveCard = (e) => {
    firestore
      .collection("Masks")
      .doc(e.target.id)
      .update({ approved: true })
      .then(function () {})
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
    this.setState({ displayApproved: "none" });
  };

  deleteCard = (e) => {
    firestore
      .collection("Masks")
      .doc(e.target.id)
      .delete()
      .then(function () {})
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
    this.setState({ display: "none" });
  };

  render() {
    return (
      <div className="MaskCard" style={{ display: this.state.display }}>
        <img className="Card-image" src={this.props.mask.image} alt="" />
        <div className="Card-content">
          <p className="Card-description">{this.props.mask.comment}</p>

          <p className="Card-location">{this.props.mask.location}</p>
        </div>
        {this.props.isLoggedInAdmin ? (
          <Button
            color="red"
            size="tiny"
            onClick={this.deleteCard}
            id={this.props.mask.id}
          >
            Delete
          </Button>
        ) : null}
        {!this.props.mask.approved ? (
          <Button
            onClick={this.approveCard}
            id={this.props.mask.id}
            style={{ display: this.state.displayApproved }}
          >
            Approve
          </Button>
        ) : null}
      </div>
    );
  }
}

export default AdminCard;
