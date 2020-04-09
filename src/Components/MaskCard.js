import React, { Component } from "react";

import { Card, Image, Button} from "semantic-ui-react";
import { firestore } from "../firebase/firebase";


class MaskCard extends Component {
  state = {
    display: "block"
  }

deleteCard = (e) => {
  firestore.collection("Masks").doc(e.target.id).delete().then(function() {
    
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  this.setState({display: "none"});;
};

  render() {
    
    return (
      <div className="MaskCard" style={{display: this.state.display}}>
        <img className="Card-image" src={this.props.mask.image}/>
        <div className="Card-content">
          <p className="Card-description">
            {this.props.mask.comment}
            </p>
        
          <p className="Card-location">
            {this.props.mask.location}
            </p>
            </div>
          {this.props.isLoggedIn ? <Button color='red' size='tiny' onClick={this.deleteCard} id={this.props.mask.id}> Delete </Button> : null}
        
       
  
        



        
      </div>
    );
  }
}

export default MaskCard;
