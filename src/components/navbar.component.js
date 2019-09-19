import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* class="navbar navbar-dark bg-dark" */}
      {/* <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="/">
            Exercise List
          </a>
          <a class="nav-item nav-link active" href="/user">
            Create User <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="/create">
            Create Exercise
          </a>
          <a class="nav-item nav-link" href="/edit/:id">
            Edit Exercise
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
