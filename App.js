import React, { Fragment } from 'react';

import './App.css';

function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Offcanvas navbar</a>
          <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Notifications</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Switch account</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>




      <div className="nav-scroller bg-body shadow-sm">
        <nav className="nav nav-underline" aria-label="Secondary navigation">
          <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
          <a className="nav-link" href="#">
            Friends
            <span className="badge bg-light text-dark rounded-pill align-text-bottom">27</span>
          </a>
          <a className="nav-link" href="#">Explore</a>
          <a className="nav-link" href="#">Suggestions</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link" href="#">Link</a>
        </nav>
      </div>



      <main class="container">
        <div class="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
          <img class="me-3" src="/docs/5.0/assets/brand/bootstrap-logo-white.svg" alt="" width="48" height="38" />
          <div class="lh-1">
            <h1 class="h6 mb-0 text-white lh-1">Bootstrap</h1>
            <small>Since 2011</small>
          </div>
        </div>

        <div class="my-3 p-3 bg-body rounded shadow-sm">
          <h6 class="border-bottom pb-2 mb-0">Recent updates</h6>
          <div class="d-flex text-muted pt-3">
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

            <p class="pb-3 mb-0 small lh-sm border-bottom">
              <strong class="d-block text-gray-dark">@username</strong>
              Some representative placeholder content, with some information about this user. Imagine this being some sort of status update, perhaps?
            </p>
          </div>
          <div class="d-flex text-muted pt-3">
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c" /><text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text></svg>

            <p class="pb-3 mb-0 small lh-sm border-bottom">
              <strong class="d-block text-gray-dark">@username</strong>
              Some more representative placeholder content, related to this other user. Another status update, perhaps.
            </p>
          </div>
          <div class="d-flex text-muted pt-3">
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#6f42c1" /><text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text></svg>

            <p class="pb-3 mb-0 small lh-sm border-bottom">
              <strong class="d-block text-gray-dark">@username</strong>
              This user also gets some representative placeholder content. Maybe they did something interesting, and you really want to highlight this in the recent updates.
            </p>
          </div>
          <small class="d-block text-end mt-3">
            <a href="#">All updates</a>
          </small>
        </div>

        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h6 className="border-bottom pb-2 mb-0">Suggestions</h6>
          <div className="d-flex text-muted pt-3">
            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">Full Name</strong>
                <a href="#">Follow</a>
              </div>
              <span className="d-block">@username</span>
            </div>
          </div>
          <div className="d-flex text-muted pt-3">
            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">Full Name</strong>
                <a href="#">Follow</a>
              </div>
              <span className="d-block">@username</span>
            </div>
          </div>
          <div className="d-flex text-muted pt-3">
            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>

            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div className="d-flex justify-content-between">
                <strong className="text-gray-dark">Full Name</strong>
                <a href="#">Follow</a>
              </div>
              <span className="d-block">@username</span>
            </div>
          </div>
          <small className="d-block text-end mt-3">
            <a href="#">All suggestions</a>
          </small>
        </div>
      </main>


    </Fragment>
  );
}

export default App;
