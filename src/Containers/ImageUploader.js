import React, { Component } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class ImageUploader extends Component {
  state = {
    file: [],
  };

  handleInit() {
  }

  render() {
    return (
      <div className="ImageUploader">
        <FilePond
          ref={(ref) => (this.pond = ref)}
          file={this.state.file}
          allowMultiple={false}
          maxFiles={1}
          oninit={() => this.handleInit()}
          onupdatefiles={(fileItems) => {
            fileItems.map((fileItem) => {
              this.props.handleUploadChange(fileItem.file);
              this.setState({
                file: fileItem.file,
              });
            });
          }}
        ></FilePond>
      </div>
    );
  }
}

export default ImageUploader;
