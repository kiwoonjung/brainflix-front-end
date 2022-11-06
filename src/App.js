import React, { useState } from "react";
import "./App.scss";
import videoData from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import Comment from "./components/Comment/Comment";
import CommentForm from "./components/CommentForm/CommentForm";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]); //currentvideo = videoData[0]
  const handleClick = (title) => {
    // console.log(title);
    const foundVideo = videoData.find((video) => video.title === title);
    // console.log(foundVideo);
    setCurrentVideo(foundVideo);
  };

  //dateFormat(162468124) =
  const dateFormat = (time) => {
    const foundDate = new Date(time).toLocaleDateString();

    return foundDate;
  };

  return (
    <div>
      <Header />
      <VideoInfo video={currentVideo} getTimeStamp={dateFormat} />
      <h5 className="comments">{currentVideo.comments.length} Comments</h5>
      <CommentForm />
      {currentVideo.comments.map((data, id) => (
        <div className="comments-gap">
          <Comment
            getTimeStamp={dateFormat}
            id={id}
            key={id}
            name={data.name}
            timestamp={data.timestamp}
            post={data.comment}
          />
        </div>
      ))}
      <div className="video-gap">
        <h5 className="next-video">NEXT VIDEO</h5>
        <VideoList
          videoData={videoData.filter(
            (video) => video.title !== currentVideo.title
          )}
          handleVideoClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
