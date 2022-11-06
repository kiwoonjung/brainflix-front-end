import logo from "../../assets/Logo/BrainFlix-logo.svg";
import "./Header.scss";

function HeaderComponent() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="search">
        <form className="search__bar-container">
          <input className="search__bar" type="text" placeholder="Search" />
        </form>
        <button className="upload-button-tablet">UPLOAD</button>
        <div className="search__user-container">
          <div className="search__user"></div>
        </div>
      </div>

      <div>
        <button className="upload-button">UPLOAD</button>
      </div>
    </div>
  );
}
export default HeaderComponent;
