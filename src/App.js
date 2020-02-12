import React, { Component } from "react";
import Character from "./components/Character";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null
    };
    this.getCharacter = this.getCharacter.bind(this);
  }

  getCharacter() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then(response => response.data)
      .then(data => {
        this.setState({
          character: data
        });
      });
  }

  render() {
    return (
      (
        <div className="App">
          <getCharacter character={this.state.character} />
        </div>
      ),
      (
        <button type="button" onClick={this.getCharacter}>
          Get Character
        </button>
      )
    );
  }
}
export default App;
