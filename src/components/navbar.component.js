import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* className="navbar navbar-dark bg-dark" */}
      {/* <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">
            Exercise List
          </a>
          <a className="nav-item nav-link active" href="/user">
            Create User <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="/create">
            Create Exercise
          </a>
          <a className="nav-item nav-link" href="/edit/:id">
            Edit Exercise
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
