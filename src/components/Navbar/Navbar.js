import React, { Component } from "react";
import "./Navbar.scss";
class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav flex-grid">
          <div className="col col-2">
            <a href="http:" target="_blank" rel="noopener noreferrer">
              SparklesNFT
            </a>
          </div>
          <div className="col col-3 link">
            <ul className=" flex-grid">
              <li className="col col-4">link1</li>
              <li className="col col-4">link1</li>
              <li className="col col-4">link1</li>
            </ul>
          </div>
          <div className="col col-7">{/* <p>{this.props.account}</p> */}</div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
