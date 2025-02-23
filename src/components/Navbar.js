import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container-xxl">
        <Link className="navbar-brand fw-bold fs-4" to="/">
            <h1 style={{
                backgroundColor: "#923cb5",
                backgroundImage: "linear-gradient(147deg, #923cb5 0%, #000000 74%)",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 900
            }}>Philip Indra Prayitno</h1>
        </Link>
  
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link" to="/create">Create</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/archive">Archive</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  };

  export default Header