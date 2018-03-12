import React, { Component } from "react";

class MenuBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Recipagg
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/recipe/new">
                New Recipe
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MenuBar;
