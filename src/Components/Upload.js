import React, { Component, useCallback } from "react";
import { storage, firestore } from "../firebase/firebase";
import { Form, Button, Select } from "semantic-ui-react";
import countryList from "./CountryList";
import Resizer from "react-image-file-resizer";

import ImageUploader from "../Containers/ImageUploader";

class Upload extends Component {
  state = {
    imagePreview: "",
    imageAsFile: "",
    imageName: "",
    imageAsUrl: "",
    location: "",
    comment: "",
    uploadError: "",
    locationError: false,
    commentError: false,
    imageError: false,
    uploadComplete: false,
    isLoading: false,
    image: "",
  };

  fileInputRef = React.createRef();

  handleUploadChange = (fileItem) => {
    if (fileItem) {
      this.setState({ image: fileItem, imageAsFile: fileItem });
    }
  };

  handleDescription = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDropdown = (event, data) => {
    this.setState({ location: data.value });
  };

  postImageData = (url) => {
    firestore
      .collection("Masks")
      .add({
        image: url,
        comment: this.state.comment,
        location: this.state.location,
        timestamp: Date.now(),
        approved: false,
      })
      .then((ref) => {});
  };

  // Custom Form Validation

  validateForm = (e) => {
    e.preventDefault();
    this.validateLocation();
    this.validateComment();
    this.validateImage();
    if (
      this.validateComment() &&
      this.validateLocation() &&
      this.validateImage()
    ) {
      this.handleFireBaseUpload();
    }
  };

  validateLocation = () => {
    if (!this.state.location) {
      this.setState({ locationError: true });
      return false;
    } else this.setState({ locationError: false });
    return true;
  };

  validateComment = () => {
    if (!this.state.comment) {
      this.setState({ commentError: true });
      return false;
    } else this.setState({ commentError: false });
    return true;
  };

  validateImage = () => {
    if (!this.state.imageAsFile) {
      this.setState({ imageError: true });
      return false;
    } else this.setState({ imageError: false });
    return true;
  };

  handleFireBaseUpload = async () => {
    this.setState({ uploadComplete: true });
    const data = new FormData();
    const image = this.state.image;
    data.append("file", image);
    data.append("upload_preset", "ourmasks");
    this.setState({ isLoading: true });
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/alexvirga/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    this.setState({
      imageAsFile: file,
      isLoading: false,
      imagePreview: file.secure_url,
      imageName: file.asset_id,
    });
    this.postImageData(file.secure_url);
  };

  render() {
    return (
      <div className="Upload-form-div">
        {this.state.uploadComplete ? (
          <div>
            <h1> Your photo has been submitted for review </h1>
            <Button onClick={this.props.showForm}> View Masks </Button>
          </div>
        ) : (
          <Form className="Upload-form" onSubmit={this.validateForm}>
            <ImageUploader handleUploadChange={this.handleUploadChange} />

            <br />
            <Form.Field
              control={Select}
              required
              options={countryList}
              label="Country"
              placeholder="Country"
              name="location"
              search
              onChange={this.handleDropdown}
              width={6}
            />

            <br />
            <Form.TextArea
              label="Comment"
              name="comment"
              placeholder="Tell us more."
              onChange={this.handleDescription}
              maxLength="140"
              style={{ marginBotton: "0px" }}
            />

            <Button stype="submit">Upload</Button>
            <br />
            {this.state.commentError ? (
              <p className="Upload-error-message"> Please enter a Comment</p>
            ) : null}
            {this.state.locationError ? (
              <p className="Upload-error-message"> Please select a location </p>
            ) : null}
            {this.state.imageError ? (
              <p className="Upload-error-message"> Please upload a photo </p>
            ) : null}

            <div className="Upload-Preview">
              {this.state.uploadError ? (
                <h3 style={{ color: "red" }}>{this.state.uploadError}</h3>
              ) : (
                <img
                  src={this.state.imagePreview}
                  style={{
                    width: "350px",
                    maxWidth: "100%",
                    maxHeight: "auto",
                  }}
                  alt=""
                />
              )}
            </div>
          </Form>
        )}
      </div>
    );
  }
}

export default Upload;
