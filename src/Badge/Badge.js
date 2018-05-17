import React, { Component } from "react";
import "./Badge.css";

class Badge extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <badge>
        <h3>{this.props.nbClick} clickés</h3>
      </badge>
    );
  }
}

export default Badge;
