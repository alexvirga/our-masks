import React, { Component } from "react";
import Upload from "../Components/Upload";
import MaskCard from "../Components/MaskCard";
import Navbar from "../Components/Navbar";

import firebase from "firebase/app";

class Home extends Component {
  state = {
    data: [],
    isLoading: true,
    isFormVisible: false,
  };
  componentDidMount = () => {
    this.getMasks();
  };

  showForm = () => {
    this.setState({ isFormVisible: !this.state.isFormVisible });
  };

  getMasks = () => {
    this.setState({ isLoading: true });

    firebase
      .firestore()
      .collection("Masks")
      .orderBy("timestamp", "desc")
      .get()

      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ data: data, isLoading: false });
      });
  };

  render() {
    return (
      <div className="home">
        <Navbar />

        {/* Toggle ternary for upload form */}
        <button onClick={() => this.showForm()}> Show us your mask </button>
        <div style={{ display: this.state.isFormVisible ? "flex" : "none" }}>
          <Upload showForm={this.showForm} />
        </div>

        {/* Loading ternary. Displays "loading" while data is being fetched */}
        {this.state.isLoading ? (
          <h3> Loading </h3>
        ) : (
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
