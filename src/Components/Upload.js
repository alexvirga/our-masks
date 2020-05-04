import React, { Component, useCallback } from "react";
import { storage, firestore } from "../firebase/firebase";
import { Form, Button, Select } from "semantic-ui-react";
import countryList from "./CountryList";
import Resizer from "react-image-file-resizer";

import ImageUploader from "../Containers/ImageUploader"

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
    image: ""
  };

  fileInputRef = React.createRef();

  handleUploadChange = (fileItem) => {
    if (fileItem) {
      this.setState({image: fileItem, imageAsFile: fileItem})


      // const image = fileItem;
      // const data = new FormData()
      // data.append("file", image)
      // data.append('upload_preset', 'ourmasks')
      // this.setState({isLoading: true})
      // const res = await fetch('https://api.cloudinary.com/v1_1/alexvirga/image/upload',
      // {
      //   method: 'POST',
      //   body: data
      // })
      // const file = await res.json()
      // console.log(file)
      // console.log(file.secure_url)
      // this.setState({imageAsFile: file, isLoading: false, imagePreview: file.secure_url, imageName: file.asset_id})

      



      
      
      
          // const previewUrl = URL.createObjectURL(image);
          // this.setState({
          //   imagePreview: previewUrl,
          //   imageAsFile: image,
          //   imageName: `${image.name}_${Date.now()} `,
          //   uploadError: "",
          // });
     
        
    } 
    // else this.setState({ imagePreview: "" })
  }

  

  // handleFileChange = (e) => {
  //   if (e.target.files[0]) {
  //     const image = e.target.files[0];
  //     Resizer.imageFileResizer(
  //       image, //is the file of the new image that can now be uploaded...
  //       600, // is the maxWidth of the  new image
  //       340, // is the maxHeight of the  new image
  //       "JPEG", // is the compressFormat of the  new image
  //       95, // is the quality of the  new image
  //       0, // is the rotatoion of the  new image
  //       (uri) => {
  //         const previewUrl = URL.createObjectURL(uri);
  //         this.setState({
  //           imagePreview: previewUrl,
  //           imageAsFile: uri,
  //           imageName: `${image.name}_${Date.now()} `,
  //           uploadError: "",
  //         });
  //       },
  //       "blob" // is the output type of the new image
  //     );
  //   } else this.setState({ imagePreview: "" });
  // };

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

  handleFireBaseUpload = async() => {
    this.setState({ uploadComplete: true });
    // const uploadTask = storage
    //   .ref(`/images/${this.state.imageName}`)
    //   .put(this.state.imageAsFile);
    // //initiates the firebase side uploading
    // uploadTask.on(
    //   "state_changed",
    //   (snapShot) => {},
    //   (err) => {
    //     //catches the errors
    //     console.log(
    //       this.setState({ uploadError: "Error uploading photo" }),
    //       err
    //     );
    //   },
    //   () => {
    //     // gets the functions from storage refences the image storage in firebase by the children
    //     // gets the download url then sets the image from firebase as the value for the imgUrl key:


    const data = new FormData()
    const image = this.state.image
    data.append("file", image)
    data.append('upload_preset','ourmasks')
    this.setState({isLoading: true})
    const res = await fetch('https://api.cloudinary.com/v1_1/alexvirga/image/upload',
    {
      method: 'POST',
      body: data
    })
    const file = await res.json()
    console.log(file)
    console.log(file.secure_url)
    this.setState({imageAsFile: file, isLoading: false, imagePreview: file.secure_url, imageName: file.asset_id})
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

<ImageUploader handleUploadChange={this.handleUploadChange}/>

            {/* <Form.Field>
              <Button
                content="Choose Photo"
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
                onChange={this.handleFileChange}
              />
            </Form.Field> */}

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
