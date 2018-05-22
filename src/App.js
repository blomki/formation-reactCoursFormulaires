import React, { Component } from "react";
import Formulaire from "./Formulaire";
import "bootstrap/dist/css/bootstrap.css";
import Liste from "./Liste";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          nom: "Vincent Ballut",
          bio: "Je suis de l'Auvergne"
        }
      ]
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(newUser) {
    console.log(newUser);
    this.setState({
      users: [...this.state.users, newUser]
    });
  }

  remove(i) {
    // Attention à bien Binder cette fonction pour qu'elle soit accessible sur l'ensemble du composant
    this.state.users.splice(i, 1);
    this.setState({
      users: this.state.users
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <Liste users={this.state.users} removeUser={this.remove} />
          <hr />
          <Formulaire addUser={this.add} />
        </div>
      </div>
    );
  }
}

export default App;
