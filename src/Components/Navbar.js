import React, { Component } from 'react'
import Upload from "../Components/Upload";

class Navbar extends Component{
    state = {
        visible: false
    }

    showForm = () => {
        this.setState({visible: !this.state.visible})
    }

    render(){

        return(
            <div>
  <h1> Our Masks </h1>
  <p>  The covid-19 pandemic has created an overwhelming demand for face masks, as millions of masks are needed to protect the doctors, nurses and other essential workers who are leading us through this crisis.</p>
  <br/>
  <p> As a result, those without medical masks began crafting masks of their own. From old shirts, cloth totes, or whatever you may find in your home, each mask is unique. </p>
  
  <button onClick={() => this.showForm()}> Upload </button>
  <div style={{display: this.state.visible ? "flex" : "none"}}>
      <Upload showForm={this.showForm}/>
  </div>
            </div>
          
        )
    }

}
export default Navbar