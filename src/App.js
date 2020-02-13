import React from "react";
import Character from "./components/Character";
import axios from "axios";
import "./App.css";

const persona = {
  quote: "I think women and seamen don't mix",
  character: "Waylon Smithers",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FWaylonSmithers.png?1497567511840"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: persona
    };
    this.getCharacter = this.getCharacter.bind(this);
  }

  getCharacter() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          simpson: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Character simpson={this.state.simpson} />

        <button type="button" onClick={this.getCharacter}>
          Get Another Quote
        </button>
      </div>
    );
  }
}
export default App;
