import logo from "../../assets/Logo/BrainFlix-logo.svg";
import user from "../../assets/images/Mohan-muruge.jpg";
import "./HeaderComponent.scss";

function HeaderComponent() {
  return (
    <div className="header">
      <div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="search__container">
          <form>
            <input type="text" className="search-icon" placeholder="Search" />
          </form>
          <img className="user-icon" src={user} alt="user-icon" />
        </div>

        <div>
          <button className="upload_button">UPLOAD</button>
        </div>
      </div>
    </div>
  );
}
export default HeaderComponent;
