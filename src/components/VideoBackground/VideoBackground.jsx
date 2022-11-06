import "./VideoBackground.scss";

export default function VideoBackground(props) {
  return (
    <div className="video-background">
      <video
        className="video-background__background"
        controls
        width="100%"
        poster={props.video.image}
      ></video>
    </div>
  );
}
