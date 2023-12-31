import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link type="button" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Use State
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link className="dropdown-item" aria-current="page" to="/">
                      UseState
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" aria-current="page" to="/accordion">
                      Accordion
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" aria-current="page" to="/todo">
                      Todo
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link type="button" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Use Reducer
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link className="dropdown-item" aria-current="page" to="/useReducer">
                      UseReducer
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" aria-current="page" to="/toggleReducer">
                      Toggle Reducer
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" aria-current="page" to="/reducerFormControl">
                      Reducer form control
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" aria-current="page" to="/reducerWordCount">
                      Reducer Word count
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" aria-current="page" to="/reducerAccordion">
                      Reducer Accordion
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="dropdown-item" aria-current="page" to="/todoReducer">
                      Todo Reducer
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
