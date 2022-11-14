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
  const APIURL = "https://project-2-api.herokuapp.com/videos";
  const APIKEY = "api_key=9ec32c09-a24d-4b14-8d16-0962675d4b78";

  function getComment() {
    let videoId = id || allVideos[0]?.id;
    if (videoId) {
      axios
        .get(`${APIURL}/${videoId}?${APIKEY}`)
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
      .get(`${APIURL}/?${APIKEY}`)
      .then((response) => {
        setAllVideos(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  /*
   * when the id changes, fetch a single video using the id
   */
  useEffect(() => {
    let videoId = id || allVideos[0]?.id;
    if (videoId) {
      axios
        .get(`${APIURL}/${videoId}?${APIKEY}/`)
        .then((response) => {
          setCurrentVideo(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id, allVideos]);

  // useEffect(() => {
  //   let videoId = id || allVideos[0]?.id;
  //   if (videoId) {

  function postComment(event) {
    event.preventDefault();
    console.log("commentPost");
    console.log(event.target.content.value);
    console.log(currentVideo.id);

    axios
      .post(`${APIURL}/${currentVideo.id}/comments?${APIKEY}`, {
        name: "Kiwoon",
        comment: event.target.content.value,
      })
      .then((response) => {
        getComment();
        event.target.reset();
        console.log(response.data);
      })
      .catch((error) => console.log(error));

    if (event.target.content.value === "") {
      alert("please enter a content for the comment post");
      return;
    } else if (event.target.content.value !== "") {
      alert("Thank you for comment!");
      return;
    }
  }

  // }
  // }, [id, allVideos]);

  function deleteComent(event) {
    event.preventDefault();
    axios
      .delete(
        `${APIURL}/${currentVideo.id}/comments/${
          currentVideo.comments[event.target.value].id
        }?${APIKEY}`
      )
      .then((response) => {
        getComment();
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
            <VideoInfo video={currentVideo} getTimeStamp={dateFormat} />
          )}
          <h5 className="comments">{currentVideo.comments?.length} Comments</h5>
          <CommentForm postComment={postComment} />
          {currentVideo.comments?.map((data, id) => (
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
