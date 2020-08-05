import React, { useRef, useState, useEffect } from 'react';
import './Video.css';
import VideoFooter from '../VideoFooter';
import VideoSideBar from '../VideoSidebar';


function Video(props) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const { url, channel, description, song, likes, messages, shares, id, positionTop, position } = props;
    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    useEffect(() => {
        var height = position;
        console.log("height", height);
        console.log("positionTop", positionTop);
        switch (positionTop) {
            case 0:
                videoRef.current.play();
                setPlaying(true);
                break;
            case (height + 1):
                videoRef.current.play();
                setPlaying(true);
                break;
            case (height * 2 + 2):
                videoRef.current.play();
                setPlaying(true);
                break;
            default:
                videoRef.current.pause();
                setPlaying(false);
                break;
        }
    }, [positionTop])



    return (
        <div className="video" >

            {/* This is a video */}
            <video
                id={id}
                className="video__player"
                loop
                ref={videoRef}
                onClick={onVideoPress}
                src={url}></video>
            <VideoFooter channel={channel}
                description={description}
                song={song} />
            <VideoSideBar likes={likes}
                messages={messages}
                shares={shares} />
        </div>
    );
}

export default Video;