import "./VideoInfo.scss";
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";

export default function VideoInfo(props) {
  return (
    <div className="video-info">
      <video controls width="100%" poster={props.video.image}></video>

      <div className="video-info__title-container">
        <div>
          <h1 className="video-info__title">{props.video.title}</h1>
        </div>

        <div className="video-info__channel-container">
          <div>
            <h5 className="video-info__channel">By {props.video.channel}</h5>
            <h4 className="video-info__timestamp">
              {props.getTimeStamp(props.video.timestamp)}
            </h4>
          </div>

          <div>
            <h4 className="video-info__view">
              <img
                className="video-info__icon"
                src={viewIcon}
                alt={props.video.title}
              />
              {props.video.views}
            </h4>

            <h4 className="video-info__like">
              <img
                className="video-info__icon"
                src={likeIcon}
                alt={props.video.title}
              />
              {props.video.likes}
            </h4>
          </div>
        </div>
        <div>
          <h4 className="video-info__description">{props.video.description}</h4>
        </div>
      </div>
    </div>
  );
}
