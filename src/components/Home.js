import React, { Component } from "react";

import Container from "./Container";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentDidMount() {
        this.setState({
          content: "Welcome!!"
        });
  }

  render() {
    return (
      <Container content={this.state.content}/>
    );
  }
}
