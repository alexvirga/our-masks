import React, { Component } from 'react'
import { FilePond, registerPlugin } from 'react-filepond';
import {Image} from 'cloudinary-react';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,

);

// Our ImageUploader
class ImageUploader extends Component {
      state = {
          
            // Set initial files, type 'local' means this is a file
            // that has already been uploaded to the server (see docs)
         file: []
        };



    
    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }

    render() {
        return (
            <div className="ImageUploader">
            
                {/* Pass FilePond properties as attributes */}


                
                <FilePond ref={ref => this.pond = ref}
                          file={this.state.file}
                          allowMultiple={false}
                          maxFiles={1}
                          oninit={() => this.handleInit() }
                          onupdatefiles={(fileItems) => {
                            fileItems.map(fileItem => {

                                this.props.handleUploadChange(fileItem.file)
                              this.setState({
                                file: fileItem.file
                            })
                            }
                         
                            
                              

                            )}}>
                </FilePond>

            </div>
        );
    }
}

export default ImageUploader