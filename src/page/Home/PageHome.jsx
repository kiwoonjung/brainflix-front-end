import VideoBackground from "../../components/VideoBackground/VideoBackground";
import VideoList from "../../components/VideoList/VideoList";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comment from "../../components/Comment/Comment";
import CommentForm from "../../components/CommentForm/CommentForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const APIURL = process.env.REACT_APP_SERVER_URL || "";
  console.log(APIURL);

  function getComment() {
    let videoId = id || allVideos[0]?.id;
    console.log(videoId);
    if (videoId) {
      axios
        .get(`${APIURL}/videos/${videoId}`)
        .then((response) => {
          setCurrentVideo(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }
  }

  /*
   * Component mounts, fetch all videos and set state
   */
  useEffect(() => {
    axios
      .get(`${APIURL}/videos`)
      .then((response) => {
        setAllVideos(response.data);
      })
      .catch((error) => console.log(error));
  }, [APIURL]);

  /*
   * when the id changes, fetch a single video using the id
   */
  useEffect(() => {
    let videoId = id || allVideos[0]?.id;
    console.log("videoId", videoId);
    console.log("all vids", allVideos[0]);
    if (videoId) {
      axios
        .get(`${APIURL}/videos/${videoId}`)
        .then((response) => {
          setCurrentVideo(response.data);
          console.log("response", response.data);
        })
        .catch((error) => console.error(error));
    }
  }, [id, allVideos, APIURL]);

  function postComment(event) {
    event.preventDefault();
    console.log("commentPost");
    console.log(event.target.content.value);
    console.log(currentVideo.id);

    axios
      .post(`${APIURL}/videos/${currentVideo.id}/comments`, {
        name: "Kiwoon",
        comment: event.target.content.value,
      })
      .then((response) => {
        getComment();
        console.log(response.data);
      })
      .catch((error) => console.log(error));

    if (event.target.content.value === "") {
      alert("please enter a content for the comment post");
      return;
    } else if (event.target.content.value !== "") {
      alert("Thank you for comment!");
      event.target.reset();
      return;
    }
  }

  function deleteComent(event) {
    event.preventDefault();
    axios
      .delete(
        `${APIURL}/videos/${currentVideo.id}/comments/${
          currentVideo.comments[event.target.value].id
        }`
      )
      .then((response) => {
        getComment();
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }

  function likesButton() {
    axios
      .put(`${APIURL}/videos/${currentVideo.id}/likes/`)
      .then((response) => {
        getComment();
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }

  const dateFormat = (time) => {
    const foundDate = new Date(time).toLocaleDateString();

    return foundDate;
  };

  return (
    <div>
      <VideoBackground video={currentVideo} />

      <div className="wrapper">
        <div className="left-container">
          {currentVideo && (
            <VideoInfo
              video={currentVideo}
              getTimeStamp={dateFormat}
              likesButton={likesButton}
            />
          )}
          <h5 className="comments">{currentVideo.comments?.length} Comments</h5>
          <CommentForm postComment={postComment} />
          {currentVideo.comments
            ?.sort((a, b) => b.timestamp - a.timestamp)
            .map((data, id) => (
              <div key={data.id} className="comments-gap">
                <Comment
                  getTimeStamp={dateFormat}
                  id={id}
                  key={id}
                  name={data.name}
                  timestamp={data.timestamp}
                  post={data.comment}
                  deleteComment={deleteComent}
                />
              </div>
            ))}
        </div>
        <div className="nextVideo-container">
          <div className="video-gap">
            <h5 className="next-video">NEXT VIDEO</h5>
          </div>
          {allVideos && currentVideo && (
            <VideoList
              videoData={allVideos?.filter(
                (video) => video.title !== currentVideo.title
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
}
