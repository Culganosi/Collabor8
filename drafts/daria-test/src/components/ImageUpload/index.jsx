import React, {useState, useRef} from 'react'
import { useEffect } from 'react';
import axios from "axios"
import "./style.css"

import {storage} from "./../../firebaseConfig"

function ImageUpload () {
  
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState('')
  const [imageAsPreview, setImageAsPreview] = useState('')
  const fileInputRef = useRef()

  const handleFireBaseUpload = e => {
    e.preventDefault()
    if(imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
      return;
    }

    const randomFileName = (Math.random() + 1).toString(36)

    const uploadTask = storage.ref(`/images/${randomFileName}`).put(imageAsFile)

    uploadTask.on('state_changed', 
    (snapShot) => {
      console.log(snapShot)
    }, (err) => {
      console.log(err)
    },
    () => {
      storage.ref('images').child(randomFileName).getDownloadURL()
      .then(fireBaseUrl => {
        setImageAsUrl(fireBaseUrl)
      }) })
  }

  
  //When the circular button is clicked, redirect to click the file upload instead
  const handleCircleClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  }

  //When user chooses a new image, store it if it's valid
  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    if (image && image.type.substr(0, 5)==="image") {
      setImageAsFile(imageFile => (image))
    }
  }

  
  //When the user's uploaded image changes
  //read it into a data string and store it
  useEffect(() => {
    if (imageAsFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageAsPreview (reader.result)
      }
      reader.readAsDataURL(imageAsFile)
    }
  }, [imageAsFile])
  
  //---------------RENDER-------------

  return (
    <>
    <h1>Test uploading images</h1>

    {/* Display either the preview or the circular button */}
    {imageAsPreview ? 
    <img src={imageAsPreview} className="avatar-preview" onClick={handleCircleClick}/> :
    <button className="avatar-button" onClick={handleCircleClick}>Add an avatar</button>
    }

    {/* This is actually hidden */}
    <form>
      <input type="file" inputProps={{ accept: 'image/*' }} name="avatar" onChange={handleImageAsFile}  style={{display: "none"}} ref={fileInputRef} />
    </form>


    <br /><br/>

   <button type="button" onClick={handleFireBaseUpload} className="submit-button">Submit</button>

    <br />
    <a href={imageAsUrl}>View image on Firebase</a>

    </>
  )
}

export default ImageUpload