import React, { Component } from "react";

class MaskCard extends Component {
  state = {
    display: "block",
  };

  render() {
    return (
      <div className="MaskCard" style={{ display: this.state.display }}>
        <img className="Card-image" src={this.props.mask.image} alt="" />
        <div className="Card-content">
          <p className="Card-description">{this.props.mask.comment}</p>

          <p className="Card-location">{this.props.mask.location}</p>
        </div>
      </div>
    );
  }
}

export default MaskCard;
