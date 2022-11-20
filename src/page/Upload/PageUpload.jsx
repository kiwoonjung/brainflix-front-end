import "./PageUpload.scss";
import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const APIURL = process.env.REACT_APP_SERVER_URL || "";
console.log(APIURL);
export default function Upload() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newUpload = {
      title: event.target.title.value,
      description: event.target.content.value,
    };

    console.log(newUpload);

    if (event.target.title.value === "" || event.target.content.value === "") {
      alert("please enter a content for the video post");
      return;
    } else {
      alert("Thank you for uploading!");
      axios
        .post(`${APIURL}/videos`, newUpload)
        .then((response) => {
          console.log(response.data);
          navigate("/");
        })
        .catch((error) => console.log(error));
    }
  };

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
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
            className="form"
          >
            <label className="form__label" htmlFor="descriptionTitle">
              <h5 className="description__text">TITLE YOUR VIDEO</h5>
              <input
                className="form__input"
                id="descriptionTitle"
                name="title"
                type="text"
                placeholder="Add a title to your video"
              />
            </label>
            <label className="form__label" htmlFor="descriptionontent">
              <h5 className="description__text">ADD A VIDEO DESCRIPTION</h5>
              <textarea
                className="form__textarea"
                id="descriptionContent"
                name="content"
                placeholder="Add a description to your video"
              ></textarea>
            </label>
            <div className="button-container">
              <div className="link-container">
                <button type="submit" className="publish-button">
                  PUBLISH
                </button>
              </div>
              <button type="button" className="cancel-button">
                <h5>CANCEL</h5>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
