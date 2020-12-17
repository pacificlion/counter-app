import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App-constructor");
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
    console.log("App-mounted");
  }
  onDelete = (counterId) => {
    console.log("Delete called for counter #", counterId);
    const counters = this.state.counters.filter((ctr) => ctr.id !== counterId);
    this.setState({ counters });
  };

  onReset = () => {
    const counters = this.state.counters.map((ctr) => {
      ctr.value = 0;
      return ctr;
    });
    this.setState({ counters });
  };
  onIncrement = (counter) => {
    console.log("on increment called");
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value += 1;
    this.setState({ counters });
    console.log("on increment called", counters);
  };
  render() {
    console.log("App-rendered");
    return (
      <React.Fragment>
        <NavBar
          counterLength={
            this.state.counters.filter((ctr) => ctr.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.onReset}
            onIncrement={this.onIncrement}
            onDelete={this.onDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
