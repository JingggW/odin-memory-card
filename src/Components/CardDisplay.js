import React, { useEffect, useState } from "react";

function CardDisplay(props) {
  const [images, setImages] = useState([
    { src: "/img/img1.png", clicked: false },
    { src: "/img/img2.png", clicked: false },
    { src: "/img/img3.png", clicked: false },
    { src: "/img/img4.png", clicked: false },
    { src: "/img/img5.png", clicked: false },
    { src: "/img/img6.png", clicked: false },
    { src: "/img/img7.png", clicked: false },
    { src: "/img/img8.png", clicked: false },
    { src: "/img/img9.png", clicked: false },
    { src: "/img/img10.png", clicked: false },
    { src: "/img/img11.png", clicked: false },
    { src: "/img/img12.png", clicked: false },
  ]);

  // shuffle the array
  const shuffleArray = (array) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  //   shuffle every time
  const handleShuffleImages = (e) => {
    const curImageSrc = e.target.src.replace(/^.*\/\/[^/]+/, "");
    // implement the logic to check if the image has been clicked or not
    const newArray = [...images];
    const imageIndex = images.findIndex((image) => image.src === curImageSrc);
    if (newArray[imageIndex].clicked) {
        props.stopGame();
    } else {
        // if not clicked
        // add points
      newArray[imageIndex].clicked = true;
      setImages(shuffleArray(newArray));
      props.incrementScore();
    }
  };

  useEffect(() => {
    setImages(shuffleArray(images));
  }, []);

  return (
    <div className="card-display">
      {/* <button onClick={handleShuffleImages}>随机排序</button> */}
      {images.map((image, index) => (
        <img
          key={`image ${index + 1}`}
          src={image.src}
          alt={`image ${index + 1}`}
          onClick={handleShuffleImages}
        />
      ))}
    </div>
  );
}

export default CardDisplay;
