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
  
  <button onClick={() => this.showForm()}> Upload </button>
  <div style={{display: this.state.visible ? "flex" : "none"}}>
      <Upload/>
  </div>
            </div>
          
        )
    }

}
export default Navbar