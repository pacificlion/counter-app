import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    console.log("Counter-constructor");
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //perform ajax call
      console.log("perform mock call for counter #", this.props.counter.id);
    }
    console.log("Counter-mounted");
  }

  /**
   * end of life cycle for that component
   */
  componentWillUnmount() {
    // to be used for performing any clean ups
    console.log("Counter-unmounted");
  }
  render() {
    console.log("Counter-rendered");
    return (
      <div>
        <span className={this.badgeClasses()}>{this.countFormatter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  badgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  countFormatter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
