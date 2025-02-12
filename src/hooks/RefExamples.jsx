import React, { useEffect, useRef, useState } from 'react';
import VIDEO from "./video.mp4";

const RefExamples = () => {
  const [play, setPlay] = useState(true);
  let videoRef = useRef();

  console.log(videoRef);

  let playORpause = () => {
    if (play) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPlay(prev => !prev); 
  };

  return (
    <div>
      <video src={VIDEO} ref={videoRef} onClick={playORpause} width="400"  />
    </div>
  );
};

export default RefExamples;
