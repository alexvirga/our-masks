import React, { Component } from 'react'

import { Header } from 'semantic-ui-react'


class Navbar extends Component{
    state = {
        
    }



    render(){
        

        return(
        

            <div className="Header-message">

  <Header size='huge'>Masks.us</Header>
  <p>  The covid-19 pandemic has created an overwhelming demand for face masks, as millions of masks are needed to protect the doctors, nurses and other essential workers who are leading us through this crisis.</p>
  <br/>
  <p> As a result, those without medical masks began crafting masks of their own. From old shirts, cloth totes, or whatever you may find in your home, each mask is unique. </p>
            </div>
           
          
        )
    }

}
export default Navbar