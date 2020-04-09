import React, { Component } from "react";
import Upload from "../Components/Upload";
import MaskCard from "../Components/MaskCard";
import Navbar from "../Components/Navbar";
import { Button, Modal } from "semantic-ui-react";
import { firestore } from "../firebase/firebase";

class Home extends Component {
  state = {
    data: [],
    isLoading: true,
    modalOpen: false,
  };
  componentDidMount = () => {
    this.getMasks();
  };

  handleFormSubmit = () => {
    this.showForm();
    this.getMasks();
  };

  showForm = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  getMasks = () => {
    this.setState({ isLoading: true });
    firestore
      .collection("Masks")
      .orderBy("timestamp", "desc")
      .get()
      .catch((err) => console.log(err))
      .then((querySnapshot) => {
        //   console.log(querySnapshot.size)

        // const data = querySnapshot.docs.map(doc => doc.data())
        const data = [];
        querySnapshot.docs.forEach((doc) => {
          const maskData = doc.data();
          maskData.id = doc.id;
          data.push(maskData);
        });

        if (querySnapshot.size > 1) {
          this.setState({ data: data, isLoading: false });
        }
      });
  };

  render() {
    return (
      <div className="home">
        <div className="Home-header">
          <Navbar />
          <Button onClick={this.showForm}>Share your Mask</Button>
          <Modal open={this.state.modalOpen} onClose={this.showForm}>
            <Upload showForm={this.handleFormSubmit} />
          </Modal>
        </div>

        {/* Loading ternary. Displays "loading" while data is being fetched */}
        {this.state.isLoading ? (
          <h1> Loading... </h1>
        ) : (
          <div className="Mask-Container">
            {this.state.data.map((item) => (
              <MaskCard
                mask={item}
                key={item.id}
                isLoggedIn={this.props.isLoggedIn}
                deleteCard={this.deleteCard}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
