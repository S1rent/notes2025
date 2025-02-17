import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container-xxl">
          <a className="navbar-brand fw-bold fs-4" href="#">
            <h1 style={{
                backgroundColor: "#923cb5",
                backgroundImage: "linear-gradient(147deg, #923cb5 0%, #000000 74%)",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 900
            }}>Philip Indra Prayitno</h1>
          </a>
  
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
                <a className="nav-link" href="#profile">Create</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profile">Archive</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  };

  export default Header