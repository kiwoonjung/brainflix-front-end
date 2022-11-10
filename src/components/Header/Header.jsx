import logo from "../../assets/Logo/BrainFlix-logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="search">
        <form className="search__bar-container">
          <input className="search__bar" type="text" placeholder="Search" />
        </form>
        <Link to="/upload" className="link">
          <button className="upload-button-tablet">
            <h5>UPLOAD</h5>
          </button>
        </Link>
        <div className="search__user-container">
          <div className="search__user"></div>
        </div>
      </div>
      <div>
        <Link to="/upload" className="link">
          <button className="upload-button">
            <h5>UPLOAD</h5>
          </button>
        </Link>
      </div>
    </div>
  );
}
