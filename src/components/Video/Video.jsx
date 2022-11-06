import "./Video.scss";

export default function Video(props) {
  return (
    <div className="video">
      <div
        className="video__container"
        onClick={() => {
          props.handleVideoClick(props.title);
        }}
      >
        <div className="video__main-container">
          <div className="video__img-container">
            <img className="video__img" src={props.image} alt={props.title} />
          </div>
          <div className="video__text-container">
            <h5 className="video__title">{props.title}</h5>
            <h4 className="video__channel">{props.channel}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
