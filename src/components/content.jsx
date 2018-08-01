import React from "react";
//import { Gif, Gifflette } from "./gif.jsx";
import * as Gif from "./gif.jsx";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      label: "Test React"
    };
  }

  componentDidMount() {
    this.setState({ label: "Coucou" });
  }

  render() {
    return <Gif.Gif label={this.state.label} />;
  }
}
