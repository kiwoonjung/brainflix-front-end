import "./CommentForm.scss";

export default function CommentForm() {
  return (
    <div className="comment">
      <div className="comment__container">
        <div className="comment__user-container">
          <div className="comment__user"></div>
        </div>
        <form className="comment__label-tablet">
          <label className="comment__label" htmlFor="">
            <h5>JOIN THE CONVERSATION</h5>
          </label>
          <div className="comment__textarea-tablet">
            <textarea
              className="comment__textarea"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Add a new comment"
            ></textarea>
            <button className="comment__button">
              <h5>COMMENT</h5>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
