import React, { Component } from "react";

class Liste extends Component {
  render() {
    return (
      <div>
        <h3>Liste des utilisateurs</h3>
        <ul className="list-group">
          {this.props.users.map((user, i) => (
            <li className="list-group-item" key={i}>
              <div className="row">
                <div className="col-6">
                  <h5>{user.nom} </h5>
                  <i>{user.bio}</i>
                </div>
                <div className="col-6 text-right">
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    // Il est indispensable de mettre .props si on veut atteindre une fonction passée depuis le parent
                    // Il est également obligatoire d'indiquer l'action dans une fonction fléchée
                    onClick={event => this.props.removeUser(i)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Liste;
