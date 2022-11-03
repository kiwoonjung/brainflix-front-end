import { useState } from "react";
import videosData from "../../data/video-details.json";
import "./VideoComponent.scss";
import user from "../../assets/images/Mohan-muruge.jpg";

function VideoComponent() {
  const [activeVideo, setActiveVideo] = useState(videosData[0]);

  const handleVideoClick = (id) => {
    console.log("handle Video click", id);
    const foundVideo = videosData.find((videoObject) => videoObject.id === id);
    console.log(foundVideo);
    setActiveVideo(foundVideo);
  };

  return (
    <div>
      <img
        className="video__container"
        src={activeVideo.image}
        alt={activeVideo.id}
      />

      <section className="section">
        <h1 className="section__title">{activeVideo.title}</h1>

        <div className="section__info">
          <div>
            <h5>By {activeVideo.channel}</h5>
            <h4>{activeVideo.timestamp}</h4>
          </div>

          <div>
            <h4>{activeVideo.views}</h4>
            <h4>{activeVideo.likes}</h4>
          </div>
        </div>

        <div>
          <h4>{activeVideo.description}</h4>
        </div>

        <div>
          <h5>{activeVideo.comments.length} Comments</h5>
        </div>

        <div>
          <img className="user-icon" src={user} alt="logo" />
          <form>
            <label htmlFor="">
              <h5>JOIN THE CONVERSATION</h5>
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Add a new comment"
            ></textarea>
            <button>comment</button>
          </form>
        </div>

        <div className="comment">
          <div className="comment__container">
            <div className="comment__default-user"></div>
            <div className="commment__name-date">
              <h5>{activeVideo.comments.map((object) => object.name)}</h5>
            </div>
          </div>
        </div>

        {videosData
          .filter((video) => video.id !== video.id)
          .map((video) => (
            <img
              onClick={() => handleVideoClick(video.id)}
              key={video.id}
              src={video.image}
              alt={video.description}
            />
          ))}
      </section>
    </div>
  );
}

export default VideoComponent;
