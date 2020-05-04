import React, { Component } from "react";
import Upload from "../Components/Upload";
import MaskCard from "../Components/MaskCard";
import Navbar from "../Components/Navbar";
import { Button, Modal } from "semantic-ui-react";
import { firestore } from "../firebase/firebase";
import AdminCard from "../Components/AdminCard";
import InfiniteScroll from "react-infinite-scroll-component";
import maskcollage from "../maskcollage.png";
import ImageUploader from "./ImageUploader"

class Home extends Component {
  state = {
    data: [],
    isLoading: true,
    modalOpen: false,
    newItems: [],
    loadCount: 20,
    scrollLoading: false,
  };
  componentDidMount = () => {
    this.getMasks();
  };

  handleFormSubmit = () => {
    this.showForm();
  };

  loadMoreData = () => {
    let newArr = this.state.data.slice(0, this.state.loadCount);
    // console.log(newArr);
    this.setState({
      newItems: newArr,
      loadCount: (this.state.loadCount += 20),
    });
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
          //   if(maskData.approved === true){
          data.push(maskData);
          // }
        });
        if (querySnapshot.size > 1) {
          let newArr = data.slice(0, this.state.loadCount);
          // console.log(newArr);
          // console.log(data);
          this.setState({
            data: data,
            isLoading: false,
            newItems: newArr,
            loadCount: (this.state.loadCount += 20),
          });
        }
      });
  };

  render() {
    return (
      <div className="home">
       
        <div className="HomeBackground">
          <img style={{ width: "100vw" }} src={maskcollage} alt="" />
        </div>
        <div className="Home-header">
          <Navbar />
          <Button size="medium" onClick={this.showForm}>
            Share your Mask
          </Button>
          <Modal open={this.state.modalOpen} onClose={this.showForm}>
            <Upload showForm={this.handleFormSubmit} />
          </Modal>
        </div>

        {/* Loading ternary. Displays "loading" while data is being fetched */}
        {this.state.isLoading ? (
          <h1> Loading... </h1>
        ) : (
          // <div className="Mask-Container">

          <InfiniteScroll
            className="Mask-Container"
            dataLength={this.state.newItems.length} //This is important field to render the next data
            next={this.loadMoreData}
            hasMore={true}
            // loader={<div style={{width: "100%"}}><h4>Loading...</h4> </div>}
          >
            {this.state.newItems.map((item) =>
              !this.props.isLoggedInAdmin ? (
                item.approved ? (
                  <MaskCard mask={item} key={item.id} />
                ) : null
              ) : (
                <AdminCard
                  mask={item}
                  key={item.id}
                  isLoggedInAdmin={this.props.isLoggedInAdmin}
                  deleteCard={this.deleteCard}
                />
              )
            )}
          </InfiniteScroll>
          // </div>
        )}
      </div>
    );
  }
}

export default Home;
