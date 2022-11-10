import "./VideoList.scss";
import Video from "../Video/Video";

export default function VideoList(props) {
  return (
    <div className="video-list">
      {props.videoData.map((video) => (
        <Video
          id={video.id}
          key={video.id}
          image={video.image}
          title={video.title}
          channel={video.channel}
        />
      ))}
    </div>
  );
}
