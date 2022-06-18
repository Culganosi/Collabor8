import React, {useState} from 'react'
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

import "./style.css"

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useEffect } from 'react';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


function ImageUpload() {
  const [file, setFile] = useState([])

    useEffect(() => {
      console.log(file)
    }, [file])



    //TODO: Make the preview contain the image

  return (
    <>
    <h1>Test uploading images</h1>

    
    <FilePond   
        className="file-preview"
        allowImageResize={true}
        imageResizeMode="contain"
        imagePreviewMinHeight={250}
        imagePreviewMinWidth={250}
        onupdatefiles={setFile}
        files={file}
        allowMultiple={false} 
        stylePanelLayout="circle"
        labelIdle='Drag & Drop an image or <span class="filepond--label-action">Browse</span>'
    />
    
    </>
  )
}

export default ImageUpload