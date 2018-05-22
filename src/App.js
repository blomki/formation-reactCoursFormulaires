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
  }

  add(newUser) {
    console.log(newUser);
    this.setState({
      users: [...this.state.users, newUser]
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <Liste users={this.state.users} />
          <hr />
          <Formulaire addUser={this.add} />
        </div>
      </div>
    );
  }
}

export default App;
