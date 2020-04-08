import React, { Component } from "react";
import { storage } from "../firebase/firebase";
import firebase, { firestore } from "firebase";

class Upload extends Component {
  state = {
    imagePreview: "",
    imageAsFile: "",
    imageAsUrl: "",
    location: "",
    comment: "",
  };

  handleImageAsFile = (e) => {
      console.log(e.target)
      if (e.target.files[0]) {
    const image = e.target.files[0];
    const previewUrl = URL.createObjectURL(image);
    this.setState({ imagePreview: previewUrl, imageAsFile: image })}
    else this.setState({imagePreview: ""});
  };

  handleDescription = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  postImageData = (url) => {
    console.log(this.state.imageAsUrl);
    firebase.firestore().collection("Masks").add({
      image: url,
      comment: this.state.comment,
      location: this.state.location,
      timestamp: Date.now()
    })
  };

  handleFireBaseUpload = (e) => {
    e.preventDefault();
    if (this.state.imageAsFile === "") {
      console.error(
        `Please upload a valid photo`
      );
    }
    const uploadTask = storage
      .ref(`/images/${this.state.imageAsFile.name}`)
      .put(this.state.imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        this.props.showForm()
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("images")
          .child(this.state.imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            this.postImageData(fireBaseUrl);
            this.setState({
                imageAsUrl: fireBaseUrl,
            });
           
          });
      }
    );
  };

  render() {
    return (
      <div className="UploadForm">
        <form onSubmit={this.handleFireBaseUpload}>
          <input type="file" name="image" accept="image/*" onChange={this.handleImageAsFile} required/>
          <br />
          <label>
            Location:
            <input
              type="text"
              name="location"
              onChange={this.handleDescription}
              maxlength="50"
              required
            />
          </label>
          <br />
          <label>
            Comment:
            <input
              type="text"
              name="comment"
              onChange={this.handleDescription}
              maxlength="140"
            />
          </label>
          <br />

          <button>Upload</button>
        </form>
        <div className="Upload-Preview">
          <img
            src={this.state.imagePreview}
            style={{ maxWidth: "200px", height: "auto" }}
          />
        </div>
      </div>
    );
  }
}

export default Upload;
