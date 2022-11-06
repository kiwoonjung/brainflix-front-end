import "./VideoList.scss";
import Video from "../Video/Video";

export default function VideoList(props) {
  return (
    <div className="video-list">
      {/* For each game in our gameList, output a <Game /> tag */}
      {props.videoData.map((video) => (
        <Video
          handleVideoClick={props.handleVideoClick}
          key={video.id}
          image={video.image}
          title={video.title}
          channel={video.channel}
        />
      ))}
    </div>
  );
}
