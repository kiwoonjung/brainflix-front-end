import "./Upload.scss";
import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

export default function Upload() {
  return (
    <div className="upload">
      <h1 className="upload__header-text">Upload Video</h1>
      <div className="upload__tablet-container">
        <div className="upload__tablet-container-2">
          <h5 className="upload__text-thumbnail">VIDEO THUMBNAIL</h5>
          <div className="upload__thumbnail-container">
            <img
              className="upload__thumbnail"
              src={videoThumbnail}
              alt="Upload-video-preview"
            />
          </div>
        </div>

        <div className="description">
          <form className="form" id="descriptionForm">
            <label className="form__label" htmlFor="descriptionTitle">
              <h5 className="description__text">TITLE YOUR VIDEO</h5>
            </label>
            <input
              className="form__input"
              id="descriptionTitle"
              name="title"
              type="text"
              placeholder="Add a title to your video"
            />

            <label className="form__label" htmlFor="descriptionontent">
              <h5 className="description__text">ADD A VIDEO DESCRIPTION</h5>
            </label>
            <textarea
              className="form__textarea"
              id="descriptionContent"
              name="content"
              placeholder="Add a description to your video"
            ></textarea>
          </form>
        </div>
      </div>

      <div className="button-container">
        <Link to="/" className="link-container">
          <button className="publish-button">
            <h5>PUBLISH</h5>
          </button>
        </Link>

        <button className="cancel-button">
          <h5>CANCEL</h5>
        </button>
      </div>
    </div>
  );
}
