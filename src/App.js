import React, { Component } from "react";

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
    <li key={key} onClick={this.addToDone}>
      {this.state.list[key].name}
    </li>
  );

  handleOnClick = () => {
    console.log("clicked!");
  };

  addToDone = event => {
    console.log(event);
    // const done = { ...this.state.done };
    // const item ={name: }
    // done[`item${Date.now()}`] = item;
    // this.setState({ done });
  };

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>{`<SimpleList />`}</h1>
        </header>
        <section className="buy">
          <ul className="dont-forget">
            {Object.keys(list).map(this.renderList)}
          </ul>
        </section>
        <section className="done">
          <ul className="i-remember" />
        </section>
      </div>
    );
  }
}

export default App;
