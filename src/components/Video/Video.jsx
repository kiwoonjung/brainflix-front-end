import "./Video.scss";
import { Link } from "react-router-dom";

export default function Video(props) {
  return (
    <Link to={`/video/${props.id}`} className="video">
      <div>
        <div className="video__container">
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
    </Link>
  );
}
