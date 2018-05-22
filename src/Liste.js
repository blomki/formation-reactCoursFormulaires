import React, { Component } from "react";

class Liste extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Liste des utilisateurs</h3>
        <ul className="list-group">
          {this.props.users.map(user => (
            <li className="list-group-item">
              <button type="button" class="btn btn-sm btn-danger">
                X
              </button>
              <h4>{user.nom} </h4>
              <i>{user.bio}</i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Liste;
