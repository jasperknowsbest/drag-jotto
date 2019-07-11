import React, { Component } from "react";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Drag Jotto</h1>
        <Congrats success={false} />
        <GuessedWords guessedWords={[]} />
      </div>
    );
  }
}

export default App;
