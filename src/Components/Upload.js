import React, { Component } from "react";
import { storage, firestore } from "../firebase/firebase";
import { Form ,Button, Dropdown} from "semantic-ui-react";
import countryList from "./CountryList"



class Upload extends Component {
  state = {
    imagePreview: "",
    imageAsFile: "",
    imageAsUrl: "",
    location: "",
    comment: "",
  };

  fileInputRef = React.createRef();

  handleImageAsFile = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const previewUrl = URL.createObjectURL(image);
      this.setState({ imagePreview: previewUrl, imageAsFile: image });
    } else this.setState({ imagePreview: "" });
  };

  handleDescription = (e) => {
    console.log(e)
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDropdown = (event, data) => {
    console.log(data)
    this.setState({ location: data.value });
  };

  postImageData = (url) => {
    this.props.showForm();
    firestore.collection("Masks").add({
      image: url,
      comment: this.state.comment,
      location: this.state.location,
      timestamp: Date.now(),
    });
  };


  handleFireBaseUpload = (e) => {
    e.preventDefault();
    if (this.state.imageAsFile === "") {
      console.error(`Please upload a valid photo`);
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
      <div className="Upload-form-div">
        <Form className="Upload-form" onSubmit={this.handleFireBaseUpload}>

        <Form.Field>
            <Button
              content="Choose File"
              labelPosition="left"
              icon="file"
              type="button"
              onClick={() => this.fileInputRef.current.click()}
           
            />
            <input
              ref={this.fileInputRef}
              name="image"
              accept="image/*"
              type="file"
              hidden
              onChange={this.handleImageAsFile}
              required
            />
          </Form.Field>

          <br />
{/* 
          <Form.Input
            label="Location"
            placeholder="Location"
            name="location"
            onChange={this.handleDescription}
            maxLength="50"
            width={6}
            required
          /> */}

<Form.Dropdown
        
        options={countryList}
        label="Country"
        placeholder='Country'
        name="location"
        search
        onChange={this.handleDropdown}
        width={6}
        required
        selection
      />



          <br />
          <Form.TextArea
            label="Comment"
            name="comment"
            placeholder="Tell us about more."
            onChange={this.handleDescription}
            maxLength="140"
          />

          <Button>Upload</Button>
        </Form>
        <div className="Upload-Preview">
          <img
            src={this.state.imagePreview}
            style={{ maxWidth: "200px", height: "auto" }}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Upload;
