import React, { Component } from "react";

export class LifeCycleA extends Component {
  // Mounting -- 1. Constructor
  //   method used to initialize an object's state in a class
  constructor(props) {
    super(props);
    this.state = {
      name: "ReactJS",
    };

    console.log("LifeCycleA Constructor");
  }

  // Mounting -- 2. getDerivedStateFromProps
  // Updating -- 1. getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("-------------------");
    console.log("LifeCycleA getDerivedStateFromProps ");
    return null;
  }

  // Mounting --  4. componentDidMount
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  // Updating -- 2. shouldComponentUpdate
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  // Updating -- 4. getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }
  // Updating Final -- 4. componentDidUpdate
  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "React Lifecycle",
    });
  };
  // Mounting -- 3. Render
  // Updating -- 3. Render
  render() {
    console.log("LifeCycleA render method");
    return (
      <>
        <h4>{this.state.name}</h4>
        <button onClick={this.changeState}>change state</button>
      </>
    );
  }
}

export default LifeCycleA;
