import React, { Component } from "react";
import Items from "./components/Items";

import "./App.css";

const list = {
  item1: {
    name: "Pan"
  },
  item2: {
    name: "Huevos"
  },
  item3: {
    name: "Mantequilla"
  },
  item4: {
    name: "Azucar"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Simple{" "}
            <span role="img" aria-label="coffee">
              ☕
            </span>{" "}
            List
          </h1>
        </header>
        <section className="buy">
          <ul className="dont-forget">
            {Object.keys(list).map(key => (
              <Items key={key} index={key} item={list[key]} />
            ))}
          </ul>
        </section>
        <section className="bought">
          <ul className="i-remember" />
        </section>
      </div>
    );
  }
}

export default App;
