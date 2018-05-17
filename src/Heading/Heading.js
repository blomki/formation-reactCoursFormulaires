import React, { Component } from "react";

import "./Heading.css";
import chuck from "./chuck.jpeg";
import Badge from "../Badge/Badge";

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      nbClick: 0
    };
    this.changer = this.changer.bind(this);
  }

  changer() {
    console.log(this.state.nbClick++);
    this.setState({
      visible: !this.state.visible,
      nbClick: this.state.nbClick++
    });
  }

  render() {
    const headCSS = {};
    if (this.state.visible) {
      headCSS.color = "green";
    } else {
      headCSS.color = "red";
    }

    return (
      <header>
        <h1 style={headCSS} onClick={this.changer}>
          Mon App
        </h1>
        {this.state.visible && <img src={chuck} />}
        <Badge nbClick={this.state.nbClick} />
      </header>
    );
  }
}

export default Heading;
