import React, { Component } from "react";

import Items from "./components/Items";

import "./App.css";

class App extends Component {
  state = {
    list: {
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
    },
    done: {}
  };

  renderList = key => (
    <li key={key}>
      <input onClick={this.addToDone} value={this.state.list[key].name} />
    </li>
  );

  render() {
    const { list, done } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>{`<SimpleList />`}</h1>
        </header>
        <section className="buy">
          <ul className="dont-forget">
            {Object.keys(list).map(key => (
              <Items key={key} item={list[key]} />
            ))}
          </ul>
        </section>
        <section className="done">
          <ul className="i-remember">
            {Object.keys(done).map(key => (
              <Items key={key} item={done[key]} />
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
