import React, { Component } from "react";
import Upload from "../Components/Upload";
import MaskCard from "../Components/MaskCard";
import Navbar from "../Components/Navbar"

import firebase from "firebase/app";

class Home extends Component {
  state = {
    data: [],
    isLoading: true,
  };
  componentDidMount = () => {
    this.getMasks();
  };

  getMasks = () => {
    firebase
      .firestore()
      .collection("Masks")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ data: data, isLoading: false });
      });
  };

  render() {
    return (
      <div className="home">
        <Navbar/>
        
        {this.state.isLoading ? null : (
          <div className="Mask-Container">
            {this.state.data.map((item) => (
              <MaskCard mask={item} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
