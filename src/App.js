import React, { Component } from "react";
import { connect } from "react-redux";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import { getSecretWord } from "./actions";

import "./App.css";

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Drag Jotto</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getSecretWord
};
const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedApp);
