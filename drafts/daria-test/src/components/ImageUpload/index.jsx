import React, {useState, useRef} from 'react'
import { useEffect } from 'react';
import axios from "axios"
import "./style.css"

import {storage} from "./../../firebaseConfig"


function ImageUpload () {


  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState('')
  const [imageAsDataURL, setImageAsDataURL] = useState('')

  const reader = new FileReader()

  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImageAsFile(imageFile => (image))

    reader.readAsDataURL(e.target.files[0])
    setImageAsDataURL(reader.result)

  }


  const handleFireBaseUpload = e => {
    e.preventDefault()
    if(imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }

    const randomFileName = (Math.random() + 1).toString(36)
    const uploadTask = storage.ref(`/images/${randomFileName}`).put(imageAsFile)

    uploadTask.on('state_changed', () => {
      storage.ref('images').child(randomFileName).getDownloadURL()
      .then(fireBaseUrl => {
        setImageAsUrl(fireBaseUrl)
      }) })
  }

  //---------------RENDER-------------


  const fileInputRef = useRef()

  const handleCircleClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  }

  return (
    <>
    <h1>Test uploading images</h1>

    <button className="avatar-button" onClick={handleCircleClick}>Add an avatar</button>


    <form>
      <input type="file" name="avatar" onChange={handleImageAsFile}  style={{display: "none"}} ref={fileInputRef} />
    </form>



    <br /><br/>

   <button type="button" onClick={handleFireBaseUpload} className="submit-button">Submit</button>

   { imageAsDataURL && <img src={imageAsDataURL} /> }
   
    
    </>
  )
}

export default ImageUpload