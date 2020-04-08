import React, { Component } from "react";

import { Card, Image, CardGroup} from "semantic-ui-react";

class MaskCard extends Component {
  render() {
    return (
      <div className="MaskCard">
       
      
        <Card>
        <Image src={this.props.mask.image}/>
        <Card.Content>
          <Card.Description>
            {this.props.mask.comment}
          </Card.Description>
          <Card.Meta>
            {this.props.mask.location}
          </Card.Meta>
 
        {/* <Icon name='heart outline' color="red" /> */}
        

        </Card.Content>
        </Card>
  
        



          {/* <img
            src={this.props.mask.image}
            style={{ maxWidth: "200px", height: "auto" }}
          />
          <h3> {this.props.mask.location} </h3>
          <p> {this.props.mask.comment} </p> */}
        
      </div>
    );
  }
}

export default MaskCard;
