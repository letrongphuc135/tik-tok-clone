import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video/Video';
import db from './firebase';
function App() {
  const [videos, setVideos] = useState([]);
  const [positionTop, setPositionTop] = useState(0);
  const [position, setPosition] = useState(0);
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );

    if (document.getElementById("sample")) {
      var elmnt = document.getElementById("sample");
      console.log("position", elmnt.offsetHeight);
      if (elmnt.offsetHeight > 600) {
        setPosition(740);
      } else {
        setPosition(570);
      }
    }
  }, []);


  function handleOnScroll() {

    var testDiv = document.getElementById("sample");
    if (Math.ceil(testDiv.scrollTop) === 571) {
      setPositionTop(Math.ceil(testDiv.scrollTop) - 1);
    }
    if (Math.ceil(testDiv.scrollTop) % position === 0) {
      console.log(Math.ceil(testDiv.scrollTop));
      setPositionTop(Math.ceil(testDiv.scrollTop));
    }
    console.log(Math.ceil(testDiv.scrollTop));
    console.log("positionTop", positionTop);
  }


  return (
    <div className="app">
      <div className="app__video" id="sample" onScroll={handleOnScroll}>
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares, id }, index) => {
            return (
              <Video
                key={index}
                position={position}
                positionTop={positionTop + index}
                id={id}
                index={index}
                url={url}
                channel={channel}
                song={song}
                likes={likes}
                messages={messages}
                description={description}
                shares={shares}
              />
            );
          }
        )}
      </div>

    </div>
  );
}

export default App;
