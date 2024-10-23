import React from "react"
import { useState } from "react"
import "./App.css"

const ImageSlide = () => {
    const totalImage = 20
    const [image, setIndex] = useState(0)

const nextImage = () => {
    if(image < 19) {
    setIndex(image + 1)
    }
}

const prevImage = () => {
    if(image > 0) {
        setIndex(image - 1)
    }
}

const resetImage = () => {
    setIndex(0)
}

return (
    <div className="slider">
      <h2>REACT SLIDESHOW</h2>
        <img
        src={`https://picsum.photos/300/200?image=${image}`}
        alt={'Image  ${image}'}
        className = "slider"
        style={{width: "500px", height: "400px"}}
        />
        <p>
          {image + 1}/{totalImage}
        </p>

      <div className="button">
        <button onClick={prevImage} disabled={image === 0}>Previous</button>
        <button onClick={resetImage}>Back to Start</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  )
}

export default ImageSlide