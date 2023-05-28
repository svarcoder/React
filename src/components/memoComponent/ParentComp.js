import React, { Component } from "react";
import RegComp from "./RegComp";
import MemoComp from "./MemoComp";
import PureComp from "../pureComponent/PureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "SubhamC",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Subham",
      });
    }, 2000);
  }

  render() {
    console.log("*********Parent Comp render************");
    return (
      <div>
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
