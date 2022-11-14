import "./Comment.scss";

export default function Comment(props) {
  return (
    <div>
      <div className="post">
        <div className="post__user-container">
          <div className="post__user-default"></div>
        </div>
        <div className="post__name-container">
          <h5>{props.name}</h5>
          <h4 className="post__timestamp">
            {props.getTimeStamp(props.timestamp)}
          </h4>
        </div>
      </div>
      <div className="post__comment">
        <h4>{props.post}</h4>
      </div>
      <div className="delete-container">
        <button
          className="delete-btn"
          value={props.id}
          onClick={props.deleteComment}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
