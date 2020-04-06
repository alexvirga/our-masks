import React, { useState } from "react";
import { storage } from "../firebase/firebase";
import firebase from "firebase";

function UploadForm() {
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [imagePreview, setImagePreview] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("my mask");

  console.log(imageAsFile);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    const previewUrl = URL.createObjectURL(image);
    setImageAsFile((imageFile) => image);
    setImagePreview(previewUrl);
  };

  const handleDescription = (e) => {
    console.log(e.target.value);
  };

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
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
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
          });
      }
    );
  };
  console.log(imageAsUrl);

  return (
    <div className="UploadForm">
      <form onSubmit={handleFireBaseUpload}>
        <input type="file" onChange={handleImageAsFile} />
        <br/>
        <label>
          Location:
          <input type="text" name="Location" onChange={handleDescription} />
        </label>
        <br/>
        <label>
          Comment:
          <input type="text" name="Comment" onChange={handleDescription} />
        </label>
        <br/>

        <button>Upload</button>
      </form>
      <img src={imagePreview} style={{ maxWidth: "200px", height: "auto" }} />
    </div>
  );
}

export default UploadForm;
