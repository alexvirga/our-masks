import React, { Component } from "react";

import { Card, Image, Button} from "semantic-ui-react";
import { firestore } from "../firebase/firebase";


class MaskCard extends Component {
  state = {
    display: "flex"
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
       
      
        <Card >
        <Image src={this.props.mask.image}/>
        <Card.Content>
          <Card.Description>
            {this.props.mask.comment}
          </Card.Description>
          <Card.Meta>
            {this.props.mask.location}
          </Card.Meta>
          {this.props.isLoggedIn ? <Button color='red' size='tiny' onClick={this.deleteCard} id={this.props.mask.id}> Delete </Button> : null}
        </Card.Content>
        </Card>
  
        



        
      </div>
    );
  }
}

export default MaskCard;
