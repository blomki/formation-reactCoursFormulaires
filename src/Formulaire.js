import React, { Component } from "react";
class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexe: "",
      nom: "",
      bio: "",
      cgu: false,
      displayError: false
    };
    this.handleNom = this.handleNom.bind(this);
    this.handleBio = this.handleBio.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCheck(e) {
    this.setState({
      cgu: e.target.checked
    });
  }
  handleBio(e) {
    this.setState({
      bio: e.target.value
    });
  }
  handleNom(e) {
    this.setState({
      nom: e.target.value
      // e: evenement,
      // target: element ,
      // value : valeur saisi dans mon element
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Annuler le comportement de rafraichissement de la page
    // lors de la soumission de mon formulaire

    if (this.state.sexe === "") {
      alert("Veuillez cocher un sexe");
      // ou  affiuher en HTML une erreur
    }

    if (this.state.cgu === false) {
      this.setState({
        displayError: true
      });
    } else {
      this.props.addUser(this.state);

      this.setState({
        displayError: false
      });
    }
  }

  render() {
    let errorNom = "";

    if (this.state.nom.length >= 1 && this.state.nom.length <= 3) {
      errorNom = "Votre nom est trop court!";
    } else {
      errorNom = "";
    }

    let errorBio = "";

    if (this.state.bio.length >= 1 && this.state.bio.length <= 3) {
      errorBio = "Votre bio est trop court!";
    } else {
      errorBio = "";
    }
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        {this.state.displayError && (
          <div className="alert alert-danger">Veuillez cocher les CGU</div>
        )}
        <h3>Ajouter un utilisateur</h3>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="sexe"
            id="exampleRadios1"
            onChange={e => this.setState({ sexe: e.target.value })}
            value="homme"
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Homme
          </label>
          <br />
          <input
            className="form-check-input"
            type="radio"
            name="sexe"
            id="exampleRadios2"
            value="femme"
            onChange={e => this.setState({ sexe: e.target.value })}
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Femme
          </label>
        </div>

        <div>
          <label htmlFor="nom">Nom</label>
          <input
            className="form-control"
            type="text"
            placeholder="Votre nom"
            id="nom"
            required
            onChange={this.handleNom}
            onBlur={this.handleNomBlured}
          />
          {errorNom !== "" ? (
            <div className="alert  alert-danger">{errorNom}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            required
            placeholder="Votre email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="bio">Biographie</label>
          <textarea
            className="form-control"
            placeholder="Votre biographie"
            onChange={this.handleBio}
            id="bio"
          />
          {errorBio !== "" ? (
            <div className="alert alert-warning">{errorBio}</div>
          ) : null}
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={e => this.setState({ cgu: e.target.checked })}
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Conditions Générales d'Utilisation
          </label>
        </div>
        <br />
        <button className="btn btn-primary" type="submit">
          Ajouter cet utilisateur
        </button>
      </form>
    );
  }
}

export default Formulaire;
